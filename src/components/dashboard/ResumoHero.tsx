import type { calcularResumo } from "@/lib/utils";
import { StatusDonut } from "./StatusDonut";

type Resumo = ReturnType<typeof calcularResumo>;

export function ResumoHero({ resumo }: { resumo: Resumo }) {
  return (
    <div className="flex flex-col gap-6 rounded-lg border border-line bg-surface p-6 sm:flex-row sm:items-center">
      <StatusDonut resumo={resumo} />

      <div className="flex-1 sm:border-l sm:border-line sm:pl-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
          <Legenda cor="bg-muted" label="Abertas" valor={resumo.abertas} />
          <Legenda
            cor="bg-progress"
            label="Em andamento"
            valor={resumo.emAndamento}
          />
          <Legenda
            cor="bg-blocked"
            label="Aguardando área"
            valor={resumo.aguardandoArea}
          />
          <Legenda cor="bg-done" label="Concluídas" valor={resumo.concluidas} />
        </div>

        {resumo.atrasadas > 0 && (
          <div className="mt-4 flex items-center gap-2 rounded-md bg-alert-soft px-3 py-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-alert" />
            <p className="text-sm text-alert">
              <span className="font-mono font-medium">{resumo.atrasadas}</span>{" "}
              parada{resumo.atrasadas > 1 ? "s" : ""} há mais de 5 dias sem
              atualização
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Legenda({
  cor,
  label,
  valor,
}: {
  cor: string;
  label: string;
  valor: number;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${cor}`} />
      <div>
        <p className="font-mono text-sm font-medium leading-none tabular-nums text-ink">
          {valor}
        </p>
        <p className="mt-1 text-xs text-muted">{label}</p>
      </div>
    </div>
  );
}
