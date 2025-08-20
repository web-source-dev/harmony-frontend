"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Star, Award, Handshake, Gift, Music, Globe, ArrowRight, CheckCircle, DollarSign, Trophy, Target, Calendar } from "lucide-react"

export default function SponsorsPage() {
  const currentSponsors = [
    {
      name: "Juilliard School",
      level: "Platinum",
      logo: "https://static.wixstatic.com/media/30dc3d_f16d853d6b354b9fb7b0ed46be6f8483~mv2.jpg",
      description: "Supporting music education excellence through their prestigious programs and facilities.",
      contribution: "Educational Partnership",
      year: "2024"
    },
    {
      name: "Carnegie Hall",
      level: "Gold",
      logo: "https://static.wixstatic.com/media/30dc3d_da42d04017554969abe4becb9d7c412d~mv2.png",
      description: "Providing world-class performance opportunities and educational resources.",
      contribution: "Performance Venues & Programs",
      year: "2024"
    },
    {
      name: "Bronx High School of Science",
      level: "Silver",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description: "Supporting academic excellence and musical talent development.",
      contribution: "Educational Support",
      year: "2024"
    }
  ]

  const sponsorshipLevels = [
    {
      level: "Platinum",
      amount: "$10,000+",
      benefits: [
        "Logo prominently displayed on all marketing materials",
        "Featured sponsor at all events",
        "Naming rights for one program or facility",
        "VIP access to all performances",
        "Quarterly impact reports",
        "Social media recognition",
        "Annual recognition dinner invitation"
      ],
      color: "bg-gradient-to-r from-gray-100 to-gray-200",
      borderColor: "border-gray-400"
    },
    {
      level: "Gold",
      amount: "$5,000 - $9,999",
      benefits: [
        "Logo on website and event materials",
        "Sponsor recognition at events",
        "Quarterly impact reports",
        "Social media recognition",
        "Annual recognition dinner invitation",
        "Newsletter feature"
      ],
      color: "bg-gradient-to-r from-gray-50 to-gray-100",
      borderColor: "border-gray-400"
    },
    {
      level: "Silver",
      amount: "$2,500 - $4,999",
      benefits: [
        "Logo on website",
        "Event recognition",
        "Quarterly impact reports",
        "Social media recognition",
        "Newsletter mention"
      ],
      color: "bg-gradient-to-r from-gray-50 to-gray-100",
      borderColor: "border-gray-400"
    },
    {
      level: "Bronze",
      amount: "$1,000 - $2,499",
      benefits: [
        "Name on website",
        "Event recognition",
        "Quarterly impact reports",
        "Newsletter mention"
      ],
      color: "bg-gradient-to-r from-gray-50 to-gray-100",
      borderColor: "border-gray-400"
    }
  ]

  const impactStats = [
    {
      number: "500+",
      label: "Students Supported",
      icon: Users,
      description: "Through our music education programs"
    },
    {
      number: "50+",
      label: "Instruments Donated",
      icon: Music,
      description: "To aspiring musicians in need"
    },
    {
      number: "25+",
      label: "Events Hosted",
      icon: Calendar,
      description: "Community performances and workshops"
    },
    {
      number: "100%",
      label: "Accessibility",
      icon: Globe,
      description: "Programs open to all abilities"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-2 sm:py-3 md:py-4">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
            <Link href="/" className="text-black hover:text-gray-800 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Sponsors</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-lg leading-tight px-2">
              Our Sponsors
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-4xl drop-shadow-lg px-2 sm:px-4 leading-relaxed">
              Partnering with organizations and individuals who share our vision of making music education accessible to all
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              <Link href="#sponsor-opportunities">
                Become a Sponsor
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
                Our Impact Together
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed">
                Thanks to our generous sponsors, we've been able to make a significant difference in the lives of aspiring musicians
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <Card className="shadow-lg border-0 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                    <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                      <div className="flex justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-black rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                          <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-white" />
                        </div>
                      </div>
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-1 sm:mb-2">
                        {stat.label}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
                Our Current Sponsors
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed">
                We're grateful for the support of these organizations who share our commitment to music education
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {currentSponsors.map((sponsor, index) => (
                <Card key={index} className="shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3 sm:pb-4 md:pb-6">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-gray-100 text-gray-800 text-xs sm:text-sm px-2 sm:px-3 py-1"
                      >
                        {sponsor.level} Sponsor
                      </Badge>
                      <span className="text-xs sm:text-sm text-gray-500">{sponsor.year}</span>
                    </div>
                    <div className="aspect-[4/3] bg-gray-50 rounded-lg mb-3 sm:mb-4 md:mb-6 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
                      <img 
                        src={sponsor.logo} 
                        alt={`${sponsor.name} logo`}
                        className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-md"
                      />
                    </div>
                    <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl leading-tight">{sponsor.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">{sponsor.description}</p>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Gift className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                      <span>{sponsor.contribution}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
