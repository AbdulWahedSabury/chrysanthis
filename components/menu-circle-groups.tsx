import type { MenuCircleGroup } from "@/lib/menu/types";

type MenuCircleGroupsProps = {
  groups: MenuCircleGroup[];
};

/**
 * Paper-menu style hollow circles with labels (tonic / garnish choices).
 */
export function MenuCircleGroups({ groups }: MenuCircleGroupsProps) {
  return (
    <div className="mt-8 space-y-12">
      {groups.map((group) => (
        <div key={group.id}>
          <h3 className="mb-6 text-center font-serif text-sm font-medium uppercase tracking-[0.25em] text-[#dc99a9] sm:text-base">
            {group.title}
          </h3>
          <ul
            className="flex flex-wrap justify-center gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10"
            aria-label={group.title}
          >
            {group.options.map((opt) => (
              <li
                key={opt}
                className="flex w-[4.5rem] flex-col items-center gap-2.5 sm:w-[5.25rem]"
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#dc99a9]/45 bg-zinc-950/40 shadow-[inset_0_0_0_1px_rgba(220,153,169,0.12)] ring-1 ring-[#dc99a9]/15 transition hover:border-[#dc99a9]/70 hover:ring-[#dc99a9]/35 sm:h-12 sm:w-12"
                  aria-hidden
                />
                <span className="text-center text-[0.65rem] font-medium uppercase leading-snug tracking-wide text-[#a1a1aa] sm:text-[0.7rem]">
                  {opt}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
