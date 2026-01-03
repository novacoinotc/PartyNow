import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("es-MX", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffMins = Math.round(diffMs / 60000);

  if (diffMins < 0) return "Ya pasó";
  if (diffMins < 60) return `En ${diffMins} min`;
  if (diffMins < 1440) return `En ${Math.round(diffMins / 60)}h`;
  return formatDate(date);
}

export function getBudgetLabel(budget: number): string {
  return "$".repeat(budget);
}
