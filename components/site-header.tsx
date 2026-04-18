import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
      <Link
          href="/"
          className="group flex min-w-0 flex-col gap-0.5 transition-opacity hover:opacity-90" 
        >
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-[#a1a1aa]">
            Larnaca · All day
          </span>
          <span className="font-serif text-xl font-medium tracking-tight text-[#e5e7eb] sm:text-2xl">
            To Kafe tis Chrysanthis
          </span>
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium text-[#a1a1aa] transition-colors hover:text-[#dc99a9]"
        >
          Our story
        </Link>
      </div>
    </header>
  );
}
