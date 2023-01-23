import { Head } from "$fresh/runtime.ts";

export function HeadElement({
  description,
  image,
  title,
  url,
}: {
  url: URL;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(92149972, "init", {
       clickmap:true,
       trackLinks:true,
       accurateTrackBounce:true,
       webvisor:true
  });`,
        }}
      ></script>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/92149972"
            style="position:absolute; left:-9999px;"
            alt=""
          />
        </div>
      </noscript>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="UTF-8" />
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      /> */}
      <meta name="viewport" content="width=800" />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={url.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={url.hostname} />
      <meta property="twitter:url" content={url.href} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      <link rel="stylesheet" href="photoswipe/photoswipe.css" />
      <link rel="stylesheet" href="/swiper/swiper-bundle.min.css" />
      <script type="module" src="app.js" />
    </Head>
  );
}
