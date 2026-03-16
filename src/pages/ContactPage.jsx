import React, { useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { shirtColors, sweaterColors, sizes } from "../data/siteData";

const ORDER_EMAIL = "isaiahurquilla@gmail.com";

export default function ContactPage() {
  const formRef = useRef(null);

  const [itemType, setItemType] = useState("Shirt");
  const [color, setColor] = useState("Black");
  const [size, setSize] = useState("M");
  const [requests, setRequests] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [imageName, setImageName] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const colorOptions = useMemo(() => {
    if (itemType === "Sweater") return sweaterColors;
    if (itemType === "Personal Item") return ["Custom / Your Item Color"];
    return shirtColors;
  }, [itemType]);

  const handleItemTypeChange = (value) => {
    setItemType(value);

    if (value === "Sweater") setColor(sweaterColors[0]);
    else if (value === "Personal Item") setColor("Custom / Your Item Color");
    else setColor(shirtColors[0]);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus(
        "Order details sent. Check your email for the reply asking you to send your image."
      );

      setItemType("Shirt");
      setColor("Black");
      setSize("M");
      setRequests("");
      setCustomerEmail("");
      setImageName("");

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus(
        error?.text ||
          error?.message ||
          "Something went wrong while sending."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl">Contact Page</h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Send your order details here. After submitting, you’ll get a reply
          email asking you to send your image to {ORDER_EMAIL}.
        </p>
      </div>

      <Card className="rounded-3xl border-white/10 bg-white/5 text-white shadow-2xl">
        <CardContent className="p-6 sm:p-8">
          <form ref={formRef} onSubmit={handleSend}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="itemType">Choose item</Label>
                <select
                  id="itemType"
                  name="item_type"
                  value={itemType}
                  onChange={(e) => handleItemTypeChange(e.target.value)}
                  className="flex h-10 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none"
                >
                  <option>Shirt</option>
                  <option>Sweater</option>
                  <option>Personal Item</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="color">Choose color</Label>
                <select
                  id="color"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="flex h-10 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none"
                >
                  {colorOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="size">Choose size</Label>
                <select
                  id="size"
                  name="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="flex h-10 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none"
                >
                  {sizes.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerEmail">Your email</Label>
                <Input
                  id="customerEmail"
                  name="customer_email"
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="rounded-xl border-white/10 bg-slate-950 text-white"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="imageName">Image file name</Label>
                <Input
                  id="imageName"
                  name="image_name"
                  type="text"
                  value={imageName}
                  onChange={(e) => setImageName(e.target.value)}
                  placeholder="Example: mydesign.png"
                  className="rounded-xl border-white/10 bg-slate-950 text-white"
                />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="requests">Extra requests</Label>
              <Textarea
                id="requests"
                name="requests"
                placeholder="Example: Put image on the back, small logo on left chest, sleeve print, etc."
                value={requests}
                onChange={(e) => setRequests(e.target.value)}
                className="min-h-[140px] rounded-2xl border-white/10 bg-slate-950 text-white placeholder:text-slate-500"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="rounded-2xl bg-white/5 p-4 text-sm text-slate-300">
                After submitting, we’ll email you back asking for your image.
              </div>

              <Button
                type="submit"
                disabled={isSending}
                className="rounded-2xl bg-white px-6 text-slate-950 hover:bg-slate-200 disabled:opacity-60"
              >
                <Mail className="mr-2 h-4 w-4" />
                {isSending ? "Sending..." : "Send"}
              </Button>
            </div>

            {status && <p className="mt-4 text-sm text-slate-200">{status}</p>}
          </form>
        </CardContent>
      </Card>
    </section>  
  );
}