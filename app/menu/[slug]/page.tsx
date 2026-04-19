import { BackLink } from "@/components/back-link";
import { MenuCircleGroups } from "@/components/menu-circle-groups";
import { MenuDishRow } from "@/components/menu-dish-row";
import { MenuFooter } from "@/components/menu-footer";
import { SiteHeader } from "@/components/site-header";
import { getCategoryBySlug, MENU_CATEGORIES } from "@/lib/menu";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return MENU_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return { title: "Menu" };
  }
  return {
    title: `${category.name} · To Kafe tis Chrysanthis`,
    description: category.tagline,
  };
}

export default async function CategoryMenuPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    notFound();
  }

  const itemTotal = category.subsections.reduce((n, s) => n + s.items.length, 0);

  return (
    <div className="min-h-dvh bg-zinc-950 text-[#e5e7eb]">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <BackLink href="/" label="All categories" />

        <header className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-14">
          <div className="relative aspect-16/10 overflow-hidden rounded-2xl ring-1 ring-white/10 lg:aspect-auto lg:min-h-[280px]">
            <Image
              src={category.imageSrc}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-zinc-950/80"
              aria-hidden
            />
          </div>
          <div className="space-y-4">
            <p className="font-serif text-3xl font-medium text-[#dc99a9] sm:text-4xl md:text-5xl">
              {category.name}
            </p>
            <p className="text-lg leading-relaxed text-[#e5e7eb]">{category.tagline}</p>
            {category.intro ? (
              <p className="text-sm leading-relaxed text-[#a1a1aa] sm:text-base">
                {category.intro}
              </p>
            ) : null}
            <p className="text-xs font-medium uppercase tracking-widest text-[#dc99a9]/80">
              {itemTotal} items in this category
            </p>
          </div>
        </header>

        <div className="mt-16 space-y-16">
          {category.subsections.map((section) => (
            <section
              key={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="scroll-mt-8"
            >
              <div className="flex flex-col gap-2 border-b border-[#dc99a9]/20 pb-4">
                <h2
                  id={`${section.id}-heading`}
                  className="font-serif text-xl font-medium uppercase tracking-[0.18em] text-[#dc99a9] sm:text-2xl"
                >
                  {section.title}
                </h2>
              </div>
              {section.intro ? (
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#a1a1aa] sm:text-base">
                  {section.intro}
                </p>
              ) : null}
              {section.circleGroups?.length ? (
                <MenuCircleGroups groups={section.circleGroups} />
              ) : null}
              {section.items.length > 0 ? (
                <ul className="mt-2">
                  {section.items.map((item) => (
                    <MenuDishRow key={item.id} item={item} />
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <MenuFooter />
      </main>
    </div>
  );
}
