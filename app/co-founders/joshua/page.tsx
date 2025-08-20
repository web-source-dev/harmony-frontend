"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  Music, 
  Star, 
  Globe,
  BookOpen,
  Mic,
  Trophy,
  Guitar,
  ArrowLeft,
  Mail,
  MapPin,
  Calendar,
  Award,
  Users,
  Code,
  Calculator
} from "lucide-react"

export default function JoshuaPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const achievements = [
    "Global Youth Ambassador at the Foundation of Support for the UN",
    "Sophomore at Hunter College High School",
    "Juilliard Graduate for Saxophone",
    "Vargas-Vetter/Ukena Fellowship Recipient (2022)",
    "Tutor through Relume Organization",
    "Member of Jazz at Lincoln Center's Youth Orchestra",
    "Member of Mary Lou Williams Combo",
    "Youngest member of NY Youth Symphony's Jazz Band",
    "Leader of Quddus Quintet",
    "Senior Jazz Ensemble Member"
  ]

  const performances = [
    "Carnegie Hall",
    "Lincoln Center",
    "United Nations", 
    "Harvard Medical School",
    "Peter Jay Sharp Theatre",
    "Birdland Jazz Club",
    "Dizzy's Club",
    "The Times Center",
    "Shapeshifter Lab"
  ]

  const longBio = [
    "As an inquisitive child, Joshua has always felt strongly about the importance of education for the youth and is a firm advocate for the accessibility of education, particularly music education, within underrepresented groups and minorities. Joshua tutors through the Relume Organization, partnered with schools in Harlem to support educationally disadvantaged children. In 2022, Joshua was awarded the Vargas-Vetter/Ukena Fellowship, receiving a significant stipend and professional mentorship to further his musical endeavors.",
    "Joshua has performed at prestigious venues such as Carnegie Hall, Lincoln Center, the United Nations, Harvard Medical School, Peter Jay Sharp Theatre, Birdland Jazz Club, Dizzy's Club, The Times Center, Shapeshifter Lab, and more. He is a member of Jazz at Lincoln Center's Youth Orchestra and Mary Lou Williams Combo and is the youngest member of the New York Youth Symphony's Jazz Band. Additionally, Joshua runs his own Jazz Quintet, the Quddus Quintet, and is part of the Senior Jazz Ensemble at his high school.",
    "As a math enthusiast, Joshua participates in numerous math competitions, including the AMC 8/10/12, CML, MATHCOUNTS, Purple Comet, and the Trinity Math Competition."
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
            <Link href="/about" className="text-black hover:text-gray-800">
              About Us
            </Link>
            
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Joshua Quddus</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: `url('https://static.wixstatic.com/media/8e9eb3_1f1fb0738c554f75b5c0145d843e7995~mv2.jpg/v1/fill/w_1920,h_1058,al_c,q_90,enc_avif,quality_auto/8e9eb3_1f1fb0738c554f75b5c0145d843e7995~mv2.jpg')`
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 sm:border-8 border-white ring-2 sm:ring-4 ring-gray-100">
                <img
                  src="https://static.wixstatic.com/media/8e9eb3_e381c538f1a340da9e19e44a919d000f~mv2.jpg/v1/crop/x_0,y_0,w_176,h_176/fill/w_246,h_246,al_c,lg_1,q_80,enc_avif,quality_auto/8e9eb3_e381c538f1a340da9e19e44a919d000f~mv2.jpg"
                  alt="Joshua Quddus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center shadow-lg">
                <Guitar className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center lg:text-left text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-lg">Joshua Quddus</h1>
              <Badge className="bg-white text-black text-sm sm:text-lg px-4 sm:px-6 py-1 sm:py-2 mb-4 sm:mb-6">
                Co-Founder
              </Badge>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl drop-shadow-lg">
                Global Youth Ambassador, accomplished saxophonist, educator, and mathematics enthusiast
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">New York City</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <Music className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Saxophone</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Juilliard Graduate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="bg-white py-3 sm:py-4 border-b">
        <div className="container mx-auto px-4">
          <Link href="/about">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">
              <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Back to About
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
              {/* Left Column - Biography */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {/* Biography */}
                <Card className="shadow-lg border-0 rounded-xl sm:rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
                      <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 mr-3 sm:mr-4 text-black" />
                      Biography
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    {longBio.map((paragraph, i) => (
                      <p key={i} className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </CardContent>
                </Card>

                {/* Achievements */}
                <Card className="shadow-lg border-0 rounded-xl sm:rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
                      <Trophy className="h-6 w-6 sm:h-8 sm:w-8 mr-3 sm:mr-4 text-black" />
                      Key Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                          <Star className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 mt-1 flex-shrink-0" />
                          <span className="text-xs sm:text-sm md:text-base text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Venues */}
                <Card className="shadow-lg border-0 rounded-xl sm:rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
                      <Mic className="h-6 w-6 sm:h-8 sm:w-8 mr-3 sm:mr-4 text-black" />
                      Performance Venues
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {performances.map((venue, i) => (
                        <div key={i} className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                          <Music className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                          <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">{venue}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Quick Info */}
              <div className="space-y-6 sm:space-y-8">
                {/* Quick Stats */}
                <Card className="shadow-lg border-0 rounded-xl sm:rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">Sophomore at Hunter College High School</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Music className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">Juilliard Graduate for Saxophone</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">Global Youth Ambassador</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">Mathematics Enthusiast</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">Tutor through Relume Organization</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Code className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">Programmer & Educator</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact/Connect */}
                <Card className="shadow-lg border-0 rounded-xl sm:rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Connect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      Interested in learning more about Joshua's work or supporting Harmony 4 All?
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      <Link href="/contact">
                        <Button className="w-full bg-black hover:bg-gray-800 text-sm sm:text-base">
                          <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Get in Touch
                        </Button>
                      </Link>
                      <Link href="/donate">
                        <Button variant="outline" className="w-full border-black text-black hover:bg-gray-50 text-sm sm:text-base">
                          <Heart className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Support Our Mission
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Support Joshua's Vision</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
            Join Joshua in his mission to make music education accessible to all students. 
            Your support helps us continue this important work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full">
                <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Donate Now
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
