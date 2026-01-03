"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockPlans } from "@/lib/mock-data";
import { PLAN_TYPES } from "@/types";
import { formatDate, getBudgetLabel } from "@/lib/utils";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Users,
  DollarSign,
  Star,
  Share2,
  Heart,
  MessageCircle,
  Verified,
  Calendar,
  Navigation,
} from "lucide-react";

export default function PlanDetailPage() {
  const { id } = useParams();
  const plan = mockPlans.find((p) => p.id === id);

  if (!plan) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">404</div>
        <h1 className="text-2xl font-bold mb-2">Plan no encontrado</h1>
        <p className="text-zinc-400 mb-6">
          Este plan ya no existe o fue cancelado
        </p>
        <Link href="/explore">
          <Button>Volver a explorar</Button>
        </Link>
      </div>
    );
  }

  const planType = PLAN_TYPES[plan.type];
  const spotsLeft = plan.maxParticipants - plan.participants.length - 1;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80">
        {plan.imageUrl && (
          <img
            src={plan.imageUrl}
            alt={plan.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
          <Link href="/explore">
            <Button variant="secondary" size="icon" className="rounded-full bg-black/50 backdrop-blur">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button variant="secondary" size="icon" className="rounded-full bg-black/50 backdrop-blur">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full bg-black/50 backdrop-blur">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex gap-2 mb-2">
            <Badge variant="default">
              {planType.emoji} {planType.label}
            </Badge>
            <Badge variant="success">Abierto</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">{plan.title}</h1>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Host Card */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-14 w-14 border-2 border-pink-500">
                <AvatarImage src={plan.host.avatar} alt={plan.host.name} />
                <AvatarFallback>{plan.host.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-lg">{plan.host.name}</span>
                  {plan.host.verified && (
                    <Verified className="h-5 w-5 text-pink-400 fill-pink-400" />
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    {plan.host.rating}
                  </span>
                  <span>{plan.host.eventsHosted} eventos</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Ver perfil
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        <div>
          <h2 className="font-semibold mb-2">Sobre este plan</h2>
          <p className="text-zinc-300 leading-relaxed">{plan.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {plan.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-pink-400" />
              </div>
              <div>
                <div className="text-xs text-zinc-400">Fecha y hora</div>
                <div className="font-medium">{formatDate(plan.dateTime)}</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-pink-400" />
              </div>
              <div>
                <div className="text-xs text-zinc-400">Grupo</div>
                <div className="font-medium">{plan.minParticipants}-{plan.maxParticipants} personas</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-pink-400" />
              </div>
              <div>
                <div className="text-xs text-zinc-400">Presupuesto</div>
                <div className="font-medium">{getBudgetLabel(plan.budget)}</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-pink-400" />
              </div>
              <div>
                <div className="text-xs text-zinc-400">Edades</div>
                <div className="font-medium">{plan.ageRange.min}-{plan.ageRange.max} años</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-pink-500/20 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-pink-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">{plan.location.name}</div>
                <div className="text-sm text-zinc-400">{plan.location.address}</div>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Navigation className="h-4 w-4" />
                Ir
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Participants */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">
              Participantes ({plan.participants.length + 1}/{plan.maxParticipants})
            </h2>
            <Badge variant={spotsLeft > 2 ? "success" : "warning"}>
              {spotsLeft} lugares
            </Badge>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* Host */}
            <div className="flex flex-col items-center gap-1">
              <Avatar className="h-12 w-12 border-2 border-pink-500">
                <AvatarImage src={plan.host.avatar} alt={plan.host.name} />
                <AvatarFallback>{plan.host.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-zinc-400">Anfitrion</span>
            </div>

            {/* Participants */}
            {plan.participants.map((participant) => (
              <div key={participant.id} className="flex flex-col items-center gap-1">
                <Avatar className="h-12 w-12 border-2 border-zinc-700">
                  <AvatarImage src={participant.avatar} alt={participant.name} />
                  <AvatarFallback>{participant.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-xs text-zinc-400">{participant.name.split(" ")[0]}</span>
              </div>
            ))}

            {/* Empty slots */}
            {Array.from({ length: spotsLeft }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="h-12 w-12 rounded-full border-2 border-dashed border-zinc-700 flex items-center justify-center">
                  <Users className="h-5 w-5 text-zinc-600" />
                </div>
                <span className="text-xs text-zinc-600">Disponible</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="fixed bottom-20 md:bottom-8 left-0 right-0 p-4 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent">
          <div className="max-w-2xl mx-auto flex gap-3">
            <Button variant="outline" size="lg" className="gap-2">
              <MessageCircle className="h-5 w-5" />
              Preguntar
            </Button>
            <Button size="lg" className="flex-1 gap-2">
              Unirme al plan
            </Button>
          </div>
        </div>

        {/* Spacer for fixed button */}
        <div className="h-24" />
      </div>
    </div>
  );
}
