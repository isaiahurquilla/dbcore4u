import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import InstructionsPage from "./pages/InstructionsPage";
import ContactPage from "./pages/ContactPage";


const tabs = [
  { id: "home", label: "Home" },
  { id: "pricing", label: "Pricing" },
  { id: "instructions", label: "Instructions" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Badge className="rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/10">
                  Custom Print Clothing
                </Badge>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Dbcore4u
              </h1>

              <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
                Custom shirts, sweaters, and personal-item printing made simple.
              </p>
            </div>

            <nav className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "secondary"}
                  className={
                    activeTab === tab.id
                      ? "rounded-2xl bg-white text-slate-950 hover:bg-slate-200"
                      : "rounded-2xl bg-white/10 text-white hover:bg-white/20"
                  }
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </Button>
              ))}
            </nav>
          </div>
        </header>

        {activeTab === "home" && <HomePage goToTab={setActiveTab} />}
        {activeTab === "pricing" && <PricingPage />}
        {activeTab === "instructions" && <InstructionsPage />}
        {activeTab === "contact" && <ContactPage />}
      </div>
    </div>
  );
}