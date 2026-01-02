'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false)

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen)
  }

  return (
    <>
      <header className="header">
        <div className="primary-navbar secondary--navbar">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image src="/SoireInc Logo White.png" alt="SoireInc Logo" width={150} height={50} />
                    </Link>
                  </div>
                  <div className="navbar__options">
                    <button
                      className="open-offcanvas-nav d-flex"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                      onClick={toggleOffcanvas}
                    ></button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`offcanvas-nav ${isOffcanvasOpen ? 'active' : ''}`}>
        <div className="offcanvas-menu">
          <nav className="offcanvas-menu__wrapper">
            <div className="offcanvas-menu__header nav-fade">
              <div className="logo">
                <Link href="/">
                  <Image src="/SoireInc Logo White.png" alt="SoireInc Logo" width={150} height={50} />
                </Link>
              </div>
              <a
                href="#"
                aria-label="close offcanvas menu"
                className="close-offcanvas-menu"
                onClick={(e) => {
                  e.preventDefault()
                  setIsOffcanvasOpen(false)
                }}
              >
                <i className="fa-light fa-xmark-large"></i>
              </a>
            </div>
            <div className="offcanvas-menu__list">
              <div className="navbar__menu">
                <ul>
                  {/* <li className="navbar__item navbar__item--has-children nav-fade">
                    <a href="#" aria-label="dropdown menu" className="navbar__dropdown-label">
                      Home
                    </a>
                    <ul className="navbar__sub-menu">
                      <li>
                        <Link href="/">Creative Agency</Link>
                      </li>
                      <li>
                        <Link href="/index-light">Creative Agency Light</Link>
                      </li>
                      <li>
                        <Link href="/index-two">Digital Agency</Link>
                      </li>
                      <li>
                        <Link href="/index-two-light">Digital Agency Light</Link>
                      </li>
                      <li>
                        <Link href="/index-three">It Solution</Link>
                      </li>
                      <li>
                        <Link href="/index-three-light">It Solution Light</Link>
                      </li>
                      <li>
                        <Link href="/index-four">Personal Portfolio</Link>
                      </li>
                      <li>
                        <Link href="/index-four-light">Personal Portfolio Light</Link>
                      </li>
                      <li>
                        <Link href="/index-five">Interactive Portfolio</Link>
                      </li>
                      <li>
                        <Link href="/index-five-light">Interactive Portfolio Light</Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className="navbar__item nav-fade">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="navbar__item nav-fade">
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li className="navbar__item navbar__item--has-children nav-fade">
                    <a href="#" aria-label="dropdown menu" className="navbar__dropdown-label">
                      Products
                    </a>
                    <ul className="navbar__sub-menu">
                      <li>
                        <Link href="/products/clover">Clover</Link>
                      </li>
                      <li>
                        <Link href="/products/peripherals">Peripherals</Link>
                      </li>
                      <li>
                        <Link href="/products/pax">PAX</Link>
                      </li>
                      <li>
                        <Link href="/products/nrs">NRS</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="navbar__item nav-fade">
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  {/* <li className="navbar__item navbar__item--has-children nav-fade">
                    <a href="#" aria-label="dropdown menu" className="navbar__dropdown-label">
                      Devices
                    </a>
                    <ul className="navbar__sub-menu">
                      <li>
                        <Link href="/our-projects">Our Projects</Link>
                      </li>
                      <li>
                        <Link href="/project-single">Project Details</Link>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li className="navbar__item navbar__item--has-children nav-fade">
                    <a href="#" aria-label="dropdown menu" className="navbar__dropdown-label">
                      Pages
                    </a>
                    <ul className="navbar__sub-menu">
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/404">Error</Link>
                      </li>
                      <li>
                        <Link href="/our-story">Our Story</Link>
                      </li>
                      <li>
                        <Link href="/portfolio">Portfolio</Link>
                      </li>
                      <li className="navbar__item navbar__item--has-children">
                        <a href="#" aria-label="dropdown menu" className="navbar__dropdown-label navbar__dropdown-label-sub">
                          Team
                        </a>
                        <ul className="navbar__sub-menu navbar__sub-menu__nested">
                          <li>
                            <Link href="/our-teams">Our Teams</Link>
                          </li>
                          <li>
                            <Link href="/team-single">Team Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/client-feedback">Testimonials</Link>
                      </li>
                      <li>
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li className="navbar__item navbar__item--has-children nav-fade">
                    <a href="#" aria-label="dropdown menu" className="navbar__dropdown-label">
                      Blog
                    </a>
                    <ul className="navbar__sub-menu">
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/blog-single">Blog Details</Link>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="offcanvas-menu__options nav-fade">
              <div className="offcanvas__mobile-options d-flex">
                <Link href="/contact-us" className="btn btn--secondary">
                  Let&apos;s Connect
                </Link>
              </div>
            </div>
            <div className="offcanvas-menu__social social nav-fade">
              <a href="https://www.facebook.com/soireeincofficial" target="_blank" rel="noopener noreferrer" aria-label="share us on facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://x.com/soireeIINC" target="_blank" rel="noopener noreferrer" aria-label="share us on twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/soireeinc9/" target="_blank" rel="noopener noreferrer" aria-label="share us on instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

