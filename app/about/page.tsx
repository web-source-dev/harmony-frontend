"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Target, Eye, Users, Music, Award, Star, Calendar, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      name: "Bianca Quddus",
      role: "Co-Founder",
      bio: "Bianca Quddus is a Global Youth Ambassador to the Foundation of Support for the United Nations, a student at the New York City Specialized High School, The Bronx High School of Science, and a clarinet student in the Juilliard School's Preparatory Division.",
      image: "https://static.wixstatic.com/media/8e9eb3_983fb01f0974424ea71f75aeb681e5cb~mv2.jpg/v1/crop/x_0,y_0,w_176,h_176/fill/w_246,h_246,al_c,lg_1,q_80,enc_avif,quality_auto/BiancaQuddus.jpg",
      achievements: ["Global Youth Ambassador", "Bronx High School of Science", "Juilliard Preparatory Division"]
    },
    {
      name: "Joshua Quddus",
      role: "Co-Founder",
      bio: "Joshua Quddus is a Global Youth Ambassador to the Foundation of Support for the United Nations, a sophomore at the prestigious Hunter College High School, and a saxophone student at the Juilliard School's Preparatory Division. In addition, he is also an educator, programmer, and a mathematics enthusiast.",
      image: "https://static.wixstatic.com/media/8e9eb3_e381c538f1a340da9e19e44a919d000f~mv2.jpg/v1/crop/x_0,y_0,w_176,h_176/fill/w_246,h_246,al_c,lg_1,q_80,enc_avif,quality_auto/8e9eb3_e381c538f1a340da9e19e44a919d000f~mv2.jpg",
      achievements: ["Global Youth Ambassador", "Hunter College High School", "Juilliard Preparatory Division"]
    }
  ]

  const storyMilestones = [
    { 
      year: "Elementary School", 
      event: "Began musical journey at PS100Q in South Ozone Park, Queens",
      details: "Introduced to music through recorder by inspiring teacher April Rachmuth",
      image: "https://static.wixstatic.com/media/30dc3d_39ef049e71884adfb38ba96bad3ec69c~mv2.jpeg?dn=With elementary teacher who introduced B&J to their instruments and the world of music - A"
    },
    { 
      year: "Carnegie Hall", 
      event: "Performed on-stage in Carnegie Hall's prestigious Link-Up program",
      details: "Played alongside a professional orchestra, solidifying their commitment to music",
      image: "https://static.wixstatic.com/media/30dc3d_da42d04017554969abe4becb9d7c412d~mv2.png?dn=After a performance at Peter Jay Sharp Theatre.HEIC"
    },
    { 
      year: "Instrument Access", 
      event: "Faced limitations with only clarinets and saxophones available",
      details: "Teacher taught Bianca clarinet and Joshua saxophone to continue musical education",
      image: "https://static.wixstatic.com/media/30dc3d_48dd3451c59c4497ba617d56f5bcab77~mv2.jpg?dn=Bianca chambers performance at Juilliard.JPG"
    },
    { 
      year: "Juilliard MAP", 
      event: "Enrolled in the Juilliard Music Advancement Program",
      details: "Deepened understanding of barriers within the music community and education",
      image: "https://static.wixstatic.com/media/30dc3d_f16d853d6b354b9fb7b0ed46be6f8483~mv2.jpg?dn=B&J received the awarded artist as citizen from Juilliard.jpg"
    },
    { 
      year: "Foundation", 
      event: "Founded Harmony 4 All to break down barriers in music education",
      details: "Committed to making music education accessible to all aspiring young musicians",
      image: "https://static.wixstatic.com/media/30dc3d_b5c4336e3ce6419a8f7876904f80a6dc~mv2.png?dn=Instrument Donation Drive.HEIC"
    }
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
            <span className="text-gray-600">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-cover bg-top bg-no-repeat" style={{
        backgroundImage: `url('https://static.wixstatic.com/media/8e9eb3_1f1fb0738c554f75b5c0145d843e7995~mv2.jpg/v1/fill/w_1692,h_932,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8e9eb3_1f1fb0738c554f75b5c0145d843e7995~mv2.jpg')`
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
         <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg text-center">About Us</h1>
         
         </div>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-6xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center space-x-2 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                <Music className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-semibold text-sm sm:text-base">ABOUT US</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Empowering Through Music</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                A New York City based, 501(c)(3) nonprofit organization committed to making music education accessible to underserved students.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Text Content */}
              <div className="space-y-6 sm:space-y-8">
               

                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Services</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    We offer free instrument rentals and repairs to students, ensuring that all students have the tools 
                    they need to explore and develop their musical talents.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We provide musical curriculum to teachers, ensuring that all students have access to quality 
                    music education regardless of their school's resources.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                      <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Impact</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We actively accept donations to further our mission of supporting underfunded public schools 
                    in New York City. Your contributions help us empower students by providing access to quality 
                    musical instruments and education, ensuring that music education knows no boundaries.
                  </p>
                </div>
              </div>

              {/* Enhanced Image Section */}
              <div className="relative">
                {/* Main Circular Image with Animation */}
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl mb-6 sm:mb-8 transform hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://static.wixstatic.com/media/8e9eb3_3834f19b1e524414910533bdd46c701b~mv2.jpg/v1/fill/w_560,h_562,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5751_edited.jpg"
                      alt="Young musicians playing clarinet and saxophone"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Music className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                  </div>
                </div>
                
                {/* Smaller Overlapping Circular Image */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl border-2 sm:border-4 border-white hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://static.wixstatic.com/media/8e9eb3_e1e9a6056e3c44d0ada5dfcdfa45e46e~mv2.jpg/v1/fill/w_248,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5750_edited_edited.jpg"
                    alt="Young musicians smiling together"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-0 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gray-400 rounded-full opacity-60 animate-ping"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-gray-600 rounded-full opacity-60 animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-bottom opacity-20" style={{
          backgroundImage: `url("https://static.wixstatic.com/media/8e9eb3_1f1fb0738c554f75b5c0145d843e7995~mv2.jpg/v1/fill/w_1920,h_1058,al_c,q_90,enc_avif,quality_auto/8e9eb3_1f1fb0738c554f75b5c0145d843e7995~mv2.jpg")`
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 font-serif">Our Mission</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto px-4">
              We are dedicated to breaking down barriers in music education for underserved communities. 
              Through innovative programs, comprehensive resources, and inclusive platforms, we provide access, 
              development, and empowerment through the universal language of music.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 12v-2zm0 4L56 0h2L40 16v-2zm0 4L60 0h2L40 20v-2zm0 4L64 0h2L40 24v-2zm0 4L68 0h2L40 28v-2zm0 4L72 0h2L40 32v-2zm0 4L76 0h2L40 36v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-6xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center space-x-2 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-semibold text-sm sm:text-base">OUR VISION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">A World of Musical Opportunity</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                We envision a world where every aspiring musician, regardless of their background or circumstances, 
                has equal access to quality music education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Vision Card 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Equal Access</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                  Breaking down barriers to ensure every child, regardless of their background or circumstances, 
                  has the opportunity to pursue their musical dreams.
                </p>
              </div>

              {/* Vision Card 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <Music className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Creative Expression</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                  Fostering creativity and artistic expression through comprehensive music education programs 
                  that inspire the next generation of musicians.
                </p>
              </div>

              {/* Vision Card 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Community Impact</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                  Building confidence and contributing to the rich cultural tapestry of our communities 
                  through the universal language of music.
                </p>
              </div>
            </div>

            {/* Main Vision Statement */}
            <div className="mt-8 sm:mt-12 md:mt-16 bg-black rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center shadow-2xl">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Building a Harmonious Future</h3>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
                  Through our innovative programs, comprehensive resources, and inclusive platforms, we provide access, 
                  development, and empowerment through the universal language of music. We believe in creating a world 
                  where music education knows no boundaries and every voice has the opportunity to be heard.
                </p>
                <div className="mt-6 sm:mt-8 flex justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <Music className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-6xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center space-x-2 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-semibold text-sm sm:text-base">OUR VALUES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">The Foundation of Our Mission</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Our core values guide everything we do, shaping our approach to music education and community impact.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-8 sm:mb-12 md:mb-16">
              {/* Values Content */}
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Inclusivity</h3>
                      <p className="text-sm sm:text-base text-gray-500">Ensuring music education is accessible to all</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We believe that every child deserves the opportunity to explore their musical potential, 
                    regardless of their background, abilities, or circumstances. Our programs are designed 
                    to welcome and support students from all walks of life.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                      <Target className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Accessibility</h3>
                      <p className="text-sm sm:text-base text-gray-500">Removing barriers to participation</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We actively work to eliminate financial, physical, and social barriers that prevent 
                    students from accessing quality music education. From free instrument rentals to 
                    adaptive programs, we ensure everyone can participate.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                      <Award className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Empowerment</h3>
                      <p className="text-sm sm:text-base text-gray-500">Building confidence through music</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Music has the power to transform lives and build confidence. We empower students 
                    by providing them with the skills, resources, and support they need to discover 
                    their voice and express themselves through music.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                      <Music className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Creativity</h3>
                      <p className="text-sm sm:text-base text-gray-500">Fostering artistic expression</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We celebrate and nurture the creative spirit in every student. Through music, 
                    we encourage artistic expression, innovative thinking, and the development of 
                    unique musical voices that contribute to our rich cultural tapestry.
                  </p>
                </div>
              </div>

              {/* Enhanced Image Section */}
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://static.wixstatic.com/media/8e9eb3_12bc08b163d4457c8ad38ec76bcbb751~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8e9eb3_12bc08b163d4457c8ad38ec76bcbb751~mv2.jpg"
                    alt="Orchestra"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Value Icons */}
                <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="absolute top-1/2 -left-4 sm:-left-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-4 sm:-right-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
                  <Music className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                </div>
              </div>
            </div>

            {/* Values Summary */}
            <div className="bg-black rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center shadow-2xl">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">The Power of Music to Inspire, Unite, and Enrich</h3>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 mb-6 sm:mb-8">
                  We believe in the transformative power of music to inspire, unite, and enrich lives. 
                  Our values are not just words—they are the principles that drive every decision we make 
                  and every program we create.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { icon: Users, label: "Inclusivity" },
                    { icon: Target, label: "Accessibility" },
                    { icon: Award, label: "Empowerment" },
                    { icon: Music, label: "Creativity" }
                  ].map((value, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <p className="font-semibold text-sm sm:text-base">{value.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              What We Do
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <div
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <Music className="h-5 w-5 sm:h-6 sm:w-6 text-black mr-2 sm:mr-3" />
                  Free Instrument Rentals & Repairs
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Understanding the financial challenges that can prevent students from pursuing formal musical studies, 
                  Harmony 4 All works tirelessly to bridge this gap by providing necessary resources and support to those in need. 
                  We offer free instrument rentals and repairs to students, ensuring that all students have the tools they need 
                  to explore and develop their musical talents.
                </p>
              </div>
              
              <div
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-black mr-2 sm:mr-3" />
                  Musical Curriculum Support
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We provide musical curriculum to teachers, ensuring that all students have access to quality music education 
                  regardless of their school's resources. Our goal is to create a harmonious environment of inclusivity, education, 
                  and philanthropy, inspiring and empowering the next generation of musicians.
                </p>
              </div>

              <div
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-black mr-2 sm:mr-3" />
                  Supporting Underfunded Schools
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We actively accept donations to further our mission of supporting underfunded public schools in New York City. 
                  Your contributions help us empower students by providing access to quality musical instruments and education, 
                  ensuring that music education knows no boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-200">
        <div className="container mx-auto px-4 ">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Get to Know Us
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h3>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  <p>
                    Harmony 4 All was founded by Bianca and Joshua Quddus, who began their musical journey at PS100Q, 
                    a public elementary school in South Ozone Park, Queens, New York. Their inspiring music teacher, 
                    April Rachmuth, introduced them to the joy of music through the recorder, igniting a passion for 
                    music that shaped their future.
                  </p>
                  <p>
                    Their dedication and love for music earned them a unique opportunity to perform on-stage in Carnegie 
                    Hall's prestigious Link-Up program, where they played alongside a professional orchestra. This 
                    unforgettable experience solidified their commitment to music.
                  </p>
                  <p>
                    As they progressed through elementary school, Bianca and Joshua faced limitations in access to 
                    advanced musical instruments. Despite the availability of only clarinets and saxophones, their 
                    music teacher taught Bianca the clarinet and Joshua the saxophone, allowing them to continue 
                    their musical education.
                  </p>
                </div>
              </div>
              
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="bg-gray-700 rounded-2xl p-6 sm:p-8">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">The Turning Point</h4>
                  <p className="text-sm sm:text-base text-white leading-relaxed mb-3 sm:mb-4">
                    Witnessing many of their friends abandon their musical pursuits due to a lack of resources 
                    deeply affected Bianca and Joshua. This fueled their determination to make a difference.
                  </p>
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    Enrolling in the Juilliard Music Advancement Program further deepened their understanding 
                    of the barriers within the music community and music education. Grateful for their opportunities, 
                    Bianca and Joshua realized that not everyone had the same access to music education.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Timeline */}
            <div className="space-y-6 sm:space-y-8">
              {storyMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 sm:space-x-6 transition-all duration-1000 hover:scale-105 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center">
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={milestone.image}
                          alt={milestone.year}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">{milestone.year}</div>
                        <div className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">{milestone.event}</div>
                        <p className="text-sm sm:text-base text-gray-600">{milestone.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`text-center mt-8 sm:mt-12 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div className="bg-white text-gray-900 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-200">
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
                    Our Commitment
                  </h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
                  <p className="text-gray-700">
                    Driven by their passion and belief in the transformative power of education, they founded 
                    <span className="font-semibold"> Harmony 4 All</span>. Their mission is to break down the barriers 
                    hindering access to music education for aspiring young musicians from all backgrounds.
                  </p>
                  
                  <p className="text-gray-700">
                    Through fundraising and resource distribution, Harmony 4 All provides essential support to underserved communities, 
                    ensuring every child has the opportunity to discover and develop their musical talents. 
                    <span className="font-semibold">Bianca and Joshua</span> are committed to enriching lives, 
                    instilling discipline, and fostering creativity through the power of music.
                  </p>
                </div>
                
                <div className="mt-8 sm:mt-10">
                  <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gray-100 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 border border-gray-300">
                    <Music className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-600" />
                    <span className="text-sm sm:text-base md:text-xl font-semibold text-gray-800">
                      Join us in our mission to create a positive impact, one note at a time.
                    </span>
                    <Music className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-serif">Our Team</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Harmony 4 All brings together a talented team of musicians, educators, and advocates committed to making 
              music education accessible to all. Through innovative programs, comprehensive resources, and inclusive 
              platforms, we empower learners of all backgrounds, fostering a harmonious future where music education 
              knows no boundaries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className={`shadow-xl border-0 rounded-3xl overflow-hidden transition-all duration-1000 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="relative">
                  <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center shadow-lg">
                    <Music className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">{member.name}</h3>
                    <Badge className="bg-black text-white text-sm sm:text-lg px-4 sm:px-6 py-1 sm:py-2 mb-3 sm:mb-4">
                      {member.role}
                    </Badge>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                      {member.bio}
                    </p>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                        <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {member.achievements.slice(0, 4).map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <Star className="h-3 w-3 text-yellow-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-xs sm:text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Notable Venues */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Notable Venues
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          "Carnegie Hall",
                          "Lincoln Center", 
                          "The Juilliard School",
                          "United Nations"
                        ].map((venue, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Music className="h-3 w-3 text-gray-500" />
                            <span className="text-gray-700 text-xs sm:text-sm">{venue}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 text-center">
                    <Link href={`/co-founders/${index === 0 ? 'bianca' : 'joshua'}`}>
                      <Button className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base">
                        Learn More About {member.name.split(' ')[0]}
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Stats */}
          <div
            className={`mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            {[
              { number: "2", label: "Co-Founders", icon: Users },
              { number: "100%", label: "Music Focused", icon: Music },
              { number: "NYC", label: "Based", icon: MapPin },
              { number: "501(c)(3)", label: "Nonprofit", icon: Award },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-black transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Information Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Organization Information</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Learn more about our nonprofit status, legal information, and how we operate to serve our community.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {/* Map Section */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 sm:h-80 md:h-full relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436351647!2d-74.11976404999999!3d40.69766374999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1703123456789!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Harmony 4 All Location - New York City"
                  ></iframe>
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg border border-gray-200">
                    <div className="flex items-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mr-1 sm:mr-2 animate-pulse"></div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-800">Harmony 4 All</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">New York City, NY</p>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 sm:p-8 border-b border-gray-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Organization Details</h3>
                  <p className="text-sm sm:text-base text-gray-600">Complete transparency in our operations and governance</p>
                </div>
                
                <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                  {/* Legal Status */}
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 mr-2" />
                      Legal Status
                    </h4>
                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="font-medium">Nonprofit Classification:</span>
                        <Badge className="bg-gray-100 text-gray-800 border-gray-300 text-xs sm:text-sm mt-1 sm:mt-0">501(c)(3) Tax-Exempt</Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="font-medium">EIN Number:</span>
                        <span className="font-mono text-xs sm:text-sm">93-2460195</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="font-medium">Incorporation:</span>
                        <span>New York State</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 mr-2" />
                      Contact Information
                    </h4>
                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="font-medium">Address:</span>
                        <span>New York City, NY, United States</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="font-medium">Email:</span>
                        <a href="mailto:media@harmony4all.org" className="text-gray-600 hover:text-gray-800 font-medium">media@harmony4all.org</a>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="font-medium">Website:</span>
                        <a href="https://www.harmony4all.org" className="text-gray-600 hover:text-gray-800 font-medium">www.harmony4all.org</a>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="font-medium">Phone:</span>
                        <span>Contact us for inquiries</span>
                      </div>
                    </div>
                  </div>

                  {/* Financial Transparency */}
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 mr-2" />
                      Financial Transparency
                    </h4>
                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="font-medium">Tax Returns:</span>
                        <Badge className="bg-gray-100 text-gray-800 border-gray-300 text-xs sm:text-sm mt-1 sm:mt-0">Available upon request</Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="font-medium">Annual Reports:</span>
                        <Badge className="bg-gray-100 text-gray-800 border-gray-300 text-xs sm:text-sm mt-1 sm:mt-0">Published annually</Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="font-medium">Donations:</span>
                        <Badge className="bg-gray-100 text-gray-800 border-gray-300 text-xs sm:text-sm mt-1 sm:mt-0">Tax-deductible</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Governance */}
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 mr-2" />
                      Governance
                    </h4>
                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <span className="font-medium">Board of Directors:</span>
                        <span className="text-right">Dedicated volunteers</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <span className="font-medium">Executive Leadership:</span>
                        <span className="text-right">Co-Founders:<br/>Bianca & Joshua Quddus</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <span className="font-medium">Advisory Council:</span>
                        <span className="text-right">Music education experts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Support Our Mission
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Your contributions help us empower students by providing access to quality musical instruments and education. 
            Join us in creating a harmonious environment of inclusivity, education, and philanthropy.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/donate">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
              >
                <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span>Donate Now</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full bg-transparent transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

