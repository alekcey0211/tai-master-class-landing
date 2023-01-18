import { PageProps } from "$fresh/server.ts";

import ScrollToTop from "../islands/ScrollToTop.tsx";

import { HeadElement } from "../components/head.tsx";

export default function Home(ctx: PageProps) {
  const { url } = ctx;

  return (
    <>
      <HeadElement title="Мастер класс по карвингу" url={url} />
      <section class="h-[823px] relative overflow-hidden">
        <div class="absolute rounded-full bg-fiolet bg-opacity-25 w-[1283px] h-[1245px] -bottom-[86px] left-1/2 -translate-x-1/2 -z-20" />
        <div class="absolute rounded-full bg-fiolet w-[966px] h-[951px] bottom-0 left-1/2 -translate-x-1/2 -z-10" />
        <div class="grid grid-cols-[405px_270px] justify-center">
          <div class="mx-auto grid gap-y-12 mt-[230px]">
            <div class="grid gap-y-6 text-[26px] leading-9 font-light text-gray-1">
              <span>Здравствуйте!</span>
              <span>Меня зовут Таисия. Я повар и карвер.</span>
              <span>
                <a href="" class="text-blue">
                  Приглашаю Вас на мастер класс
                </a>{" "}
                по художественной композиции из овощей и фруктов
              </span>
            </div>
            <button
              type="button"
              class="text-2xl bg-blue grid place-content-center h-[67px] w-[228px] text-white font-light"
            >
              Записаться
            </button>
          </div>
        </div>
      </section>
      <section class="bg-gray-6 py-16 overflow-hidden">
        <div class="container mb-16">
          <h2 class="uppercase text-blue text-2xl font-light ml-32">
            Мои работы
          </h2>
        </div>
        <div class="grid gap-2 grid-flow-col auto-cols-[406px] auto-rows-[406px]">
          <div class="rounded-full bg-white" />
          <div class="rounded-full bg-white" />
          <div class="rounded-full bg-fiolet" />
          <div class="rounded-full bg-white" />
          <div class="rounded-full bg-white" />
          <div class="rounded-full bg-white" />
          <div class="rounded-full bg-white" />
          <div class="rounded-full bg-white" />
        </div>
      </section>
      <section class="py-16 overflow-hidden h-[903px]">
        <div class="relative container">
          <div class="absolute left-[172px] -top-[33px] bg-fiolet bg-opacity-50 w-[1400px] h-[853px] rounded-[100%] -z-20" />
          <div class="absolute left-[219px] top-[21px] bg-white w-[1085px] h-[640px] rounded-[100%] -z-10" />
        </div>
        <div class="container mb-[143px]">
          <h2 class="uppercase text-blue text-2xl font-light ml-32">Обо мне</h2>
        </div>
        <div class="mx-auto max-w-[750px] pl-10 grid gap-y-6 text-2xl font-light text-gray-2">
          <span>
            Меня зовут Таисия.
            <br />
            Я повар и карвер уже 10лет. <br />
            Я декорирую художественной резкой блюда и композиции <br />
            из овощей и фруктов.
          </span>
          <span>
            Моя работа - творчество, которое никого не оставит равнодушным.
            Процесс вырезания и составления композиций очень увлекательный для
            взрослых и детей.
          </span>
          <span>
            Буду рада помочь Вам сделать первые шаги в искусстве карвинга.
          </span>
        </div>
      </section>
      <section class="py-16">
        <div class="container pl-32">
          <h2 class="uppercase text-blue text-2xl font-light mb-16">
            Мастер классы
          </h2>
          <div class="grid grid-cols-2 gap-14">
            <div class="h-[985px] bg-fiolet" />
            <div class="h-[985px] bg-gray-6" />
          </div>
        </div>
      </section>
      <section class="py-16 overflow-hidden h-[903px]">
        <div class="relative container">
          <div class="absolute left-[172px] -top-[33px] bg-fiolet bg-opacity-50 w-[1400px] h-[853px] rounded-[100%] -z-20" />
          <div class="absolute left-[219px] top-[21px] bg-white w-[1085px] h-[640px] rounded-[100%] -z-10" />
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}
