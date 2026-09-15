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
  nome: string;
}

export interface Pessoa {
  id: string;
  nome: string;
  areaId: string;
  avatarUrl?: string;
}

export interface EventoHistorico {
  id: string;
  data: string;
  autorId: string;
  descricao: string;
}

export interface Pendencia {
  id: string;
  titulo: string;
  descricao: string;
  unidadeId: string;
  origem: string;
  responsavelId: string;
  areaResponsavelId: string;
  status: StatusPendencia;
  prioridade: Prioridade;
  criadaEm: string;
  atualizadaEm: string;

  aguardandoAreaId?: string;
  motivoEspera?: string;
  criterioConclusao: string;

  historico: EventoHistorico[];
}

export interface PendenciaComputada extends Pendencia {
  diasParada: number;
  diasAberta: number;
  estaAtrasada: boolean;
}
