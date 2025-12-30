import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import MouseCursor from '@/components/MouseCursor'
import ScrollToTop from '@/components/ScrollToTop'
import ScriptLoader from '@/components/ScriptLoader'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Our Teams - Xpovio',
  description: 'Meet our team members',
}

export default function OurTeams() {
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'CEO & Founder', image: 'one.png' },
    { id: 2, name: 'Jane Smith', role: 'Creative Director', image: 'two.png' },
    { id: 3, name: 'Mike Johnson', role: 'Lead Developer', image: 'three.png' },
    { id: 4, name: 'Sarah Williams', role: 'Marketing Manager', image: 'four.png' },
    { id: 5, name: 'David Brown', role: 'UI/UX Designer', image: 'five.png' },
    { id: 6, name: 'Emily Davis', role: 'Content Writer', image: 'six.png' },
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
                      <h1 className="text-uppercase text-start fw-9 mb-0 title-anim">Our Teams</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section fade-wrapper">
              <div className="container">
                <div className="row gaper">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="col-12 col-sm-6 col-lg-4">
                      <div className="team__single fade-top">
                        <Link href={`/team-single?id=${member.id}`}>
                          <Image
                            src={`/assets/images/teams/${member.image}`}
                            alt={member.name}
                            width={400}
                            height={500}
                          />
                        </Link>
                        <div className="team__single-content">
                          <h4>
                            <Link href={`/team-single?id=${member.id}`}>{member.name}</Link>
                          </h4>
                          <p>{member.role}</p>
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

