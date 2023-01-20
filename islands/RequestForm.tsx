import { useState } from "preact/hooks";

export default function RequestForm() {
  const [agree, setAgree] = useState(false);

  return (
    <form
      class="max-w-[600px]"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!agree) return;
        const form = e.currentTarget;
        const fd = new FormData(form);
        const entries = [...fd.entries()];
        const json = entries.reduce((acc, curr) => {
          return { ...acc, [curr[0]]: curr[1] };
        }, {});
        const r = await fetch("/api/request", {
          method: "POST",
          body: JSON.stringify(json),
        });
        if (r.status === 200) {
          form.reset();
        }
      }}
    >
      <h2 class="mb-10 text-2xl text-blue text-center">
        Заполните форму и приходите <br />
        на БЕСПЛАТНЫЙ мастер класс
      </h2>
      <div class="grid gap-7 -ml-[108px] mb-10">
        <label class="grid gap-2 grid-cols-[100px_1fr] items-center">
          <span class="text-lg text-blue-2 place-self-end">Имя</span>
          <input
            name="firstName"
            type="text"
            class="bg-gray-6 text-blue text-lg px-2"
          />
        </label>
        <label class="grid gap-2 grid-cols-[100px_1fr] items-center">
          <span class="text-lg text-blue-2 place-self-end">Фамилия</span>
          <input
            name="lastName"
            type="text"
            class="bg-gray-6 text-blue text-lg px-2"
          />
        </label>
        <div class="grid gap-2 pl-[108px]">
          <label class="flex gap-2 items-center">
            <input
              checked
              type="radio"
              value="Мастер-класс «Яблочко наливное»"
              name="type"
              class="w-5 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <span class="text-base text-blue">
              Мастер-класс «Яблочко наливное» (от 18 лет)
            </span>
          </label>
          <label class="flex gap-2 items-center">
            <input
              type="radio"
              value="Мастер-класс «Фруктовая композиция»"
              name="type"
              class="w-5 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <span class="text-base text-blue">
              Мастер-класс «Фруктовая композиция» (от 8-12 лет)
            </span>
          </label>
        </div>
        <label class="grid gap-2 grid-cols-[100px_1fr] items-center">
          <span class="text-lg text-blue-2 place-self-end">Тел</span>
          <input
            name="phone"
            type="tel"
            class="bg-gray-6 text-blue text-lg px-2"
          />
        </label>
        <label class="grid gap-2 grid-cols-[100px_1fr] items-center">
          <span class="text-lg text-blue-2 place-self-end">e-mail</span>
          <input
            name="email"
            type="email"
            class="bg-gray-6 text-blue text-lg px-2"
          />
        </label>
        <label class="flex gap-2 items-center pl-[108px]">
          <input
            required
            type="checkbox"
            checked={agree}
            onChange={(e) => {
              setAgree(e.currentTarget.checked);
            }}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <span class="text-xs">
            Согласен на обработку персональных данных <br /> с целью
            информирования пользователя по средством писем
          </span>
        </label>
      </div>
      <button
        type="submit"
        disabled={!agree}
        class="text-2xl bg-blue grid place-content-center h-[60px] w-[200px] text-white font-light mx-auto disabled:bg-opacity-50"
      >
        Записаться
      </button>
    </form>
  );
}
