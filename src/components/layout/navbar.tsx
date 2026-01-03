"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  PartyPopper,
  Search,
  Bell,
  Plus,
  Home,
  User,
  Menu,
} from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isLoggedIn] = useState(true); // Mock state

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center">
              <PartyPopper className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent hidden sm:block">
              PartyNow
            </span>
          </Link>

          {/* Desktop Navigation */}
          {isLoggedIn ? (
            <div className="hidden md:flex items-center gap-2">
              <Link href="/explore">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Search className="h-4 w-4" />
                  Explorar
                </Button>
              </Link>
              <Link href="/create">
                <Button size="sm" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Crear Plan
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-pink-500 rounded-full" />
              </Button>
              <Link href="/profile">
                <Avatar className="h-9 w-9 border-2 border-pink-500/50 hover:border-pink-500 transition-colors cursor-pointer">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Iniciar sesión
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Registrarse</Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800 md:hidden">
      <div className="flex items-center justify-around h-16 px-4">
        <Link
          href="/explore"
          className="flex flex-col items-center gap-1 text-zinc-400 hover:text-pink-400 transition-colors"
        >
          <Home className="h-5 w-5" />
          <span className="text-xs">Inicio</span>
        </Link>
        <Link
          href="/explore"
          className="flex flex-col items-center gap-1 text-zinc-400 hover:text-pink-400 transition-colors"
        >
          <Search className="h-5 w-5" />
          <span className="text-xs">Explorar</span>
        </Link>
        <Link href="/create">
          <div className="h-12 w-12 -mt-6 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
            <Plus className="h-6 w-6 text-white" />
          </div>
        </Link>
        <Link
          href="/notifications"
          className="flex flex-col items-center gap-1 text-zinc-400 hover:text-pink-400 transition-colors relative"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 right-0 h-2 w-2 bg-pink-500 rounded-full" />
          <span className="text-xs">Alertas</span>
        </Link>
        <Link
          href="/profile"
          className="flex flex-col items-center gap-1 text-zinc-400 hover:text-pink-400 transition-colors"
        >
          <User className="h-5 w-5" />
          <span className="text-xs">Perfil</span>
        </Link>
      </div>
    </nav>
  );
}
