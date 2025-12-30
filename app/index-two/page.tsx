import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Digital Agency - Xpovio',
  description: 'Digital Agency Portfolio Template',
}

export default function IndexTwo() {
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
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">
                        Digital
                        <span className="text-stroke">Agency</span>
                      </h1>
                      <div className="banner__content-inner">
                        <p>We are a full-service website design, development and digital marketing company specializing in SEO, content marketing that grows brands.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <Link href="/" className="btn btn--primary">View Default Version</Link>
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

