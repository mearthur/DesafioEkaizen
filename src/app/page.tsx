import { pendencias } from "@/lib/mock-data";
import { calcularResumo, computarPendencias } from "@/lib/utils";
import { ResumoHero } from "@/components/dashboard/ResumoHero";
import { ListaCriticas } from "@/components/dashboard/ListaCriticas";
import { ResumoPorUnidade } from "@/components/dashboard/ResumoPorUnidade";

export default function DashboardPage() {
  const computadas = computarPendencias(pendencias);
  const resumo = calcularResumo(computadas);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold text-ink">Visão geral</h1>
        <p className="text-sm text-muted">
          O que precisa da sua atenção antes da reunião de acompanhamento.
        </p>
      </div>

      <ResumoHero resumo={resumo} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ListaCriticas pendencias={computadas} />
        </div>
        <ResumoPorUnidade pendencias={computadas} />
      </div>
    </div>
  );
}
