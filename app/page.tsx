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
              <video autoPlay loop muted playsInline className="banner__video">
                <source src="/banner_bk_video.mp4" type="video/mp4" />
              </video>
              <div className="lines d-none d-lg-flex">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="container banner-container">
                <div className="row">
                  <div className="col-12">
                    <div className="banner__content">
                      <h1 className="text-lowercase !capitalize text-start fw-9 mb-0 title-anim !text-[78px] text-center">
                        Upgrade Your
                        <span className="text-stroke !pl-[15px]">Business With</span>
                        <span className="interval justify-center gap-3 !-mt-8 block">
                          <i className="fa-solid fa-arrow-right"></i>
                          SoireeInc POS Systems
                        </span>
                      </h1>
                      <div className="banner__content-inner !mt-[60px]">
                        <p>
                          Streamline sales, boost efficiency, and delight customers with Soireeinc’s advanced POS solutions—designed for speed, security, and seamless transactions.
                        </p>
                        <div className="cta section__content-cta !mt-[20px]">
                          <div className="single flex items-start gap-2">
                            <h5 className="fw-7">12+ </h5>
                            <p className="fw-5 !m-0">years of experience</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Image src="/assets/images/star.png" alt="Image" className="star" width={50} height={50} />
              <div className="banner-left-text banner-social-text d-none d-md-flex relative z-40">
                <a href="mailto:info@soireinc.com">mail : sales@soireeinc.com</a>
                <a href="tel:99-2158-003-6980">Call : +1 214-831-4739</a>
              </div>
              <div className="banner-right-text banner-social-text d-none d-md-flex relative z-40">
                <a href="https://www.instagram.com/soireeinc9/" target="_blank" rel="noopener noreferrer">
                  instagram
                </a>
                <a href="https://x.com/soireeIINC" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
                <a href="https://www.facebook.com/soireeincofficial" target="_blank" rel="noopener noreferrer">
                  facebook
                </a>
              </div>
              <a className="video-frame video-btn relative z-30 !border-3 !border-[#0633f8]" href="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1181731124074398%2F&show_text=false&t=0" target="_blank" rel="noopener noreferrer">
                <i className="fa-sharp fa-solid fa-play" style={{ color: '#0633f8' }}></i>
              </a>
            </section>

            {/* Agency Section */}
            <section className="section agency">
              <div className="container">
                <div className="row gaper align-items-center !h-full">
                  <div className="col-12 col-lg-6 !h-full">
                    <div className="agency__thumb relative !h-full">
                      <Image
                        src="/assets/images/retail-img-1.png"
                        alt="Image"
                        className="h-full thumb-one fade-left relative z-20 object-cover !max-w-[55%]"
                        width={500}
                        height={1000}
                      />
                      <Image
                        src="/assets/images/retail-img-2.png"
                        alt="Image"
                        className="thumb-two !right-0 !ml-auto !-bottom-0 fade-right !max-w-[55%]"
                        width={500}
                        height={400}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="agency__content section__content">
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-circle text-[#1c46ff] text-[6px]"></i>
                        <span className="sub-title !border-none text-[#1c46ff] !pl-0 !mb-0">
                          WELCOME
                        </span>
                      </div>
                      <h2 className="title title-anim">Retail POS Systems</h2>
                      <div className="paragraph">
                        <p className="!mb-4">
                          Enhance your POS with advanced inventory tools to seamlessly manage your retail operations across multiple locations and sales channels. Access detailed reports anytime to identify growth opportunities.
                        </p>
                        <p>Enjoy powerful features such as:</p>
                      </div>
                      <div className="skill-wrap !mt-5">
                        <div className="skill-bar-single !mb-2">
                          <div className="skill-bar-title flex items-center gap-2">
                            <div>
                              <i className="fa-solid fa-check-circle text-[#1c46ff] text-[22px]"></i>
                            </div>
                            <p className="primary-text !text-[16px]">low-stock alerts</p>
                          </div>
                        </div>
                        <div className="skill-bar-single !mb-2">
                          <div className="skill-bar-title flex items-center gap-2">
                            <div>
                              <i className="fa-solid fa-check-circle text-[#1c46ff] text-[22px]"></i>
                            </div>
                            <p className="primary-text !text-[16px]">unified in-store & online sales</p>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title flex items-center gap-2">
                            <div>
                              <i className="fa-solid fa-check-circle text-[#1c46ff] text-[22px]"></i>
                            </div>
                            <p className="primary-text !text-[16px]">Comprehensive Vendor Sales Reporting</p>
                          </div>
                        </div>
                      </div>
                      <div className="section__content-cta !mt-8">
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
                {[{ id: 1, title: 'Clover Devices' }, { id: 2, title: 'Clover Devices' }, { id: 3, title: 'Clover Devices' }, { id: 4, title: 'Clover Devices' }, { id: 5, title: 'Clover Devices' }, { id: 6, title: 'Clover Devices' }, { id: 7, title: 'Clover Devices' }].map((i) => (
                  <div key={i.id} className="portfolio__text-slider-single">
                    <h2 className="h1">
                      <Link href="/portfolio">
                        Clover Devices
                        <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                      </Link>
                    </h2>
                  </div>
                ))}
              </div>
              <div className="container-fluid">
                <div className="row gaper">
                  {[
                    { img: '/assets/images/d1.png', title: 'Clover' },
                    { img: '/assets/images/d2.png', title: 'Peripherals' },
                    { img: '/assets/images/d3.png', title: 'PAX' },
                    { img: '/assets/images/d4.png', title: 'NRS' },
                    { img: '/assets/images/d5.png', title: 'Peripherals' },
                    { img: '/assets/images/d6.png', title: 'Clover' }
                  ].map((item, index) => (
                    <div key={index} className="col-12 col-sm-6 col-xl-3">
                      <div className={`portfolio__single rounded-3xl relative max-h-[450px] h-full ${index === 0 ? 'portfolio__single-active' : ''} topy-tilt fade-top`}>
                        <Image
                          src='/assets/images/device-bk.png'
                          className='absolute top-0 left-0 w-full !min-h-full h-full'
                          alt="bk"
                          width={1000}
                          height={1000}
                        />
                        <Image
                          src={item.img}
                          className='!w-auto !h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative z-30'
                          alt="bk"
                          width={1000}
                          height={1000}
                        />
                        <Link href="/portfolio" className='w-full h-full'>
                        </Link>
                        <Link href="/portfolio">
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={300}
                          />
                        </Link>
                        <div className="portfolio__single-content z-50">
                          <Link href="/portfolio">
                            <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                          </Link>
                          <h4>
                            <Link href="/portfolio">{item.title}</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="col-12 col-sm-6 col-xl-3">
                    <div className="portfolio__single-alt-wrapper !rounded-3xl max-h-[450px] relative h-full fade-top">
                      <div className="portfolio__single-alt topy-tilt">
                        <h4>
                          <Link href="/portfolio">view all devices</Link>
                        </h4>
                        <Link href="/portfolio" className="arr justify-center">
                          <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                        </Link>
                        <Image src="/assets/images/portfolio/dot.png" alt="Image" className="dot-one" width={20} height={20} />
                        <Image src="/assets/images/portfolio/dot.png" alt="Image" className="dot-two" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-3">
                    <div className="portfolio__single !rounded-3xl max-h-[450px] relative h-full topy-tilt fade-top">
                      <Image
                        src='/assets/images/device-bk.png'
                        className='absolute top-0 left-0 w-full !min-h-full h-full'
                        alt="bk"
                        width={1000}
                        height={1000}
                      />
                      <Image
                        src='/assets/images/d7.png'
                        className='!w-auto !h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative z-30'
                        alt="bk"
                        width={1000}
                        height={1000}
                      />
                      <div className="portfolio__single-content z-50">
                        <Link href="/portfolio">
                          <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                        </Link>
                        <h4>
                          <Link href="/portfolio">Clover</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lines d-none d-lg-flex !bg-white">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </section>

            {/* Offer Section */}
            <section className="section offer fade-wrapper light !z-40 !bg-transparent">
              <div className="container  relative z-40">
                <div className="row gaper">
                  <div className="col-12 col-lg-5">
                    <div className="offer__content section__content">
                      <span className="sub-title">
                        WHAT WE OFFER
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <h2 className="title title-anim">Devices That Handles All</h2>
                      <div className="paragraph">
                        <p>
                          Designed to manage every task effortlessly, our devices bring everything together in one powerful solution. From everyday productivity to advanced performance needs, they adapt seamlessly to your workflow. Built for the modern world, these all-in-one devices ensure reliability, speed, and a smooth experience across every generation of technology.
                        </p>
                      </div>
                      <div className="section__content-cta relative z-50">
                        <Link href="/our-services" className="btn btn--secondary">
                          view all devices
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
                    <div className="offer__cta">
                      {[
                        { num: '01', title: 'Peripheral Devices', bg: '/assets/images/d2.png' },
                        { num: '02', title: 'Clover Devices', bg: '/assets/images/d1.png' },
                        { num: '03', title: 'NRS Devices', bg: '/assets/images/d8.png' },
                        { num: '04', title: 'PAX Devices', bg: '/assets/images/d3.png' },
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
                            className="offer-thumb-hover d-none d-md-block w-[200px]"
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
            <section className="section testimonial pt-0 position-relative !z-40 !bg-transparent">
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
              <div className="border-2 border-l-0 border-r-0 border-[#0633f8] position-relative bg-white !m-0 !w-full !py-[80px]">
                <div className="row">
                  <div className="col-12 col-xxl-10">
                    <div className="testimonial-s__slider">
                      {[
                        {
                          img: '/assets/images/t1.webp',
                          name: 'Jenny Wilson',
                          title: 'Wholesale Distributor',
                          desc: 'The detailed reports and analytics provided by Soireeinc’s POS System have greatly improved how we track sales and manage inventory. We’re now able to identify trends and make informed decisions, leading to a noticeable increase in profitability!'
                        },
                        {
                          img: '/assets/images/t2.webp',
                          name: 'Devon Lane',
                          title: 'Shop Owner',
                          desc: 'Since implementing Soireeinc’s POS System, our business has transformed. The interface is user-friendly, making transactions smooth and efficient. Inventory tracking is now a breeze, and customer checkouts are faster than ever. It’s been a game-changer for our team!'
                        }
                      ].map((item, index) => (
                        <div key={index} className="testimonial-s__slider-single">
                          <div className="row gaper align-items-center">
                            <div className="col-12 col-lg-4 col-xxl-4">
                              <div className="thumb">
                                <Image
                                  src={item.img}
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
                                    {item.desc}
                                  </h4>
                                </div>
                                <div className="content-cta">
                                  <h5>{item.name}</h5>
                                  <p>{item.title}</p>
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
              <div className="lines d-none d-lg-flex bg-white">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </section>

            {/* Blog Section */}
            <section className="section blog fade-wrapper !bg-white relative !z-50 !pt-[10px]">
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
            <div className="sponsor section !py-[60px] bg-[#000621] !relative !z-40">
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
              {/* <div className="lines d-none d-lg-flex">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div> */}
            </div>

            {/* Next Page Section */}
            <section className="section next-page !bg-white !relative !z-40 !pt-[60px]">
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
              {/* <div className="lines d-none d-lg-flex">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div> */}
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
      {/* <div className="vid-m">
        <div className="vid-c">
          <a href="#" aria-label="close video popup" className="close-v">
            <i className="fa-light fa-xmark-large"></i>
          </a>
          <video autoPlay loop muted controls>
            <source src="/assets/images/popup-video.mp4" type="video/mp4" />
          </video>
          <h5>Hello</h5>
        </div>
      </div> */}
      <ScriptLoader />
    </div>
  )
}

