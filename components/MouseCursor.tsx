'use client'

import { useEffect } from 'react'

export default function MouseCursor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const cursorInner = document.querySelector('.cursor-inner') as HTMLElement
    const cursorOuter = document.querySelector('.cursor-outer') as HTMLElement

    if (!cursorInner || !cursorOuter) return

    let n: number, i = 0, o = false

    const handleMouseMove = (e: MouseEvent) => {
      if (!o) {
        cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        n = e.clientY
        i = e.clientX
      }
    }

    const handleMouseEnter = () => {
      cursorInner.classList.add('cursor-inner-hover')
      cursorOuter.classList.add('cursor-outer-hover')
    }

    const handleMouseLeave = () => {
      cursorInner.classList.remove('cursor-inner-hover')
      cursorOuter.classList.remove('cursor-outer-hover')
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseenter', handleMouseEnter)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner">
        <span>Drag</span>
      </div>
    </>
  )
}

