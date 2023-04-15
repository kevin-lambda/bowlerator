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
            <h4 className="is-size-3 pb-3">All in one place</h4>
            <div>
              Experience the convenience and deliciousness of our bowl ideas,
              powered by our cutting-edge ingredient synergizer. With carefully
              selected ingredients that work in harmony with your daily routine,
              you can enjoy wholesome and satisfying meals without the hassle of
              planning or prepping
            </div>
          </div>
        </div>
      </section>
      <section className="section banner-color">
        <h4 className="is-size-3 has-text-centered pb-6">
          Custom bowls, just for you
        </h4>
        <div className="columns is-centered ">
          <div className="column is-one-third has-text-centered">
            <div className="icon1">
              <FontAwesomeIcon icon={faBowlFood} className="pb-3" />
            </div>

            <div className="is-size-5">Instant bowl ideas</div>
          </div>
          <div className="column is-one-third has-text-centered">
            <div className="icon1">
              <FontAwesomeIcon icon={faGaugeHigh} className="pb-3" />
            </div>
            <div className="is-size-5">Favorite ingredient selection</div>
          </div>
          <div className="column is-one-third has-text-centered">
            <div className="icon1">
              <FontAwesomeIcon
                icon={faChartPie}
                width="110%"
                className="pb-3"
              />
            </div>
            <div className="is-size-5">Customized ingredient ratios</div>
          </div>
        </div>
      </section>
      <section className="section pt-1 pb-1">
        <div className="grid">
          <div>
            <h4 className="is-size-3 pb-3">Endless Combinations</h4>
            <div>
              Fuel your body with the best ingredients for meal bowls -
              carefully selected for their taste, quality, and nutritional
              value, our ingredients are the building blocks of flavorful and
              balanced meal bowl ideas.
            </div>
          </div>
          <div>
            <Image src={bowl1} width={400} height={400} alt="placeholder" />
          </div>
        </div>
      </section>
      <section className="section  pt-1 pb-1">
        <div className="grid">
          <div>
            <Image src={bowl2} width={400} height={400} alt="placeholder" />
          </div>
          <div>
            <h4 className="is-size-3 pb-3">Perfect for Prep</h4>
            <div>
              Elevate your meal prep game with our versatile ingredients -
              perfect for storing, prepping, and serving your favorite meals
            </div>
          </div>
        </div>
      </section>
      <section className="banner-color2 px-6 mb-0">
        <h3 className="is-size-2 has-text-centered pt-5 pb-3">Try it out!</h3>
        <Link href="/bowlerator">
          <button className="button cta-bottom is-normal is-info">
            Get a Bowl
          </button>
        </Link>
        {/* <button className="button is-primary">Make a bowl now</button> */}
      </section>
    </main>
  )
}
