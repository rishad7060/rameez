"use client"

import { motion, useAnimation } from "framer-motion"
import { Calendar, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const packages = [
  {
    id: 1,
    title: "January Umrah",
    duration: "10 Days",
    location: "From BIA",
    hotelRating: 5,
    dateRange: "Jan 20 - Feb 01",
    price: "LKR 320,000.00",
    image: "https://images.unsplash.com/photo-1513072064285-240f87fa81e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Dubai New Year Trip 2024",
    duration: "3 Days",
    location: "From BIA",
    hotelRating: 5,
    dateRange: "Dec 27 - Jan 01",
    price: "LKR 120,000.00",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Bali - A Tropical Paradise",
    duration: "7 Days",
    location: "From BIA",
    hotelRating: 4,
    dateRange: "Dec 23 - Jan 01",
    price: "LKR 89,999.00",
    image: "https://images.unsplash.com/photo-1532186651327-6ac23687d189?auto=format&fit=crop&w=800&q=80",
  },
]

export function PopularPackages() {
  const controls = useAnimation()

  React.useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }))
  }, [controls])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24">
      {/* Background Decorations */}
      <div className="absolute left-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-gradient-to-r from-[#FF4B38]/20 to-transparent blur-3xl" />
      <div className="absolute right-0 top-3/4 -z-10 h-72 w-72 rounded-full bg-gradient-to-l from-[#8B2A7D]/20 to-transparent blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-16 text-center">
            <p className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#FF4B38] to-[#8B2A7D] px-4 py-1.5 text-sm font-medium text-white">
              PACKAGES
            </p>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Popular All Inclusive Packages
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Experience the journey of a lifetime with our carefully curated
              packages, designed to provide you with the most memorable and
              spiritually enriching travel experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                custom={index}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="group relative overflow-hidden rounded-2xl border-none bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                  {/* Image Section */}
                  <div className="relative h-[200px] w-full overflow-hidden rounded-t-2xl">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {pkg.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4 text-[#FF4B38]" />
                        <span>{pkg.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Star className="h-4 w-4 text-[#FF4B38]" />
                        <span>{pkg.hotelRating} Star Hotel</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4 text-[#FF4B38]" />
                        <span>{pkg.dateRange}</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="text-sm text-gray-600">Price per person</div>
                      <div className="text-2xl font-bold text-[#FF4B38]">
                        {pkg.price}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      asChild
                      className="w-full rounded-full bg-gradient-to-r from-[#8B2A7D] to-[#FF4B38] text-white transition-all duration-300 hover:from-[#FF4B38] hover:to-[#8B2A7D]"
                    >
                      <Link href="#">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
