import type { PendenciaComputada } from "@/lib/types";
import { unidades } from "@/lib/mock-data";

export function ResumoPorUnidade({
  pendencias,
}: {
  pendencias: PendenciaComputada[];
}) {
  const linhas = unidades.map((u) => {
    const daUnidade = pendencias.filter((p) => p.unidadeId === u.id);
    return {
      unidade: u,
      abertas: daUnidade.filter((p) => p.status !== "concluida").length,
      atrasadas: daUnidade.filter((p) => p.estaAtrasada).length,
    };
  });

  return (
    <div className="rounded-lg border border-line bg-surface">
      <div className="border-b border-line px-5 py-4">
        <h2 className="text-base font-semibold text-ink">Por unidade</h2>
      </div>

      <ul className="divide-y divide-line">
        {linhas.map(({ unidade, abertas, atrasadas }) => (
          <li
            key={unidade.id}
            className="flex items-center justify-between px-5 py-3 text-sm"
          >
            <div>
              <p className="text-ink">{unidade.nome}</p>
              <p className="text-xs text-muted">{unidade.cidade}</p>
            </div>
            <div className="flex items-center gap-4 font-mono text-xs tabular-nums">
              <span className="text-muted">{abertas} abertas</span>
              {atrasadas > 0 && (
                <span className="text-alert">{atrasadas} atrasadas</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
