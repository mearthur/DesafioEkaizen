import type { EventoHistorico } from "@/lib/types";
import { getPessoa, formatarData } from "@/lib/selectors";

export function HistoricoTimeline({ historico }: { historico: EventoHistorico[] }) {
  const ordenado = [...historico].sort(
    (a, b) => new Date(a.data).getTime() - new Date(b.data).getTime()
  );

  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold text-ink">Histórico</h2>
      <ol className="flex flex-col gap-5">
        {ordenado.map((evento, i) => {
          const autor = getPessoa(evento.autorId);
          return (
            <li key={evento.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span className="h-2 w-2 shrink-0 rounded-full bg-progress" />
                {i < ordenado.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-line" />
                )}
              </div>
              <div className="pb-1">
                <p className="text-sm text-ink">{evento.descricao}</p>
                <p className="mt-0.5 font-mono text-xs text-muted">
                  {formatarData(evento.data)} · {autor?.nome}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
