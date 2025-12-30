import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'

export const metadata = {
  title: 'FAQ - Xpovio',
  description: 'Frequently asked questions',
}

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: 'What services do you offer?',
      answer: 'We offer a wide range of digital services including web design, development, digital marketing, SEO, and more.',
    },
    {
      id: 2,
      question: 'How long does a project take?',
      answer: 'Project timelines vary depending on the scope and complexity. Typically, a website project takes 4-8 weeks.',
    },
    {
      id: 3,
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer ongoing maintenance and support packages to keep your website running smoothly.',
    },
    {
      id: 4,
      question: 'What is your pricing model?',
      answer: 'We provide custom quotes based on your specific project requirements. Contact us for a detailed estimate.',
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
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">FAQ</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section fade-wrapper">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                    <div className="faq__wrapper">
                      {faqs.map((faq) => (
                        <div key={faq.id} className="faq__single fade-top mb-4">
                          <div className="faq__single-header">
                            <h4>{faq.question}</h4>
                          </div>
                          <div className="faq__single-content">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      ))}
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

