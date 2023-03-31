"use client"

import React, { useState } from "react"
const { ingredients } = require("../../data/index.ts")
const { proteins, carbs, veggies, sauces } = ingredients

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
    console.log("=========", bowl)
  }

  return (
    <>
      <div>
        BowlControls
        {Object.keys(bowl).length === 0 ? (
          <div>no bowl</div>
        ) : (
          <ul>
            <li>protein: {bowl.protein.name}</li>
            <li>carb: {bowl.carb.name}</li>
            <li>veggie: {bowl.veggie.name} </li>
            <li>sauce: {bowl.sauce.name}</li>
          </ul>
        )}
      </div>
      <div>
        <p>You clicked {count} times</p>
        <button
          onClick={() => {
            setCount(count + 1)
            generateRandomBowl(proteins, carbs, veggies, sauces)
          }}
        >
          Click me
        </button>
      </div>
    </>
  )
}

export default BowlControls
