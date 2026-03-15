import React from "react";
import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { shirtColors, sweaterColors } from "../data/siteData";

export default function PricingPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl">Pricing</h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Simple pricing for custom printed shirts and sweaters.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-3xl border-white/10 bg-white/5 text-white shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CircleDollarSign className="h-6 w-6" />
              Shirts
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-slate-200">
            <div className="rounded-2xl bg-white/5 p-4 flex items-center justify-between">
              <span className="font-medium text-white">
                Standard T-Shirt (XS–XL)
              </span>
              <span>$25</span>
            </div>

            <div className="rounded-2xl bg-white/5 p-4 flex items-center justify-between">
              <span className="font-medium text-white">
                Standard T-Shirt (2XL–3XL)
              </span>
              <span>$28</span>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <p className="font-medium text-white">Available Colors</p>
              <p className="mt-2 text-sm">{shirtColors.join(", ")}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-white/10 bg-white/5 text-white shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CircleDollarSign className="h-6 w-6" />
              Sweaters
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-slate-200">
            <div className="rounded-2xl bg-white/5 p-4 flex items-center justify-between">
              <span className="font-medium text-white">
                Standard Sweater (XS–XL)
              </span>
              <span>$40</span>
            </div>

            <div className="rounded-2xl bg-white/5 p-4 flex items-center justify-between">
              <span className="font-medium text-white">
                Standard Sweater (2XL–3XL)
              </span>
              <span>$45</span>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <p className="font-medium text-white">Available Colors</p>
              <p className="mt-2 text-sm">{sweaterColors.join(", ")}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-3xl border-white/10 bg-white/5 text-white shadow-2xl">
        <CardContent className="p-6 text-sm text-slate-300">
          Personal items can also be printed on. Pricing depends on the
          material, print size, and placement.
        </CardContent>
      </Card>
    </section>
  );
}