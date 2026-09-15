"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import type { calcularResumo } from "@/lib/utils";

type Resumo = ReturnType<typeof calcularResumo>;

const cores = {
  abertas: "#9AA1AC",
  emAndamento: "#2B5FD9",
  aguardandoArea: "#6D4FC4",
  concluidas: "#1D7A54",
};

export function StatusDonut({ resumo }: { resumo: Resumo }) {
  const dados = [
    { nome: "Abertas", valor: resumo.abertas, cor: cores.abertas },
    { nome: "Em andamento", valor: resumo.emAndamento, cor: cores.emAndamento },
    {
      nome: "Aguardando área",
      valor: resumo.aguardandoArea,
      cor: cores.aguardandoArea,
    },
    { nome: "Concluídas", valor: resumo.concluidas, cor: cores.concluidas },
  ].filter((d) => d.valor > 0);

  return (
    <div className="relative h-36 w-36 shrink-0">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={dados}
            dataKey="valor"
            nameKey="nome"
            innerRadius={42}
            outerRadius={62}
            paddingAngle={dados.length > 1 ? 3 : 0}
            stroke="none"
          >
            {dados.map((d) => (
              <Cell key={d.nome} fill={d.cor} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-2xl font-medium tabular-nums text-ink">
          {resumo.total}
        </span>
        <span className="text-[10px] text-muted">total</span>
      </div>
    </div>
  );
}
