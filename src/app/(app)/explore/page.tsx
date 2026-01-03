"use client";

import { useState } from "react";
import { PlanCard } from "@/components/features/plan-card";
import { FilterBar } from "@/components/features/filter-bar";
import { mockPlans } from "@/lib/mock-data";
import { MapPin, Flame } from "lucide-react";

export default function ExplorePage() {
  const [plans] = useState(mockPlans);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
          <MapPin className="h-4 w-4" />
          <span>Ciudad de Mexico</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
          <Flame className="h-7 w-7 text-orange-400" />
          Planes para hoy
        </h1>
        <p className="text-zinc-400 mt-1">
          {plans.length} planes disponibles cerca de ti
        </p>
      </div>

      {/* Filters */}
      <FilterBar />

      {/* Plans Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* Empty state */}
      {plans.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">😢</div>
          <h3 className="text-xl font-semibold mb-2">
            No hay planes disponibles
          </h3>
          <p className="text-zinc-400 mb-6">
            Se el primero en crear un plan para esta noche
          </p>
        </div>
      )}
    </div>
  );
}
