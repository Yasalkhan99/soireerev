import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found - Xpovio',
}

export default function NotFound() {
  return (
    <div className="my-app">
      <Preloader />
      <MouseCursor />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">
                    <Image
                      src="/assets/images/error-thumb.png"
                      alt="404 Error"
                      width={600}
                      height={400}
                      className="mb-4"
                    />
                    <h1 className="title">404</h1>
                    <h2 className="h3 mb-4">Page Not Found</h2>
                    <p className="mb-4">
                      The page you are looking for might have been removed, had its name changed, or is temporarily
                      unavailable.
                    </p>
                    <Link href="/" className="btn btn--primary">
                      Go Back Home
                    </Link>
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

