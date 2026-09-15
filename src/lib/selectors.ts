import { areas, pendencias, pessoas, unidades } from "./mock-data";

export function getUnidade(id: string) {
  return unidades.find((u) => u.id === id);
}

export function getArea(id: string) {
  return areas.find((a) => a.id === id);
}

export function getPessoa(id: string) {
  return pessoas.find((p) => p.id === id);
}

export function getPendenciaPorId(id: string) {
  return pendencias.find((p) => p.id === id);
}

export function formatarData(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
