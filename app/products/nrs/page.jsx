import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import MouseCursor from "@/components/MouseCursor";
import ScrollToTop from "@/components/ScrollToTop";
import ScriptLoader from "@/components/ScriptLoader";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Nrs() {
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
                      <h1 className="text-lowercase !capitalize text-start fw-9 mb-0 title-anim !text-[78px] text-center !leading-[90px] [@media(max-width:1400px)]:!leading-[80px]">
                        NRS
                        <span className="text-stroke !pl-[15px]">Systems</span>
                        {/* <span className="interval justify-center gap-3 !-mt-8 [@media(max-width:1400px)]:!-mt-0 block">
                          <i className="fa-solid fa-arrow-right"></i>
                          SoireeInc POS Systems
                        </span> */}
                      </h1>
                      <div className="banner__content-inner !mt-[60px]">
                        <p>
                          Streamline sales, boost efficiency, and delight
                          customers with Soireeinc’s advanced POS
                          solutions—designed for speed, security, and seamless
                          transactions.
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
              <Image
                src="/assets/images/star.png"
                alt="Image"
                className="star"
                width={50}
                height={50}
              />
              <div className="banner-left-text banner-social-text d-none d-md-flex relative z-40">
                <a href="mailto:info@soireinc.com">
                  mail : sales@soireeinc.com
                </a>
                <a href="tel:99-2158-003-6980">Call : +1 214-831-4739</a>
              </div>
              <div className="banner-right-text banner-social-text d-none d-md-flex relative z-40">
                <a
                  href="https://www.instagram.com/soireeinc9/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram
                </a>
                <a
                  href="https://x.com/soireeIINC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href="https://www.facebook.com/soireeincofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook
                </a>
              </div>
              <a
                className="video-frame video-btn relative z-30 !border-3 !border-[#0633f8]"
                href="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1181731124074398%2F&show_text=false&t=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-sharp fa-solid fa-play"
                  style={{ color: "#0633f8" }}
                ></i>
              </a>
            </section>

            {/* Portfolio Section */}
            <section className="section portfolio pb-0 fade-wrapper position-relative">
              <div className="portfolio__text-slider">
                {[
                  { id: 1, title: "NRS" },
                  { id: 2, title: "NRS" },
                  { id: 3, title: "NRS" },
                  { id: 4, title: "NRS" },
                  { id: 5, title: "NRS" },
                  { id: 6, title: "NRS" },
                  { id: 7, title: "NRS" },
                ].map((i) => (
                  <div key={i.id} className="portfolio__text-slider-single">
                    <h2 className="h1">
                      {/* <Link href="/portfolio"> */}
                      NRS
                      <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                      {/* </Link> */}
                    </h2>
                  </div>
                ))}
              </div>
              <div className="container-fluid">
                <div className="row gaper">
                  {[
                    { img: "/assets/images/nrs1.png", title: "NRS Cheetah POS" },
                    { img: "/assets/images/nrs2.png", title: "NRS PETRO" },
                    // {
                    //   img: "/assets/images/pax3.png",
                    //   title: "A920 Elegant Smart Mobile",
                    // },
                    // { img: "/assets/images/pax4.png", title: "A920 Pro Powerful Smart Mobile" },
                    // { img: "/assets/images/pax5.png", title: "E700 Smart EPOS" },
                    // {
                    //   img: "/assets/images/c6.png",
                    //   title: "Clover Flex Pocket",
                    // },
                    // { img: "/assets/images/c7.png", title: "Clover Go" },
                    // { img: "/assets/images/c8.png", title: "Clover Go" },
                  ].map((item, index) => (
                    <div key={index} className="col-12 col-sm-6 col-xl-3">
                      <div
                        className={`portfolio__single rounded-3xl relative max-h-[350px] h-full ${
                          index === 0 ? "portfolio__single-active" : ""
                        } topy-tilt fade-top`}
                      >
                        <Image
                          src="/assets/images/device-bk.png"
                          className="absolute top-0 left-0 w-full !min-h-full h-full"
                          alt="bk"
                          width={1000}
                          height={1000}
                        />
                        <Image
                          src={item.img}
                          className="!w-[90%] !min-h-auto !max-h-[280px] !object-contain !h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative z-30"
                          alt="bk"
                          width={1000}
                          height={1000}
                        />
                        <Link
                          href="/portfolio"
                          className="w-full h-full"
                        ></Link>
                        <Link href="/portfolio">
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={300}
                          />
                        </Link>
                        <div className="portfolio__single-content !w-full !max-w-full !h-full !justify-start !items-center z-50">
                          {/* <Link href="/portfolio"> */}
                          {/* <i className="fa-sharp fa-solid fa-arrow-up-right"></i> */}
                          {/* </Link> */}
                          <h4>
                            {item.title}
                            {/* <Link href="/portfolio">{item.title}</Link> */}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
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
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-circle text-[#1c46ff] text-[6px]"></i>
                        <span className="sub-title !border-none text-[#1c46ff] !pl-0 !mb-0">
                          WHAT WE OFFER
                        </span>
                      </div>
                      {/* <span className="sub-title">
                        WHAT WE OFFER
                        <i className="fa-solid fa-arrow-right"></i>
                      </span> */}
                      <h2 className="title title-anim">
                        Devices That Handles All
                      </h2>
                      <div className="paragraph">
                        <p>
                          Designed to manage every task effortlessly, our
                          devices bring everything together in one powerful
                          solution. From everyday productivity to advanced
                          performance needs, they adapt seamlessly to your
                          workflow. Built for the modern world, these all-in-one
                          devices ensure reliability, speed, and a smooth
                          experience across every generation of technology.
                        </p>
                      </div>
                      <div className="section__content-cta relative z-50">
                        <Link
                          href="/products"
                          className="btn btn--secondary"
                        >
                          view all products
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
                    <div className="offer__cta">
                      {[
                        {
                          num: "01",
                          title: "Peripheral Devices",
                          bg: "/assets/images/d2.png",
                          joinedLink: "/products/peripherals",
                        },
                        {
                          num: "02",
                          title: "Clover Devices",
                          bg: "/assets/images/d1.png",
                          joinedLink: "/products/clover",
                        },
                        {
                          num: "03",
                          title: "NRS Devices",
                          bg: "/assets/images/d8.png",
                          joinedLink: "/products/nrs",
                        },
                        {
                          num: "04",
                          title: "PAX Devices",
                          bg: "/assets/images/d3.png",
                          joinedLink: "/products/pax",
                        },
                      ].map((item, idx) => (
                        <div key={idx} className="offer__cta-single fade-top">
                          <span className="sub-title">
                            {item.num}
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          <h2>
                            <Link href={item.joinedLink}>
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
              <Image
                src="/assets/images/offer/star.png"
                alt="Image"
                className="star"
                width={50}
                height={50}
              />
              <div className="lines d-none d-lg-flex">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </section>

            {/* Testimonial Section */}
            <section className="section testimonial pt-0 position-relative !z-40 !bg-white">
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
              <div className="position-relative bg-white" style={{ borderTop: '2px solid #0633f8', borderBottom: '2px solid #0633f8', margin: 0, width: '100%', paddingTop: '80px', paddingBottom: '80px', position: 'relative', zIndex: 40 }}>
                <div className="row">
                  <div className="col-12 col-xxl-10">
                    <div className="testimonial-s__slider">
                      {[
                        {
                          img: "/assets/images/t1.webp",
                          name: "Jenny Wilson",
                          title: "Wholesale Distributor",
                          desc: "The detailed reports and analytics provided by Soireeinc’s POS System have greatly improved how we track sales and manage inventory. We’re now able to identify trends and make informed decisions, leading to a noticeable increase in profitability!",
                        },
                        {
                          img: "/assets/images/t2.webp",
                          name: "Devon Lane",
                          title: "Shop Owner",
                          desc: "Since implementing Soireeinc’s POS System, our business has transformed. The interface is user-friendly, making transactions smooth and efficient. Inventory tracking is now a breeze, and customer checkouts are faster than ever. It’s been a game-changer for our team!",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="testimonial-s__slider-single"
                        >
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
                                  <path
                                    d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                                    stroke="#414141"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                              <div className="testimonial-s__content">
                                <div className="quote">
                                  <i className="fa-solid fa-quote-right"></i>
                                </div>
                                <div className="content">
                                  <h4>{item.desc}</h4>
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
                  <a
                    href="#"
                    aria-label="previous item"
                    className="slide-btn prev-testimonial-three"
                  >
                    <i className="fa-light fa-angle-left"></i>
                  </a>
                  <a
                    href="#"
                    aria-label="next item"
                    className="slide-btn next-testimonial-three"
                  >
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
                      <div className="flex items-center justify-center gap-2">
                        <i className="fa-solid fa-circle text-[#1c46ff] text-[6px]"></i>
                        <span className="sub-title !border-none text-[#1c46ff] !pl-0 !mb-0">
                          MERCHANT
                        </span>
                      </div>
                      {/* <span className="sub-title">
                        news & Blog
                        <i className="fa-solid fa-arrow-right"></i>
                      </span> */}
                      <h2 className="title title-anim">Merchant Processing</h2>
                    </div>
                  </div>
                </div>
                <div className="row gaper">
                  <div className="col-12 col-md-6">
                    <div className="blog__single fade-top">
                      <div className="blog__single-thumb topy-tilt">
                        <Image
                          className="!w-full !max-h-[360px]"
                          src="/assets/images/m1.webp"
                          alt="Image"
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div className="blog__single-content">
                        <h4>Industry-leading Technology</h4>
                        <div className="blog__single-meta !mt-4">
                          <p>
                            Soireeinc delivers next-gen POS solutions with
                            AI-driven analytics, cloud-based management, and
                            secure omnichannel payments. Our cutting-edge
                            technology ensures fast, reliable transactions,
                            real-time inventory tracking, and actionable
                            insights—empowering businesses to streamline
                            operations and boost growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="blog__single fade-top">
                      <div className="blog__single-thumb topy-tilt">
                        <Image
                          className="!w-full !max-h-[360px]"
                          src="/assets/images/m2.webp"
                          alt="Image"
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div className="blog__single-content">
                        <h4>
                          Transform your business with Soireeinc’s advanced POS
                          systems.
                        </h4>
                        <div className="blog__single-meta !mt-4">
                          <p>
                            Finding the right payment processing solution
                            shouldn’t mean compromising between affordability
                            and quality. At Soireeinc, we offer businesses a
                            seamless, cost-effective way to accept
                            payments—without sacrificing performance or
                            reliability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sponsor Section */}
            <div className="sponsor section" style={{ paddingTop: '60px', paddingBottom: '60px', backgroundColor: '#000621', position: 'relative', zIndex: 40 }}>
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="sponsor__slider">
                      {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="sponsor__slider-item">
                          <Image
                            src={`/assets/images/sponsor/${
                              i === 1
                                ? "one"
                                : i === 2
                                ? "two"
                                : i === 3
                                ? "three"
                                : i === 4
                                ? "four"
                                : i === 5
                                ? "five"
                                : "six"
                            }.png`}
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
            </div>

            {/* Next Page Section */}
            <section className="section next-page !bg-white !relative !z-40 !pt-[60px]">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                    <div className="section__header text-center">
                      <Link href="/contact-us" className="sub-title mb-0">
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
                      <Link href="/contact-us">
                        Contact Us
                        <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                      </Link>
                    </h2>
                  </div>
                ))}
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
      <ScriptLoader />
    </div>
  );
}
