"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Target, Compass, BadgeCheck, Trophy } from "lucide-react";

export function AboutSection() {
  // Animation Variants
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

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F4F8FF] via-white to-[#F4F8FF] py-16 sm:py-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-gradient-to-r from-[#FF4B38]/20 to-[#8B2A7D]/20 blur-3xl animate-pulse hidden sm:block" />
        <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-gradient-to-l from-[#FF4B38]/20 to-[#8B2A7D]/20 blur-3xl animate-pulse hidden sm:block" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.span
                variants={itemVariants}
                className="inline-flex items-center rounded-full bg-[#FF4B38]/10 px-4 py-1.5 text-sm font-medium text-[#FF4B38]"
              >
                <Compass size={16} className="mr-2 text-[#FF4B38]" />
                ABOUT US
              </motion.span>

              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-extrabold leading-tight bg-gradient-to-r from-[#8B2A7D] to-[#FF4B38] bg-clip-text text-transparent lg:text-5xl"
              >
                Discover the Journey of a Lifetime
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-600"
              >
                World trips, affordable tickets, seamless spiritual experiences, and unforgettable memories. Explore new horizons and create lasting connections with our expert team by your side.
              </motion.p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#8B2A7D] to-[#FF4B38] p-6 shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="relative z-10 space-y-4">
                    <div className="inline-block rounded-full bg-white/20 p-3 transition-transform group-hover:rotate-12">
                    <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mt-4">
                    <BadgeCheck size={20} className="text-green-400 inline mr-2" />
                    Our Mission
                    </h3>
                  <p className="text-white/90">
                    Facilitating trips and enriching tours with utmost dedication. Our team ensures seamless planning for unforgettable experiences.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#4169E1] to-[#00C896] p-6 shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="relative z-10 space-y-4">
                  <div className="inline-block rounded-full bg-white/20 p-3 transition-transform group-hover:rotate-12">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mt-4">
                    <Trophy size={20} className="text-yellow-400 inline mr-2" />
                    Our Reach
                  </h3>
                  <p className="text-white/90">
                    Extensive partnerships with hotels, airlines, and local guides to provide you with a hassle-free travel experience.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[400px] sm:h-[500px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/profile.png"
                alt="Mr.Rameez"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
