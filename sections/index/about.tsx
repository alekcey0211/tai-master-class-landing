import { Image } from "../../components/image.tsx";

export const IndexAbout = () => {
  return (
    <section id="about" class="py-16 overflow-hidden h-[1000px] lg:h-[903px]">
      <div class="relative container">
        <div class="absolute left-4 xl:left-40 2xl:left-[172px] -top-[33px] bg-fiolet bg-opacity-50 w-[1400px] h-[853px] rounded-[100%] -z-20" />
        <div class="absolute left-16 xl:left-52 2xl:left-[219px] top-[21px] bg-white w-[1085px] h-[640px] rounded-[100%] -z-10" />
        <div class="max-w-[600px] 2xl:max-w-[750px] absolute left-60 xl:left-[380px] right-0 top-[341px] -translate-y-1/2 grid gap-y-6 text-2xl font-light text-gray-2">
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
          <Image
            src={"/image/231b23c912ebffe1e421135ad7e6373b.png"}
            width={721}
            height={961}
            showBreakpoint="lg"
            className="block absolute w-[600px] bottom-auto top-1/2 -translate-y-1/2 translate-x-full right-0"
          />
        </div>
      </div>
      <div class="container mb-[143px]">
        <h2 class="uppercase text-blue text-2xl font-light xl:ml-32">
          Обо мне
        </h2>
      </div>
    </section>
  );
};
