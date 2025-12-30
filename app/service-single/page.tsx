import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'

export const metadata = {
  title: 'Service Details - Xpovio',
  description: 'Service details page',
}

export default function ServiceSingle() {
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
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">Service Details</h1>
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
                      <Image src="/assets/images/service/thumb-one.png" alt="Service" width={800} height={500} className="mb-4" />
                      <h2 className="title mb-4">UI/UX Experience</h2>
                      <div className="paragraph">
                        <p>
                          Bring to the table win-win survival strategies to ensure proactive domination. At the end of
                          the day, going forward, a new normal that has evolved from generation on the runway heading
                          towards a streamlined cloud solution going forward porttitor dictum sapien.
                        </p>
                        <p>
                          Bring to the table win-win survival strategies to ensure proactive domination. At the end of
                          the day, going forward, a new normal that has evolved from generation on the runway heading
                          towards a streamlined cloud solution going forward porttitor dictum sapien.
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

