// Domínio: acompanhamento de pendências geradas por visitas de campo

export type StatusPendencia =
  | "aberta"
  | "em_andamento"
  | "aguardando_area"
  | "concluida";

export type Prioridade = "baixa" | "media" | "alta";

export interface Unidade {
  id: string;
  nome: string;
  cidade: string;
}

export interface Area {
  id: string;
  nome: string; // ex: Manutenção, TI, Comercial, Financeiro
}

export interface Pessoa {
  id: string;
  nome: string;
  areaId: string;
  avatarUrl?: string;
}

export interface EventoHistorico {
  id: string;
  data: string; // ISO date
  autorId: string;
  descricao: string; // ex: "Status alterado de 'aberta' para 'em_andamento'"
}

export interface Pendencia {
  id: string;
  titulo: string;
  descricao: string;
  unidadeId: string;
  origem: string; // ex: "Visita de campo - 12/09"
  responsavelId: string;
  areaResponsavelId: string;
  status: StatusPendencia;
  prioridade: Prioridade;
  criadaEm: string; // ISO date
  atualizadaEm: string; // ISO date

  // O diferencial do case: dependência explícita de outras áreas
  aguardandoAreaId?: string; // preenchido quando status = 'aguardando_area'
  motivoEspera?: string;

  // Critério de conclusão - resolve a dor de "o que significa encerrar"
  criterioConclusao: string;

  historico: EventoHistorico[];
}

// Campos derivados, calculados no client (não vêm do "banco")
export interface PendenciaComputada extends Pendencia {
  diasParada: number; // dias desde atualizadaEm
  diasAberta: number; // dias desde criadaEm
  estaAtrasada: boolean; // regra de negócio simples, ex: > 5 dias parada
}
