import type { PendenciaComputada } from "@/lib/types";
import { PendenciaCard } from "./PendenciaCard";

export function KanbanColuna({
  titulo,
  pendencias,
}: {
  titulo: string;
  pendencias: PendenciaComputada[];
}) {
  return (
    <div className="flex w-72 shrink-0 flex-col gap-3 px-5 first:pl-0">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold text-ink">{titulo}</h2>
        <span className="font-mono text-xs text-muted">
          {pendencias.length}
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {pendencias.length === 0 && (
          <p className="rounded-md border border-dashed border-line px-3 py-6 text-center text-xs text-muted">
            Nada aqui
          </p>
        )}
        {pendencias.map((p) => (
          <PendenciaCard key={p.id} pendencia={p} />
        ))}
      </div>
    </div>
  );
}
