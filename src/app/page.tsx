"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import { Plane, MapPin, Send, Star, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AboutSection } from "@/components/AboutSection";
import { PopularPackages } from "@/components/PopularPackages";
import WhyChooseUs from "@/components/WhyChooseUs";

const backgroundImageUrl =
  "https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/95702843_2577958582479174_7067347189256683520_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeF_kxkhsrT6n83VJtFqLECkvrm4hCJWYjy-ubiEIlZiPDL-_MnF_gZh6u0YoFlQX0w7EDISKcXhfqLJnk0kdpvu&_nc_ohc=WilnOW3S20kQ7kNvgGoFL-C&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=Ah1ag9AvQD-h6TODtAEg0fL&oh=00_AYAElPVNFTPDQk8C_9jDR79xGYgUNk8dZIaUDUPwoGWhrA&oe=67667EEF";

// Variants for smooth animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F5]">
      <main className="flex-1">
        <section
          className="relative min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative flex min-h-screen flex-col items-center justify-center py-16 px-4 text-center text-white"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8 flex max-w-3xl flex-col items-center"
            >
              <Plane
                size={48}
                className="mb-4 text-[#FF4B38] animate-pulse"
                strokeWidth={1.5}
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-[#FF4B38] to-[#8B2A7D] bg-clip-text text-transparent">
                Travel Beyond Sri Lanka
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl">
                Discover hassle-free packages to Dubai, Bali, Bangkok and
                beyond—where every journey is a story waiting to unfold.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center space-x-4"
            >
              <Button className="group rounded-full bg-gradient-to-r from-[#8B2A7D] to-[#FF4B38] px-6 py-2 sm:px-8 sm:py-3 text-lg font-semibold hover:from-[#FF4B38] hover:to-[#8B2A7D] transition-all duration-300 flex items-center space-x-2">
                <Send className="group-hover:animate-send" size={20} />
                <span>Start Your Journey</span>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <AboutSection />
        <PopularPackages />

        {/* Traveler Experiences */}
        <section className="bg-[#F0F4F8] py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#8B2A7D] mb-4 flex items-center justify-center">
                <Star className="mr-2 text-[#FF4B38]" size={28} />
                Traveler Experiences
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Real stories from adventurers who turned their dream trips into
                unforgettable memories.
              </p>
            </motion.div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah L.",
                  quote:
                    "Rameez Travels made our honeymoon absolutely perfect. Every detail was taken care of!",
                  avatar: "https://i.pravatar.cc/100?img=1",
                  image:
                    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
                },
                {
                  name: "John D.",
                  quote:
                    "I've never had such a seamless travel experience. Highly recommended!",
                  avatar: "https://i.pravatar.cc/100?img=2",
                  image:
                    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
                },
                {
                  name: "Emily R.",
                  quote:
                    "The destinations were breathtaking and the local guides were exceptional.",
                  avatar: "https://i.pravatar.cc/100?img=3",
                  image:
                    "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80",
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="p-0 relative">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name}'s travel experience`}
                        className="aspect-video object-cover filter brightness-75"
                        height={200}
                        width={400}
                      />
                      <div className="absolute top-4 right-4 bg-[#FF4B38]/80 text-white px-3 py-1 rounded-full flex items-center">
                        <CheckCircle size={16} className="mr-2" />
                        Verified Trip
                      </div>
                    </CardHeader>
                    <CardContent className="relative p-6">
                      <div className="absolute -top-8 left-6 h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="pt-8">
                        <p className="mb-4 text-gray-600 italic">
                          {testimonial.quote}
                        </p>
                        <p className="font-semibold text-[#8B2A7D] flex items-center">
                          <MapPin size={16} className="mr-2 text-[#FF4B38]" />
                          {testimonial.name}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
    </div>
  );
}
