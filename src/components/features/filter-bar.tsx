"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PLAN_TYPES, type PlanType } from "@/types";
import { SlidersHorizontal, X } from "lucide-react";

interface FilterBarProps {
  onFilterChange?: (filters: FilterState) => void;
}

interface FilterState {
  type: PlanType | null;
  tonight: boolean;
  nearby: boolean;
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterState>({
    type: null,
    tonight: false,
    nearby: false,
  });
  const [showFilters, setShowFilters] = useState(false);

  const handleTypeFilter = (type: PlanType) => {
    const newFilters = {
      ...filters,
      type: filters.type === type ? null : type,
    };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const toggleFilter = (key: "tonight" | "nearby") => {
    const newFilters = { ...filters, [key]: !filters[key] };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const activeFiltersCount = [
    filters.type,
    filters.tonight,
    filters.nearby,
  ].filter(Boolean).length;

  return (
    <div className="space-y-3">
      {/* Quick Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <Button
          variant={showFilters ? "default" : "outline"}
          size="sm"
          className="shrink-0 gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filtros
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 justify-center">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>

        <Button
          variant={filters.tonight ? "default" : "outline"}
          size="sm"
          className="shrink-0"
          onClick={() => toggleFilter("tonight")}
        >
          Esta noche
        </Button>

        <Button
          variant={filters.nearby ? "default" : "outline"}
          size="sm"
          className="shrink-0"
          onClick={() => toggleFilter("nearby")}
        >
          Cerca de mí
        </Button>

        {filters.type && (
          <Badge
            variant="default"
            className="shrink-0 gap-1 cursor-pointer hover:bg-pink-600"
            onClick={() => handleTypeFilter(filters.type!)}
          >
            {PLAN_TYPES[filters.type].emoji} {PLAN_TYPES[filters.type].label}
            <X className="h-3 w-3" />
          </Badge>
        )}
      </div>

      {/* Expanded Filters */}
      {showFilters && (
        <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 space-y-4">
          <div>
            <h4 className="text-sm font-medium text-zinc-300 mb-2">
              Tipo de plan
            </h4>
            <div className="flex flex-wrap gap-2">
              {(Object.entries(PLAN_TYPES) as [PlanType, { label: string; emoji: string }][]).map(
                ([key, value]) => (
                  <Button
                    key={key}
                    variant={filters.type === key ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleTypeFilter(key)}
                  >
                    {value.emoji} {value.label}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
