"use client"

import { motion } from "framer-motion"
import { Menu, Plane, Search } from 'lucide-react'
import Link from "next/link"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/60' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-lg font-medium hover:text-[#8B2A7D] transition-colors duration-200">
                Home
              </Link>
              <Link href="#" className="text-lg font-medium hover:text-[#8B2A7D] transition-colors duration-200">
                Packages
              </Link>
              <Link href="#" className="text-lg font-medium hover:text-[#8B2A7D] transition-colors duration-200">
                Services
              </Link>
              <Link href="#" className="text-lg font-medium hover:text-[#8B2A7D] transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="#" className="flex items-center space-x-2">
          <motion.div
            className="relative h-10 w-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B2A7D] to-[#FF4B38]">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <Plane className="h-6 w-6 rotate-45 transform" />
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col">
            <span className="font-bold text-[#8B2A7D]">RAMEEZ</span>
            <span className="text-xs text-[#FF4B38]">TRAVELS & TOURS</span>
          </div>
        </Link>
        <nav className="hidden md:flex md:space-x-6">
          <Link href="#" className="text-sm font-medium hover:text-[#8B2A7D] transition-colors duration-200">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#8B2A7D] transition-colors duration-200">
            Packages
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#8B2A7D] transition-colors duration-200">
            Services
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#8B2A7D] transition-colors duration-200">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <form className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              className="w-full min-w-[200px] appearance-none rounded-full border border-gray-300 bg-white pl-8 pr-4 py-2 text-sm leading-tight focus:border-[#8B2A7D] focus:outline-none focus:ring-2 focus:ring-[#8B2A7D]/50"
              placeholder="Search destinations..."
              type="search"
            />
          </form>
          <Button className="rounded-full bg-[#8B2A7D] hover:bg-[#8B2A7D]/90 transition-colors duration-300">Book Now</Button>
        </div>
      </div>
    </header>
  )
}