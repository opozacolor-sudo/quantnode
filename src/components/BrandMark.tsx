import Link from "next/link";

export function BrandMark({ href = "/", compact = false }: { href?: string; compact?: boolean }) {
  return (
    <Link href={href} className="flex items-center gap-2 font-medium tracking-tight">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent text-white" aria-hidden>
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <circle cx="6.5" cy="12" r="2.1" fill="currentColor" />
          <circle cx="17.5" cy="6.5" r="2.1" fill="currentColor" />
          <circle cx="17.5" cy="17.5" r="2.1" fill="currentColor" />
          <path
            d="M8.4 11.2 15.6 7.4M8.4 12.8 15.6 16.6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {compact ? (
        <span>Admin</span>
      ) : (
        <span>
          Algorithm<span className="text-accent">Node</span>
        </span>
      )}
    </Link>
  );
}
