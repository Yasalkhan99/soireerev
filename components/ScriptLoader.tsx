'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

export default function ScriptLoader() {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize scripts after component mounts
    if (typeof window !== 'undefined') {
      // Data background initialization
      const dataBackgroundElements = document.querySelectorAll('[data-background]')
      dataBackgroundElements.forEach((el) => {
        const bg = el.getAttribute('data-background')
        if (bg) {
          ;(el as HTMLElement).style.backgroundImage = `url(${bg})`
        }
      })

      // Load scripts sequentially after jQuery is ready
      const loadScriptsSequentially = async () => {
        const scripts = [
          '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
          '/assets/vendor/nice-select/js/jquery.nice-select.min.js',
          '/assets/vendor/magnific-popup/js/jquery.magnific-popup.min.js',
          '/assets/vendor/slick/js/slick.min.js',
          '/assets/vendor/images-loaded/imagesloaded.pkgd.min.js',
          '/assets/vendor/isotope/isotope.pkgd.min.js',
          '/assets/vendor/vanilla-tilt/tilt.jquery.js',
          // GSAP Core first
          '/assets/vendor/gsap/gsap.min.js',
          // Then GSAP plugins
          '/assets/vendor/gsap/ScrollTrigger.min.js',
          '/assets/vendor/gsap/ScrollToPlugin.min.js',
          '/assets/vendor/gsap/ScrollSmoother.min.js',
          '/assets/vendor/gsap/SplitText.min.js',
          '/assets/vendor/gsap/chroma.min.js',
          // Finally plugins and main
          '/assets/js/plugins.js',
          '/assets/js/main.js',
        ]

        const loadScript = (src: string): Promise<void> => {
          return new Promise((resolve, reject) => {
            // Check if already loaded
            if (document.querySelector(`script[src="${src}"]`)) {
              resolve()
              return
            }

            const script = document.createElement('script')
            script.src = src
            script.async = false
            script.onload = () => resolve()
            script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
            document.body.appendChild(script)
          })
        }

        // Wait for jQuery
        if (typeof (window as any).jQuery === 'undefined') {
          await new Promise((resolve) => {
            const checkJQuery = setInterval(() => {
              if (typeof (window as any).jQuery !== 'undefined') {
                clearInterval(checkJQuery)
                resolve(undefined)
              }
            }, 50)
          })
        }

        // Load all scripts sequentially
        for (const src of scripts) {
          try {
            await loadScript(src)
          } catch (error) {
            console.warn(`Failed to load ${src}:`, error)
          }
        }
      }

      // Start loading after a short delay
      setTimeout(loadScriptsSequentially, 100)
    }
  }, [])

  // Reinitialize sliders on route change
  useEffect(() => {
    const reinitializeSliders = () => {
      const jQuery = (window as any).jQuery
      if (!jQuery || !jQuery.fn.slick) {
        setTimeout(reinitializeSliders, 100)
        return
      }

      // Destroy existing sliders before reinitializing
      const sliders = [
        '.portfolio__text-slider',
        '.testimonial__text-slider',
        '.next__text-slider'
      ]

      sliders.forEach((selector) => {
        const slider = document.querySelector(selector)
        if (slider && jQuery(slider).hasClass('slick-initialized')) {
          try {
            jQuery(slider).slick('unslick')
          } catch (e) {
            // Ignore errors if slider is already destroyed
          }
        }
      })

      // Wait a bit for DOM to be ready, then reinitialize
      setTimeout(() => {
        // Portfolio text slider
        const portfolioSlider = document.querySelector('.portfolio__text-slider')
        if (portfolioSlider && !jQuery(portfolioSlider).hasClass('slick-initialized')) {
          jQuery(portfolioSlider).slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 10000,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            cssEase: 'linear',
            variableWidth: true,
          })
        }

        // Testimonial text slider
        const testimonialSlider = document.querySelector('.testimonial__text-slider')
        if (testimonialSlider && !jQuery(testimonialSlider).hasClass('slick-initialized')) {
          jQuery(testimonialSlider).slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 10000,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            cssEase: 'linear',
            variableWidth: true,
          })
        }

        // Next page text slider
        const nextSlider = document.querySelector('.next__text-slider')
        if (nextSlider && !jQuery(nextSlider).hasClass('slick-initialized')) {
          jQuery(nextSlider).slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 10000,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            cssEase: 'linear',
            variableWidth: true,
          })
        }
      }, 300)
    }

    // Reinitialize when pathname changes
    reinitializeSliders()
  }, [pathname])

  return (
    <>
      <Script src="/assets/vendor/jquery/jquery-3.7.0.min.js" strategy="beforeInteractive" />
    </>
  )
}

