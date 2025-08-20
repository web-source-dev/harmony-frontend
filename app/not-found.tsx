'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-3 sm:px-4 md:px-6">
      <div className="text-center max-w-sm sm:max-w-md md:max-w-lg w-full">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
          404
        </h1>
        
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
          Page Not Found
        </h2>
        
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link href="/" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Home className="h-3 w-3 sm:h-4 sm:w-4 mr-2" aria-hidden="true" />
              Go Home
            </Button>
          </Link>
          
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-2" aria-hidden="true" />
            Go Back
          </Button>
        </div>
        
        <div className="mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {[
              { text: "About Us", href: "/about" },
              { text: "Programs", href: "/programs" },
              { text: "Services", href: "/services" },
              { text: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-2 sm:px-3 py-1.5 sm:py-2"
                >
                  {link.text}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 