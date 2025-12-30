import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Blog Post - Xpovio',
  description: 'Read our blog post',
}

export default function BlogSingle() {
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
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">Blog Details</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-8 offset-lg-2">
                    <div className="blog__single-content">
                      <div className="blog__single-thumb mb-4">
                        <Image src="/assets/images/blog/one.png" alt="Blog" width={800} height={500} />
                      </div>
                      <h2 className="title mb-4">A Simple Social Media Marketing Checklist</h2>
                      <div className="blog__single-meta mb-4">
                        <Link href="/blog" className="sub-title">
                          creative
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <p>MARCH 23, 2023</p>
                      </div>
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

