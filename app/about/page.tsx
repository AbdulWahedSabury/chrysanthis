import { BackLink } from "@/components/back-link";
import { MenuFooter } from "@/components/menu-footer";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our delicious story · TKTC",
};

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-zinc-950 text-[#e5e7eb]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <BackLink href="/" label="Menu" />

        <article className="mt-12 space-y-8">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-[#dc99a9] sm:text-5xl">
            Our delicious story
          </h1>
          <div className="space-y-6 text-base leading-relaxed text-[#e5e7eb]">
            <p>
              To Kafe tis Chrysanthis has over the years become a dream bigger than
              what we dreamt. From starting up as a little cafe in the heart of
              Larnaca simply offering homemade cakes and a small selection of food,
              we were overwhelmed with all the love and support and decided to offer
              more. In 2020 we opened the upstairs of our corner town-house becoming
              an all day venue.
            </p>
            <p>
              Offering a great variety of dishes for brunch, lunch and dinner.
              Whether you are a local drinking a cup of Americano or want a quick
              bite to eat at lunch, a cheeky treat, a family dinner, or a night out
              with friends, you will always find something on our menu to enjoy. And
              with our selection of signature cocktails, artistic hand-crafted beers
              and both local and international wines, we invite you to enjoy your
              time in our house.
            </p>
          </div>
          <p className="pt-4 text-center text-sm text-[#dc99a9]">
            <a
              href="https://www.tokafetischrysanthis.com"
              className="underline decoration-[#dc99a9]/40 underline-offset-4 transition hover:decoration-[#dc99a9]"
              target="_blank"
              rel="noreferrer"
            >
              www.tokafetischrysanthis.com
            </a>
          </p>
          <p className="text-center text-sm text-[#a1a1aa]">
            Instagram & Facebook: @tokafetischrysanthis
          </p>
        </article>

        <MenuFooter />
      </main>
    </div>
  );
}
