import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Testimonials Section Component
export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const testimonials = [
    {
      name: "Senator Joseph Addabbo Jr.",
      role: "NY State Senator",
      content:
        "Harmony 4 All's instrument donation drive and community concerts have brought music education to countless students who otherwise wouldn't have access. Their commitment to making music accessible to all children is exactly what our community needs.",
      rating: 5,
      image: "https://static.wixstatic.com/media/30dc3d_bd367139bbb64b3b8d1729423a6b99f7~mv2.jpeg?dn=With Senator Joseph Addabbo.JPEG",
    },
    {
      name: "Dean Weston Sprott",
      role: "Juilliard School Faculty",
      content:
        "Supporting Harmony 4 All's mission at the United Nations was a powerful moment. These young musicians are not just talented performers – they're advocates for music education accessibility, showing the world how music can bridge gaps and create opportunities.",
      rating: 5,
      image: "https://static.wixstatic.com/media/30dc3d_5543558c4b554e6b833f7c5a561864b8~mv2.jpg?dn=B&J speaking at The United Nations.JPG",
    },
    {
      name: "April Rachmuth",
      role: "Elementary School Music Teacher",
      content:
        "Seeing Bianca and Joshua grow from my elementary school music students to founders of Harmony 4 All has been incredible. They're living proof that early music education can change lives and create leaders who give back to their community.",
      rating: 5,
      image: "https://static.wixstatic.com/media/30dc3d_39ef049e71884adfb38ba96bad3ec69c~mv2.jpeg?dn=With elementary teacher who introduced B&J to their instruments and the world of music - A",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 10000)
    return () => clearInterval(timer)
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

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Determine if current slide should have image on left or right
  const isImageOnLeft = currentTestimonial % 2 === 0

  return (
    <section id="testimonials-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the families, therapists, and volunteers who make our community special.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <Card
            className={`bg-gray-50 border-0 shadow-xl rounded-2xl overflow-hidden transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className={`order-1 ${isImageOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className={`order-2 ${isImageOnLeft ? 'lg:order-2' : 'lg:order-1'} flex items-center`}>
                <CardContent className="p-12 lg:p-16 w-full">
                  <div className="text-center lg:text-left">
                    {/* Rating Stars */}
                    <div className="flex justify-center lg:justify-start mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-6 w-6 text-yellow-400 fill-current animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="border-t border-gray-200 pt-6">
                      <div className="font-bold text-lg text-gray-900 mb-1">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl rounded-full border-2 border-gray-200 hover:border-gray-300 hover:scale-110 transition-all duration-300 z-10"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6 text-black" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl rounded-full border-2 border-gray-200 hover:border-gray-300 hover:scale-110 transition-all duration-300 z-10"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6 text-black" />
          </Button>
        </div>
      </div>
    </section>
  )
}