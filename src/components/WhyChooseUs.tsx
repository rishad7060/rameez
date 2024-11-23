"use client";

import { motion } from "framer-motion";
import { Award, Globe, HeartHandshake, Plane } from "lucide-react";
import * as React from "react";

const features = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Reach",
    description:
      "Access to a wide network of travel partners and destinations worldwide.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Expert Guidance",
    description:
      "Seasoned travel professionals to assist you at every step of your journey.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8" />,
    title: "Personalized Service",
    description:
      "Tailored travel experiences to meet your unique preferences and needs.",
  },
  {
    icon: <Plane className="h-8 w-8" />,
    title: "Seamless Travel",
    description:
      "Hassle-free bookings and smooth transitions throughout your trip.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24">
      {/* Decorative Elements */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-64 w-64 rounded-full bg-gradient-to-r from-[#FF4B38]/10 to-[#8B2A7D]/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-gradient-to-l from-[#8B2A7D]/10 to-[#FF4B38]/10 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold text-gray-900"
          >
            Why Choose Rameez Travel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-gray-600"
          >
            Experience unparalleled service and unforgettable journeys with our
            expert team and comprehensive travel solutions.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B38]/5 to-[#8B2A7D]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#FF4B38] to-[#8B2A7D] p-3 text-white transition-transform duration-300 group-hover:scale-125">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-[#8B2A7D] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                {/* Animated bottom bar */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#FF4B38] to-[#8B2A7D] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block">
              <button className="w-full rounded-full bg-gradient-to-r from-[#8B2A7D] to-[#FF4B38] text-white transition-all duration-300 hover:from-[#FF4B38] hover:to-[#8B2A7D] px-8 py-3 text-lg font-semibold">
                Learn More About Us
              </button>
             
          </div>
        </motion.div>
      </div>
    </section>
  );
}
