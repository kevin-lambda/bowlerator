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
        BowlControls
        {Object.keys(bowl).length === 0 ? (
          <div>no bowl</div>
        ) : (
          <section>
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
                <ul>
                  <h3>ingredients</h3>
                  <li>protein: {bowl.protein.name}</li>
                  <li>carb: {bowl.carb.name}</li>
                  <li>veggie: {bowl.veggie.name} </li>
                  <li>sauce: {bowl.sauce.name}</li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
      <section>
        <button
          onClick={() => {
            setCount(count + 1)
            generateRandomBowl(proteins, carbs, veggies, sauces)
          }}
        >
          Generate
        </button>
      </section>
    </section>
  )
}

export default BowlControls
