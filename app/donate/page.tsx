"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Heart, DollarSign, CreditCard, Gift, Users, Building, Calendar, CheckCircle, Star, Shield } from "lucide-react"
import { donationAPI } from "@/lib/api"

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time")
  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    phone: '',
    paymentMethod: 'credit-card',
    designation: 'general',
    isAnonymous: false,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [donationId, setDonationId] = useState<string | null>(null)

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000]

  const impactExamples = [
    {
      amount: 25,
      impact: "Provides music supplies for one lesson",
      icon: Gift,
      color: "from-gray-900 to-gray-700",
      image: "https://static.wixstatic.com/media/e65032_cd33c8b9dc8d4a4b986f7fa5ac06df3e~mv2.jpg/v1/crop/x_337,y_634,w_1319,h_753/fill/w_354,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Harmony%204%20All%20logo_G2%20(2).jpg",
    },
    {
      amount: 50,
      impact: "Funds instrument rental for one month",
      icon: Heart,
      color: "from-gray-900 to-gray-700",
      image: "https://static.wixstatic.com/media/e65032_cd33c8b9dc8d4a4b986f7fa5ac06df3e~mv2.jpg/v1/crop/x_337,y_634,w_1319,h_753/fill/w_354,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Harmony%204%20All%20logo_G2%20(2).jpg",
    },
    {
      amount: 100,
      impact: "Sponsors one student's music education for a month",
      icon: Users,
      color: "from-gray-900 to-gray-700",
      image: "https://static.wixstatic.com/media/e65032_cd33c8b9dc8d4a4b986f7fa5ac06df3e~mv2.jpg/v1/crop/x_337,y_634,w_1319,h_753/fill/w_354,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Harmony%204%20All%20logo_G2%20(2).jpg",
    },
    {
      amount: 250,
      impact: "Supports a family through our music program for one month",
      icon: Building,
      color: "from-gray-900 to-gray-700",
      image: "https://static.wixstatic.com/media/e65032_cd33c8b9dc8d4a4b986f7fa5ac06df3e~mv2.jpg/v1/crop/x_337,y_634,w_1319,h_753/fill/w_354,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Harmony%204%20All%20logo_G2%20(2).jpg",
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Check for cancelled payment on page load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('cancelled') === 'true') {
      setSubmitStatus('error');
      setErrorMessage('Payment was cancelled. Please try again.');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const amount = customAmount ? parseFloat(customAmount) : selectedAmount
    if (!amount || amount <= 0) {
      setSubmitStatus('error')
      setErrorMessage('Please enter a valid donation amount')
      setIsSubmitting(false)
      return
    }

    if (!formData.donorName || !formData.email) {
      setSubmitStatus('error')
      setErrorMessage('Please fill in all required fields')
      setIsSubmitting(false)
      return
    }

    try {
      const donationData = {
        donorName: formData.donorName,
        email: formData.email,
        phone: formData.phone,
        amount,
        donationType,
        paymentMethod: formData.paymentMethod,
        designation: formData.designation,
        isAnonymous: formData.isAnonymous,
        message: formData.message
      }

      const response = await donationAPI.createCheckoutSession(donationData)

      if (response.success && response.url) {
        // Store donation ID for potential status checking
        setDonationId(response.donationId)
        
        // Redirect to Stripe Checkout
        window.location.href = response.url
      } else {
        setSubmitStatus('error')
        setErrorMessage(response.message || 'Failed to create checkout session')
      }
    } catch (error) {
      console.error('Checkout session creation error:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <span className="text-gray-600">Donate</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Make a Difference</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 px-4">
              Your donation directly supports music education programs, instrument repairs, and community events that
              transform lives and build stronger, more inclusive communities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900 mr-2" />
                Secure Donation
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900 mr-2" />
                Tax Deductible
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900 mr-2" />
                100% Goes to Programs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 rounded-xl sm:rounded-2xl overflow-hidden">
              <CardHeader className="bg-black text-white text-center py-6 sm:py-8">
                <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">Support Our Mission</CardTitle>
                <CardDescription className="text-gray-100 text-base sm:text-lg">
                  Choose your donation amount and frequency
                </CardDescription>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 md:p-8">
                {submitStatus === 'success' && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm sm:text-base text-green-800 font-medium">Thank you for your donation! Your contribution will help make music education accessible to all. You'll receive a confirmation email shortly.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm sm:text-base text-red-800 font-medium">Error: {errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Donation Type Toggle */}
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="bg-gray-100 rounded-full p-1 flex">
                      <button
                        type="button"
                        onClick={() => setDonationType("one-time")}
                        className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
                          donationType === "one-time"
                            ? "bg-gray-900 text-white shadow-md"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        One-time
                      </button>
                      <button
                        type="button"
                        onClick={() => setDonationType("monthly")}
                        className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
                          donationType === "monthly"
                            ? "bg-gray-900 text-white shadow-md"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
                      Select {donationType === "monthly" ? "Monthly" : ""} Donation Amount
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {predefinedAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amount)
                            setCustomAmount("")
                          }}
                          className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 font-semibold transition-all text-sm sm:text-base ${
                            selectedAmount === amount && !customAmount
                              ? "border-gray-900 bg-gray-50 text-gray-700"
                              : "border-gray-200 hover:border-gray-300 text-gray-700"
                          }`}
                        >
                          ${amount}
                          {donationType === "monthly" && <span className="text-xs sm:text-sm block">/month</span>}
                        </button>
                      ))}
                    </div>

                    <div className="text-center">
                      <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">Or enter a custom amount:</p>
                      <div className="max-w-xs mx-auto relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value)
                            setSelectedAmount(0)
                          }}
                          className="pl-8 sm:pl-10 text-center text-base sm:text-lg font-semibold rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Impact Display */}
                  <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg sm:rounded-xl">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 text-center">Your Impact</h4>
                    {(() => {
                      const amount = customAmount ? Number.parseInt(customAmount) : selectedAmount
                      const impact = impactExamples.find((ex) => ex.amount <= amount)
                      if (impact && amount > 0) {
                        return (
                          <div className="text-center">
                            <div className="w-24 h-24 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden">
                              <img
                                src={impact.image}
                                alt={`Impact for $${amount}`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-sm sm:text-base text-gray-700">
                              <strong>${amount}</strong> {impact.impact}
                              {amount > impact.amount && " and more!"}
                            </p>
                          </div>
                        )
                      }
                      return <p className="text-center text-sm sm:text-base text-gray-600">Enter an amount to see your impact</p>
                    })()}
                  </div>

                  {/* Donor Information Form */}
                  <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Donor Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Full Name *</label>
                        <Input 
                          placeholder="Your full name" 
                          className="rounded-lg text-sm sm:text-base"
                          value={formData.donorName}
                          onChange={(e) => handleInputChange('donorName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email Address *</label>
                        <Input 
                          type="email" 
                          placeholder="your.email@example.com" 
                          className="rounded-lg text-sm sm:text-base"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Phone Number</label>
                      <Input 
                        type="tel" 
                        placeholder="(555) 123-4567" 
                        className="rounded-lg text-sm sm:text-base"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Message (Optional)</label>
                      <Input 
                        placeholder="Share why you're donating or any special instructions" 
                        className="rounded-lg text-sm sm:text-base"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                      />
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <input
                        type="checkbox"
                        id="anonymous"
                        checked={formData.isAnonymous}
                        onChange={(e) => handleInputChange('isAnonymous', e.target.checked.toString())}
                        className="text-gray-900 focus:ring-gray-900"
                      />
                      <label htmlFor="anonymous" className="text-xs sm:text-sm text-gray-700">
                        Make this donation anonymous
                      </label>
                    </div>
                  </div>

                  {/* Donation Summary */}
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg sm:rounded-xl mb-6 sm:mb-8">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Donation Summary</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm sm:text-base">
                        <span>Donation Type:</span>
                        <span className="font-medium capitalize">{donationType}</span>
                      </div>
                      <div className="flex justify-between text-sm sm:text-base">
                        <span>Amount:</span>
                        <span className="font-medium">
                          ${customAmount || selectedAmount}
                          {donationType === "monthly" && "/month"}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                        <span>Processing Fee:</span>
                        <span>$0 (covered by Harmony 4 All)</span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between font-semibold text-base sm:text-lg">
                        <span>Total:</span>
                        <span className="text-gray-900">
                          ${customAmount || selectedAmount}
                          {donationType === "monthly" && "/month"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full relative overflow-hidden bg-black text-white py-3 sm:py-4 text-sm sm:text-lg rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold group"
                    disabled={isSubmitting || (!selectedAmount && !customAmount)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {isSubmitting ? (
                      <span className="relative z-10">Processing...</span>
                    ) : (
                      <>
                        <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
                        <span className="relative z-10">Complete {donationType === "monthly" ? "Monthly" : ""} Donation</span>
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-3 sm:mt-4">
                    Your donation is secure and tax-deductible. Tax ID: 12-3456789
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Other Ways to Give</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              There are many ways to support our mission and make a lasting impact in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="text-center shadow-lg border-0 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                  <Gift className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">Instrument Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Donate musical instruments to help students who cannot afford their own.
                </p>
                <Link href="/services">
                  <Button variant="outline" className="rounded-full bg-transparent text-sm sm:text-base">
                    Donate Instruments
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Share your time and skills to support our music education programs.
                </p>
                <Link href="/volunteer">
                  <Button variant="outline" className="rounded-full bg-transparent text-sm sm:text-base">
                    Become a Volunteer
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                  <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">Planned Giving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Create a lasting legacy through bequests, trusts, and other planned giving options.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="rounded-full bg-transparent text-sm sm:text-base">
                    Plan Your Gift
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Your Donations at Work</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              See how your generosity directly impacts the lives of individuals and families in our community through real events and programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <Card className="shadow-xl border-0 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/30dc3d_7a1e0e4d80f248708f5b77587d1a0175~mv2.jpg?dn=harmony4all-1addabbo.jpg"
                  alt="Senator Addabbo Supports Harmony 4 All"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Senator Addabbo Supports Our Mission</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  Senator Addabbo joined us in collecting musical instruments to donate to schools, supporting our mission to make music education accessible to all.
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-gray-100 text-gray-700 text-xs">July 2024</Badge>
                  <Badge className="bg-blue-100 text-blue-700 text-xs">Community Support</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/30dc3d_b5c4336e3ce6419a8f7876904f80a6dc~mv2.png?dn=Instrument Donation Drive.HEIC"
                  alt="Harmony 4 All's First Instrument Donation Drive"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">First Instrument Donation Drive</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  Our inaugural instrument donation drive successfully collected instruments to provide students with the tools they need for their musical journey.
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-gray-100 text-gray-700 text-xs">June 2024</Badge>
                  <Badge className="bg-green-100 text-green-700 text-xs">Instrument Drive</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/30dc3d_aa40dc3c9693403a8515dd76298641a8~mv2.jpg?dn=With Juilliard Teacher at H4A concert.JPG"
                  alt="Harmony 4 All Concert with Juilliard Faculty"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Concert with Juilliard Faculty</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  Willie Morris from Juilliard Faculty joined us for a special concert, showcasing the power of music education and community collaboration.
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-gray-100 text-gray-700 text-xs">May 2024</Badge>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">Juilliard Partnership</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/30dc3d_f16d853d6b354b9fb7b0ed46be6f8483~mv2.jpg?dn=B&J received the awarded artist as citizen from Juilliard.jpg"
                  alt="Bianca and Joshua Receiving Commencement Award"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Commencement Award from Juilliard</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  Bianca and Joshua received the prestigious Commencement Award from the Juilliard Preparatory Division, recognizing their dedication to music and community service.
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-gray-100 text-gray-700 text-xs">May 2024</Badge>
                  <Badge className="bg-yellow-100 text-yellow-700 text-xs">Achievement</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/30dc3d_02f838cac6a24d86946860f03d4b50a4~mv2.jpg?dn=B&J with the NY Philharmonic Youth Orchestra conducted by Maestro Gustavo Dudamel.JPG"
                  alt="NY Philharmonic Youth Orchestra Performance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">NY Philharmonic Youth Orchestra Debut</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  Bianca and Joshua performed with the NY Philharmonic Youth Orchestra, conducted by the renowned Maestro Gustavo Dudamel, showcasing the heights our students can achieve.
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-gray-100 text-gray-700 text-xs">April 2024</Badge>
                  <Badge className="bg-red-100 text-red-700 text-xs">Orchestra Performance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/30dc3d_6f4e1ff4a05d4f889a2616fbb5576dc1~mv2.png?dn=H4A community concert valentines. PNG.PNG"
                  alt="Harmony 4 All Valentines Day Concert"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Valentine's Day Community Concert</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  Our Valentine's Day community concert brought together families and music lovers, creating a warm atmosphere of celebration and musical appreciation.
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-gray-100 text-gray-700 text-xs">February 2024</Badge>
                  <Badge className="bg-pink-100 text-pink-700 text-xs">Community Event</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/media">
              <Button className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                View All Media
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Every Dollar Makes a Difference</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Join hundreds of donors who are helping us build a more inclusive and supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span>Donate Today</span>
            </Button>
            <Link href="/get-involved">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full bg-transparent"
              >
                Other Ways to Help
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
