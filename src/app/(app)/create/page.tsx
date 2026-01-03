"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PLAN_TYPES, GENDER_OPTIONS, type PlanType, type Gender, type Budget } from "@/types";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  DollarSign,
  Sparkles,
  Check,
} from "lucide-react";
import Link from "next/link";

export default function CreatePlanPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "" as PlanType | "",
    locationName: "",
    locationAddress: "",
    date: "",
    time: "",
    minParticipants: 2,
    maxParticipants: 6,
    budget: 2 as Budget,
    ageMin: 21,
    ageMax: 35,
    genderPreference: "all" as Gender,
    tags: [] as string[],
  });

  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    if (tagInput.trim() && formData.tags.length < 5) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim().toLowerCase()],
      });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Que tipo de plan es?</h2>
              <p className="text-zinc-400">Elige la categoria que mejor describa tu evento</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {(Object.entries(PLAN_TYPES) as [PlanType, { label: string; emoji: string }][]).map(
                ([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setFormData({ ...formData, type: key })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.type === key
                        ? "border-pink-500 bg-pink-500/20"
                        : "border-zinc-700 hover:border-zinc-600"
                    }`}
                  >
                    <div className="text-3xl mb-2">{value.emoji}</div>
                    <div className="font-medium">{value.label}</div>
                  </button>
                )
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Detalles del plan</h2>
              <p className="text-zinc-400">Describe tu plan para atraer a las personas correctas</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Titulo del plan</label>
                <Input
                  placeholder="Ej: Quien para ir al Six esta noche?"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Descripcion</label>
                <textarea
                  className="flex min-h-[120px] w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                  placeholder="Describe el plan, que esperas, que tipo de ambiente, etc."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tags (max 5)</label>
                <div className="flex gap-2 mb-2">
                  <Input
                    placeholder="Ej: reggaeton"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
                  />
                  <Button variant="secondary" onClick={handleAddTag}>
                    Agregar
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="default"
                      className="cursor-pointer"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      #{tag} ×
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Donde y cuando?</h2>
              <p className="text-zinc-400">Define la ubicacion y hora del evento</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <MapPin className="h-4 w-4 inline mr-1" />
                  Nombre del lugar
                </label>
                <Input
                  placeholder="Ej: Club Six, Karaoke Voicebox"
                  value={formData.locationName}
                  onChange={(e) => setFormData({ ...formData, locationName: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Direccion (opcional)</label>
                <Input
                  placeholder="Ej: Av. Insurgentes Sur 1234"
                  value={formData.locationAddress}
                  onChange={(e) => setFormData({ ...formData, locationAddress: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Clock className="h-4 w-4 inline mr-1" />
                    Fecha
                  </label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Hora</label>
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Quien puede unirse?</h2>
              <p className="text-zinc-400">Define tus preferencias para el grupo</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">
                  <Users className="h-4 w-4 inline mr-1" />
                  Tamano del grupo
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="text-xs text-zinc-400">Minimo</label>
                    <Input
                      type="number"
                      min={2}
                      max={20}
                      value={formData.minParticipants}
                      onChange={(e) =>
                        setFormData({ ...formData, minParticipants: parseInt(e.target.value) })
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-zinc-400">Maximo</label>
                    <Input
                      type="number"
                      min={2}
                      max={20}
                      value={formData.maxParticipants}
                      onChange={(e) =>
                        setFormData({ ...formData, maxParticipants: parseInt(e.target.value) })
                      }
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Rango de edad</label>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="text-xs text-zinc-400">Minimo</label>
                    <Input
                      type="number"
                      min={18}
                      max={99}
                      value={formData.ageMin}
                      onChange={(e) => setFormData({ ...formData, ageMin: parseInt(e.target.value) })}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-zinc-400">Maximo</label>
                    <Input
                      type="number"
                      min={18}
                      max={99}
                      value={formData.ageMax}
                      onChange={(e) => setFormData({ ...formData, ageMax: parseInt(e.target.value) })}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Genero</label>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.entries(GENDER_OPTIONS) as [Gender, string][]).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setFormData({ ...formData, genderPreference: key })}
                      className={`p-3 rounded-xl border-2 transition-all text-sm ${
                        formData.genderPreference === key
                          ? "border-pink-500 bg-pink-500/20"
                          : "border-zinc-700 hover:border-zinc-600"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  <DollarSign className="h-4 w-4 inline mr-1" />
                  Presupuesto estimado
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {([1, 2, 3, 4] as Budget[]).map((level) => (
                    <button
                      key={level}
                      onClick={() => setFormData({ ...formData, budget: level })}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        formData.budget === level
                          ? "border-pink-500 bg-pink-500/20"
                          : "border-zinc-700 hover:border-zinc-600"
                      }`}
                    >
                      {"$".repeat(level)}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-zinc-400 mt-2">
                  <span>Economico</span>
                  <span>Premium</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Tu plan esta listo!</h2>
              <p className="text-zinc-400">Revisa los detalles antes de publicar</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {formData.type && PLAN_TYPES[formData.type]?.emoji}
                  {formData.title || "Sin titulo"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-zinc-400">{formData.description || "Sin descripcion"}</p>
                <div className="flex items-center gap-2 text-zinc-300">
                  <MapPin className="h-4 w-4 text-pink-400" />
                  {formData.locationName || "Sin ubicacion"}
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Clock className="h-4 w-4 text-pink-400" />
                  {formData.date} {formData.time}
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Users className="h-4 w-4 text-pink-400" />
                  {formData.minParticipants}-{formData.maxParticipants} personas
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <DollarSign className="h-4 w-4 text-pink-400" />
                  {"$".repeat(formData.budget)}
                </div>
                <div className="flex flex-wrap gap-1">
                  {formData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  const canContinue = () => {
    switch (step) {
      case 1:
        return formData.type !== "";
      case 2:
        return formData.title.length >= 5;
      case 3:
        return formData.locationName && formData.date && formData.time;
      case 4:
        return true;
      case 5:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/explore">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-xl font-bold">Crear nuevo plan</h1>
          <p className="text-sm text-zinc-400">Paso {step} de 5</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-zinc-800 rounded-full mb-8">
        <div
          className="h-full bg-gradient-to-r from-pink-500 to-violet-500 rounded-full transition-all"
          style={{ width: `${(step / 5) * 100}%` }}
        />
      </div>

      {/* Step content */}
      <div className="mb-8">{renderStep()}</div>

      {/* Navigation */}
      <div className="flex gap-4">
        {step > 1 && (
          <Button variant="outline" className="flex-1" onClick={() => setStep(step - 1)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Atras
          </Button>
        )}
        {step < 5 ? (
          <Button
            className="flex-1"
            onClick={() => setStep(step + 1)}
            disabled={!canContinue()}
          >
            Siguiente
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button className="flex-1 gap-2">
            <Sparkles className="h-4 w-4" />
            Publicar plan
          </Button>
        )}
      </div>
    </div>
  );
}
