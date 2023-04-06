import Image from "next/image"
import hero from "../assets/hero.jpg"
import about from "../assets/about.jpg"
import bowl1 from "../assets/bowl1.jpg"
import bowl2 from "../assets/bowl2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBowlFood,
  faGaugeHigh,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section className="hero">
        <hgroup className="hero-heading">
          <h3>The Best Bowls. Anytime.</h3>
          <h6>Tasty meals ideas faster than ever.</h6>
          <Link href="/bowlerator" role="button" className="hero-cta-button">
            Try It Out
          </Link>
        </hgroup>
      </section>
      <section className="container">
        <div className="grid">
          <div>
            <Image src={about} width={400} height={400} alt="placeholder" />
          </div>
          <div>
            we do this stuff all about that and give and for and provide that
          </div>
        </div>
      </section>
      <section className="container">
        <h4>Custom bowls, just for you</h4>
        <div className="grid">
          <div>
            <FontAwesomeIcon icon={faBowlFood} />
            <div>
              bowl generatoro a fo fo foawek nfewo;a nfwae o fwenlwfe newf ln
              wfealsdn lsd fds d
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faGaugeHigh} />
            <div>
              preference adjustment a fo fo foawek nfewo;a nfwae o fwenlwfe newf
              ln wfealsdn lsd fds d
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faChartPie} />
            <div>
              ingredient ratios a fo fo foawek nfewo;a nfwae o fwenlwfe newf ln
              wfealsdn lsd fds d
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="grid">
          <div>
            <Image src={bowl1} width={400} height={400} alt="placeholder" />
          </div>
          <div>
            we do this stuff all about that and give and for and provide that
          </div>
        </div>
      </section>
      <section className="container">
        <div className="grid">
          <div>
            we do this stuff all about that and give and for and provide that
          </div>
          <div>
            <Image src={bowl2} width={400} height={400} alt="placeholder" />
          </div>
        </div>
      </section>
      <section className="container">
        <h3>join us</h3>
        <p>text her ewalrjwel jif jweaofiawe we ew we few sew</p>
        <button>make a bowl</button>
      </section>
    </main>
  )
}
