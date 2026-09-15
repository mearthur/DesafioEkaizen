# Pendências de Campo

Desafio técnico frontend: uma experiência para acompanhar pendências geradas
por visitas de campo em uma empresa com várias unidades, dando ao gestor
visão do conjunto e a quem executa clareza de prioridade e contexto.

## Como rodar

```bash
pnpm install
pnpm run dev
```

Acesse `http://localhost:3000`.

## Telas

- **`/`** — Dashboard: visão geral com distribuição por status e os pontos
  que merecem atenção antes da reunião de acompanhamento (pendências paradas
  há muito tempo ou dependendo de outra área).
- **`/board`** — Kanban por status, com destaque visual (roxo) para o que
  está bloqueado esperando outra área.
- **`/pendencias/[id]`** — Detalhe da pendência: contexto completo, critério
  de conclusão e histórico.

## Decisões de recorte

- **Dados fictícios** em `src/lib/mock-data.ts`, como pedido no enunciado —
  sem backend/banco de dados.
- **`aguardandoAreaId` e `motivoEspera`** no modelo de dados: resolve
  diretamente a dor de "pendências que ficam paradas sem que ninguém
  perceba" descrita no case.
- **`criterioConclusao`**: cada pendência define explicitamente o que
  significa encerrá-la, resolvendo a ambiguidade citada no enunciado.
- **`diasParada` e `estaAtrasada`** são calculados em `src/lib/utils.ts` a
  partir de uma data de referência fixa (só para a demo ficar consistente),
  não vêm hardcoded no mock.

## Stack

Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Recharts (gráfico do
dashboard).
