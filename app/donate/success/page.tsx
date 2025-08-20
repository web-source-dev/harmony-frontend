"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Share2, Mail, Calendar } from "lucide-react"
import { donationAPI } from "@/lib/api"

export default function DonationSuccessPage() {
  const [donationStatus, setDonationStatus] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const sessionId = urlParams.get('session_id')
    
    if (sessionId) {
      // You could fetch donation details here if needed
      // For now, we'll just show a success message
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your donation...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-900 hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/donate" className="text-gray-900 hover:text-gray-700">
              Donate
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Success</span>
          </div>
        </div>
      </div>

      {/* Success Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-12">
                <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-4xl font-bold mb-4">Thank You!</CardTitle>
                <CardDescription className="text-green-100 text-xl">
                  Your donation has been successfully processed
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-gray-600 text-lg mb-4">
                      Your generous contribution will help us continue providing music education 
                      and building stronger communities through the power of music.
                    </p>
                    <p className="text-gray-500">
                      You will receive a confirmation email shortly with your donation receipt.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
                    <div className="space-y-3 text-left">
                      <div className="flex items-start space-x-3">
                        <Mail className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Email Confirmation</p>
                          <p className="text-sm text-gray-600">Check your email for a receipt and tax information</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Heart className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Impact Updates</p>
                          <p className="text-sm text-gray-600">We'll keep you informed about how your donation is making a difference</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Calendar className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Future Events</p>
                          <p className="text-sm text-gray-600">Get invited to our community events and concerts</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/" className="flex-1">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl font-semibold">
                        Return Home
                      </Button>
                    </Link>
                    <Link href="/media" className="flex-1">
                      <Button variant="outline" className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-3 rounded-xl font-semibold">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share Our Mission
                      </Button>
                    </Link>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      Questions about your donation? <Link href="/contact" className="text-gray-900 hover:underline">Contact us</Link>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Reminder */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Impact Matters</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Every donation, no matter the size, helps us provide music education, repair instruments, 
            and create community events that bring people together through the universal language of music.
          </p>
          <Link href="/get-involved">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get More Involved
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
