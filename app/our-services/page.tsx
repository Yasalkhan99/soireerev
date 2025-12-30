import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Our Services - Xpovio',
  description: 'Explore our digital agency services',
}

export default function OurServices() {
  const services = [
    { id: 1, title: 'UI/UX Experience', image: 'thumb-one.png', description: 'We create beautiful and intuitive user interfaces' },
    { id: 2, title: 'Web Development', image: 'thumb-two.png', description: 'Custom web development solutions' },
    { id: 3, title: 'Digital Marketing', image: 'one.png', description: 'Grow your business with our marketing strategies' },
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
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">Our Services</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section offer fade-wrapper">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                    <div className="section__header text-center">
                      <span className="sub-title">
                        WHAT WE OFFER
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <h2 className="title title-anim">Our Services</h2>
                    </div>
                  </div>
                </div>
                <div className="row gaper">
                  {services.map((service) => (
                    <div key={service.id} className="col-12 col-md-6 col-lg-4">
                      <div className="offer__cta-single fade-top">
                        <span className="sub-title">
                          {String(service.id).padStart(2, '0')}
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h2>
                          <Link href={`/service-single?id=${service.id}`}>
                            {service.title}
                            <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                          </Link>
                        </h2>
                        <p>{service.description}</p>
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

