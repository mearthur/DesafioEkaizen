"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Visão geral" },
  { href: "/board", label: "Board" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-56 shrink-0 flex-col border-r border-line bg-surface px-4 py-6">
      <div className="mb-8 px-2">
        <p className="text-sm font-semibold tracking-tight text-ink">
          Pendências de Campo
        </p>
        <p className="text-xs text-muted">Acompanhamento multi-unidade</p>
      </div>

      <nav className="flex flex-col gap-1">
        {links.map((link) => {
          const ativo =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                ativo
                  ? "bg-progress-soft font-medium text-progress"
                  : "text-muted hover:bg-canvas hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
