import { pendencias } from "@/lib/mock-data";
import { computarPendencias } from "@/lib/utils";
import { KanbanColuna } from "@/components/board/KanbanColuna";
import type { StatusPendencia } from "@/lib/types";

const colunas: { status: StatusPendencia; titulo: string }[] = [
  { status: "aberta", titulo: "Aberta" },
  { status: "em_andamento", titulo: "Em andamento" },
  { status: "aguardando_area", titulo: "Aguardando área" },
  { status: "concluida", titulo: "Concluída" },
];

export default function BoardPage() {
  const computadas = computarPendencias(pendencias);

  return (
    <div className="flex h-full flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold text-ink">Board</h1>
        <p className="text-sm text-muted">
          Organizado por status. O que está em roxo depende de outra área.
        </p>
      </div>

      <div className="flex flex-1 divide-x divide-line overflow-x-auto pb-4">
        {colunas.map((c) => (
          <KanbanColuna
            key={c.status}
            titulo={c.titulo}
            pendencias={computadas.filter((p) => p.status === c.status)}
          />
        ))}
      </div>
    </div>
  );
}
