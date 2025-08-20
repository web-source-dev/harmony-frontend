"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { newsletterAPI } from '../lib/api'
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react"

// Newsletter Section Component
export default function NewsletterSection() {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  
      const handleSubscribe = async () => {
    // Basic validation
    if (!email.trim()) {
      setMessage("Please enter an email address")
      setMessageType("error")
      setTimeout(() => {
        setMessage("")
        setMessageType("")
      }, 3000)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address")
      setMessageType("error")
      setTimeout(() => {
        setMessage("")
        setMessageType("")
      }, 3000)
      return
    }
  
    try {
      setIsLoading(true)
      setMessage("")
      
      const result = await newsletterAPI.subscribe(email)
      
      setMessage(result.message)
      setMessageType("success")
      setEmail("")
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Something went wrong. Please try again.")
      setMessageType("error")
    } finally {
      setIsLoading(false)
      setTimeout(() => {
        setMessage("")
        setMessageType("")
      }, 3000)
    }
  }
  
    return (
      <section className="py-12 sm:py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in">Stay Connected</h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 animate-fade-in-delay px-4">
              Get updates on our programs, success stories, and upcoming events delivered to your inbox.
            </p>
  
            <form onSubmit={(e) => { e.preventDefault(); handleSubscribe(); }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-gray-900 border-0 rounded-full px-4 sm:px-6 py-2 sm:py-3 flex-1 transition-all duration-300 focus:scale-105 text-sm sm:text-base"
                disabled={isLoading}
              />
              <Button 
                type="submit"
                disabled={isLoading}
                className="bg-white text-black hover:bg-gray-100 rounded-full px-6 sm:px-8 py-2 sm:py-3 font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
  
            {message && (
              <div className={`flex items-center justify-center gap-2 mt-3 sm:mt-4 p-2 sm:p-3 rounded-lg mx-4 ${
                messageType === "success" 
                  ? "bg-green-900/20 border border-green-400/30" 
                  : "bg-red-900/20 border border-red-400/30"
              }`}>
                {messageType === "success" ? (
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                )}
                <p className={`text-xs sm:text-sm ${messageType === "success" ? "text-green-400" : "text-red-400"}`}>
                  {message}
                </p>
              </div>  
            )}
  
          </div>
        </div>
      </section>
    )
  }
  