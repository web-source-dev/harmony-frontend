"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Clock, MapPin, Phone, CheckCircle, Calendar, ArrowRight, Gift, Music, Wrench, BookOpen, Award, Mic, Globe } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Instrument Donation",
      description: "Donate musical instruments to help make music education accessible to all students.",
      features: [
        "Accept all instruments",
        "Tax deductible",
        "Pickup service",
        "Quality inspection",
      ],
      ageGroups: ["All Ages"],
      duration: "Flexible",
      frequency: "Ongoing",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: Gift,
    },
    {
      title: "Instrument Rental",
      description: "Affordable instrument rental program for students who want to try different instruments.",
      features: [
        "Monthly rentals",
        "Student discounts",
        "Maintenance included",
        "Easy returns",
      ],
      ageGroups: ["Children", "Teens", "Adults"],
      duration: "Monthly",
      frequency: "Flexible",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: Music,
    },
    {
      title: "Instrument Repair",
      description: "Professional repair services to keep instruments in perfect playing condition.",
      features: [
        "Expert technicians",
        "Quick turnaround",
        "Warranty included",
        "All instrument types",
      ],
      ageGroups: ["All Ages"],
      duration: "1-7 days",
      frequency: "As needed",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: Wrench,
    },
    {
      title: "Musical Curriculum",
      description: "Comprehensive music education programs designed for all skill levels and abilities.",
      features: [
        "Individual lessons",
        "Group classes",
        "Adaptive teaching",
        "Performance opportunities",
      ],
      ageGroups: ["Children", "Teens", "Adults", "Seniors"],
      duration: "30-60 minutes",
      frequency: "1-3 times per week",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: BookOpen,
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Schedule a free consultation to discuss your musical needs and goals",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      step: "2",
      title: "Service Selection",
      description: "Choose from our range of services based on your requirements",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      step: "3",
      title: "Service Setup",
      description: "We'll set up your chosen service and provide all necessary information",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "Receive continuous support and assistance throughout your musical journey",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 sm:py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <Link href="/" className="text-teal-600 hover:text-teal-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('https://static.wixstatic.com/media/e65032_8406f3bedd7f4b9e84649ea38ed69b7b~mv2.jpeg/v1/fill/w_880,h_485,al_c,q_85,enc_avif,quality_auto/e65032_8406f3bedd7f4b9e84649ea38ed69b7b~mv2.jpeg')`
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
         <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg text-center">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 text-center max-w-3xl drop-shadow-lg px-4">
            Making music education accessible to everyone through instrument donations, rentals, repairs, and comprehensive musical curriculum.
          </p>
         </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Music Services</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                We provide comprehensive music services including instrument donations, rentals, repairs, and educational programs 
                to make music accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group bg-white border-0 rounded-2xl sm:rounded-3xl overflow-hidden"
                >
                  <div className="relative">
                    <div className="w-full h-48 sm:h-64 md:h-80 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center shadow-lg">
                      <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                      {/* Key Features */}
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-black" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                          <div className="flex items-center text-gray-700 mb-2">
                            <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                            <span className="font-medium text-xs sm:text-sm">Age Groups</span>
                          </div>
                          <div className="space-y-1">
                            {service.ageGroups.map((age, i) => (
                              <Badge key={i} variant="secondary" className="bg-white text-gray-700 border border-gray-200 text-xs">
                                {age}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                          <div className="flex items-center text-gray-700 mb-2">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                            <span className="font-medium text-xs sm:text-sm">Schedule</span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 font-medium">{service.duration}</p>
                          <p className="text-xs sm:text-sm text-gray-600">{service.frequency}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 sm:mt-8 text-center">
                      <Button
                        size="lg"
                        className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Additional Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Beyond our core music services, we offer specialized programs and events that bring music education to life in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Community Concerts */}
            <Card className="shadow-lg border-0 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/30dc3d_37cdc33f2bda4b66b3ab7334339417a0~mv2.jpeg?dn=H4A Community Concert.JPEG"
                  alt="Community Concert"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <Music className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Community Concerts</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Regular community concerts featuring local musicians, students, and professional performers to showcase musical talent and bring communities together.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span>Monthly Events</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span>All Ages Welcome</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Youth Orchestra Programs */}
            <Card className="shadow-lg border-0 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/30dc3d_02f838cac6a24d86946860f03d4b50a4~mv2.jpg?dn=B&J with the NY Philharmonic Youth Orchestra conducted by Maestro Gustavo Dudamel.JPG"
                  alt="Youth Orchestra"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Youth Orchestra Programs</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Partnership programs with prestigious orchestras like the NY Philharmonic Youth Orchestra, providing young musicians with world-class performance opportunities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span>Seasonal Programs</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span>Professional Mentorship</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Educational Workshops */}
            <Card className="shadow-lg border-0 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/30dc3d_39ef049e71884adfb38ba96bad3ec69c~mv2.jpeg?dn=With elementary teacher who introduced B&J to their instruments and the world of music - A"
                  alt="Educational Workshop"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Educational Workshops</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Interactive workshops and masterclasses with professional musicians and educators, designed to inspire and educate students of all skill levels.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span>Quarterly Events</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span>Small Group Sessions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advocacy & Speaking */}
            <Card className="shadow-lg border-0 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/30dc3d_1cfdf310673f4b5cb7ec5b31ddc8e0b8~mv2.jpg?dn=Bianca address about H4A at The United Nations.JPG"
                  alt="Advocacy Speaking"
                  className="bg-bottom w-full h-full  object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <Mic className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Advocacy & Speaking</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Speaking engagements and advocacy work at prestigious venues including the United Nations, promoting music education accessibility worldwide.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span>By Invitation</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span>Global Reach</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">How We Work</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Our streamlined process ensures you receive the right services quickly and efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="text-center shadow-lg border-0 rounded-xl sm:rounded-2xl overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-lg sm:text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Service Locations</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                We provide music services at multiple convenient locations throughout New York City and surrounding areas.
              </p>
            </div>

            {/* New York Map */}
            <div className="mb-8 sm:mb-12">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Our Service Coverage Area</h3>
                  <p className="text-sm sm:text-base text-gray-600">Interactive map showing our service locations across New York City</p>
                </div>
                <div className="h-64 sm:h-80 md:h-96 w-full relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436351647!2d-74.11976404999999!3d40.6976634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1703123456789!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Harmony 4 All Service Locations in New York City"
                    aria-label="Interactive map showing Harmony 4 All service locations across New York City"
                  ></iframe>
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/90 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-xs sm:text-sm"
                      onClick={() => window.open('https://maps.google.com/?q=New+York+City', '_blank')}
                      aria-label="Open map in new window"
                    >
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" aria-hidden="true" />
                      Open Map
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="text-center shadow-lg border-0 rounded-xl sm:rounded-2xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Manhattan Location</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                    123 Harmony Street
                    <br />
                    Music Center, Suite 200
                    <br />
                    New York, NY 10001
                  </p>
                  <Badge className="bg-black text-white text-xs sm:text-sm">All Services Available</Badge>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg border-0 rounded-xl sm:rounded-2xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Brooklyn Location</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                    456 Community Ave
                    <br />
                    Arts Plaza, Floor 3<br />
                    Brooklyn, NY 11201
                  </p>
                  <Badge className="bg-black text-white text-xs sm:text-sm">Rental & Repair Services</Badge>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg border-0 rounded-xl sm:rounded-2xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Mobile Services</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                    Services provided in
                    <br />
                    homes, schools, and
                    <br />
                    community settings
                  </p>
                  <Badge className="bg-black text-white text-xs sm:text-sm">Donation Pickup & Lessons</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-black text-white">  
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-4">
            Contact us today to learn more about our music services and how we can help you.
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
                className="w-full bg-white hover:bg-gray-800 text-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full"
              >
                <Gift className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Donate Instruments
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
