// components/Testimonials.tsx
import React from "react";
import { testimonials } from "@/assets/data";


export default function Testimonial() {
  return (
    <section className=" py-12 bg-gradient-to-b from-yellow-50 via-gray-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800">Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gradient-to-br from-yellow-50 to-gray-50 shadow-md rounded-2xl p-6 border border-gray-100">
              <p className="text-gray-700 italic mb-4">&quot;{t.text}&quot;</p>
              <div className="text-sm font-semibold text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-500">{t.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
