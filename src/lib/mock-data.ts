import type { Area, Pendencia, Pessoa, Unidade } from "./types";

export const unidades: Unidade[] = [
  { id: "u1", nome: "Loja Centro", cidade: "São Luís" },
  { id: "u2", nome: "Filial Renascença", cidade: "São Luís" },
  { id: "u3", nome: "Filial Cohama", cidade: "São Luís" },
  { id: "u4", nome: "Loja Imperatriz", cidade: "Imperatriz" },
  {
    id: "u5",
    nome: "Filial São José de Ribamar",
    cidade: "São José de Ribamar",
  },
];

export const areas: Area[] = [
  { id: "a1", nome: "Manutenção" },
  { id: "a2", nome: "TI" },
  { id: "a3", nome: "Comercial" },
  { id: "a4", nome: "Financeiro" },
];

export const pessoas: Pessoa[] = [
  { id: "p1", nome: "Carla Mendes", areaId: "a1" },
  { id: "p2", nome: "Rafael Souza", areaId: "a2" },
  { id: "p3", nome: "Juliana Costa", areaId: "a3" },
  { id: "p4", nome: "Diego Alves", areaId: "a4" },
  { id: "p5", nome: "Fernanda Lima", areaId: "a1" },
  { id: "p6", nome: "Bruno Castro", areaId: "a2" },
];

// Data de referência considerada "hoje" nas telas: 2026-09-14

export const pendencias: Pendencia[] = [
  {
    id: "pd1",
    titulo: "Ar-condicionado do estoque sem funcionar",
    descricao:
      "Equipamento parou durante a visita. Estoque com produtos perecíveis próximo.",
    unidadeId: "u1",
    origem: "Visita de campo - 12/09",
    responsavelId: "p1",
    areaResponsavelId: "a1",
    status: "em_andamento",
    prioridade: "alta",
    criadaEm: "2026-09-08T09:00:00Z", // era "2026-09-12T09:00:00Z"
    atualizadaEm: "2026-09-10T14:00:00Z", // era "2026-09-13T14:00:00Z"
    criterioConclusao: "Equipamento religado e temperatura estável por 24h.",
    historico: [
      {
        id: "h1",
        data: "2026-09-12T09:00:00Z",
        autorId: "p1",
        descricao: "Pendência criada a partir da visita de campo.",
      },
      {
        id: "h2",
        data: "2026-09-10T14:00:00Z", // era "2026-09-13T14:00:00Z"
        autorId: "p1",
        descricao: "Técnico acionado, peça de reposição solicitada.",
      },
    ],
  },
  {
    id: "pd2",
    titulo: "Sistema de PDV travando no pagamento por PIX",
    descricao: "Ocorre desde a última atualização, impacta o caixa 2.",
    unidadeId: "u2",
    origem: "Mensagem do gerente - WhatsApp",
    responsavelId: "p2",
    areaResponsavelId: "a2",
    status: "aguardando_area",
    prioridade: "alta",
    criadaEm: "2026-08-30T11:00:00Z", // era "2026-08-28T11:00:00Z"
    atualizadaEm: "2026-09-06T10:00:00Z", // era "2026-08-30T16:00:00Z"
    aguardandoAreaId: "a3",
    motivoEspera:
      "TI precisa que o Comercial confirme com o fornecedor do PDV se houve mudança no contrato de integração.",
    criterioConclusao: "PIX processando sem erro em 3 transações de teste.",
    historico: [
      {
        id: "h3",
        data: "2026-08-30T11:00:00Z",
        autorId: "p2",
        descricao: "Pendência registrada via planilha semanal.",
      },
      {
        id: "h4",
        data: "2026-09-06T10:00:00Z",
        autorId: "p2",
        descricao:
          "Bloqueado aguardando retorno do Comercial sobre contrato do fornecedor.",
      },
    ],
  },
  {
    id: "pd3",
    titulo: "Etiquetas de preço desatualizadas na seção de bebidas",
    descricao: "Divergência identificada em 8 produtos.",
    unidadeId: "u1",
    origem: "Visita de campo - 10/09",
    responsavelId: "p3",
    areaResponsavelId: "a3",
    status: "concluida",
    prioridade: "baixa",
    criadaEm: "2026-09-10T10:00:00Z",
    atualizadaEm: "2026-09-11T09:30:00Z",
    criterioConclusao: "Etiquetas reimpressas e conferidas in loco.",
    historico: [
      {
        id: "h5",
        data: "2026-09-10T10:00:00Z",
        autorId: "p3",
        descricao: "Pendência criada.",
      },
      {
        id: "h6",
        data: "2026-09-11T09:30:00Z",
        autorId: "p3",
        descricao: "Etiquetas corrigidas e conferidas. Encerrada.",
      },
    ],
  },
  {
    id: "pd4",
    titulo: "Vazamento no telhado do depósito",
    descricao: "Infiltração identificada após chuva forte na região.",
    unidadeId: "u4",
    origem: "Visita de campo - 01/09",
    responsavelId: "p5",
    areaResponsavelId: "a1",
    status: "aberta",
    prioridade: "alta",
    criadaEm: "2026-09-08T08:00:00Z", // era "2026-09-01T08:00:00Z"
    atualizadaEm: "2026-09-08T08:00:00Z", // era "2026-09-01T08:00:00Z"
    criterioConclusao: "Reparo concluído e sem infiltração após 2 chuvas.",
    historico: [
      {
        id: "h7",
        data: "2026-09-08T08:00:00Z",
        autorId: "p5",
        descricao:
          "Pendência criada. Ainda sem responsável designado para execução.",
      },
    ],
  },
  {
    id: "pd5",
    titulo: "Integração do sistema de estoque com o ERP financeiro",
    descricao:
      "Divergências de saldo entre o estoque físico e o relatório financeiro mensal.",
    unidadeId: "u3",
    origem: "Mensagem do gerente - WhatsApp",
    responsavelId: "p6",
    areaResponsavelId: "a2",
    status: "aguardando_area",
    prioridade: "media",
    criadaEm: "2026-08-20T13:00:00Z", // sem mudança
    atualizadaEm: "2026-08-30T10:00:00Z", // era "2026-08-22T10:00:00Z"
    aguardandoAreaId: "a4",
    motivoEspera:
      "TI depende do Financeiro validar as regras de conciliação antes de ajustar a integração.",
    criterioConclusao:
      "Relatório de conciliação batendo por 2 ciclos consecutivos.",
    historico: [
      {
        id: "h8",
        data: "2026-08-20T13:00:00Z",
        autorId: "p6",
        descricao: "Pendência aberta a partir de relatório mensal.",
      },
      {
        id: "h9",
        data: "2026-08-30T10:00:00Z",
        autorId: "p6",
        descricao: "Aguardando validação de regras junto ao Financeiro.",
      },
    ],
  },
  {
    id: "pd6",
    titulo: "Câmeras de segurança do estacionamento offline",
    descricao: "3 das 6 câmeras não gravam desde a última visita.",
    unidadeId: "u5",
    origem: "Visita de campo - 13/09",
    responsavelId: "p2",
    areaResponsavelId: "a2",
    status: "em_andamento",
    prioridade: "media",
    criadaEm: "2026-09-11T15:00:00Z", // era "2026-09-13T15:00:00Z"
    atualizadaEm: "2026-09-12T08:00:00Z", // era "2026-09-14T08:00:00Z"
    criterioConclusao: "6 câmeras gravando e visíveis no painel central.",
    historico: [
      {
        id: "h10",
        data: "2026-09-11T15:00:00Z", // era "2026-09-13T15:00:00Z"
        autorId: "p2",
        descricao: "Pendência criada.",
      },
      {
        id: "h11",
        data: "2026-09-12T08:00:00Z", // era "2026-09-14T08:00:00Z"
        autorId: "p2",
        descricao: "Diagnóstico iniciado remotamente.",
      },
    ],
  },
  {
    id: "pd7",
    titulo: "Falta de treinamento da equipe no novo checkout",
    descricao: "Equipe da filial relatou dificuldade após a troca de sistema.",
    unidadeId: "u2",
    origem: "Visita de campo - 05/09",
    responsavelId: "p3",
    areaResponsavelId: "a3",
    status: "aberta",
    prioridade: "baixa",
    criadaEm: "2026-09-10T09:00:00Z", // era "2026-09-05T09:00:00Z"
    atualizadaEm: "2026-09-10T09:00:00Z", // era "2026-09-05T09:00:00Z"
    criterioConclusao: "Treinamento realizado com toda a equipe da unidade.",
    historico: [
      {
        id: "h12",
        data: "2026-09-10T09:00:00Z",
        autorId: "p3",
        descricao: "Pendência criada, ainda sem data de treinamento agendada.",
      },
    ],
  },
];
