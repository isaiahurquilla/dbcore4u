import React from "react";
import { ClipboardList, Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InstructionsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl">Instructions</h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Follow these steps to make ordering easy.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-3xl border-white/10 bg-white/5 text-white shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <ClipboardList className="h-6 w-6" />
              How to Order
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-slate-200">
            <div className="rounded-2xl bg-white/5 p-4">
              You can send your own materials to be printed on.
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              Once you choose a color and size, find an image you want printed.
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              Download the image to your phone or computer.
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              Using the contact page, send your shirt or sweater choice, color,
              size, image, and placement requests.
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-white/10 bg-white/5 text-white shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <ImageIcon className="h-6 w-6" />
              Best Materials for Printing
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3 text-slate-200">
            <div className="rounded-2xl bg-white/5 p-4">
              100% cotton shirts
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              Cotton/poly blend shirts
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              Fleece or sweatshirt material
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              Canvas tote bags
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              Flat fabric items with smooth surfaces
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-3xl border-amber-400/20 bg-amber-400/10 text-white shadow-2xl">
        <CardContent className="p-6 text-sm text-amber-50">
          Tip: sharper, higher-resolution images usually print better.
        </CardContent>
      </Card>
    </section>
  );
}