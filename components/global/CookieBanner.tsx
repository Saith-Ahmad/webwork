'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) setVisible(true)
  }, [])

  const handleClose = () => {
    localStorage.setItem('cookieConsent', 'dismissed')
    setVisible(false)
  }

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-5xl mx-auto bg-white shadow-lg border rounded-lg p-4 sm:p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      
      {/* Text */}
      <div className="text-sm text-gray-700 sm:max-w-[75%] lg:max-w-[70%]">
        <h4 className="font-semibold text-base text-black mb-1 font-roca">
          Accept the use of cookies.
        </h4>
        <p>
          We use cookies to improve your browsing experience, serve personalized content, and analyze our traffic. 
          By clicking Accept all Cookies, you agree to the storing of cookies on your device. 
          For more details, see our <Link href="/privacy-policy" className="text-primary cursor-pointer">Privacy Policy</Link>.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-2 sm:mt-0 mt-2 shrink-0">
        <button
          onClick={handleAccept}
          className="bg-primary text-white text-sm px-4 py-2 rounded hover:bg-primarylight transition whitespace-nowrap"
        >
          Accept all Cookies
        </button>
        <button
          onClick={handleClose}
          className="border border-gray-300 text-gray-800 text-sm px-4 py-2 rounded hover:bg-gray-100 transition whitespace-nowrap"
        >
          Dismiss
        </button>
      </div>

      {/* Close Icon */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-black"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  )
}
