"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Globe, Users } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const backgroundImageUrl =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2070&q=80";

export function BlockPage() {
  const [activeTab, setActiveTab] = React.useState("flights");

  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F5]">
      <Navbar />
      <main className="flex-1">
        <section
          className="relative min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center py-20 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="mb-4 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                Discover the World with Rameez
              </h1>
              <p className="text-xl text-white/90 md:text-2xl">
                Your journey to unforgettable experiences starts here
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-4xl"
            >
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="mx-auto"
              >
                <TabsList className="grid w-full grid-cols-4 bg-white/20 backdrop-blur-sm">
                  <TabsTrigger value="flights" className="text-white">
                    Flights
                  </TabsTrigger>
                  <TabsTrigger value="hotels" className="text-white">
                    Hotels
                  </TabsTrigger>
                  <TabsTrigger value="packages" className="text-white">
                    Packages
                  </TabsTrigger>
                  <TabsTrigger value="visa" className="text-white">
                    Visa
                  </TabsTrigger>
                </TabsList>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TabsContent value="flights" className="mt-4">
                      <Card className="border-none bg-white/10 backdrop-blur-md">
                        <CardContent className="p-4">
                          <form className="grid gap-4 md:grid-cols-5">
                            <Input
                              className="rounded-full"
                              placeholder="From"
                            />
                            <Input className="rounded-full" placeholder="To" />
                            <Input
                              className="rounded-full"
                              type="date"
                              placeholder="Departure"
                            />
                            <Input
                              className="rounded-full"
                              type="date"
                              placeholder="Return"
                            />
                            <Button className="rounded-full bg-[#FF4B38] hover:bg-[#FF4B38]/90">
                              Search Flights
                            </Button>
                          </form>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="hotels" className="mt-4">
                      <Card className="border-none bg-white/10 backdrop-blur-md">
                        <CardContent className="p-4">
                          <form className="grid gap-4 md:grid-cols-4">
                            <Input
                              className="rounded-full"
                              placeholder="Destination"
                            />
                            <Input
                              className="rounded-full"
                              type="date"
                              placeholder="Check-in"
                            />
                            <Input
                              className="rounded-full"
                              type="date"
                              placeholder="Check-out"
                            />
                            <Button className="rounded-full bg-[#FF4B38] hover:bg-[#FF4B38]/90">
                              Search Hotels
                            </Button>
                          </form>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="packages" className="mt-4">
                      <Card className="border-none bg-white/10 backdrop-blur-md">
                        <CardContent className="p-4">
                          <form className="grid gap-4 md:grid-cols-4">
                            <Input
                              className="rounded-full"
                              placeholder="Destination"
                            />
                            <Input
                              className="rounded-full"
                              type="date"
                              placeholder="Start Date"
                            />
                            <Input
                              className="rounded-full"
                              placeholder="Duration (days)"
                            />
                            <Button className="rounded-full bg-[#FF4B38] hover:bg-[#FF4B38]/90">
                              Search Packages
                            </Button>
                          </form>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="visa" className="mt-4">
                      <Card className="border-none bg-white/10 backdrop-blur-md">
                        <CardContent className="p-4">
                          <form className="grid gap-4 md:grid-cols-4">
                            <Input
                              className="rounded-full"
                              placeholder="Nationality"
                            />
                            <Input
                              className="rounded-full"
                              placeholder="Destination Country"
                            />
                            <Input
                              className="rounded-full"
                              type="date"
                              placeholder="Travel Date"
                            />
                            <Button className="rounded-full bg-[#FF4B38] hover:bg-[#FF4B38]/90">
                              Check Visa Requirements
                            </Button>
                          </form>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </motion.div>
                </AnimatePresence>
              </Tabs>
            </motion.div>
          </div>
        </section>
        <section className="py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#8B2A7D]">
              Popular Packages
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Dubai Adventure",
                  price: "AED 2,999",
                  duration: "5 Days",
                  image:
                    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Turkey Explorer",
                  price: "USD 1,499",
                  duration: "7 Days",
                  image:
                    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Umrah Package",
                  price: "SAR 4,999",
                  duration: "10 Days",
                  image:
                    "https://images.unsplash.com/photo-1591604129939-f7c5f6145e31?auto=format&fit=crop&w=800&q=80",
                },
              ].map((pkg, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
                  <Card className="group overflow-hidden rounded-xl border-none shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          className="aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
                          height="300"
                          width="400"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <CardTitle className="mb-2 text-2xl font-bold text-white">
                            {pkg.title}
                          </CardTitle>
                          <p className="text-lg font-semibold text-white/90">
                            {pkg.duration}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-[#FF4B38]" />
                          Flexible Dates
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-[#FF4B38]" />
                          Group & Family Tours
                        </div>
                        <div className="flex items-center">
                          <Globe className="mr-2 h-4 w-4 text-[#FF4B38]" />
                          All-Inclusive Package
                        </div>
                      </div>
                      <p className="mt-4 text-2xl font-bold text-[#FF4B38]">
                        {pkg.price}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full rounded-full bg-[#8B2A7D] hover:bg-[#8B2A7D]/90">
                        Book Now
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button className="rounded-full bg-[#FF4B38] px-8 py-3 text-lg font-semibold hover:bg-[#FF4B38]/90">
                View All Packages
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-[#F0F4F8] py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#8B2A7D]">
              Traveler Experiences
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
                  <Card className="overflow-hidden rounded-xl border-none shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardHeader className="p-0">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name}'s travel experience`}
                        className="aspect-video object-cover"
                        height="200"
                        width="400"
                      />
                    </CardHeader>
                    <CardContent className="relative p-6">
                      <div className="absolute -top-8 left-6 h-16 w-16 overflow-hidden rounded-full border-4 border-white bg-white">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="pt-8">
                        <p className="mb-4 text-gray-600">
                          &quot;{testimonial.quote}&quot;
                        </p>
                        <p className="font-semibold text-[#8B2A7D]">
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
      </main>
      <Footer />
    </div>
  );
}
