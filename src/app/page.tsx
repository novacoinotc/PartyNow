import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  PartyPopper,
  Users,
  MapPin,
  Shield,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-violet-500/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/30 rounded-full blur-[128px]" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center shadow-2xl glow-pink">
                <PartyPopper className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Encuentra tu{" "}
                <span className="gradient-text">crew</span>
                <br />
                para esta noche
              </h1>
              <p className="text-xl sm:text-2xl text-zinc-400 max-w-2xl mx-auto">
                Conecta con personas que quieren salir de fiesta{" "}
                <span className="text-pink-400 font-semibold">ahora mismo</span>.
                Sin citas, solo buenos momentos.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/explore">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 gap-2">
                  <Sparkles className="h-5 w-5" />
                  Ver planes de hoy
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8"
                >
                  Iniciar sesion
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-zinc-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2,500+</div>
                <div className="text-sm">Usuarios activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">180+</div>
                <div className="text-sm">Planes esta semana</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.8</div>
                <div className="text-sm flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  Rating promedio
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Como funciona
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Encuentra planes cerca",
                description:
                  "Explora eventos y planes que estan pasando ahora o esta noche en tu zona.",
              },
              {
                icon: Users,
                title: "Unete a un grupo",
                description:
                  "Elige un plan que te guste, manda solicitud y el anfitrion te acepta.",
              },
              {
                icon: PartyPopper,
                title: "Sal y diviertete",
                description:
                  "Conoce gente nueva, haz amigos y disfruta de experiencias increibles.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-pink-500/50 transition-colors group"
              >
                <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="pt-4 space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                    <step.icon className="h-6 w-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-zinc-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Se anfitrion y crea tu propio plan
              </h2>
              <p className="text-lg text-zinc-400">
                Tienes ganas de ir a algun lugar pero no tienes con quien? Crea
                un plan, define tus filtros y deja que las personas correctas
                se unan a ti.
              </p>

              <ul className="space-y-4">
                {[
                  "Define el tipo de evento (antro, bar, karaoke, etc.)",
                  "Establece rango de edad y preferencias",
                  "Controla el tamano del grupo",
                  "Indica el presupuesto estimado",
                  "Acepta o rechaza solicitudes",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-pink-500/20 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-pink-400" />
                    </div>
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/create">
                <Button size="lg" className="gap-2">
                  Crear mi primer plan
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-zinc-900 rounded-3xl border border-zinc-800 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-violet-500" />
                  <div>
                    <div className="font-semibold">Carlos M.</div>
                    <div className="text-sm text-zinc-400">Esta creando un plan...</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-10 bg-zinc-800 rounded-lg" />
                  <div className="h-20 bg-zinc-800 rounded-lg" />
                  <div className="flex gap-2">
                    <div className="h-10 bg-pink-500/30 rounded-lg flex-1" />
                    <div className="h-10 bg-violet-500/30 rounded-lg flex-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="h-16 w-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-8">
            <Shield className="h-8 w-8 text-green-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tu seguridad es prioridad
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
            Implementamos multiples capas de seguridad para que puedas
            disfrutar sin preocupaciones.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Verificacion de identidad", desc: "Selfie + ID" },
              { title: "Sistema de reviews", desc: "Post-evento" },
              { title: "Boton de emergencia", desc: "Ayuda rapida" },
              { title: "Compartir ubicacion", desc: "Con contactos de confianza" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700"
              >
                <div className="font-semibold text-white mb-1">{item.title}</div>
                <div className="text-sm text-zinc-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Listo para tu proxima aventura?
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Unete a miles de personas que ya estan haciendo nuevos amigos y
            viviendo experiencias inolvidables.
          </p>
          <Link href="/register">
            <Button size="lg" className="text-lg px-12 py-6 h-auto gap-2">
              <PartyPopper className="h-5 w-5" />
              Empezar ahora - Es gratis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center">
              <PartyPopper className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold">PartyNow</span>
          </div>
          <div className="text-sm text-zinc-500">
            2025 PartyNow. Hecho con amor en Mexico.
          </div>
        </div>
      </footer>
    </main>
  );
}
