"use client"

import Link from "next/link"
  import { Button } from "@/components/ui/button"
  import { Card } from "@/components/ui/card"
import { Phone, Mail,ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import ContactSection from "@/components/contact"




export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);



  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 sm:py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <Link href="/" className="text-gray-900 hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Contact</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">Contact Us</h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md px-4">
              We're here to help and answer any questions you may have. Reach out to us and we'll respond as soon as we
              can.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {[
              {
                question: "How can I donate musical instruments?",
                answer:
                  "Contact us to arrange instrument donations. We accept all types of musical instruments in good condition and provide tax-deductible receipts.",
                image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                question: "Do you offer instrument rental services?",
                answer: "Yes, we provide free instrument rentals to students in need. Contact us to learn about availability and requirements.",
                image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                question: "What age groups do you serve?",
                answer:
                  "We serve students of all ages, focusing on making music education accessible to underserved communities in New York City.",
                image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                question: "How can I volunteer or get involved?",
                answer:
                  "Visit our Get Involved page or contact us directly to learn about volunteer opportunities and ways to support our mission.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
              },
            ].map((faq, index) => (
              <Card key={index} className="shadow-lg border-0 rounded-xl sm:rounded-2xl overflow-hidden">
                <div 
                  className="flex items-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {/* Small Image on the Left */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 mr-3 sm:mr-4">
                    <img
                      src={faq.image}
                      alt={faq.question}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Question and Toggle */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">{faq.question}</h4>
                  </div>
                  
                  {/* Chevron Icon */}
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronUp className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
                    )}
                  </div>
                </div>
                
                {/* Collapsible Answer */}
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100">
                    <p className="text-sm sm:text-base text-gray-600 pt-3 sm:pt-4 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Still Have Questions?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            We're here to help! Don't hesitate to reach out with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full">
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Call Us Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full bg-transparent"
            >
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
