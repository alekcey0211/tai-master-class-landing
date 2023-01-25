import { Image } from "../../components/image.tsx";

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
  {
    href: "/image/0e421126a779ae024c0d266fea55ac6b.png",
    width: 715,
    height: 676,
  },
  {
    href: "/image/71bdfacb1c4e3dfd9e6846354a136e35.png",
    width: 721,
    height: 961,
  },
];

export const IndexWork = () => {
  return (
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
        <div id="swiper-71e5983e0ce24d2aa0a941ba82f4c3f3" class="swiper w-full">
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
  );
};
