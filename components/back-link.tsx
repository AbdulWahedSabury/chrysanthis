import Link from "next/link";

type BackLinkProps = {
  href: string;
  label: string;
};

export function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] transition-colors hover:text-[#e5e7eb]"
    >
      <span
        className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5"
        aria-hidden
      >
        ←
      </span>
      {label}
    </Link>
  );
}
