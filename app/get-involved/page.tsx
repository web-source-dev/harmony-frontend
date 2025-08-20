"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, HandHeart, Building, Clock, Phone, DollarSign, Gift } from "lucide-react"



export default function GetInvolvedPage() {
  const volunteerOpportunities = [
    {
      title: "Music Education Assistant",
      description: "Support our music education programs and help students learn instruments",
      timeCommitment: "4-6 hours/week",
      requirements: ["Background check", "Training provided", "Reliable schedule"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Event Coordinator",
      description: "Help organize and run our music events and fundraisers",
      timeCommitment: "2-4 hours/week",
      requirements: ["Event planning experience preferred", "Creative mindset", "Team player"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Administrative Support",
      description: "Assist with office tasks, data entry, and communication",
      timeCommitment: "3-5 hours/week",
      requirements: ["Computer skills", "Attention to detail", "Professional communication"],
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
    {
      title: "Instrument Pickup Helper",
      description: "Help with instrument donation pickups and deliveries",
      timeCommitment: "Flexible",
      requirements: ["Valid driver's license", "Clean driving record", "Own vehicle"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
  ]

  const donationLevels = [
    {
      amount: "$25",
      impact: "Provides music supplies for one lesson",
      icon: Gift,
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      amount: "$50",
      impact: "Funds instrument rental for one month",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      amount: "$100",
      impact: "Sponsors one student's music education for a month",
      icon: Users,
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      amount: "$250",
      impact: "Supports a family through our music program for one month",
      icon: Building,
      image: "https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  return (
    <div className="min-h-screen bg-white">


      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 sm:py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <Link href="/" className="text-black hover:text-gray-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Get Involved</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('https://static.wixstatic.com/media/30dc3d_7d37f47903414426ac4f3abd5718b7c1~mv2.jpg')`
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
         <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg text-center">Get Involved</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 text-center max-w-3xl drop-shadow-lg px-4">
            Join our mission to make music education accessible to all. Whether through volunteering, donating, or partnering
            with us, your support makes a real difference in the lives of students and families.
          </p>
         </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Ways to Make a Difference</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Choose the way that works best for you to support our community and mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="shadow-xl border-0 rounded-xl sm:rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-3 sm:pb-4 bg-gray-50">
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-lg sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">Donate</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-4 sm:p-6">
                <CardDescription className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Your financial contribution directly supports therapy sessions, educational programs, and community
                  events.
                </CardDescription>
                <Link href="/donate">
                  <Button className="bg-black text-white hover:shadow-lg transition-all duration-300 rounded-full px-4 sm:px-6 py-2 w-full text-sm sm:text-base">
                    Make a Donation
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 rounded-xl sm:rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center pb-3 sm:pb-4 bg-gray-50">
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-lg sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <HandHeart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">Volunteer</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-4 sm:p-6">
                <CardDescription className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Join our team of dedicated volunteers and make a direct impact in the lives of individuals and
                  families.
                </CardDescription>
                <Link href="/volunteer">
                  <Button className="bg-black text-white hover:shadow-lg transition-all duration-300 rounded-full px-4 sm:px-6 py-2 w-full text-sm sm:text-base">
                    Become a Volunteer
                  </Button>
                </Link>
              </CardContent>
            </Card>


          </div>
        </div>
      </section >

      {/* Donation Impact */}
      < section className="py-12 sm:py-16 md:py-20 bg-gray-50" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Your Donation Impact</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              See how your contribution directly supports our programs and the individuals we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {donationLevels.map((level, index) => (
              <Card
                key={index}
                className="text-center shadow-lg border-0 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={level.image}
                    alt={`Donation level ${level.amount}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-lg sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                    <level.icon className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-black">{level.amount}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600">{level.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/donate">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span>Donate Today</span>
              </Button>
            </Link>
          </div>
        </div>
      </section >

      {/* Volunteer Opportunities */}
      < section className="py-12 sm:py-16 md:py-20" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Volunteer Opportunities</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Find the perfect volunteer role that matches your skills, interests, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="shadow-lg border-0 rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">{opportunity.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600">{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-black" />
                      Time Commitment: {opportunity.timeCommitment}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Requirements:</h4>
                      <ul className="space-y-1">
                        {opportunity.requirements.map((req, i) => (
                          <li key={i} className="text-xs sm:text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mr-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/volunteer">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full">
                <HandHeart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Apply to Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section >

      {/* Call to Action */}
      < section className="py-12 sm:py-16 md:py-20 bg-black text-white" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Make a Difference?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Every contribution, big or small, helps us create a more inclusive and supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Us
              </Button>
            </Link>
            <Link href="/donate">
              <Button
                size="lg"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full bg-transparent"
              >
                <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span>Donate Today</span>
              </Button>
            </Link>
          </div>
        </div>
      </section >
    </div >
  )
}
