import React, { useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { shirtColors, sweaterColors, sizes } from "../data/siteData";

export default function ContactPage() {
  const formRef = useRef(null);

  const [itemType, setItemType] = useState("Shirt");
  const [color, setColor] = useState("Black");
  const [size, setSize] = useState("M");
  const [requests, setRequests] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
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

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setUploadedFileName(file ? file.name : "");
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

      setStatus("Order sent successfully.");
      setItemType("Shirt");
      setColor("Black");
      setSize("M");
      setRequests("");
      setUploadedFileName("");

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong while sending. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl">Contact Page</h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Fill out the order details below and send your design as a real file
          attachment.
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
                <Label htmlFor="imageUpload">Upload image file</Label>
                <Input
                  id="imageUpload"
                  name="design_file"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="rounded-xl border-white/10 bg-slate-950 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-white file:px-3 file:py-2 file:text-slate-950"
                  required
                />
                <p className="text-xs text-slate-400">
                  Selected file: {uploadedFileName || "No file chosen yet"}
                </p>
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
                Your order details and uploaded image will be sent together.
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

            {status && (
              <p className="mt-4 text-sm text-slate-200">{status}</p>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  );
}