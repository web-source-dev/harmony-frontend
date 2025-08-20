"use client"

import Link from "next/link"
import { Heart, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { usePathname } from "next/navigation"

export const Footer = () => {
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const socialLinks = [
    { 
      icon: Facebook, 
      label: "Follow us on Facebook", 
      href: "https://www.facebook.com/harmony4all.org?mibextid=kFxxJD",
    },
    { 
      icon: Youtube, 
      label: "Follow us on Youtube", 
      href: "https://www.youtube.com/watch?v=CQXnJpY_zR8&ab_channel=Harmony4All",
    },
    { 
      icon: Instagram, 
      label: "Follow us on Instagram", 
      href: "https://www.instagram.com/_harmony4all_/",
    },
    { 
      icon: Linkedin, 
      label: "Follow us on LinkedIn", 
      href: "https://www.linkedin.com/company/harmony4all/?viewAsMember=true",
    },
  ]

  const quickLinks = [
    { text: "About Us", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Blog", href: "/blog" },
    { text: "Media", href: "/media" },
    { text: "Get Involved", href: "/get-involved" },
    { text: "Contact", href: "/contact" },
    { text: "Privacy Policy", href: "/privacy" },
  ]

  const contactInfo = [
    { icon: Mail, text: "media@harmony4all.org", href: "mailto:media@harmony4all.org" },
    { icon: Phone, text: "Contact us for inquiries", href: "#" },
    { icon: MapPin, text: "New York City, NY, United States", href: "#" },
  ]

  return (
    <footer className="bg-black text-white border-t border-white/10 py-6 sm:py-8 lg:py-12" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Section - Full width on mobile, spans 6 columns on desktop */}
          <div className="lg:col-span-6">
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
              <div className="mb-4 sm:mb-0 sm:mr-6">
                <img 
                  src="https://static.wixstatic.com/media/d717d4_3cc4d0b71fe04619ab30bb4bcfbe4224~mv2.png"
                  alt="Harmony 4 All Logo"
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl object-contain shadow-2xl"
                />
              </div>
              <div className="flex-1">
                <p className="text-white/70 leading-relaxed text-sm sm:text-base max-w-none lg:max-w-md">
                  Empowering individuals with disabilities through comprehensive therapy, education, and community support.
                  Building a more inclusive world, one life at a time.
                </p>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6 sm:mb-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center text-white/70 hover:text-white transition-colors duration-200">
                  <div className="p-1.5 bg-white/10 rounded-lg mr-3 flex-shrink-0">
                    <contact.icon className="h-4 w-4 text-white/80" />
                  </div>
                  {contact.href !== "#" ? (
                    <Link href={contact.href} className="text-sm sm:text-base break-all">
                      {contact.text}
                    </Link>
                  ) : (
                    <span className="text-sm sm:text-base">{contact.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links - Full width on mobile, spans 3 columns on desktop */}
          <nav aria-labelledby="quick-links-heading" className="lg:col-span-3">
            <h4 id="quick-links-heading" className="text-lg font-semibold mb-4 sm:mb-6 text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 text-white/70" role="list">
              {quickLinks.map((link, index) => {
                const active = isActiveLink(link.href)
                return (
                  <li key={index} role="listitem">
                    <Link 
                      href={link.href} 
                      className={`relative inline-flex items-center transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus-visible:outline-none text-sm sm:text-base ${
                        active ? "text-white font-semibold" : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className={`inline-block ${active ? 'border-b-2 border-white pb-0.5' : ''}`}>{link.text}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Candid Badge & Social Media - Full width on mobile, spans 3 columns on desktop */}
          <div className="lg:col-span-3">
            {/* Candid Platinum Transparency Badge */}
            <div className="mb-6 sm:mb-8">
              <Link 
                href="https://www.guidestar.org/profile/shared/612fc49e-8913-45bf-b8f8-cc6d46762abb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:scale-105"
                aria-label="View our Candid Platinum Transparency profile"
              >
                <img 
                  src="https://static.wixstatic.com/media/ef9da7_441d25464f0d457fa3e7dec5ab394004~mv2.png/v1/fill/w_151,h_151,al_c,lg_1,q_85,enc_avif,quality_auto/ef9da7_441d25464f0d457fa3e7dec5ab394004~mv2.png"
                  alt="Candid Platinum Transparency 2025"
                  className="w-24 h-24 object-contain"
                />
              </Link>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-white">Connect With Us</h4>
              <div className="flex flex-wrap gap-3 sm:gap-4" role="list" aria-label="Social media links">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full transition-all duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:outline-none flex-shrink-0"
                    aria-label={social.label}
                    role="listitem"
                  >
                    <social.icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 mt-8 sm:mt-10 lg:mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left order-2 sm:order-1">
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                © 2024 Harmony 4 All. All rights reserved. | EIN: 93-2460195
              </p>
            </div>
            <div className="flex items-center justify-center sm:justify-end space-x-2 text-white/60 text-xs sm:text-sm order-1 sm:order-2">
              <span>With</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" aria-label="love" />
              <span>and innovation — from RTNGLOBAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
