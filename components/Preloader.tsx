'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div id="preloader">
      <div id="loader"></div>
    </div>
  )
}

