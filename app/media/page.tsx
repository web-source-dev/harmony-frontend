"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Filter, Download } from "lucide-react"

const PLACEHOLDER = "https://static.wixstatic.com/media/e65032_cd33c8b9dc8d4a4b986f7fa5ac06df3e~mv2.jpg/v1/crop/x_337,y_634,w_1319,h_753/fill/w_354,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Harmony%204%20All%20logo_G2%20(2).jpg"

// Import the media data
import mediaData from './harmony4all_media_images.json'

export default function MediaPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [mediaItems, setMediaItems] = useState<any[]>([])
  const [visibleItems, setVisibleItems] = useState(12)

  useEffect(() => {
    // Transform the JSON data to match our component structure
    const transformedData = mediaData.map((item, index) => ({
      type: 'photo',
      title: item.title,
      description: item.text,
      thumbnail: item.image_url,
      date: item.text,
      category: getCategoryFromTitle(item.title),
      featured: index < 4 // First 4 items are featured
    }))
    
    setMediaItems(transformedData)
  }, [])

  // Function to determine category based on title
  const getCategoryFromTitle = (title: string): string => {
    const lowerTitle = title.toLowerCase()
    
    if (lowerTitle.includes('concert') || lowerTitle.includes('performance') || lowerTitle.includes('recital')) {
      return 'programs'
    }
    if (lowerTitle.includes('donation') || lowerTitle.includes('drive') || lowerTitle.includes('senator') || lowerTitle.includes('united nations')) {
      return 'events'
    }
    if (lowerTitle.includes('volunteer') || lowerTitle.includes('community')) {
      return 'volunteers'
    }
    if (lowerTitle.includes('juilliard') || lowerTitle.includes('faculty') || lowerTitle.includes('teacher')) {
      return 'programs'
    }
    if (lowerTitle.includes('award') || lowerTitle.includes('commencement')) {
      return 'events'
    }
    
    return 'events' // Default category
  }

  const filters = [
    { key: "all", label: "All Media" },
    { key: "programs", label: "Programs" },
    { key: "events", label: "Events" },
    { key: "volunteers", label: "Volunteers" },
    { key: "services", label: "Services" },
  ]

  const featuredItems = mediaItems.filter(item => item.featured)
  const filteredItems = activeFilter === "all" 
    ? mediaItems.filter(item => !item.featured)
    : mediaItems.filter((item) => item.category === activeFilter && !item.featured)
  
  const displayedItems = filteredItems.slice(0, visibleItems)
  const canLoadMore = visibleItems < filteredItems.length

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-teal-600 hover:text-teal-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Media</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-top bg-no-repeat" style={{
        backgroundImage: `url('https://static.wixstatic.com/media/d717d4_05b13ab329714f6bb79c12184de08986~mv2.png')`
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Media Gallery</h1>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">Explore our collection of photos showcasing our impact in music education.</p>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Featured Video</h2>
            <p className="text-lg text-gray-600 mb-12">Watch our latest video showcasing the impact of our music education programs</p>
            <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
              <div className="relative aspect-[16/9] bg-gray-200">
                <iframe
                  src="https://www.youtube.com/embed/CQXnJpY_zR8"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="w-full h-full object-cover"
                ></iframe>
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-black/70 text-white">2:58</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Media Section */}
      <section className="py-8 bg-white">
        <div className="w-full px-2">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Highlights</h2>
            <p className="text-lg text-gray-600">Highlights from our most impactful programs and success stories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
            {featuredItems.map((item, index) => (
              <Card
                key={index}
                className="shadow-lg border-0 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Always Visible Text Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <h4 className="text-xs font-semibold mb-1 line-clamp-2 leading-tight">{item.title}</h4>
                      <div className="flex items-center justify-between">
                        <p className="text-xs opacity-90">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">All Media</h2>
              <p className="text-gray-600">Browse our complete collection by category</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? "default" : "outline"}
                  onClick={() => {
                    setActiveFilter(filter.key)
                    setVisibleItems(12) // Reset to show first 12 items when filter changes
                  }}
                  className="rounded-full bg-gray-800 text-white hover:bg-gray-700 border-gray-700 hover:border-gray-600"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-8 bg-gray-50">
        <div className="w-full px-2">
          {displayedItems.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {displayedItems.map((item, index) => (
                  <Card key={index} className="shadow-lg border-0 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={item.thumbnail || PLACEHOLDER} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      {/* Always Visible Text Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                          <h4 className="text-xs font-semibold mb-1 line-clamp-2 leading-tight">{item.title}</h4>
                          <div className="flex items-center justify-between">
                            <p className="text-xs opacity-90">{item.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Load More Button */}
              {canLoadMore && (
                <div className="text-center mt-8">
                  <Button 
                    onClick={() => setVisibleItems(prev => prev + 12)}
                    className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Load More Images
                  </Button>
                </div>
              )}
              
              {/* Show total count */}
              <div className="text-center mt-4">
                <p className="text-gray-600 text-sm">
                  Showing {displayedItems.length} of {filteredItems.length} images
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No media found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Share Your Story</h2>
          <p className="text-xl mb-8 opacity-90">Have a success story or memorable moment to share? We'd love to feature your experience in our media gallery.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full">Share Your Story</Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full bg-transparent">Read Our Blog</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
