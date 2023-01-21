import { PageProps } from "$fresh/server.ts";

import ScrollToTop from "../islands/ScrollToTop.tsx";

import { HeadElement } from "../components/head.tsx";
import { Image } from "../components/image.tsx";
import { icons } from "../components/icons.tsx";
import RequestForm from "../islands/RequestForm.tsx";

export default function Home(ctx: PageProps) {
  const { url } = ctx;

  const images = [
    {
      href: "/image/60c08ef7ee27a2c5eb4cbcd174b6398d.png",
      width: 697,
      height: 933,
    },
    {
      href: "/image/75ae2bae0dc790502f88a5bf0bf76751.png",
      width: 591,
      height: 770,
    },
    {
      href: "/image/7004ebe8134b357c12c0075d7b40eba5.png",
      width: 517,
      height: 413,
    },
    {
      href: "/image/effbc87f2993529160b1a2324d7fd94b.png",
      width: 337,
      height: 464,
    },
  ];
  const galleryChild = [
    {
      href: "/image/8654802de29141e09329ed6440c91f24.jpg",
      src: {
        href: "/image/8654802de29141e09329ed6440c91f24-src.jpg",
        width: 820,
        height: 812,
      },
      width: 410,
      height: 406,
    },
    {
      href: "/image/cc58c3265c6a4e2cb47d2bd0339f3a65.jpg",
      src: {
        href: "/image/cc58c3265c6a4e2cb47d2bd0339f3a65-src.jpg",
        width: 1038,
        height: 812,
      },
      width: 519,
      height: 406,
    },
    {
      href: "/image/ed49b23f6aa04f91ad14e0d8e7cfceba.jpg",
      src: {
        href: "/image/ed49b23f6aa04f91ad14e0d8e7cfceba-src.jpg",
        width: 768,
        height: 812,
      },
      width: 384,
      height: 406,
    },
  ];
  const galleryAdult = [
    {
      href: "/image/4ba44bf245df4857af2da952733a643c.jpg",
      src: {
        href: "/image/4ba44bf245df4857af2da952733a643c-src.jpg",
        width: 816,
        height: 812,
      },
      width: 408,
      height: 406,
    },
    {
      href: "/image/640429f4aabf4571afa72052714d709b.jpg",
      src: {
        href: "/image/640429f4aabf4571afa72052714d709b-src.jpg",
        width: 1038,
        height: 810,
      },
      width: 519,
      height: 405,
    },
    {
      href: "/image/dc5255db681f410a8f20d4969891dd50.jpg",
      src: {
        href: "/image/dc5255db681f410a8f20d4969891dd50-src.jpg",
        width: 768,
        height: 812,
      },
      width: 384,
      height: 406,
    },
  ];

  return (
    <>
      <HeadElement title="Мастер класс по карвингу" url={url} />
      <header class="container absolute top-[68px] left-1/2 -translate-x-1/2 z-10">
        <nav class="xl:px-32">
          <ul class="flex items-center justify-between text-2xl font-light text-blue">
            <li>
              <a href="#about">Обо мне</a>
            </li>
            <li>
              <a href="#work">Работы</a>
            </li>
            <li>
              <a href="#master-classes">Мастер классы</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </nav>
      </header>
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
            <a
              href="#form"
              class="text-2xl bg-blue grid place-content-center h-[67px] w-[228px] text-white font-light"
            >
              Записаться
            </a>
          </div>
        </div>
      </section>
      <section id="work" class="bg-gray-6 py-16 overflow-hidden">
        <div class="container mb-16">
          <h2 class="uppercase text-blue text-2xl font-light xl:ml-32">
            Мои работы
          </h2>
        </div>
        <div
          id="gallery-71e5983e0ce24d2aa0a941ba82f4c3f3"
          class="visually-hidden"
        >
          {images.map((image) => (
            <a
              href={image.href}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              target="_blank"
              {...{ "aria-label": "open image in fullscreen view" }}
            />
          ))}
        </div>
        <div class="flex items-center gap-2 select-none">
          <div
            id="swiper-71e5983e0ce24d2aa0a941ba82f4c3f3"
            class="swiper w-full"
          >
            <div class="swiper-wrapper items-center">
              {images.map((image, index) => (
                <div class="swiper-slide" data-index={index + 1}>
                  <div class="aspect-square box-border grid grid-cols-1 grid-rows-1 place-content-center rounded-full bg-white">
                    <div class="grid grid-cols-1 grid-rows-1 p-8">
                      <Image
                        src={image.href}
                        width={image.width}
                        height={image.height}
                        className="block max-w-full w-full max-h-full h-full object-contain object-center"
                        isLazy={false}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="container absolute top-1/2 left-1/2 -translate-x-1/2 z-10">
              <div
                id="swiper-71e5983e0ce24d2aa0a941ba82f4c3f3-button-prev"
                class="swiper-button-prev text-blue !xl:left-32 !after::text-base !after::sm:text-2xl !after::md:text-4xl !mt-0 !w-auto"
              />
              <div
                id="swiper-71e5983e0ce24d2aa0a941ba82f4c3f3-button-next"
                class="swiper-button-next text-blue !xl:right-32 !after::text-base !after::sm:text-2xl !after::md:text-4xl !mt-0 !w-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" class="py-16 overflow-hidden h-[903px]">
        <div class="relative container">
          <div class="absolute left-4 xl:left-40 2xl:left-[172px] -top-[33px] bg-fiolet bg-opacity-50 w-[1400px] h-[853px] rounded-[100%] -z-20" />
          <div class="absolute left-16 xl:left-52 2xl:left-[219px] top-[21px] bg-white w-[1085px] h-[640px] rounded-[100%] -z-10" />
          <div class="max-w-[750px] absolute left-60 xl:left-[340px] right-0 top-[341px] -translate-y-1/2 grid gap-y-6 text-2xl font-light text-gray-2">
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
        </div>
        <div class="container mb-[143px]">
          <h2 class="uppercase text-blue text-2xl font-light xl:ml-32">
            Обо мне
          </h2>
        </div>
      </section>
      <section id="master-classes" class="py-16 overflow-hidden">
        <div class="container !xl:px-32">
          <h2 class="uppercase text-blue text-2xl font-light mb-16">
            Мастер классы
          </h2>
          <div class="grid grid-cols-2 gap-4 lg:gap-14">
            <div class="bg-fiolet relative pt-[127px] pb-[111px] px-4 md:px-12 isolate">
              <div class="grid gap-y-1 items-end content-end justify-start pb-6 pl-10 bg-white absolute w-[187px] h-[166px] rounded-[100%] -top-[69px] -right-[20px] text-gray-2 font-light text-xl text-center">
                <span>Для детей</span>
                <span>8-12 лет</span>
              </div>
              <Image
                src="/image/3a62e09c31a44e0392c02b96f2c3d86c.png"
                width={300}
                height={300}
                className="absolute -bottom-[26px] -left-[156px] -z-10"
              />
              <h3 class="text-blue text-[22px] leading-[30px] text-center mb-12">
                Мастер-класс «Фруктовая композиция»
              </h3>
              <p class="text-xl font-light mb-4">
                На нашем мастер-классе участники:
              </p>
              <ul class="grid gap-4 list-circle pl-5 font-light text-lg leading-[24px] mb-8 list-lightning">
                <li>научатся составлять композицию из фруктов,</li>
                <li>
                  узнают, какие фрукты лучше сочетать по вкусу во фруктовой
                  композиции,
                </li>
                <li>
                  определят с какими сладостями можно дополнить композицию без
                  вреда для вкусового опыта.
                </li>
                <li>создадут свою первую фруктовую композицию</li>
              </ul>
              <div class="flex-grow-1" />
              <p class="text-center mb-8 font-light text-base">
                Ребята будут работать с готовыми (уже нарезанными фруктами),
                сладостями и элементами декора.
              </p>
              <p class="mb-8 font-light text-base">
                <sup>*</sup>При наличии аллергии или противопоказаний на
                какой-либо продукт просим предупредить организаторов.
                Организаторы не несут ответственность за реакцию участников на
                пищевые продукты.
              </p>
              <p class="text-lg mb-4">Длительность мастер-класса 30-40 минут</p>
              <p class="text-lg mb-20">Участие в мастер-классе БЕСПЛАТНОЕ</p>
              <a
                href="#form"
                class="text-2xl bg-blue grid place-content-center h-[60px] w-[200px] text-white font-light mx-auto z-10"
              >
                Записаться
              </a>
            </div>
            <div class="flex flex-col bg-gray-5 relative pt-[127px] pb-[111px] px-4 md:px-12 isolate">
              <div class="grid gap-y-1 items-end content-end justify-start pb-6 pl-6 bg-white absolute w-[187px] h-[166px] rounded-[100%] -top-[69px] -right-[20px] text-gray-2 font-light text-xl text-center">
                <span>Для взрослых</span>
                <span>от 18 лет</span>
              </div>
              <Image
                src="/image/fbcef8b55cc54827aa92d7fd5af1b277.png"
                width={250}
                height={250}
                className="absolute -bottom-[26px] -right-[106px] -z-10"
              />
              <h3 class="text-blue text-[22px] leading-[30px] text-center mb-12">
                Мастер-класс «Яблочко наливное»
              </h3>
              <p class="text-xl font-light mb-4">
                На нашем мастер-классе участники:
              </p>
              <ul class="grid gap-4 list-circle pl-5 font-light text-lg mb-8 list-lightning">
                <li>
                  сделают первые шаги в карвинге - искусстве художественной
                  резки по овощам и фруктам
                </li>
                <li>
                  познакомятся с инструментами для карвинга (очень острыми
                  ножами, привезенными специально из Таиланда)
                </li>
                <li>
                  узнают разные способы декора на яблоках (яблоки лучше всего
                  подходят для начинающих резчиков по овощам и фруктам)
                </li>
              </ul>
              <div class="flex-grow-1" />
              <p class="mb-8 font-light text-base">
                <sup>*</sup>При наличии аллергии или противопоказаний на
                какой-либо продукт просим предупредить организаторов.
                Организаторы не несут ответственность за реакцию участников на
                пищевые продукты.
              </p>
              <p class="text-lg mb-4">Длительность мастер-класса 30 минут</p>
              <p class="text-lg mb-20">Участие в мастер-классе БЕСПЛАТНОЕ</p>
              <a
                href="#form"
                class="text-2xl bg-blue grid place-content-center h-[60px] w-[200px] text-white font-light mx-auto"
              >
                Записаться
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="photo" class="bg-gray-6 pt-20 pb-12">
        <div class="container">
          <h2 class="uppercase text-blue text-2xl font-light mb-16 xl:ml-32">
            Мастер класс для детей
          </h2>
          <div
            id="gallery-c2e785305bb14c718691a9c265b65581"
            class="flex flex-wrap justify-around gap-10 mb-16"
          >
            {galleryChild.map((image) => (
              <a
                href={image.src.href}
                data-pswp-width={image.src.width}
                data-pswp-height={image.src.height}
                target="_blank"
                {...{ "aria-label": "open image in fullscreen view" }}
                class="h-[406px]"
              >
                <Image
                  src={image.href}
                  width={image.width}
                  height={image.height}
                  className="block object-cover w-full h-full"
                  isLazy={false}
                />
              </a>
            ))}
          </div>
          <h2 class="uppercase text-blue text-2xl font-light mb-16 xl:ml-32">
            Мастер класс для взрослых
          </h2>
          <div
            id="gallery-9137448b7acb4cb7bbfddfe1e1965226"
            class="flex flex-wrap justify-around gap-10 mb-16"
          >
            {galleryAdult.map((image) => (
              <a
                href={image.src.href}
                data-pswp-width={image.src.width}
                data-pswp-height={image.src.height}
                target="_blank"
                {...{ "aria-label": "open image in fullscreen view" }}
                class="h-[406px]"
              >
                <Image
                  src={image.href}
                  width={image.width}
                  height={image.height}
                  className="block object-cover w-full h-full"
                  isLazy={false}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="form" class="py-16 overflow-hidden h-[903px]">
        <div class="relative container">
          <div class="absolute left-4 xl:left-40 2xl:left-[172px] -top-[33px] bg-fiolet bg-opacity-50 w-[1400px] h-[853px] rounded-[100%] -z-20" />
          <div class="absolute left-16 xl:left-52 2xl:left-[219px] top-[21px] bg-white w-[1085px] h-[640px] rounded-[100%] -z-10" />
          <div class="flex justify-center absolute left-60 xl:left-[100px] right-0 top-[341px] -translate-y-1/2">
            <RequestForm />
          </div>
        </div>
      </section>
      <footer id="contacts" class="bg-gray-6 pt-16 pb-52">
        <div class="container grid !xl:px-32">
          <h2 class="text-blue text-2xl font-light underline mb-8">Контакты</h2>
          <span class="text-2xl font-light mb-4">
            По вопросам мастер классов и сотрудничества
          </span>
          <span class="text-2xl font-light mb-12">
            <a href="tel:+79799656656">+7 979 965 66 56</a> Кравцова Таисия
            Валерьевна
          </span>
          <div class="flex gap-3 text-blue">
            <a
              href={`https://wa.me/+79799656656?text=""`}
              aria-label="Ссылка на приложение whatsapp"
            >
              <icons.Whatsapp />
            </a>
            <a
              href="https://t.me/+79799656656"
              aria-label="Ссылка на приложение telegram"
            >
              <icons.Telegram />
            </a>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </>
  );
}
