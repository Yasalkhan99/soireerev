import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import MouseCursor from "@/components/MouseCursor";
import ScrollToTop from "@/components/ScrollToTop";
import ScriptLoader from "@/components/ScriptLoader";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function AboutUs() {
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
                      <h1 className="text-lowercase !capitalize text-start fw-9 mb-0 title-anim !text-[78px] text-center !leading-[100px] [@media(max-width:1400px)]:!leading-[80px]">
                        All You Need To Know
                        <span className="text-stroke !pl-[15px] !block">
                          About Soireeinc
                        </span>
                      </h1>
                      <div className="banner__content-inner !mt-[60px]">
                        <p>
                          At Soireeinc, we’re redefining electronic payments by
                          delivering innovative, secure, and intuitive solutions
                          that keep businesses moving forward. Our commitment
                          goes beyond transactions; we build lasting
                          partnerships by providing scalable, future-ready tools
                          that adapt to your business as it evolves.
                        </p>
                        {/* <div className="cta section__content-cta !mt-[20px]">
                          <div className="single flex items-start gap-2">
                            <h5 className="fw-7">12+ </h5>
                            <p className="fw-5 !m-0">years of experience</p>
                          </div>
                        </div> */}
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

            <section className="section agency !py-[80px]">
              <div className="container">
                <div className="row gaper align-items-center justify-center !min-h-full">
                  <div className="col-12 col-lg-10 text-center">
                    <div className="">
                      <h2 className="title title-anim">
                        Why Choose Soireeinc?
                      </h2>
                      <div className="paragraph">
                        <p className="!my-4">
                          Soireeinc delivers enterprise-grade POS systems
                          engineered for performance, security, and scalability.
                          Our industry-leading platform combines robust payment
                          processing with intelligent business automation to
                          drive operational excellence.
                        </p>
                      </div>
                    </div>
                    <div className="row !mt-10">
                      <div className="col-12 col-lg-4">
                        <div>
                          <div className="flex justify-center">
                            <Image
                              src="/assets/images/s1.png"
                              alt="Image"
                              className="relative z-20 w-[30%]"
                              width={1000}
                              height={1000}
                            />
                          </div>
                          <h2 className="title title-anim !text-[20px]">
                            Monthly Processing Fee
                          </h2>
                          <p className="!mt-0">
                            Pay one predictable monthly fee for everything you
                            need—secure transactions, 24/7 support, and powerful
                            analytics—with no hidden costs. We keep pricing
                            straightforward so you can focus on growth, not
                            surprises.
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4">
                        <div>
                          <div className="flex justify-center">
                            <Image
                              src="/assets/images/s2.png"
                              alt="Image"
                              className="relative z-20 w-[30%]"
                              width={1000}
                              height={1000}
                            />
                          </div>
                          <h2 className="title title-anim !text-[20px]">
                            Excellent Customer Service
                          </h2>
                          <p className="!mt-0">
                            Our U.S.-based customer care team is available
                            around the clock with fast, knowledgeable
                            assistance. Whether you have a quick question or
                            need technical help, we’re here when you need us.
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4">
                        <div>
                          <div className="flex justify-center">
                            <Image
                              src="/assets/images/s3.png"
                              alt="Image"
                              className="relative z-20 w-[30%]"
                              width={1000}
                              height={1000}
                            />
                          </div>
                          <h2 className="title title-anim !text-[20px]">
                            Free Equipment
                          </h2>
                          <p className="!mt-0">
                            We provide complimentary card readers and terminals
                            (no leases or upfront costs), so you can start
                            processing payments immediately with top-tier
                            hardware.
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4 !mt-12">
                        <div>
                          <div className="flex justify-center">
                            <Image
                              src="/assets/images/s4.png"
                              alt="Image"
                              className="relative z-20 w-[30%]"
                              width={1000}
                              height={1000}
                            />
                          </div>
                          <h2 className="title title-anim !text-[20px]">
                            Fast Deposit
                          </h2>
                          <p className="!mt-0">
                            Get access to your money faster—funds typically
                            arrive in your account within 24 hours, not days.
                            Improve cash flow and keep your business moving
                            forward.
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4 !mt-12">
                        <div>
                          <div className="flex justify-center">
                            <Image
                              src="/assets/images/s5.png"
                              alt="Image"
                              className="relative z-20 w-[30%]"
                              width={1000}
                              height={1000}
                            />
                          </div>
                          <h2 className="title title-anim !text-[20px]">
                            Transparent Pricing
                          </h2>
                          <p className="!mt-0">
                            Know exactly what you’ll pay with our fixed
                            percentage per transaction. No confusing tiers or
                            variable fees—just easy budgeting and peace of mind.
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4 !mt-12">
                        <div>
                          <div className="flex justify-center">
                            <Image
                              src="/assets/images/s6.png"
                              alt="Image"
                              className="relative z-20 w-[30%]"
                              width={1000}
                              height={1000}
                            />
                          </div>
                          <h2 className="title title-anim !text-[20px]">
                            Easy To Use
                          </h2>
                          <p className="!mt-0">
                            Our user-friendly platform lets you process
                            payments, generate reports, and manage finances
                            seamlessly—all from one dashboard designed for busy
                            business owners.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Agency Section */}
            <section className="section agency !py-[80px]">
              <div className="container">
                <div className="row gaper align-items-center !min-h-full">
                  <div className="col-12 col-lg-6 !min-h-full">
                    <div className="agency__thumb relative !min-h-full">
                      <Image
                        src="/assets/images/a1.webp"
                        alt="Image"
                        className="h-full fade-left relative z-20 object-cover !max-w-[100%]"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="">
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-circle text-[#1c46ff] text-[6px]"></i>
                        <span className="sub-title !border-none text-[#1c46ff] !pl-0 !mb-0">
                          ABOUT US
                        </span>
                      </div>
                      <h2 className="title title-anim">About Soireeinc</h2>
                      <div className="paragraph">
                        <p className="!mb-4">
                          At Soireeinc, we’re redefining electronic payments by
                          delivering innovative, secure, and intuitive solutions
                          that keep businesses moving forward. As a trusted
                          leader in payment processing, we combine advanced
                          technology with deep industry expertise to help
                          merchants—from growing startups to established
                          enterprises—optimize their operations, reduce
                          complexity, and unlock new opportunities. Our
                          commitment goes beyond transactions; we build lasting
                          partnerships by providing scalable, future-ready tools
                          that adapt to your business as it evolves.
                        </p>
                      </div>
                      <div className="section__content-cta !mt-8">
                        <Link href="/about-us" className="btn btn--primary">
                          Our Devices
                        </Link>
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
              <Image
                src="/assets/images/agency/dot-large.png"
                alt="Image"
                className="dot-large"
                width={200}
                height={200}
              />
            </section>

            <section className="section agency !py-[80px]">
              <div className="container">
                <div className="row gaper align-items-center !min-h-full">
                  <div className="col-12 col-lg-6">
                    <div className="">
                      {/* <div className="flex items-center gap-2">
                        <i className="fa-solid fa-circle text-[#1c46ff] text-[6px]"></i>
                        <span className="sub-title !border-none text-[#1c46ff] !pl-0 !mb-0">
                          ABOUT US
                        </span>
                      </div> */}
                      <h2 className="title title-anim !text-[50px]">
                        Your Success, Our Priority
                      </h2>
                      <div className="paragraph">
                        <p className="!mb-4">
                          Payment processing isn’t one-size-fits-all—that’s why
                          we take the time to understand your unique goals and
                          challenges. Backed by decades of experience, our team
                          acts as an extension of your business, offering
                          tailored solutions, white-glove support, and smart
                          integrations that simplify your workflow. We don’t
                          just process payments; we empower you with the
                          insights, technology, and partnership needed to stay
                          ahead in a fast-paced market. When you choose
                          Soireeinc, you gain more than a provider—you gain a
                          dedicated ally invested in your growth every step of
                          the way.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 !min-h-full">
                    <div className="agency__thumb relative !min-h-full">
                      <Image
                        src="/assets/images/a2.webp"
                        alt="Image"
                        className="h-full fade-left relative z-20 object-cover !max-w-[100%]"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src="/assets/images/agency/dot-large.png"
                alt="Image"
                className="dot-large"
                width={200}
                height={200}
              />
            </section>

            {/* Testimonial Section */}
            <section className="section testimonial pt-10 position-relative !z-40 !bg-white">
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
            <div className="sponsor section !py-[60px] bg-[#000621] !relative !z-40">
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
