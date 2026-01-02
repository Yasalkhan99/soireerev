import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer section pb-0"
      data-background="/assets/images/footer/footer-bg.png"
    >
      <div className="container">
        <div className="row gaper">
          <div className="col-12">
            <div className="text-center">
              <Link href="/" className="logo pb-4">
                <Image
                  src="/SoireInc Logo White.png"
                  alt="SoireInc Logo"
                  width={150}
                  height={50}
                />
              </Link>
              <p className="!text-white">
                Soireeinc® is a registered MSP/ISO (Merchant Service
                Provider/Independent Sales Organization) that has established
                partnerships with leading financial institutions such as Elavon,
                Inc. (a wholly-owned subsidiary of U.S. Bancorp based in
                Georgia), Wells Fargo Bank, N.A. (Concord, CA), Esquire Bank,
                N.A. (Jericho, NY), and Commercial Bank of California (Irving,
                CA). All referenced trademarks and brands belong to their
                respective owners. Please note that American Express may require
                a separate approval process. Additionally, Clover is a
                registered trademark of Clover Network, Inc., a Fiserv company,
                and is used in the U.S. and other markets under license.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Subscribe our newsletter</h5>
              </div>
              <div className="footer__single-content">
                <p className="!text-white">
                  Welcome to our digital agency We specialize in helping
                  business most like yours succeed online.
                </p>
                <div className="footer__single-form">
                  <form action="#" method="post">
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        className="!text-white placeholder:text-white"
                        id="subscribeNews"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="subscribe">
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-4">
            <div className="footer__single text-center">
              <div className="footer__single-intro">
                <h5>discover</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/products">All Products</Link>
                  </li>
                  {/* <li>
                    <Link href="/blog">News & Blog</Link>
                  </li> */}
                  <li>
                    <Link href="/contact-us">contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Contact Info</h5>
              </div>
              <div className="footer__single-meta !flex-col">
                <a
                  href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!max-w-full !gap-3"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  1510 Randolph St. Ste 208, Carrollton, TX 75006
                </a>
                <a href="tel:406-555-0120" className="!w-full !gap-3">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  +1 214-831-4739
                </a>
                <a href="mailto:info@soireinc.com" className="!w-full !gap-3">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  sales@soireeinc.com
                </a>
              </div>
              <div className="footer__cta text-start">
                <Link href="/contact-us" className="btn btn--secondary">
                  get started with us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="footer__copyright-text text-center text-lg-start">
                    <p className="!text-white">
                      Copyright &copy; {currentYear} SoireeInc. All Rights
                      Reserved
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">
                    <a
                      href="https://www.facebook.com/soireeincofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://x.com/soireeIINC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/soireeinc9/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
