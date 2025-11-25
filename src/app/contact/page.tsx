import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white">
       <div className="bg-slate-50 py-16 lg:py-24">
        <div className="container-width text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Contactez-moi</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet ou une question ? N'hésitez pas à me solliciter.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container-width px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-primary">Coordonnées</h2>
              <p className="text-slate-600">
                Je suis disponible pour des échanges en présentiel à Paris ou en visio.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-blue-50 p-2 rounded-lg text-primary">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-primary">Email</h3>
                        <a href="mailto:contact@secondr.io" className="text-secondary hover:underline">contact@secondr.io</a>
                    </div>
                </div>
                
                <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-blue-50 p-2 rounded-lg text-primary">
                        <Linkedin size={24} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-primary">LinkedIn</h3>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Connectons-nous</a>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-blue-50 p-2 rounded-lg text-primary">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-primary">Localisation</h3>
                        <p className="text-slate-600">Paris, France</p>
                    </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mt-8">
                  <h3 className="font-bold text-primary mb-2">Note aux Fondateurs & GPs</h3>
                  <p className="text-sm text-slate-600">
                      Pour toute demande de levée de fonds ou de transaction secondaire, merci de joindre un deck ou un teaser si disponible.
                  </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-primary mb-6">Envoyer un message</h2>
                <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


