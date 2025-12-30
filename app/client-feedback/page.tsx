import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'

export const metadata = {
  title: 'Client Feedback - Xpovio',
  description: 'Read what our clients say about us',
}

export default function ClientFeedback() {
  const testimonials = [
    {
      id: 1,
      name: 'Daniel Smith',
      role: 'Senior Engineer',
      image: 's-thumb.png',
      quote: 'posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit.',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      image: 's-thumb-two.png',
      quote: 'posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit.',
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'CEO',
      image: 's-thumb-three.png',
      quote: 'posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit.',
    },
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
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">Client Feedback</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section testimonial fade-wrapper">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                    <div className="section__header text-center mb-5">
                      <span className="sub-title">
                        TESTIMONIALS
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <h2 className="title title-anim">What Our Clients Say</h2>
                    </div>
                  </div>
                </div>
                <div className="row gaper">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="col-12 col-md-6 col-lg-4">
                      <div className="testimonial-s__content fade-top">
                        <div className="quote mb-3">
                          <i className="fa-solid fa-quote-right"></i>
                        </div>
                        <div className="content mb-4">
                          <h4>{testimonial.quote}</h4>
                        </div>
                        <div className="content-cta">
                          <Image
                            src={`/assets/images/testimonial/${testimonial.image}`}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="rounded-circle mb-3"
                          />
                          <h5>{testimonial.name}</h5>
                          <p>{testimonial.role}</p>
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

