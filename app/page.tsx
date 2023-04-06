import Image from "next/image"
import hero from "../assets/hero.jpg"
import about from "../assets/about.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBowlFood,
  faGaugeHigh,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p>asdf</p>
        <p>asdf</p>
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
      <section className="container">asdf</section>
      <section className="container">asdf</section>
    </main>
  )
}
