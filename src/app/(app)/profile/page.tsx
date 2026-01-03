"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockUsers, mockPlans } from "@/lib/mock-data";
import {
  Settings,
  Edit2,
  Star,
  Calendar,
  Users,
  Shield,
  ChevronRight,
  LogOut,
  Bell,
  HelpCircle,
  Verified,
} from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const user = mockUsers[0]; // Mock current user
  const userPlans = mockPlans.filter((p) => p.host.id === user.id);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Mi Perfil</h1>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      {/* Profile Card */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="relative">
              <Avatar className="h-20 w-20 border-4 border-pink-500">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
              </Avatar>
              {user.verified && (
                <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-pink-500 flex items-center justify-center border-2 border-zinc-900">
                  <Verified className="h-4 w-4 text-white fill-white" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <span className="text-zinc-400">{user.age} años</span>
              </div>
              <p className="text-zinc-400 mt-1">{user.bio}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {user.interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Edit2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-zinc-800">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                {user.rating}
              </div>
              <div className="text-xs text-zinc-400">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{user.eventsHosted}</div>
              <div className="text-xs text-zinc-400">Eventos creados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{user.eventsAttended}</div>
              <div className="text-xs text-zinc-400">Asistencias</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Verification Status */}
      <Card className="mb-6 border-green-500/30 bg-green-500/5">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <Shield className="h-5 w-5 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-green-400">Perfil verificado</div>
              <div className="text-sm text-zinc-400">Tu identidad ha sido verificada</div>
            </div>
            <Verified className="h-6 w-6 text-green-400 fill-green-400" />
          </div>
        </CardContent>
      </Card>

      {/* My Plans */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Calendar className="h-5 w-5 text-pink-400" />
            Mis planes
          </h3>
          <Link href="/create">
            <Button size="sm">Crear nuevo</Button>
          </Link>
        </div>

        {userPlans.length > 0 ? (
          <div className="space-y-3">
            {userPlans.map((plan) => (
              <Card key={plan.id} className="hover:border-pink-500/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center text-2xl">
                      {plan.type && (
                        <>
                          {plan.type === "club" && "🪩"}
                          {plan.type === "bar" && "🍺"}
                          {plan.type === "karaoke" && "🎤"}
                          {plan.type === "house-party" && "🏠"}
                        </>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{plan.title}</div>
                      <div className="text-sm text-zinc-400">
                        {plan.participants.length + 1}/{plan.maxParticipants} confirmados
                      </div>
                    </div>
                    <Badge variant={plan.status === "open" ? "success" : "secondary"}>
                      {plan.status === "open" ? "Abierto" : plan.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-3">🎉</div>
              <p className="text-zinc-400">Aun no has creado ningun plan</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Menu Options */}
      <div className="space-y-2">
        {[
          { icon: Bell, label: "Notificaciones", href: "/settings/notifications" },
          { icon: Shield, label: "Privacidad y seguridad", href: "/settings/privacy" },
          { icon: HelpCircle, label: "Ayuda y soporte", href: "/help" },
        ].map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            <item.icon className="h-5 w-5 text-zinc-400" />
            <span className="flex-1 text-left">{item.label}</span>
            <ChevronRight className="h-5 w-5 text-zinc-600" />
          </button>
        ))}

        <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-zinc-900 hover:bg-red-500/10 transition-colors text-red-400">
          <LogOut className="h-5 w-5" />
          <span className="flex-1 text-left">Cerrar sesion</span>
        </button>
      </div>
    </div>
  );
}
