import { Heart } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6">
      <div className="text-center max-w-sm sm:max-w-md">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-pulse">
          <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white animate-pulse" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">
          Loading Harmony 4 All
        </h2>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Please wait while we prepare your experience...
        </p>
        <div className="mt-4 sm:mt-6 flex justify-center">
          <div className="w-24 sm:w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-black rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
} 