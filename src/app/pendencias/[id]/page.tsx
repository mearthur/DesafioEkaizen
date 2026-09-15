import { notFound } from "next/navigation";
import Link from "next/link";
import { getArea, getPendenciaPorId, getPessoa, getUnidade } from "@/lib/selectors";
import { computarPendencia } from "@/lib/utils";
import { StatusTag } from "@/components/pendencia/StatusTag";
import { PrioridadeTag } from "@/components/pendencia/PrioridadeTag";
import { HistoricoTimeline } from "@/components/pendencia/HistoricoTimeline";

export default async function DetalhePendenciaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pendencia = getPendenciaPorId(id);

  if (!pendencia) {
    notFound();
  }

  const p = computarPendencia(pendencia);
  const unidade = getUnidade(p.unidadeId);
  const areaResponsavel = getArea(p.areaResponsavelId);
  const responsavel = getPessoa(p.responsavelId);
  const areaEspera = p.aguardandoAreaId ? getArea(p.aguardandoAreaId) : undefined;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Link href="/board" className="text-xs text-muted hover:text-ink">
        ← Voltar ao board
      </Link>

      <div>
        <div className="flex items-center gap-3">
          <StatusTag status={p.status} />
          <PrioridadeTag prioridade={p.prioridade} />
        </div>
        <h1 className="mt-3 text-xl font-semibold text-ink">{p.titulo}</h1>
        <p className="mt-1 text-sm text-muted">{p.origem}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 rounded-lg border border-line bg-surface p-5 sm:grid-cols-4">
        <Info label="Unidade" valor={unidade?.nome} />
        <Info label="Área responsável" valor={areaResponsavel?.nome} />
        <Info label="Responsável" valor={responsavel?.nome} />
        <Info
          label="Parada há"
          valor={`${p.diasParada} dia${p.diasParada === 1 ? "" : "s"}`}
          alerta={p.estaAtrasada}
        />
      </div>

      {areaEspera && (
        <div className="rounded-lg border border-blocked/30 bg-blocked-soft p-5">
          <p className="text-sm font-medium text-blocked">
            Aguardando resposta de {areaEspera.nome}
          </p>
          <p className="mt-1 text-sm text-blocked/90">{p.motivoEspera}</p>
        </div>
      )}

      <div className="rounded-lg border border-line bg-surface p-5">
        <h2 className="mb-2 text-sm font-semibold text-ink">Descrição</h2>
        <p className="text-sm text-ink/90">{p.descricao}</p>
      </div>

      <div className="rounded-lg border border-done/30 bg-done-soft p-5">
        <h2 className="mb-1 text-sm font-semibold text-done">
          O que significa concluir esta pendência
        </h2>
        <p className="text-sm text-done/90">{p.criterioConclusao}</p>
      </div>

      <div className="rounded-lg border border-line bg-surface p-5">
        <HistoricoTimeline historico={p.historico} />
      </div>
    </div>
  );
}

function Info({
  label,
  valor,
  alerta,
}: {
  label: string;
  valor?: string;
  alerta?: boolean;
}) {
  return (
    <div>
      <p className="text-xs text-muted">{label}</p>
      <p className={`mt-0.5 text-sm font-medium ${alerta ? "text-alert" : "text-ink"}`}>
        {valor ?? "—"}
      </p>
    </div>
  );
}
