import Image from "next/image"
import team from "../../assets/team.jpg"
import Link from "next/link"

export default function About() {
  return (
    <main>
      <section className="hero2">
        <hgroup className="hero-heading">
          <h3 className="is-size-2">About us</h3>
        </hgroup>
      </section>
      <section className="container pb-6">
        <div className="grid">
          <div>
            <Image src={team} width={400} height={400} alt="placeholder" />
          </div>
          <div>
            <h4 className="is-size-3 pb-3">
              We're here to revolutionize the bowl
            </h4>
            <div>
              Welcome to Bowlerator, where we're passionate about
              revolutionizing the way you approach meal prep. Our journey began
              with a simple idea - to make healthy eating easy, delicious, and
              convenient. We believe that everyone deserves access to wholesome,
              freshly prepared meals without the stress of planning and cooking.
              That's why we've created an innovative bowl prep system that
              empowers you to take control of your nutrition and wellness
              journey.
            </div>
          </div>
        </div>
      </section>

      <section className="banner-color2  px-6 mb-0">
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
