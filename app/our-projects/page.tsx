import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Our Projects - Xpovio',
  description: 'View our portfolio of projects',
}

export default function OurProjects() {
  const projects = [
    { id: 1, title: 'Digital Marketing Campaign', image: 'one.png' },
    { id: 2, title: 'E-commerce Website', image: 'two.png' },
    { id: 3, title: 'Brand Identity Design', image: 'three.png' },
    { id: 4, title: 'Mobile App Development', image: 'four.png' },
    { id: 5, title: 'SEO Optimization', image: 'five.png' },
    { id: 6, title: 'Social Media Strategy', image: 'six.png' },
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
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">Our Projects</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section portfolio fade-wrapper">
              <div className="container">
                <div className="row gaper">
                  {projects.map((project) => (
                    <div key={project.id} className="col-12 col-sm-6 col-xl-4">
                      <div className="portfolio__single topy-tilt fade-top">
                        <Link href={`/project-single?id=${project.id}`}>
                          <Image
                            src={`/assets/images/projects/${project.image}`}
                            alt={project.title}
                            width={400}
                            height={300}
                          />
                        </Link>
                        <div className="portfolio__single-content">
                          <Link href={`/project-single?id=${project.id}`}>
                            <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                          </Link>
                          <h4>
                            <Link href={`/project-single?id=${project.id}`}>{project.title}</Link>
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

