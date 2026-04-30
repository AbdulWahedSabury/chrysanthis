import { dishImageSrc, type MenuItem, type MenuText } from "@/lib/menu";
import Image from "next/image";

function TextBlock({ text, muted }: { text: MenuText; muted?: boolean }) {
  return (
    <div className="space-y-2">
      <p
        className={`text-sm leading-relaxed sm:text-[15px] ${muted ? "text-[#a1a1aa]" : "text-[#e5e7eb]"}`}
      >
        {text.en}
      </p>
      {text.el?.trim() ? (
        <p className="text-sm leading-relaxed text-[#a1a1aa] sm:text-[15px]">{text.el}</p>
      ) : null}
    </div>
  );
}

type MenuDishRowProps = {
  item: MenuItem;
};

export function MenuDishRow({ item }: MenuDishRowProps) {
  const src = dishImageSrc(item);

  return (
    <li className="border-b border-white/8 py-6 last:border-b-0">
      <div className="flex gap-4 sm:gap-6 md:flex-row flex-col">
        <div className="relative h-60 w-full shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10 sm:h-60 sm:w-60">
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-serif text-lg font-medium text-[#dc99a9] sm:text-xl">
              {item.name}
            </h3>
            {item.price ? (
              <span className="shrink-0 text-sm font-semibold tabular-nums text-[#dc99a9]">
                {item.price}
              </span>
            ) : null}
          </div>
          {item.description ? (
            <div className="mt-3">
              <TextBlock text={item.description} />
            </div>
          ) : null}
          {item.note ? (
            <div className="mt-3">
              <TextBlock text={item.note} muted />
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}
