"use client";

import { Plan, PLAN_TYPES } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatRelativeTime, getBudgetLabel } from "@/lib/utils";
import {
  MapPin,
  Clock,
  Users,
  DollarSign,
  Star,
  ChevronRight,
  Verified,
} from "lucide-react";
import Link from "next/link";

interface PlanCardProps {
  plan: Plan;
}

export function PlanCard({ plan }: PlanCardProps) {
  const planType = PLAN_TYPES[plan.type];
  const spotsLeft = plan.maxParticipants - plan.participants.length - 1; // -1 for host

  return (
    <Card className="overflow-hidden hover:border-pink-500/50 transition-all group">
      {/* Image Header */}
      {plan.imageUrl && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={plan.imageUrl}
            alt={plan.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant="default">
              {planType.emoji} {planType.label}
            </Badge>
            {plan.status === "open" && (
              <Badge variant="success">Abierto</Badge>
            )}
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="text-lg font-bold text-white line-clamp-1">
              {plan.title}
            </h3>
          </div>
        </div>
      )}

      <CardContent className="p-4 space-y-4">
        {/* Host Info */}
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-pink-500">
            <AvatarImage src={plan.host.avatar} alt={plan.host.name} />
            <AvatarFallback>{plan.host.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="font-medium text-white">{plan.host.name}</span>
              {plan.host.verified && (
                <Verified className="h-4 w-4 text-pink-400 fill-pink-400" />
              )}
            </div>
            <div className="flex items-center gap-1 text-xs text-zinc-400">
              <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
              <span>{plan.host.rating}</span>
              <span>•</span>
              <span>{plan.host.eventsHosted} eventos</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 line-clamp-2">{plan.description}</p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2 text-zinc-300">
            <Clock className="h-4 w-4 text-pink-400" />
            <span>{formatRelativeTime(plan.dateTime)}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <MapPin className="h-4 w-4 text-pink-400" />
            <span className="truncate">{plan.location.name}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <Users className="h-4 w-4 text-pink-400" />
            <span>{spotsLeft} lugares disponibles</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <DollarSign className="h-4 w-4 text-pink-400" />
            <span>{getBudgetLabel(plan.budget)}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {plan.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Participants Avatars + Join Button */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {plan.participants.slice(0, 3).map((participant) => (
                <Avatar
                  key={participant.id}
                  className="h-8 w-8 border-2 border-zinc-900"
                >
                  <AvatarImage
                    src={participant.avatar}
                    alt={participant.name}
                  />
                  <AvatarFallback>{participant.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            {plan.participants.length > 0 && (
              <span className="ml-2 text-xs text-zinc-400">
                +{plan.participants.length} confirmados
              </span>
            )}
          </div>
          <Link href={`/plan/${plan.id}`}>
            <Button size="sm" className="gap-1">
              Unirme
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
