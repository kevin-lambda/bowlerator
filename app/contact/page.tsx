import Image from "next/image"
import contact from "../../assets/contact.jpg"
import Link from "next/link"

export default function Contact() {
  return (
    <main>
      <section className="hero2">
        <hgroup className="hero-heading">
          <h3 className="is-size-2">Contact</h3>
        </hgroup>
      </section>
      <section className="container pb-6 mb-6">
        <div className="grid">
          <div className="pb-3">
            <h4 className="is-size-3 pb-3">How are we doing?</h4>
            <div className="pb-4">
              We love hearing from our community! Got a question, a suggestion,
              or just want to say hello? We're all ears!
            </div>
            <div>
              Our team is here to assist you with any inquiries you may have,
              whether it's about our delicious bowl ideas, our ingredient
              synergizer, or anything else. We're dedicated to providing
              top-notch customer service and making your experience with us as
              smooth as possible.
            </div>
          </div>
          <div>
            <Image src={contact} width={400} height={400} alt="placeholder" />
          </div>
        </div>
      </section>

      <section className="px-6 pb-6 mb-0">
        <button className="button cta-bottom is-normal is-info">
          Email us
        </button>

        {/* <button className="button is-primary">Make a bowl now</button> */}
      </section>
    </main>
  )
}
