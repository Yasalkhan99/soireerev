import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Blog - Xpovio',
  description: 'Read our latest blog posts and news',
}

export default function Blog() {
  const blogPosts = [
    { id: 1, title: 'A Simple Social Media Marketing Checklist', image: 'one.png', date: 'MARCH 23, 2023', category: 'creative' },
    { id: 2, title: 'Transforming Challenges into Opportunities', image: 'two.png', date: 'MARCH 23, 2023', category: 'creative' },
    { id: 3, title: 'The Future of Digital Marketing', image: 'three.png', date: 'MARCH 20, 2023', category: 'marketing' },
    { id: 4, title: 'Web Design Trends for 2023', image: 'four.png', date: 'MARCH 18, 2023', category: 'design' },
    { id: 5, title: 'SEO Best Practices', image: 'five.png', date: 'MARCH 15, 2023', category: 'seo' },
    { id: 6, title: 'Content Strategy Guide', image: 'eleven.png', date: 'MARCH 12, 2023', category: 'content' },
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
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">Blog</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section blog fade-wrapper">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                    <div className="section__header text-center">
                      <span className="sub-title">
                        news & Blog
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <h2 className="title title-anim">what&apos;s new in blog</h2>
                    </div>
                  </div>
                </div>
                <div className="row gaper">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="col-12 col-md-6 col-lg-4">
                      <div className="blog__single fade-top">
                        <div className="blog__single-thumb topy-tilt">
                          <Link href={`/blog-single?id=${post.id}`}>
                            <Image
                              src={`/assets/images/blog/${post.image}`}
                              alt={post.title}
                              width={600}
                              height={400}
                            />
                          </Link>
                        </div>
                        <div className="blog__single-content">
                          <h4>
                            <Link href={`/blog-single?id=${post.id}`}>{post.title}</Link>
                          </h4>
                          <div className="blog__single-meta">
                            <Link href="/blog" className="sub-title">
                              {post.category}
                              <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                            <p>{post.date}</p>
                          </div>
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

