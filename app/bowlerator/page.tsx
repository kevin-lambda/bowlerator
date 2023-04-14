import React from "react"
import { BowlControls, BowlRender } from "../../components/index"
import Image from "next/image"

function Bowlerator() {
  return (
    <div>
      <section className="hero2 pb-0 mb-0">
        <hgroup className="hero-heading pb-0 mb-0">
          <h3 className="is-size-2">Bowl Maker</h3>
        </hgroup>
      </section>
      <div className="box px-3">
        <BowlControls />
      </div>
    </div>
  )
}

export default Bowlerator
