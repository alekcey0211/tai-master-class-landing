import { Image } from "../../components/image.tsx";

export const IndexFirst = () => {
  return (
    <section class="h-[823px] relative overflow-hidden">
      <div class="absolute rounded-full bg-fiolet bg-opacity-25 w-[1283px] h-[1245px] -bottom-[86px] left-1/2 -translate-x-1/2 -z-20" />
      <div class="absolute rounded-full bg-fiolet w-[966px] h-[951px] bottom-0 left-1/2 -translate-x-1/2 -z-10" />
      <div class="grid grid-cols-[405px_270px] justify-center items-end">
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
          <a
            href="#form"
            class="text-2xl bg-blue grid place-content-center h-[67px] w-[228px] text-white font-light"
          >
            Записаться
          </a>
        </div>
      </div>
      <Image
        src={"/image/768423c041056a4e453f4625498c7ad9.png"}
        width={661}
        height={1152}
        className="block absolute bottom-0 left-1/2 h-[600px] w-auto"
        isLazy={false}
      />
    </section>
  );
};
