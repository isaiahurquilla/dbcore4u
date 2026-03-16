import React from "react";
import { Shirt, Printer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { merchandiseItems } from "../data/siteData";

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
              <span className="font-semibold text-white">What is Dbcore4u?</span>{" "}
              This is a clothing business made to help anyone who wants quality
              shirts or sweaters with custom printed designs. The person behind
              Dbcore4u, AJ, started this business in order to share his passion
              for design and fashion with others. With a focus on high-quality
              materials and attention to detail, Dbcore4u offers a range of
              customizable options to suit your style and preferences.
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
              1. Find and download the image you want printed.
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              2. Navigate toward the contact page and fill out the form with your
              email, image name, and any extra requests.
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              3. Send the form and wait for an email back with instructions on
              how to send your image and payment.
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
          Featured Merchandise
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {merchandiseItems.map((item) => (
            <Card
              key={item.title}
              className="overflow-hidden rounded-3xl border-white/10 bg-white/5 text-white shadow-xl"
            >
              <div className="h-64 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}