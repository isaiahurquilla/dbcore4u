import React from "react";
import { Shirt, Printer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { productExamples } from "../data/siteData";

export default function HomePage({ goToTab }) {
  return (
    <section className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <Card className="rounded-3xl border-white/10 bg-white/5 text-white shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl sm:text-3xl">
              <Shirt className="h-7 w-7" />
              Welcome to Dbcore4u
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-slate-200">
            <p>
              <span className="font-semibold text-white">Who is AJ?</span> AJ is
              the person behind Dbcore4u — helping customers create custom
              printed shirts, sweaters, and one-of-a-kind pieces.
            </p>

            <p>
              Whether you want a simple logo print, a bold graphic, or custom
              placement, AJ helps bring your design idea to life.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                className="rounded-2xl bg-white text-slate-950 hover:bg-slate-200"
                onClick={() => goToTab("pricing")}
              >
                View Pricing
              </Button>

              <Button
                className="rounded-2xl bg-white/10 text-white hover:bg-white/20"
                onClick={() => goToTab("instructions")}
              >
                Read Instructions
              </Button>

              <Button
                className="rounded-2xl bg-white/10 text-white hover:bg-white/20"
                onClick={() => goToTab("contact")}
              >
                Contact AJ
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-white/10 bg-white/5 text-white shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Printer className="h-6 w-6" />
              Quick Process
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3 text-sm text-slate-200">
            <div className="rounded-2xl bg-white/5 p-4">
              1. Choose a shirt, sweater, or personal item.
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              2. Pick your color and size.
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              3. Find and download the image you want printed.
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              4. Send the details and image through the contact page.
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Example Shirts & Sweaters
          </h2>
          <Badge className="rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/10">
            4 Samples
          </Badge>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {productExamples.map((product) => (
            <Card
              key={product.name}
              className="overflow-hidden rounded-3xl border-white/10 bg-white/5 text-white shadow-xl"
            >
              <div className={`h-48 bg-gradient-to-br ${product.style} p-4`}>
                <div className="flex h-full items-end rounded-2xl border border-white/20 bg-black/15 p-4 backdrop-blur-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                      Sample Design
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>

              <CardContent className="p-5 text-sm text-slate-300">
                {product.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}