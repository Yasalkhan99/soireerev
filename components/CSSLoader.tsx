'use client'

import { useEffect } from 'react'

export default function CSSLoader() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // List of CSS files to load in order (vendor first, then main)
    const cssFiles = [
      '/assets/vendor/bootstrap/css/bootstrap.min.css',
      '/assets/vendor/glyyphter/css/xpovio.css',
      '/assets/vendor/font-awesome/css/all.css',
      '/assets/vendor/nice-select/css/nice-select.css',
      '/assets/vendor/magnific-popup/css/magnific-popup.css',
      '/assets/vendor/slick/css/slick.css',
      '/assets/css/main.min.css', // Main compiled CSS
    ]

    // Load CSS files synchronously
    cssFiles.forEach((href) => {
      // Check if link already exists
      const existingLink = document.querySelector(`link[href="${href}"]`)
      if (!existingLink) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        link.type = 'text/css'
        link.media = 'all'
        // Insert at the beginning of head to ensure early loading
        const head = document.head || document.getElementsByTagName('head')[0]
        if (head.firstChild) {
          head.insertBefore(link, head.firstChild)
        } else {
          head.appendChild(link)
        }
      }
    })
  }, [])

  return null
}


