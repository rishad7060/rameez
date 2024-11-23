"use client";

import { motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false); // State for mobile search toggle

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="#"
                className="text-base font-medium hover:text-[#8B2A7D] transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-base font-medium hover:text-[#8B2A7D] transition-colors duration-200"
              >
                Packages
              </Link>
              <Link
                href="#"
                className="text-base font-medium hover:text-[#8B2A7D] transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-base font-medium hover:text-[#8B2A7D] transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="#" className="flex items-center space-x-2">
          <motion.div
            className="relative h-16 w-16"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src="/images/logo.png" alt="Logo" width={64} height={64} />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-bold bg-gradient-to-r from-[#8B2A7D] to-[#FF4B38] bg-clip-text text-transparent text-xl">
              RAMEEZ
            </span>
            <span className="text-xs bg-gradient-to-r from-[#FF4B38] to-[#8B2A7D] bg-clip-text text-transparent">
              TRAVELS & TOURS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-6">
          <Link
            href="#"
            className="text-sm font-medium hover:text-[#8B2A7D] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-[#8B2A7D] transition-colors duration-200"
          >
            Packages
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-[#8B2A7D] transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-[#8B2A7D] transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Search & Button */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search */}
          <div className="relative md:hidden">
            {showSearch ? (
              <div className="flex items-center space-x-2">
                <Input
                  className="w-full min-w-[150px] appearance-none rounded-full border border-gray-300 bg-white pl-8 pr-4 py-2 text-sm leading-tight focus:border-[#8B2A7D] focus:outline-none focus:ring-2 focus:ring-[#8B2A7D]/50"
                  placeholder="Search..."
                  type="search"
                />
                <Button
                  variant="ghost"
                  onClick={() => setShowSearch(false)}
                  className="p-0"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" onClick={() => setShowSearch(true)}>
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Desktop Search */}
          <form className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              className="w-full min-w-[200px] appearance-none rounded-full border border-gray-300 bg-white pl-8 pr-4 py-2 text-sm leading-tight focus:border-[#8B2A7D] focus:outline-none focus:ring-2 focus:ring-[#8B2A7D]/50"
              placeholder="Search destinations..."
              type="search"
            />
          </form>

          <Button className="rounded-full bg-gradient-to-r from-[#8B2A7D] to-[#FF4B38] hover:bg-[#8B2A7D]/90 transition-colors duration-300">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
}
