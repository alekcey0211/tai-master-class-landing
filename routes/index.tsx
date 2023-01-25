import { PageProps } from "$fresh/server.ts";

import ScrollToTop from "../islands/ScrollToTop.tsx";

import { Footer } from "../components/footer.tsx";
import { Form } from "../components/form.tsx";
import { HeadElement } from "../components/head.tsx";
import { Header } from "../components/header.tsx";

import { IndexAbout } from "../sections/index/about.tsx";
import { IndexFirst } from "../sections/index/first.tsx";
import { IndexMasterClasses } from "../sections/index/master-classes.tsx";
import { IndexPhoto } from "../sections/index/photo.tsx";
import { IndexWork } from "../sections/index/work.tsx";

export default function Home(ctx: PageProps) {
  const { url } = ctx;

  return (
    <>
      <HeadElement title="Мастер класс по карвингу" url={url} />
      <Header />
      <IndexFirst />
      <IndexWork />
      <IndexAbout />
      <IndexMasterClasses />
      <IndexPhoto />
      <Form />
      <Footer />
      <ScrollToTop />
    </>
  );
}
