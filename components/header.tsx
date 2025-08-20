"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Handle keyboard navigation
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMobileMenuOpen])



  const navLinks = [
    { text: "About", href: "/about" },
    // { text: "Programs", href: "/programs" },
    { text: "Services", href: "/services" },
    // { text: "Resources", href: "/resources" },
    { text: "Blog", href: "/blog" },
    { text: "Media", href: "/media" },
    { text: "Sponsors", href: "/sponsors" },
    { text: "Get Involved", href: "/get-involved" },
    { text: "Contact", href: "/contact" },
  ]

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link 
            href="/" 
            className="flex items-center focus:outline-none rounded-lg p-1 transition-transform hover:scale-105"
            aria-label="Harmony 4 All - Home"
          >
            <img 
              src="https://static.wixstatic.com/media/e65032_cd33c8b9dc8d4a4b986f7fa5ac06df3e~mv2.jpg/v1/crop/x_337,y_634,w_1319,h_753/fill/w_354,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Harmony%204%20All%20logo_G2%20(2).jpg"
              alt="Harmony 4 All Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8" role="menubar">
            {navLinks.map((link, index) => {
              const isActive = isActiveLink(link.href)
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`font-medium transition-all duration-300 focus:outline-none rounded-lg px-2 sm:px-3 py-2 relative text-sm sm:text-base ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-gray-700 hover:text-black hover:bg-gray-50"
                  }`}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.text}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full"></div>
                  )}
                </Link>
              )
            })}
            <Link href="/donate">
              <Button 
                className="relative overflow-hidden bg-gradient-to-r from-black-600 to-black-700 hover:from-black-700 hover:to-blak-800 text-white rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 transition-all duration-500 hover:scale-110 focus:outline-none shadow-xl hover:shadow-2xl font-bold text-sm sm:text-base lg:text-lg group transform hover:-translate-y-1"
                aria-label="Donate to Harmony 4 All"
              >
                <Heart className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
                <span className="hidden sm:inline">Donate Now</span>
                <span className="sm:hidden">Donate</span>
                <div className="absolute inset-0 bg-white/20 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            ref={menuButtonRef}
            variant="ghost"
            size="icon"
            className="lg:hidden focus:outline-none hover:bg-gray-100 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" aria-hidden="true" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            id="mobile-menu"
            className="lg:hidden bg-white border-t shadow-lg animate-in slide-in-from-top-2 duration-300 max-h-[calc(100vh-4rem)] overflow-y-auto"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-4 sm:py-6 space-y-1 sm:space-y-2">
              {navLinks.map((link, index) => {
                const isActive = isActiveLink(link.href)
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={`block font-medium transition-all duration-300 focus:outline-none rounded-lg px-3 py-2 text-sm sm:text-base ${
                      isActive 
                        ? "text-black bg-gray-50 font-semibold border-l-4 border-black" 
                        : "text-gray-700 hover:text-black hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.text}
                  </Link>
                )
              })}
              <Link href="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  className="w-full relative overflow-hidden bg-black text-white rounded-full px-4 sm:px-6 py-3 sm:py-4 mt-3 sm:mt-4 focus:outline-none shadow-xl hover:shadow-2xl transition-all duration-500 font-bold text-sm sm:text-base group transform hover:-translate-y-1"
                  aria-label="Donate to Harmony 4 All"
                >
                  <Heart className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
                  <span>Donate Now</span>
                  <div className="absolute inset-0 bg-white/20 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 