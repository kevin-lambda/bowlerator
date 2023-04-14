import React from "react"
import Image from "next/image"
import hero from "../../assets/hero.jpg"
import about from "../../assets/about.jpg"
import bowl1 from "../../assets/bowl1.jpg"
import bowl2 from "../../assets/bowl2.jpg"
import bowl from "../../assets/bowl.jpg"
import team from "../../assets/team.jpg"
import contact from "../../assets/contact.jpg"

function page() {
  return (
    <section className="section">
      <h3 className="is-size-2 pb-3">Image credits</h3>
      <div className="grid">
        <div>
          <Image src={hero} width={400} height={400} alt="placeholder" />
          <span>
            Photo by{" "}
            <a href="https://unsplash.com/@elizabethlee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Chaewon Lee
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/sBOl-XPYv9M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
        <div>
          <Image src={about} width={400} height={400} alt="placeholder" />
          <span>
            Photo by{" "}
            <a href="https://unsplash.com/ko/@icons8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Icons8 Team
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/seDjj4dmC9s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
        <div>
          <Image src={bowl1} width={400} height={400} alt="placeholder" />
          <span>
            Photo by{" "}
            <a href="https://unsplash.com/@iemanuel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              I E
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/KRGFXJWIo2Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
        <div>
          <Image src={bowl2} width={400} height={400} alt="placeholder" />
          <span>
            Photo by{" "}
            <a href="https://unsplash.com/@monstruoestudio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Monstruo Estudio
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/lQy6mHZ7fYk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
        <div>
          <Image src={bowl} width={300} height={400} alt="placeholder" />
          <span>
            Photo by{" "}
            <a href="https://unsplash.com/@pwign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Anh Nguyen
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/_Uqj5BQb-mw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
        <div>
          <Image src={team} width={300} height={400} alt="placeholder" />
          <span>
            Photo by{" "}
            <a href="https://unsplash.com/de/@jasongoodman_youxventures?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Jason Goodman
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/bzqU01v-G54?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
        <div>
          <Image src={contact} width={300} height={400} alt="placeholder" />
          <span>
            Photo by{" "}
            <a href="https://unsplash.com/@cytonn_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Cytonn Photography
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/ZJEKICY5EXY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}

export default page
