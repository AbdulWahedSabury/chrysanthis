"use client";
import { CategoryCard } from "@/components/category-card";
import { MenuFooter } from "@/components/menu-footer";
import { SiteHeader } from "@/components/site-header";
import { MENU_CATEGORIES } from "@/lib/menu";
import { motion } from "framer-motion";

export default function HomePage() {
  const name = "To Kafe Tis Chrysanthis";
  return (
    <div className="min-h-dvh bg-zinc-950 text-[#e5e7eb]">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-[#a1a1aa]">
            Menu
          </p>
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} // Staggered delay
              className="inline-block"
            >
              <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#dc99a9] sm:text-5xl">
                {char === " " ? "\u00A0" : char}
              </h1>
            </motion.span>
          ))}
            <p className="mt-4 text-base leading-relaxed text-[#e5e7eb] sm:text-lg">
              Choose a category to explore items from our menu.
            </p>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:gap-10">
          {MENU_CATEGORIES.map((category) => (
            <li key={category.slug}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>

        <MenuFooter />
      </main>
    </div>
  );
}
