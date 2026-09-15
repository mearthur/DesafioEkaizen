import type { Prioridade } from "@/lib/types";

const config: Record<Prioridade, { label: string; dot: string }> = {
  alta: { label: "Prioridade alta", dot: "bg-alert" },
  media: { label: "Prioridade média", dot: "bg-progress" },
  baixa: { label: "Prioridade baixa", dot: "bg-muted" },
};

export function PrioridadeTag({ prioridade }: { prioridade: Prioridade }) {
  const c = config[prioridade];
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}
