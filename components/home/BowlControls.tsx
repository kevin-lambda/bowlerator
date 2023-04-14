//@ts-nocheck

"use client"

import React, { useState } from "react"
import Image from "next/image"
import picBowl from "../../assets/bowl.jpg"

const { ingredients } = require("../../data/index.ts")
const { proteins, carbs, veggies, sauces } = ingredients

//get the data here
function BowlControls() {
  const [bowl, setBowl] = useState({})
  const [count, setCount] = useState(0)

  const chooseRandom = (
    array: { name: string; cuisine: string; type: string }[]
  ) => {
    const numberOfIngredients = array.length
    const chooseRandomNumber = Math.floor(Math.random() * numberOfIngredients)

    return array[chooseRandomNumber]
  }

  const generateRandomBowl = (
    proteins: { name: string; cuisine: string; type: string }[],
    carbs: { name: string; cuisine: string; type: string }[],
    veggies: { name: string; cuisine: string; type: string }[],
    sauces: { name: string; cuisine: string; type: string }[]
  ) => {
    const protein = chooseRandom(proteins)
    const carb = chooseRandom(carbs)
    const veggie = chooseRandom(veggies)
    const sauce = chooseRandom(sauces)

    const bowl = { protein, carb, veggie, sauce }
    setBowl(bowl)
  }

  return (
    <section>
      <div>
        {Object.keys(bowl).length === 0 ? (
          <section className="section pt-5">
            <div className="grid">
              <div>
                <Image
                  src={picBowl}
                  width={400}
                  height={400}
                  alt="placeholder"
                />
              </div>
              <div>
                <ul className="get-li">
                  <h3 className="is-size-3 pb-3">Your bowl is waiting</h3>
                </ul>
              </div>
            </div>
          </section>
        ) : (
          <section className="section pt-5">
            <div className="grid">
              <div>
                <Image
                  src={picBowl}
                  width={400}
                  height={400}
                  alt="placeholder"
                />
              </div>
              <div>
                <ul className="get-li">
                  <h3 className="is-size-3 pb-3">Ingredients</h3>
                  <li>Protein: {bowl.protein.name}</li>
                  <li>Carb: {bowl.carb.name}</li>
                  <li>Veggie: {bowl.veggie.name} </li>
                  <li>Sauce: {bowl.sauce.name}</li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
      <section>
        <button
          className="cta-bottom2"
          onClick={() => {
            setCount(count + 1)
            generateRandomBowl(proteins, carbs, veggies, sauces)
          }}
        >
          Make a Bowl!
        </button>
      </section>
    </section>
  )
}

export default BowlControls
