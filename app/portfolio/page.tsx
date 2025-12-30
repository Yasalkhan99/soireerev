import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Portfolio - Xpovio',
  description: 'View our portfolio',
}

export default function Portfolio() {
  const portfolioItems = [
    { id: 1, image: 'one.png', title: 'Digital Marketing' },
    { id: 2, image: 'two.png', title: 'Web Design' },
    { id: 3, image: 'three.png', title: 'Branding' },
    { id: 4, image: 'four.png', title: 'UI/UX Design' },
    { id: 5, image: 'five.png', title: 'Mobile App' },
    { id: 6, image: 'six.png', title: 'E-commerce' },
    { id: 7, image: 'seven.png', title: 'SEO' },
    { id: 8, image: 'eight.png', title: 'Content Strategy' },
  ]

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
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">Portfolio</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section portfolio fade-wrapper">
              <div className="container-fluid">
                <div className="row gaper">
                  {portfolioItems.map((item) => (
                    <div key={item.id} className="col-12 col-sm-6 col-xl-3">
                      <div className="portfolio__single topy-tilt fade-top">
                        <Link href="/portfolio">
                          <Image
                            src={`/assets/images/portfolio/${item.image}`}
                            alt={item.title}
                            width={400}
                            height={300}
                          />
                        </Link>
                        <div className="portfolio__single-content">
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

