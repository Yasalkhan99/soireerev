import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="my-app">
      <Preloader />
      <MouseCursor />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Banner Section */}
            <section className="banner">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="banner__content">
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                        We are
                        <span className="text-stroke">creative</span>
                        <span className="interval">
                          <i className="icon-arrow-top-right"></i>
                          digital agency
                        </span>
                      </h1>
                      <div className="banner__content-inner">
                        <p>
                          We are a full-service website design, development and digital marketing company specializing in
                          SEO, content marketing that grows brands.
                        </p>
                        <div className="cta section__content-cta">
                          <div className="single">
                            <h5 className="fw-7">12+</h5>
                            <p className="fw-5">years of experience</p>
                          </div>
                          <div className="single">
                            <h5 className="fw-7">25k</h5>
                            <p className="fw-5">completed projects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src="/assets/images/banner/banner-one-thumb.png"
                alt="Image"
                width={800}
                height={600}
                className="banner-one-thumb d-none d-sm-block g-ban-one"
              />
              <Image src="/assets/images/star.png" alt="Image" className="star" width={50} height={50} />
              <div className="banner-left-text banner-social-text d-none d-md-flex">
                <a href="mailto:info@soireinc.com">mail : info@soireinc.com</a>
                <a href="tel:99-2158-003-6980">Call : +99 2158 003 6980</a>
              </div>
              <div className="banner-right-text banner-social-text d-none d-md-flex">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  instagram
                </a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                  Linkedin
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  facebook
                </a>
              </div>
              <a className="video-frame video-btn" href="https://www.youtube.com/watch?v=RvreULjnzFo" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/images/video-frame.png" alt="Image" width={200} height={200} />
                <i className="fa-sharp fa-solid fa-play"></i>
              </a>
              <div className="lines d-none d-lg-flex">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </section>

            {/* Agency Section */}
            <section className="section agency">
              <div className="container">
                <div className="row gaper align-items-center">
                  <div className="col-12 col-lg-6">
                    <div className="agency__thumb">
                      <Image
                        src="/assets/images/agency/thumb-one.png"
                        alt="Image"
                        className="thumb-one fade-left"
                        width={500}
                        height={400}
                      />
                      <Image
                        src="/assets/images/agency/thumb-two.png"
                        alt="Image"
                        className="thumb-two fade-right"
                        width={500}
                        height={400}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="agency__content section__content">
                      <span className="sub-title">
                        WELCOME
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <h2 className="title title-anim">We are digital creative agency in London</h2>
                      <div className="paragraph">
                        <p>
                          Bring to the table win-win survival strategies to ensure proactive domination. At the end of
                          the day, going forward, a new normal that has evolved from generation on the runway heading
                          towards a streamlined cloud solution going forward porttitor dictum sapien.
                        </p>
                      </div>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p className="primary-text">Website design</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="75%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p className="primary-text">Digital Marketing</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="section__content-cta">
                        <Link href="/about-us" className="btn btn--primary">
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Image src="/assets/images/star.png" alt="Image" className="star" width={50} height={50} />
              <Image
                src="/assets/images/agency/dot-large.png"
                alt="Image"
                className="dot-large"
                width={200}
                height={200}
              />
            </section>

            {/* Portfolio Section */}
            <section className="section portfolio pb-0 fade-wrapper position-relative">
              <div className="portfolio__text-slider">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div key={i} className="portfolio__text-slider-single">
                    <h2 className="h1">
                      <Link href="/portfolio">
                        digital portfolio
                        <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                      </Link>
                    </h2>
                  </div>
                ))}
              </div>
              <div className="container-fluid">
                <div className="row gaper">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="col-12 col-sm-6 col-xl-3">
                      <div className={`portfolio__single ${i === 1 ? 'portfolio__single-active' : ''} topy-tilt fade-top`}>
                        <Link href="/portfolio">
                          <Image
                            src={`/assets/images/portfolio/${i === 1 ? 'one' : i === 2 ? 'two' : i === 3 ? 'three' : i === 4 ? 'four' : i === 5 ? 'five' : 'six'}.png`}
                            alt="Image"
                            width={400}
                            height={300}
                          />
                        </Link>
                        <div className="portfolio__single-content">
                          <Link href="/portfolio">
                            <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                          </Link>
                          <h4>
                            <Link href="/portfolio">Digital Marketing</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="col-12 col-sm-6 col-xl-3">
                    <div className="portfolio__single-alt-wrapper fade-top">
                      <div className="portfolio__single-alt topy-tilt">
                        <h4>
                          <Link href="/portfolio">view all work</Link>
                        </h4>
                        <Link href="/portfolio" className="arr">
                          <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                        </Link>
                        <Image src="/assets/images/portfolio/dot.png" alt="Image" className="dot-one" width={20} height={20} />
                        <Image src="/assets/images/portfolio/dot.png" alt="Image" className="dot-two" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-3">
                    <div className="portfolio__single topy-tilt fade-top">
                      <Link href="/portfolio">
                        <Image src="/assets/images/portfolio/seven.png" alt="Image" width={400} height={300} />
                      </Link>
                      <div className="portfolio__single-content">
                        <Link href="/portfolio">
                          <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                        </Link>
                        <h4>
                          <Link href="/portfolio">Digital Marketing</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lines d-none d-lg-flex">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </section>

            {/* Offer Section */}
            <section className="section offer fade-wrapper light">
              <div className="container">
                <div className="row gaper">
                  <div className="col-12 col-lg-5">
                    <div className="offer__content section__content">
                      <span className="sub-title">
                        WHAT WE OFFER
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <h2 className="title title-anim">Giving Your Business Some Great Ideas</h2>
                      <div className="paragraph">
                        <p>
                          Bring to the table win-win survival strategies to ensure proactive domination. At the end of
                          the day, going forward, a new normal that has evolved from generation on the runway heading
                          towards a streamlined cloud solution going forward porttitor dictum sapien.
                        </p>
                      </div>
                      <div className="section__content-cta">
                        <Link href="/our-services" className="btn btn--secondary">
                          view all services
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
                    <div className="offer__cta">
                      {[
                        { num: '01', title: 'uI / uX experience', bg: '/assets/images/offer/blog-thumb.png' },
                        { num: '02', title: 'web development', bg: '/assets/images/offer/two.png' },
                        { num: '03', title: 'digital marketing', bg: '/assets/images/offer/three.png' },
                        { num: '04', title: 'product design', bg: '/assets/images/offer/blog-thumb.png' },
                      ].map((item, idx) => (
                        <div key={idx} className="offer__cta-single fade-top">
                          <span className="sub-title">
                            {item.num}
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          <h2>
                            <Link href="/service-single">
                              {item.title}
                              <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                            </Link>
                          </h2>
                          <div
                            className="offer-thumb-hover d-none d-md-block"
                            data-background={item.bg}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Image src="/assets/images/offer/star.png" alt="Image" className="star" width={50} height={50} />
              <div className="lines d-none d-lg-flex">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </section>

            {/* Testimonial Section */}
            <section className="section testimonial pt-0 position-relative">
              <div className="testimonial__text-slider">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div key={i} className="testimonial__text-slider-single">
                    <h2 className="h1">
                      <Link href="/client-feedback">
                        client&apos;s testimonial
                        <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                      </Link>
                    </h2>
                  </div>
                ))}
              </div>
              <div className="container position-relative">
                <div className="row">
                  <div className="col-12 col-xxl-10">
                    <div className="testimonial-s__slider">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="testimonial-s__slider-single">
                          <div className="row gaper align-items-center">
                            <div className="col-12 col-lg-4 col-xxl-4">
                              <div className="thumb">
                                <Image
                                  src={`/assets/images/testimonial/${i === 1 ? 's-thumb' : i === 2 ? 's-thumb-two' : 's-thumb-three'}.png`}
                                  alt="Image"
                                  width={300}
                                  height={400}
                                />
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="44"
                                  height="322"
                                  viewBox="0 0 44 322"
                                  fill="none"
                                  className="d-none d-lg-block"
                                >
                                  <path d="M43 -0.000976562V151.999L2 192.999H43V321.999" stroke="#414141" />
                                </svg>
                              </div>
                            </div>
                            <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                              <div className="testimonial-s__content">
                                <div className="quote">
                                  <i className="fa-solid fa-quote-right"></i>
                                </div>
                                <div className="content">
                                  <h4>
                                    posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio
                                    porttitor, convallis erat sit amet, facilisis velit. Nulla ornare convallis malesuada.
                                    Phasellus molestie, ipsum ac fringilla.
                                  </h4>
                                </div>
                                <div className="content-cta">
                                  <h5>Daniel Smith</h5>
                                  <p>Senior engineer</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="slide-group justify-content-start">
                  <a href="#" aria-label="previous item" className="slide-btn prev-testimonial-three">
                    <i className="fa-light fa-angle-left"></i>
                  </a>
                  <a href="#" aria-label="next item" className="slide-btn next-testimonial-three">
                    <i className="fa-light fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div className="other-section">
                <Image
                  className="other-section-image"
                  src="/assets/images/testimonial/s-thumb.png"
                  alt="Next Slide Image"
                  width={300}
                  height={400}
                />
              </div>
              <div className="lines d-none d-lg-flex">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </section>

            {/* Blog Section */}
            <section className="section blog fade-wrapper">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                    <div className="section__header text-center">
                      <span className="sub-title">
                        news & Blog
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <h2 className="title title-anim">what&apos;s new in blog</h2>
                    </div>
                  </div>
                </div>
                <div className="row gaper">
                  <div className="col-12 col-md-6">
                    <div className="blog__single fade-top">
                      <div className="blog__single-thumb topy-tilt">
                        <Link href="/blog-single">
                          <Image src="/assets/images/blog/one.png" alt="Image" width={600} height={400} />
                        </Link>
                      </div>
                      <div className="blog__single-content">
                        <h4>
                          <Link href="/blog-single">A Simple Social Media Marketing Checklist</Link>
                        </h4>
                        <div className="blog__single-meta">
                          <Link href="/blog" className="sub-title">
                            creative
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                          <p>MARCH 23, 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="blog__single fade-top">
                      <div className="blog__single-thumb topy-tilt">
                        <Link href="/blog-single">
                          <Image src="/assets/images/blog/two.png" alt="Image" width={600} height={400} />
                        </Link>
                      </div>
                      <div className="blog__single-content">
                        <h4>
                          <Link href="/blog-single">Transforming Challenges into Opportunities</Link>
                        </h4>
                        <div className="blog__single-meta">
                          <Link href="/blog" className="sub-title">
                            creative
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                          <p>MARCH 23, 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sponsor Section */}
            <div className="sponsor section pb-0">
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="sponsor__slider">
                      {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="sponsor__slider-item">
                          <Image
                            src={`/assets/images/sponsor/${i === 1 ? 'one' : i === 2 ? 'two' : i === 3 ? 'three' : i === 4 ? 'four' : i === 5 ? 'five' : 'six'}.png`}
                            alt="Image"
                            width={150}
                            height={80}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lines d-none d-lg-flex">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>

            {/* Next Page Section */}
            <section className="section next-page">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                    <div className="section__header text-center">
                      <Link href="/about-us" className="sub-title mb-0">
                        Next Page
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="next__text-slider">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div key={i} className="next__text-slider-single">
                    <h2 className="h1">
                      <Link href="/about-us">
                        About Us
                        <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                      </Link>
                    </h2>
                  </div>
                ))}
              </div>
              <div className="lines d-none d-lg-flex">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
      <ScrollToTop />
      <div className="line">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* Video Modal */}
      <div className="vid-m">
        <div className="vid-c">
          <a href="#" aria-label="close video popup" className="close-v">
            <i className="fa-light fa-xmark-large"></i>
          </a>
          <video autoPlay loop muted controls>
            <source src="/assets/images/popup-video.mp4" type="video/mp4" />
          </video>
          <h5>Hello</h5>
        </div>
      </div>
      <ScriptLoader />
    </div>
  )
}

