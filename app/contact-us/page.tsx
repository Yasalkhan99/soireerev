import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'

export const metadata = {
  title: 'Contact Us - Xpovio',
  description: 'Get in touch with us',
}

export default function ContactUs() {
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
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">Contact Us</h1>
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
                      <h2 className="title">Get in Touch</h2>
                      <form className="contact-form">
                        <div className="row gaper">
                          <div className="col-12 col-md-6">
                            <div className="input-group">
                              <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="input-group">
                              <input type="email" name="email" placeholder="Your Email" required />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-group">
                              <input type="text" name="subject" placeholder="Subject" required />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-group">
                              <textarea name="message" rows={5} placeholder="Your Message" required></textarea>
                            </div>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn btn--primary">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
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

