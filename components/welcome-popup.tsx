"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { X, Heart, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { welcomePopupAPI } from '../lib/api'

interface WelcomePopupProps {
  isOpen: boolean
  onClose: () => void
}

export function WelcomePopup({ isOpen, onClose }: WelcomePopupProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cellNumber: "",
    promotionalUpdates: false,
    agreeToTerms: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.cellNumber.trim()) {
      setError("Please fill in all required fields")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address")
      return
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to the terms and conditions")
      return
    }
    
    try {
      setIsLoading(true)
      setError("")
      
      const result = await welcomePopupAPI.submitForm(formData)
      
      setSuccess(result.message)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        cellNumber: "",
        promotionalUpdates: false,
        agreeToTerms: false,
      })
      setTimeout(() => {
        onClose()
        setSuccess("")
      }, 2000)
    } catch (error: any) {
      console.error("Form submission error:", error)
      setError(error.response?.data?.message || "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-xl bg-white rounded-2xl shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close popup"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>

        <CardContent className="p-8 pt-12">
                    {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://static.wixstatic.com/media/8e9eb3_89823dd9b54c45a997ebbf6f4419ea19~mv2.png/v1/fill/w_391,h_144,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8e9eb3_89823dd9b54c45a997ebbf6f4419ea19~mv2.png"
                alt="Harmony 4 All Logo"
                className="w-full max-w-xs h-auto"
              />
            </div>
            <hr className="border-gray-300 mb-6" />
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-center text-gray-900 mb-6">
            Thank you for joining our mission and get a free gift!
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cell Number <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                value={formData.cellNumber}
                onChange={(e) => handleInputChange("cellNumber", e.target.value)}
                placeholder="+13245667890"
                className="w-full border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.promotionalUpdates}
                  onChange={(e) => handleInputChange("promotionalUpdates", e.target.checked)}
                  className="mt-1 h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <span className="text-sm text-gray-700">Want to receive promotional updates</span>
              </label>

              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
                  className="mt-1 h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                  required
                />
                <span className="text-sm text-gray-700">
                  By checking the box, you indicate that you've read our{" "}
                  <Link href="/privacy" className="text-black underline hover:text-gray-700">
                    Privacy Policy
                  </Link>{" "}
                  and agree to our{" "}
                  <Link href="/terms" className="text-black underline hover:text-gray-700">
                    Terms and Use
                  </Link>
                </span>
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg mt-2">
                <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg mt-2">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <p className="text-green-800 text-sm">{success}</p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-full font-medium mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!formData.agreeToTerms || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
