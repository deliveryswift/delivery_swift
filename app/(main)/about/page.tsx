// app/about/page.tsx
import type { Metadata } from 'next'
import { myMetaData } from "@/assets/data";

export const metadata: Metadata = {
  title: 'About | DeliverySwift',
  description: 'Learn about our mission, vision, and commitment to delivering excellence around the world.',
}

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 bg-gradient-to-b from-yellow-50 to-yellow-50/50">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-center text-yellow-500">About Us</h1>
        <p className="lg:text-lg text-neutral-600">
          At <strong>{myMetaData.title}</strong>, we are a premier delivery and logistics company
          proudly serving individuals and businesses around the world. With a focus on reliability,
          speed, and customer satisfaction, we offer nationwide parcel delivery, freight services,
          warehousing, and last-mile logistics.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
        <p className="lg:text-lg text-neutral-600">
          To simplify logistics and empower commerce around the world by providing fast, secure, and
          affordable delivery solutions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
        <p className="lg:text-lg text-neutral-600">
          To become the most trusted logistics partner in the world through innovation,
          technology, and customer-first service.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us</h2>
        <ul className="list-disc list-inside lg:text-lg text-neutral-600 space-y-2">
          <li>Nationwide coverage with real-time tracking</li>
          <li>Secure packaging and timely deliveries</li>
          <li>24/7 customer support and parcel monitoring</li>
          <li>Affordable pricing tailored to your needs</li>
          <li>Experienced and professional delivery team</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-gray-700">
          Have questions? Reach out to our team at{' '}
          <a href={`mailto:${myMetaData.email}`} className="text-neutral-600 hover:underline">
            {myMetaData.email}
          </a>
        </p>
      </section>
    </main>
  )
}
