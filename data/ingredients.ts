// name, cuisine
const baseProteins: Array<Array<string>> = [
  ["rotisserie chicken", "general"],
  ["salmon", "general"],
  ["ground turkey", "general"],
  ["ground beef", "general"],
  ["tofu", "general, asian"],
]

const baseCarbs: Array<Array<string>> = [
  ["rice", "general, asian"],
  ["pasta", "general"],
  ["potatoes", "general"],
  ["beans", "general"],
  ["corn", "general"],
]

const baseVeggies: Array<Array<string>> = [
  ["carrots", "general"],
  ["bok choy", "general"],
  ["tomatoes", "general"],
  ["salad", "general"],
  ["broccoli", "general"],
]

const baseSauces: Array<Array<string>> = [
  ["teriyaki", "asian"],
  ["honey dijon", "general"],
  ["tomato", "italian"],
  ["aioli", "general"],
  ["sriacha", "general"],
]

// ! map creates a new array of the RETURN for each element.
// return of a push is just the number of elements
// push mutates the original array
// this is causing mixed state/reference type of stuff

//adding ingredient types
baseProteins.forEach((e) => {
  e.push("protein")
})
baseCarbs.forEach((e) => {
  e.push("carb")
})
baseVeggies.forEach((e) => {
  e.push("veggie")
})
baseSauces.forEach((e) => {
  e.push("sauce")
})

function makeIngredient(name: string, cuisine: string, type: string) {
  return {
    name,
    cuisine,
    type,
  }
}

const proteins = baseProteins.map((element) => {
  return makeIngredient(element[0], element[1], element[2])
})
const carbs = baseCarbs.map((element) => {
  return makeIngredient(element[0], element[1], element[2])
})
const veggies = baseVeggies.map((element) => {
  return makeIngredient(element[0], element[1], element[2])
})
const sauces = baseSauces.map((element) => {
  return makeIngredient(element[0], element[1], element[2])
})

const ingredientsData = {
  proteins,
  carbs,
  veggies,
  sauces,
}

module.exports = ingredientsData
