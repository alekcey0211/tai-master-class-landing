import { Image } from "../../components/image.tsx";

const galleryChild = [
  {
    href: "/image/4dfbd25ef372bef7d28bfca2a8603818.jpg",
    src: {
      href: "/image/4dfbd25ef372bef7d28bfca2a8603818-src.jpg",
      width: 854,
      height: 808,
    },
    width: 427,
    height: 404,
  },
  {
    href: "/image/83c3ceba15bbdad00d83de3076c972c3.jpg",
    src: {
      href: "/image/83c3ceba15bbdad00d83de3076c972c3-src.jpg",
      width: 1050,
      height: 808,
    },
    width: 525,
    height: 404,
  },
  {
    href: "/image/32f3b31745aba12fa7910df3448c82e8.jpg",
    src: {
      href: "/image/32f3b31745aba12fa7910df3448c82e8-src.jpg",
      width: 774,
      height: 808,
    },
    width: 387,
    height: 404,
  },
];

const galleryAdult = [
  {
    href: "/image/62125e0f0bcac6b16bc941526c5f4842.jpg",
    src: {
      href: "/image/62125e0f0bcac6b16bc941526c5f4842-src.jpg",
      width: 810,
      height: 660,
    },
    width: 460,
    height: 406,
  },
  {
    href: "/image/e1b4df5a758709c0a9e137184a27c530.jpg",
    src: {
      href: "/image/e1b4df5a758709c0a9e137184a27c530-src.jpg",
      width: 810,
      height: 808,
    },
    width: 405,
    height: 404,
  },

  {
    href: "/image/4fab9ef3073d27c43ed9f56beed2fea3.jpg",
    src: {
      href: "/image/4fab9ef3073d27c43ed9f56beed2fea3-src.jpg",
      width: 810,
      height: 695,
    },
    width: 455,
    height: 405,
  },
];

export const IndexPhoto = () => {
  return (
    <section id="photo" class="bg-gray-6 pt-20 pb-12 overflow-hidden">
      <div class="container">
        <h2 class="uppercase text-blue text-2xl font-light mb-16 xl:ml-32">
          Мастер класс для детей
        </h2>
        <div
          id="gallery-c2e785305bb14c718691a9c265b65581"
          class="flex flex-wrap justify-around gap-10 mb-16 relative isolate"
        >
          <div class="absolute top-0 -bottom-8 -left-[9999px] -right-[9999px] bg-fiolet -z-10" />
          {galleryChild.map((image) => (
            <a
              href={image.src.href}
              data-pswp-width={image.src.width}
              data-pswp-height={image.src.height}
              target="_blank"
              {...{ "aria-label": "open image in fullscreen view" }}
              class="w-full lg:w-auto lg:h-[406px] 2xl:max-w-[calc(33%-40px)]"
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
              class="w-full lg:w-auto lg:h-[406px] 2xl:max-w-[calc(33%-40px)]"
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
  );
};
