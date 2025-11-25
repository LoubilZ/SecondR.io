import { Handshake, TrendingUp, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 lg:py-24">
        <div className="container-width text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Mes Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions sur-mesure pour les acteurs du Private Equity et Venture Capital.
          </p>
        </div>
      </div>

      {/* Service 1: Secondaries */}
      <section id="secondaries" className="py-20">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-xl text-primary mb-6">
                <Handshake size={32} />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Secondary Transactions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                La liquidité est un enjeu majeur dans le VC actuel. J'accompagne les LPs et GPs dans la cession ou l'acquisition de positions secondaires.
              </p>
              <ul className="space-y-3 mb-8">
                {['LP Interests : Vente de parts de fonds', 'Direct Secondaries : Vente de participations directes', 'GP-led transactions : Restructuration de fonds', 'Valorisation et pricing'].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="mr-3 mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-slate-100 rounded-2xl h-80 md:h-96 flex items-center justify-center text-slate-300">
              {/* Placeholder for image */}
              <div className="text-center">
                <Handshake size={64} className="mx-auto mb-4 opacity-50" />
                <span className="text-sm font-medium">Illustration Secondaries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Fundraising */}
      <section id="fundraising" className="py-20 bg-slate-50">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="bg-white rounded-2xl h-80 md:h-96 flex items-center justify-center text-slate-300 border border-slate-100 shadow-sm">
              {/* Placeholder for image */}
              <div className="text-center">
                <TrendingUp size={64} className="mx-auto mb-4 opacity-50" />
                <span className="text-sm font-medium">Illustration Fundraising</span>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-amber-50 rounded-xl text-secondary mb-6">
                <TrendingUp size={32} />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Fundraising Advisory</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Lever des fonds est un processus complexe et chronophage. Je structure votre levée et vous connecte aux bons investisseurs.
              </p>
              <ul className="space-y-3 mb-8">
                {['Revue de deck et stratégie equity story', 'Identification de cibles (LPs, Family Offices)', 'Introduction et roadshow management', 'Négociation des termes'].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="mr-3 mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Deal Sourcing / Advisory */}
      <section id="advisory" className="py-20">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-xl text-primary mb-6">
                <Search size={32} />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Deal Sourcing & Advisory</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Accès privilégié à des opportunités d'investissement et conseil stratégique pour vos allocations.
              </p>
              <ul className="space-y-3 mb-8">
                {['Sourcing de deals off-market', 'Due Diligence commerciale', 'Market mapping & analyse sectorielle', 'Représentation'].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="mr-3 mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 bg-slate-100 rounded-2xl h-80 md:h-96 flex items-center justify-center text-slate-300">
              {/* Placeholder for image */}
              <div className="text-center">
                <Search size={64} className="mx-auto mb-4 opacity-50" />
                <span className="text-sm font-medium">Illustration Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container-width">
          <h2 className="text-3xl font-bold mb-6">Prêt à avancer ?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et de la manière dont je peux vous accompagner.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link href="/contact">
              Prendre rendez-vous <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}


