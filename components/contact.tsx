'use client'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { contactAPI } from '../lib/api'

interface Contact {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

    // Contact Section Component
export default function ContactSection() {
        const [isVisible, setIsVisible] = useState(false)
        const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        })
        const [isSubmitting, setIsSubmitting] = useState(false)
        const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
        const [errorMessage, setErrorMessage] = useState('')
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        // Basic validation
        if (!formData.email.trim()) {
            setErrorMessage('Email is required')
            setSubmitStatus('error')
            return
        }

        setIsSubmitting(true)
        setSubmitStatus('idle')
        setErrorMessage('')

        try {
            await contactAPI.submitContact(formData)
            setSubmitStatus('success')
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            })
            
            // Reset success status after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle')
            }, 5000)
        } catch (error: any) {
            setSubmitStatus('error')
            setErrorMessage(error.response?.data?.message || 'Failed to send message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        const element = document.getElementById("contact-section")
        if (element) observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return (
        <section id="contact-section" className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div
                    className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Get in Touch</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Ready to learn more about our programs or get involved? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
                    <Card
                        className={`bg-white shadow-xl border-0 rounded-2xl overflow-hidden transition-all duration-1000 delay-300 hover:shadow-2xl ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                            }`}
                    >
                        <CardHeader className="p-4 sm:p-6">
                            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                            <CardDescription className="text-sm sm:text-base">Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="flex items-center gap-2 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                                    <p className="text-green-800 font-medium text-sm sm:text-base">Message sent successfully! We'll get back to you soon.</p>
                                </div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <div className="flex items-center gap-2 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                                    <p className="text-red-800 font-medium text-sm sm:text-base">{errorMessage}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <Input
                                            placeholder="Your first name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="rounded-lg transition-all duration-300 focus:scale-105 text-sm sm:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <Input
                                            placeholder="Your last name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="rounded-lg transition-all duration-300 focus:scale-105 text-sm sm:text-base"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                    <Input
                                        type="email"
                                        placeholder="your.email@example.com"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="rounded-lg transition-all duration-300 focus:scale-105 text-sm sm:text-base"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <Input
                                        type="tel"
                                        placeholder="(555) 123-4567"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="rounded-lg transition-all duration-300 focus:scale-105 text-sm sm:text-base"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <Input
                                        placeholder="What's this about?"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="rounded-lg transition-all duration-300 focus:scale-105 text-sm sm:text-base"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <Textarea
                                        placeholder="Tell us how we can help you or how you'd like to get involved..."
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="rounded-lg min-h-[100px] sm:min-h-[120px] transition-all duration-300 focus:scale-105 text-sm sm:text-base"
                                    />
                                </div>
                                <Button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-black hover:bg-gray-800 text-white rounded-lg py-2 sm:py-3 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="space-y-6 sm:space-y-8">
                        {[
                            {
                                icon: MapPin,
                                title: "Visit Us",
                                content: "New York City, NY\nUnited States",
                            },
                            { icon: Phone, title: "Call Us", content: "Contact us for inquiries\nand support" },
                            { icon: Mail, title: "Email Us", content: "media@harmony4all.org\nGet in touch with our team" },
                        ].map((item, index) => (
                            <Card
                                key={index}
                                className={`bg-white shadow-lg border-0 rounded-2xl transition-all duration-1000 hover:shadow-xl hover:scale-105 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                    }`}
                                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                            >
                                <CardContent className="p-4 sm:p-6">
                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">{item.title}</h3>
                                            <p className="text-gray-600 whitespace-pre-line text-sm sm:text-base">{item.content}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        <div
                            className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 hover:shadow-xl ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                                }`}
                            style={{ transitionDelay: "800ms" }}
                        >
                            <div className="h-40 sm:h-48 relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436351647!2d-74.11976404999999!3d40.6976634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1703123456789!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Harmony 4 All Location in New York City"
                                    aria-label="Interactive map showing Harmony 4 All location in New York City"
                                ></iframe>
                                <div className="absolute top-2 right-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-white/90 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-xs sm:text-sm"
                                        onClick={() => window.open('https://maps.google.com/?q=New+York+City+NY', '_blank')}
                                        aria-label="Open map in new window"
                                    >
                                        <MapPin className="h-3 w-3 mr-1" aria-hidden="true" />
                                        Open
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}