import Link from "next/link";
import type { PendenciaComputada } from "@/lib/types";
import { getArea, getUnidade } from "@/lib/selectors";
import { PrioridadeTag } from "@/components/pendencia/PrioridadeTag";

const corBorda: Record<PendenciaComputada["status"], string> = {
  aberta: "border-l-line",
  em_andamento: "border-l-progress",
  aguardando_area: "border-l-blocked",
  concluida: "border-l-done",
};

export function PendenciaCard({ pendencia }: { pendencia: PendenciaComputada }) {
  const unidade = getUnidade(pendencia.unidadeId);
  const areaEspera = pendencia.aguardandoAreaId
    ? getArea(pendencia.aguardandoAreaId)
    : undefined;

  return (
    <Link
      href={`/pendencias/${pendencia.id}`}
      className={`block rounded-md border border-line border-l-4 bg-surface p-3.5 transition-shadow hover:shadow-sm ${
        corBorda[pendencia.status]
      }`}
    >
      <p className="text-sm font-medium leading-snug text-ink">{pendencia.titulo}</p>
      <p className="mt-1 text-xs text-muted">{unidade?.nome}</p>

      {areaEspera && (
        <p className="mt-2 inline-flex items-center rounded bg-blocked-soft px-2 py-0.5 text-xs text-blocked">
          Aguardando {areaEspera.nome}
        </p>
      )}

      <div className="mt-3 flex items-center justify-between">
        <PrioridadeTag prioridade={pendencia.prioridade} />
        <span
          className={`font-mono text-xs tabular-nums ${
            pendencia.estaAtrasada ? "text-alert" : "text-muted"
          }`}
        >
          {pendencia.diasParada}d
        </span>
      </div>
    </Link>
  );
}
