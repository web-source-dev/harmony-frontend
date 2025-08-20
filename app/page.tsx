"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  BookOpen,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  HandHeart,
  Gift,
  Music,
  Wrench,
  Mic,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { WelcomePopup } from "@/components/welcome-popup"
import ContactSection from "@/components/contact"
import NewsletterSection from "@/components/news-letter"
import { TestimonialsSection } from "@/components/Testimonial"
import api from "../api/api"

// Hero Carousel Component
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides = [
              {
            title: "Building a World of Harmony",
            subtitle:
              "Empowering children and adults with disabilities through inclusive therapy, education, and community support.",
            image: "/1.jpeg",
            
          },
              {
            title: "Did you Know?",
            subtitle:
              "Schools with music programs have an estimated 90.2 percent graduation rate compared to 72.9 percent for schools without music education.",
            image: "/2.jpeg",
            
          },
              {
            title: "Building Inclusive Communities",
            subtitle: "Join our mission to create opportunities where everyone can thrive and reach their full potential.",
            image: "/3.jpg",
          
          },
              {
            title: "Educational Excellence for All",
            subtitle:
              "Specialized learning programs that adapt to different learning styles and celebrate every achievement.",
            image: "/4.avif",
            
          },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 6000)
      return () => clearInterval(timer)
    }
  }, [isPaused])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="region"
      aria-label="Hero carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url('${slide.image}')` }}
            role="img"
            aria-label={`Background image for slide ${index + 1}: ${slide.title}`}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center h-full flex items-center">
            <div className="max-w-4xl mx-auto text-white px-4">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight transition-all duration-1000 delay-300 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed transition-all duration-1000 delay-500 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {slide.subtitle}
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
               
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-full z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent w-10 h-10 sm:w-12 sm:h-12"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-full z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent w-10 h-10 sm:w-12 sm:h-12"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />
      </Button>

      {/* Slide Indicators */}
      <div 
        className="absolute bottom-8 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20"
        role="tablist"
        aria-label="Carousel slide indicators"
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            aria-selected={index === currentSlide}
            role="tab"
          />
        ))}
      </div>


    </section>
  )
}

// About Us Section Component with animations
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-section" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Who We Are</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Founded on the belief that every individual deserves the opportunity to reach their full potential,
              Harmony 4 All has been a beacon of hope and support for families and individuals with disabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
            <div
              className={`transition-all duration-1000 delay-300 order-2 md:order-1 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h3>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                We provide comprehensive therapy services, educational programs, and community support to empower
                individuals with disabilities and their families. Our approach is holistic, person-centered, and
                designed to foster independence, confidence, and joy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: Heart, text: "Compassionate Care" },
                  { icon: Users, text: "Inclusive Community" },
                  { icon: BookOpen, text: "Educational Excellence" },
                  { icon: Sparkles, text: "Personal Growth" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center transition-all duration-500 delay-${500 + index * 100} ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 delay-500 order-1 md:order-2 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <img
                src="https://static.wixstatic.com/media/8e9eb3_12bc08b163d4457c8ad38ec76bcbb751~mv2.jpg/v1/fill/w_1046,h_1046,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/samuel-sianipar-4TNd3hsW3PM-unsplash.jpg"
                alt="Therapy session showing children working with a caring therapist in a bright, welcoming environment"
                className="rounded-2xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-black text-white p-3 sm:p-6 rounded-2xl shadow-xl animate-pulse">
                <p className="text-lg sm:text-2xl font-bold">7+</p>
                <p className="text-xs sm:text-sm">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Programs Section Component with staggered animations
const ProgramsSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("programs-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const programs = [
    {
      icon: Gift,
      title: "Instrument Donation",
      description: "Donate musical instruments to help make music education accessible to all students.",
      features: ["Accept all instruments", "Tax deductible", "Pickup service", "Quality inspection"],
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Music,
      title: "Instrument Rental",
      description: "Affordable instrument rental program for students who want to try different instruments.",
      features: ["Monthly rentals", "Student discounts", "Maintenance included", "Easy returns"],
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Wrench,
      title: "Instrument Repair",
      description: "Professional repair services to keep instruments in perfect playing condition.",
      features: ["Expert technicians", "Quick turnaround", "Warranty included", "All instrument types"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Mic,
      title: "Musical Curriculum",
      description: "Comprehensive music education programs designed for all skill levels and abilities.",
      features: ["Individual lessons", "Group classes", "Adaptive teaching", "Performance opportunities"],
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  return (
    <section id="programs-section" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover our comprehensive range of services designed to support individuals with disabilities at every
            stage of their journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`bg-white shadow-lg hover:shadow-xl transition-all duration-500 border-0 rounded-2xl overflow-hidden group hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center pb-4 px-4 sm:px-6">
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <program.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <CardDescription className="text-gray-600 mb-4 text-center text-sm sm:text-base">{program.description}</CardDescription>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Impact Stats Section Component with counter animations
const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState([0, 0, 0, 0])

  const stats = [
    { icon: Users, number: 500, label: "Lives Touched", suffix: "+" },
    { icon: BookOpen, number: 15, label: "Programs Offered", suffix: "+" },
    { icon: HandHeart, number: 100, label: "Volunteers", suffix: "+" },
    { icon: Award, number: 10, label: "Years of Excellence", suffix: "+" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          stats.forEach((stat, index) => {
            let current = 0
            const increment = stat.number / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.number) {
                current = stat.number
                clearInterval(timer)
              }
              setCounters((prev) => {
                const newCounters = [...prev]
                newCounters[index] = Math.floor(current)
                return newCounters
              })
            }, 50)
          })
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("impact-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="impact-section" className="py-12 sm:py-16 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Impact</h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto px-4">
            Every number represents a life changed, a family supported, and a community strengthened.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-1000 delay-${index * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
                {counters[index]}
                {stat.suffix}
              </div>
              <div className="text-sm sm:text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Get Involved Section Component
const GetInvolvedSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("get-involved-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const ways = [
    {
      icon: Heart,
      title: "Donate",
      description: "Your contribution directly supports music education programs, instrument donations, and community events.",
      cta: "Make a Donation",
      image: "https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      description:
        "Join our team of dedicated volunteers and make a direct impact in the lives of students and families through music education.",
      cta: "Become a Volunteer",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
  ]

  return (
    <section id="get-involved-section" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Get Involved</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            There are many ways to support our mission and make a difference in your community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {ways.map((way, index) => (
            <Card
              key={index}
              className={`bg-white shadow-lg hover:shadow-xl transition-all duration-500 border-0 rounded-2xl overflow-hidden group hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={way.image}
                  alt={way.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center pb-4 px-4 sm:px-6">
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <way.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">{way.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 sm:px-6">
                <CardDescription className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  {way.description}
                </CardDescription>
                <Link href="/donate">
                  <Button className="bg-black text-white hover:bg-gray-800 hover:shadow-lg transition-all duration-300 rounded-full px-4 sm:px-6 py-2 hover:scale-105 text-sm sm:text-base">
                    {way.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Home Blog Teaser
const HomeBlogSection = () => {
  const [posts, setPosts] = useState<any[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true)
        const response = await api.get('/blogs?page=1&limit=3')
        setPosts(response.data.blogs || [])
      } catch (error) {
        console.error('Failed to load blog posts:', error)
      } finally {
        setIsLoading(false)
      }
    }
    load()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("blog-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog-section" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Latest from Our Blog</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Discover inspiring stories, educational insights, and updates from our music education community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {isLoading ? (
              // Loading state
              Array.from({ length: 3 }).map((_, index) => (
                <Card
                  key={index}
                  className={`bg-white shadow-xl border-0 rounded-3xl overflow-hidden ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="aspect-video bg-gray-200 animate-pulse"></div>
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="mb-4">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
                    </div>
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-6 w-2/3"></div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                      </div>
                      <div className="h-8 bg-gray-200 rounded animate-pulse w-20"></div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : posts.length > 0 ? (
              // Posts content
              posts.map((post: any, index) => (
                <div key={post.slug} className="group block">
                  {post.url ? (
                    // External link - wrap entire card
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card
                        className={`bg-white shadow-xl border-0 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <div className="relative">
                          <div className="aspect-video overflow-hidden">
                            <img 
                              src={post.image || '/placeholder.jpg'} 
                              alt={post.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                            />
                          </div>
                          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                            <Badge className="bg-black/80 text-white backdrop-blur-sm border-0 text-xs sm:text-sm">
                              External Link
                            </Badge>
                          </div>
                        </div>
                        
                        <CardContent className="p-4 sm:p-6 md:p-8">
                          <div className="mb-3 sm:mb-4">
                            <p className="text-xs sm:text-sm text-gray-500 font-medium">
                              {new Date(post.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                          
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 line-clamp-2 group-hover:text-black transition-colors duration-300">
                            {post.title}
                          </h3>
                          
                          {post.description && (
                            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                              {post.description}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                              </div>
                              <span className="text-xs sm:text-sm text-gray-500">Harmony 4 All</span>
                            </div>
                            
                            <div className="flex items-center text-black transition-colors duration-300">
                              <span className="text-xs sm:text-sm font-medium mr-1 sm:mr-2">Visit Link</span>
                              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ) : (
                    // Internal link - wrap entire card
                    <Link href={`/blog/${post.slug}`} className="block">
                      <Card
                        className={`bg-white shadow-xl border-0 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <div className="relative">
                          <div className="aspect-video overflow-hidden">
                            <img 
                              src={post.image || '/placeholder.jpg'} 
                              alt={post.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                            <Badge className="bg-black/80 text-white backdrop-blur-sm border-0 text-xs sm:text-sm">
                              Blog Post
                            </Badge>
                          </div>
                        </div>
                        
                        <CardContent className="p-4 sm:p-6 md:p-8">
                          <div className="mb-3 sm:mb-4">
                            <p className="text-xs sm:text-sm text-gray-500 font-medium">
                              {new Date(post.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                          
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 line-clamp-2 group-hover:text-black transition-colors duration-300">
                            {post.title}
                          </h3>
                          
                          {post.description && (
                            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                              {post.description}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                              </div>
                              <span className="text-xs sm:text-sm text-gray-500">Harmony 4 All</span>
                            </div>
                            
                            <div className="flex items-center text-black transition-colors duration-300">
                              <span className="text-xs sm:text-sm font-medium mr-1 sm:mr-2">Read More</span>
                              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  )}
                </div>
              ))
            ) : (
              // Empty state
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-8 sm:py-12">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <BookOpen className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">No Blog Posts Yet</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto px-4">
                  We're working on creating amazing content for our community. Check back soon for inspiring stories and educational insights!
                </p>
                <Link href="/blog">
                  <Button className="bg-black text-white hover:bg-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                    Visit Our Blog
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {!isLoading && posts.length > 0 && (
            <div
              className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Link href="/blog">
                <Button className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                  View All Blog Posts
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}



// Main Page Component
export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen p:0 overflow-x-hidden">
      <HeroCarousel />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <TestimonialsSection />
      <GetInvolvedSection />
      {/* Removed PhotoGallerySection */}
      <HomeBlogSection />
      <ContactSection />
      <NewsletterSection />
      <WelcomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  )
}
