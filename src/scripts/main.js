import { createPlan } from "./plan.js"
import { usePlants, addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { plantSeeds } from "./tractor.js"
import { Catalog } from "./catalog.js"
import { harvestPlants } from "./harvester.js"

console.log("Welcome to the main module")

const yearlyPlan = createPlan()
console.log(yearlyPlan)
const Planted = (plantSeeds(yearlyPlan));
const Harvested = harvestPlants(Planted)



const parentHTMLElement = document.querySelector(".container")


parentHTMLElement.innerHTML = Catalog(Harvested)