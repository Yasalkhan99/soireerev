'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  // Handle dropdown menu toggle
  const handleDropdownToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const parent = target.parentElement;
    const subMenu = parent?.querySelector('.navbar__sub-menu');
    const siblings = parent?.parentElement?.querySelectorAll('.navbar__item--has-children');
    
    // Close other dropdowns
    siblings?.forEach((sibling) => {
      if (sibling !== parent) {
        const siblingSubMenu = sibling.querySelector('.navbar__sub-menu');
        const siblingLabel = sibling.querySelector('.navbar__dropdown-label');
        siblingSubMenu?.classList.remove('show');
        siblingLabel?.classList.remove('navbar__item-active');
      }
    });
    
    // Toggle current dropdown
    subMenu?.classList.toggle('show');
    target.classList.toggle('navbar__item-active');
  };

  // Reset classes on mount to ensure clean state
  useEffect(() => {
    const offcanvasMenu = document.querySelector('.offcanvas-menu');
    const offcanvasWrapper = document.querySelector('.offcanvas-menu__wrapper');
    
    // Reset to closed state on mount
    offcanvasMenu?.classList.remove('show-offcanvas-menu');
    offcanvasWrapper?.classList.add('nav-fade-active');
  }, []);

  // Sync React state with jQuery-expected classes
  useEffect(() => {
    const offcanvasMenu = document.querySelector('.offcanvas-menu');
    const offcanvasWrapper = document.querySelector('.offcanvas-menu__wrapper');
    const navFadeElements = document.querySelectorAll('.nav-fade');

    if (isOffcanvasOpen) {
      // Add classes when opening
      offcanvasMenu?.classList.add('show-offcanvas-menu');
      offcanvasWrapper?.classList.remove('nav-fade-active');
      
      // Set animation delays for nav-fade elements
      navFadeElements.forEach((el, i) => {
        (el as HTMLElement).style.animationDelay = `${1 + 0.2 * i}s`;
      });
    } else {
      // Remove classes when closing
      setTimeout(() => {
        offcanvasMenu?.classList.remove('show-offcanvas-menu');
        offcanvasWrapper?.classList.add('nav-fade-active');
      }, 900);
    }
  }, [isOffcanvasOpen]);

  // Close offcanvas when clicking on backdrop or prevent body scroll
  useEffect(() => {
    const handleBackdropClick = (e: Event) => {
      const target = e.target as HTMLElement;
      // Close if clicking directly on offcanvas-nav (backdrop) but not on the menu itself
      if (
        isOffcanvasOpen &&
        target.classList.contains('offcanvas-nav') &&
        !target.closest('.offcanvas-menu')
      ) {
        setIsOffcanvasOpen(false);
      }
    };

    if (isOffcanvasOpen) {
      const offcanvasNav = document.querySelector('.offcanvas-nav');
      offcanvasNav?.addEventListener('click', handleBackdropClick);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
      
      return () => {
        offcanvasNav?.removeEventListener('click', handleBackdropClick);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOffcanvasOpen]);

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
                    <Link href="/" onClick={() => setIsOffcanvasOpen(false)}>Home</Link>
                  </li>
                  <li className="navbar__item nav-fade">
                    <Link href="/about-us" onClick={() => setIsOffcanvasOpen(false)}>About Us</Link>
                  </li>
                  <li className="navbar__item navbar__item--has-children nav-fade">
                    <a 
                      href="#" 
                      aria-label="dropdown menu" 
                      className="navbar__dropdown-label"
                      onClick={handleDropdownToggle}
                    >
                      Products
                    </a>
                    <ul className="navbar__sub-menu">
                      <li>
                        <Link href="/products/clover" onClick={() => setIsOffcanvasOpen(false)}>Clover</Link>
                      </li>
                      <li>
                        <Link href="/products/peripherals" onClick={() => setIsOffcanvasOpen(false)}>Peripherals</Link>
                      </li>
                      <li>
                        <Link href="/products/pax" onClick={() => setIsOffcanvasOpen(false)}>PAX</Link>
                      </li>
                      <li>
                        <Link href="/products/nrs" onClick={() => setIsOffcanvasOpen(false)}>NRS</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="navbar__item nav-fade">
                    <Link href="/contact-us" onClick={() => setIsOffcanvasOpen(false)}>Contact Us</Link>
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
                <Link href="/contact-us" className="btn btn--secondary" onClick={() => setIsOffcanvasOpen(false)}>
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

