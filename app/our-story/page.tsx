import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'

export const metadata = {
  title: 'Our Story - Xpovio',
  description: 'Learn about our company story',
}

export default function OurStory() {
  return (
    <div className="my-app">
      <Preloader />
      <MouseCursor />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="banner" style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="banner__content">
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">Our Story</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-8 offset-lg-2">
                    <div className="section__content">
                      <h2 className="title mb-4">Our Journey</h2>
                      <div className="paragraph">
                        <p>
                          We started as a small team with a big vision - to help businesses succeed in the digital world.
                          Over the years, we&apos;ve grown into a full-service digital agency, working with clients from
                          startups to Fortune 500 companies.
                        </p>
                        <p>
                          Our commitment to excellence and innovation has driven us to constantly evolve and adapt to the
                          changing digital landscape. We believe in building long-term relationships with our clients and
                          delivering results that exceed expectations.
                        </p>
                        <p>
                          Today, we&apos;re proud to be a trusted partner for businesses looking to grow their online
                          presence and achieve their digital goals.
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

