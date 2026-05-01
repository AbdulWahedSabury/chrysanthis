"use client";

import { dishImageSrc, type MenuCategory } from "@/lib/menu";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type CategoryCardProps = {
  category: MenuCategory;
};

export function CategoryCard({ category }: CategoryCardProps) {
  const heroImage = dishImageSrc({
    id: `cat-${category.slug}`,
    imageSrc: category.imageSrc,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start 50px down and invisible
      whileInView={{ opacity: 1, y: 0 }} // Animate to original position
      viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% visible
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Link
        href={`/menu/${category.slug}`}
        className="group block outline-none focus-visible:ring-2 focus-visible:ring-[#dc99a9]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        <article className="overflow-hidden rounded-2xl ring-1 ring-white/10 transition duration-300 group-hover:ring-[#dc99a9]/30">
          <div className="relative aspect-[4/3]">
            <Image
              src={heroImage}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-medium tracking-tight text-[#dc99a9] sm:text-3xl">
                {category.name}
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[#e5e7eb]">
                {category.tagline}
              </p>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
