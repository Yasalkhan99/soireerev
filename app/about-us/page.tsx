import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - Xpovio',
  description: 'Learn more about our digital agency',
}

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
            <section className="banner" style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="banner__content">
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">About Us</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Content Section */}
            <section className="section">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section__content">
                      <h2 className="title">Our Story</h2>
                      <div className="paragraph">
                        <p>
                          We are a full-service website design, development and digital marketing company specializing in
                          SEO, content marketing that grows brands. Bring to the table win-win survival strategies to
                          ensure proactive domination.
                        </p>
                        <p>
                          At the end of the day, going forward, a new normal that has evolved from generation on the
                          runway heading towards a streamlined cloud solution going forward porttitor dictum sapien.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
      <ScrollToTop />
      <ScriptLoader />
    </div>
  )
}

