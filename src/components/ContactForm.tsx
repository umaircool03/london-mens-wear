"use client";

import { useState, type FormEvent } from "react";
import { BUSINESS } from "@/data/store";
import { CheckIcon, WhatsAppIcon } from "./Icons";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Suitings & Custom Tailoring");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
    `Hello London Men's Wear Kanpur,\nName: ${name || "Customer"}\nPhone: ${phone || "N/A"}\nEnquiry: ${interest}\nMessage: ${message || "Please share more details."}`
  )}`;

  if (submitted) {
    return (
      <div className="rounded-sm border border-gold-500/40 bg-navy-900 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
          <CheckIcon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-serif text-2xl font-semibold text-cream-50">
          Thank You, {name}!
        </h3>
        <p className="mt-2 text-sm text-cream-300">
          Your enquiry for{" "}
          <span className="text-gold-400">{interest}</span> is ready. For the
          fastest response from our Railbazar store desk, send it directly via
          WhatsApp or call {BUSINESS.phoneDisplay}.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-emerald-600 px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition hover:bg-emerald-500"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Send via WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setName("");
              setPhone("");
              setMessage("");
            }}
            className="rounded-sm border border-navy-700 px-5 py-2.5 text-xs font-semibold tracking-wider text-cream-100 uppercase transition hover:border-gold-500"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-xs font-semibold tracking-wider text-gold-400 uppercase"
        >
          Your Full Name *
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Mohd Arif"
          className="mt-2 w-full rounded-sm border border-navy-700 bg-navy-950 px-4 py-3 text-sm text-cream-50 placeholder-cream-300/40 focus:border-gold-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="contact-phone"
          className="block text-xs font-semibold tracking-wider text-gold-400 uppercase"
        >
          Phone / WhatsApp Number *
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 98XXXXXXXX"
          className="mt-2 w-full rounded-sm border border-navy-700 bg-navy-950 px-4 py-3 text-sm text-cream-50 placeholder-cream-300/40 focus:border-gold-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="contact-interest"
          className="block text-xs font-semibold tracking-wider text-gold-400 uppercase"
        >
          What Are You Looking For?
        </label>
        <select
          id="contact-interest"
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="mt-2 w-full rounded-sm border border-navy-700 bg-navy-950 px-4 py-3 text-sm text-cream-50 focus:border-gold-500 focus:outline-none"
        >
          <option>Suitings &amp; Custom Tailoring</option>
          <option>Waistcoats &amp; Nehru Jackets</option>
          <option>Formal &amp; Casual Shirts</option>
          <option>Kurta Pajama &amp; Ethnic Wear</option>
          <option>Alteration Services</option>
          <option>Wedding Group / Bulk Enquiry</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold tracking-wider text-gold-400 uppercase"
        >
          Message or Occasion Date
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us your preferred fabric, size, or when you plan to visit our Railbazar store..."
          className="mt-2 w-full rounded-sm border border-navy-700 bg-navy-950 px-4 py-3 text-sm text-cream-50 placeholder-cream-300/40 focus:border-gold-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-gold-500 px-6 py-3.5 text-xs font-semibold tracking-widest text-navy-950 uppercase transition hover:bg-gold-400"
      >
        Submit Enquiry
      </button>
    </form>
  );
}
