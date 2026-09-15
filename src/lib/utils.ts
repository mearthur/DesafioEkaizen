import type { Pendencia, PendenciaComputada } from "./types";

export const HOJE = new Date("2026-09-14T12:00:00Z");

const LIMITE_DIAS_PARADA = 5;

function diffEmDias(dataIso: string, referencia: Date): number {
  const data = new Date(dataIso);
  const ms = referencia.getTime() - data.getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

export function computarPendencia(p: Pendencia): PendenciaComputada {
  const diasParada = diffEmDias(p.atualizadaEm, HOJE);
  const diasAberta = diffEmDias(p.criadaEm, HOJE);
  const estaAtrasada =
    p.status !== "concluida" && diasParada > LIMITE_DIAS_PARADA;

  return { ...p, diasParada, diasAberta, estaAtrasada };
}

export function computarPendencias(lista: Pendencia[]): PendenciaComputada[] {
  return lista.map(computarPendencia);
}

// Métricas para o dashboard
export function calcularResumo(lista: PendenciaComputada[]) {
  return {
    total: lista.length,
    abertas: lista.filter((p) => p.status === "aberta").length,
    emAndamento: lista.filter((p) => p.status === "em_andamento").length,
    aguardandoArea: lista.filter((p) => p.status === "aguardando_area").length,
    concluidas: lista.filter((p) => p.status === "concluida").length,
    atrasadas: lista.filter((p) => p.estaAtrasada).length,
  };
}
