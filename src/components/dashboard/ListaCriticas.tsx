import Link from "next/link";
import type { PendenciaComputada } from "@/lib/types";
import { getArea, getUnidade } from "@/lib/selectors";
import { StatusTag } from "@/components/pendencia/StatusTag";

export function ListaCriticas({
  pendencias,
}: {
  pendencias: PendenciaComputada[];
}) {
  const criticas = pendencias
    .filter(
      (p) =>
        p.status !== "concluida" &&
        (p.estaAtrasada || p.status === "aguardando_area"),
    )
    .sort((a, b) => b.diasParada - a.diasParada);

  if (criticas.length === 0) {
    return (
      <div className="rounded-lg border border-line bg-surface p-6 text-sm text-muted">
        Nenhum ponto de atenção agora. Tudo em dia.
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-line bg-surface">
      <div className="border-b border-line px-5 py-4">
        <h2 className="text-base font-semibold text-ink">Pontos de atenção</h2>
        <p className="text-xs text-muted">
          Paradas há mais tempo ou dependendo de outra área — o que puxar na
          reunião
        </p>
      </div>

      <ul className="divide-y divide-line">
        {criticas.map((p) => {
          const unidade = getUnidade(p.unidadeId);
          const areaEspera = p.aguardandoAreaId
            ? getArea(p.aguardandoAreaId)
            : undefined;

          return (
            <li key={p.id}>
              <Link
                href={`/pendencias/${p.id}`}
                className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-canvas"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">
                    {p.titulo}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    {unidade?.nome}
                    {areaEspera ? ` · aguardando ${areaEspera.nome}` : ""}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <StatusTag status={p.status} />
                  <span className="font-mono text-xs text-alert">
                    {p.diasParada}d parada
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
