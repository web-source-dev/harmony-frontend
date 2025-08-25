"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, BookOpen, Sparkles, Clock, Phone, CheckCircle, Star, Menu, X } from "lucide-react"



export default function ProgramsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const programs = [
    {
      id: "music-therapy",
      icon: Heart,
      title: "Music Therapy Programs",
      shortDescription: "Therapeutic music interventions designed to address physical, emotional, and cognitive needs.",
      fullDescription:
        "Our music therapy programs use the power of music to promote healing, communication, and personal growth. Certified music therapists work with individuals to achieve therapeutic goals through musical experiences.",
      features: [
        "Individual music therapy sessions",
        "Group music therapy programs",
        "Family music therapy sessions",
        "Progress tracking and assessment",
        "Adaptive instrument training",
        "Home and community-based sessions",
      ],
      ageGroups: ["Children (2-18)", "Adults (18+)", "Seniors (65+)"],
      duration: "30-60 minutes per session",
      frequency: "1-3 times per week",
      color: "from-gray-800 to-gray-900",
    },
    {
      id: "music-education",
      icon: BookOpen,
      title: "Music Education Programs",
      shortDescription: "Comprehensive music learning programs for all skill levels and abilities.",
      fullDescription:
        "Our music education programs provide structured learning experiences in various musical disciplines. We adapt our teaching methods to meet individual learning styles and create inclusive environments for all students.",
      features: [
        "Individual instrument lessons",
        "Group music classes",
        "Music theory and composition",
        "Ensemble and band programs",
        "Digital music production",
        "Performance opportunities",
      ],
      ageGroups: ["Children (5-18)", "Young Adults (18-25)", "Adults (25+)"],
      duration: "45-90 minutes per session",
      frequency: "2-5 times per week",
      color: "from-gray-800 to-gray-900",
    },
    {
      id: "community-music",
      icon: Users,
      title: "Community Music Events",
      shortDescription: "Inclusive musical events and activities that bring communities together through music.",
      fullDescription:
        "Our community music events create opportunities for social connection, musical expression, and cultural enrichment. These events help build a supportive network while promoting musical appreciation and participation.",
      features: [
        "Monthly community concerts",
        "Seasonal music festivals",
        "Open mic nights",
        "Music workshops and clinics",
        "Intergenerational music programs",
        "Volunteer music opportunities",
      ],
      ageGroups: ["All Ages Welcome"],
      duration: "1-4 hours per event",
      frequency: "Weekly events available",
      color: "from-gray-800 to-gray-900",
    },
    {
      id: "music-empowerment",
      icon: Sparkles,
      title: "Music Empowerment Programs",
      shortDescription: "Programs focused on building confidence and self-expression through musical performance.",
      fullDescription:
        "These programs are designed to help individuals develop confidence, leadership skills, and self-expression through music. We focus on building performance skills and promoting musical creativity.",
      features: [
        "Performance training programs",
        "Peer mentoring opportunities",
        "Songwriting workshops",
        "Stage presence development",
        "Recording studio sessions",
        "Community performance opportunities",
      ],
      ageGroups: ["Teens (13-18)", "Young Adults (18-25)", "Adults (25+)"],
      duration: "60-120 minutes per session",
      frequency: "1-2 times per week",
      color: "from-gray-800 to-gray-900",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-black hover:text-gray-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Programs</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Music Programs</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive music programs designed to support individuals at every stage of their musical journey.
              Each program is tailored to meet unique needs and promote musical growth, self-expression, and community
              participation through the universal language of music.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`${index % 2 === 1 ? "lg:flex-row-reverse" : ""} lg:flex items-center gap-12 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="lg:w-1/2">
                  <Card className="shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <img
                        src={program.id === "music-therapy" 
                          ? "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                          : program.id === "music-education"
                          ? "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                          : program.id === "community-music"
                          ? "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                          : "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        }
                        alt={`${program.title} in action`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </div>

                <div className="lg:w-1/2 mt-8 lg:mt-0">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4`}>
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{program.title}</h2>
                  </div>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{program.fullDescription}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-2 text-black" />
                        Age Groups
                      </h4>
                      <div className="space-y-1">
                        {program.ageGroups.map((age, i) => (
                          <Badge key={i} variant="secondary" className="mr-2 mb-1">
                            {age}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-black" />
                        Schedule
                      </h4>
                      <p className="text-sm text-gray-600">{program.duration}</p>
                      <p className="text-sm text-gray-600">{program.frequency}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {program.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-black mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button
                      className={`bg-black text-white hover:shadow-lg transition-all duration-300 rounded-full px-6 py-2 hover:scale-105`}
                    >
                      Learn More & Enroll
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Music Programs?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our evidence-based approach and personalized music instruction ensure the best outcomes for every individual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Evidence-Based", description: "All music programs use proven, research-backed methods" },
              {
                icon: Heart,
                title: "Person-Centered",
                description: "Individualized music plans tailored to unique needs and goals",
              },
              { icon: Users, title: "Family Focused", description: "We involve and support the entire family in musical activities" },
              {
                icon: CheckCircle,
                title: "Measurable Results",
                description: "Regular progress tracking and musical development assessment",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className={`text-center shadow-lg border-0 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2
            className={`text-4xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Ready to Get Started?
          </h2>
          <p
            className={`text-xl mb-8 opacity-90 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Contact us today to learn more about our programs and how we can support you or your loved one.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-full bg-transparent transition-all duration-300 hover:scale-105"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
