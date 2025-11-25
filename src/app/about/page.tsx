import { GraduationCap, Briefcase, Award, Handshake, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="bg-white">
       {/* Header */}
       <div className="bg-primary py-20 lg:py-28 text-white">
        <div className="container-width text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">À Propos</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Un parcours international dédié à la finance d'entreprise et au capital-investissement.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container-width px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3">
               <div className="aspect-[3/4] bg-slate-200 rounded-2xl w-full object-cover relative overflow-hidden shadow-lg">
                 {/* Placeholder for Profile Picture */}
                 <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                    <span className="text-lg font-medium">Photo de Profil</span>
                 </div>
               </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h2 className="text-3xl font-bold text-primary">Mon Parcours</h2>
              <p className="text-slate-600 leading-relaxed">
                Passionné par l'écosystème Tech et l'investissement, j'ai construit mon expertise au travers d'expériences variées en banque d'affaires et en fonds d'investissement à travers l'Europe et les États-Unis.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Mon expérience chez <strong>Stifel Europe</strong> et <strong>Allyum</strong> m'a permis de développer une rigueur d'analyse financière et une compréhension fine des enjeux de transactions M&A et de levées de fonds.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Aujourd'hui, je mets ce savoir-faire au service des fonds de Venture Capital, des fondateurs et des investisseurs pour faciliter la liquidité et l'accès au capital dans un marché en constante évolution.
              </p>

              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                    <div className="mt-1">
                        <Briefcase className="text-secondary" size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-primary">Expérience</h4>
                        <p className="text-sm text-slate-500">Stifel Europe, Allyum</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="mt-1">
                        <GraduationCap className="text-secondary" size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-primary">Formation</h4>
                        <p className="text-sm text-slate-500">GETT (EDHEC / UC Berkeley Haas / SKK GSB)</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-width px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-12">Ma Vision</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                    <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                        <Award size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Excellence</h3>
                    <p className="text-slate-600 text-sm">
                        Une approche rigoureuse et professionnelle inspirée des meilleures banques d'affaires.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                     <div className="h-12 w-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                        <Handshake size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Confiance</h3>
                    <p className="text-slate-600 text-sm">
                        Des relations durables basées sur la transparence et l'intégrité.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                     <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                        <TrendingUp size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Impact</h3>
                    <p className="text-slate-600 text-sm">
                        Créer de la valeur tangible pour mes clients à chaque étape.
                    </p>
                </div>
            </div>
        </div>
      </section>

       <section className="py-20 text-center">
        <div className="container-width">
             <Button asChild size="lg">
                <Link href="/contact">Me Contacter</Link>
            </Button>
        </div>
       </section>
    </div>
  );
}


