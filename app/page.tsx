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
          <h3 className="is-size-2">The Best Bowls. Anytime.</h3>
          <h6 className="is-size-4">Tasty meals ideas faster than ever.</h6>
          <Link href="/bowlerator" role="button" className="hero-cta-button">
            Try It Out
          </Link>
        </hgroup>
      </section>
      <section className="container pb-6">
        <div className="grid">
          <div>
            <Image src={about} width={400} height={400} alt="placeholder" />
          </div>
          <div>
            <h4>All in one place</h4>
            <div>
              We create fresh bowl ideas for your busy day. Using our ingredient
              synergizer, we find ingredients that work best for your daily
              routine.
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-info-light">
        <h4 className="is-size-3 has-text-centered pb-5">
          Custom bowls, just for you
        </h4>
        <div className="columns is-centered ">
          <div className="column is-one-third has-text-centered">
            <div className="icon1">
              <FontAwesomeIcon icon={faBowlFood} />
            </div>

            <div>instant bowl ideas</div>
          </div>
          <div className="column is-one-third has-text-centered">
            <div className="icon1">
              <FontAwesomeIcon icon={faGaugeHigh} />
            </div>
            <div>favorite ingredient selection</div>
          </div>
          <div className="column is-one-third has-text-centered">
            <div className="icon1">
              <FontAwesomeIcon icon={faChartPie} />
            </div>
            <div>Customized ingredient ratios</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="grid">
          <div>
            <Image src={bowl1} width={400} height={400} alt="placeholder" />
          </div>
          <div>
            Our bowls are guaranteed to be fresh and creative. With a nearly
            endless combination of creations.
          </div>
        </div>
      </section>
      <section className="section">
        <div className="grid">
          <div>Many have tried and now use it everyday.</div>
          <div>
            <Image src={bowl2} width={400} height={400} alt="placeholder" />
          </div>
        </div>
      </section>
      <section className="section has-background-info-light">
        <h3 className="is-size-2 has-text-centered">Join us!</h3>
        <p className="is-size-6 has-text-centered">Make a bowl today</p>
        <button>make a bowl</button>
      </section>
    </main>
  )
}
