import type { StatusPendencia } from "@/lib/types";

const config: Record<StatusPendencia, { label: string; bg: string; text: string }> = {
  aberta: { label: "Aberta", bg: "bg-canvas", text: "text-muted" },
  em_andamento: { label: "Em andamento", bg: "bg-progress-soft", text: "text-progress" },
  aguardando_area: { label: "Aguardando área", bg: "bg-blocked-soft", text: "text-blocked" },
  concluida: { label: "Concluída", bg: "bg-done-soft", text: "text-done" },
};

export function StatusTag({ status }: { status: StatusPendencia }) {
  const c = config[status];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${c.bg} ${c.text}`}
    >
      {c.label}
    </span>
  );
}
