console.log("Welcome to the main module")
//imports
import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"
//end of imports

const yearlyPlan = createPlan()
//console.log(yearlyPlan)

const asparagusSeed = createAsparagus()
//console.log(asparagusSeed)

const cornSeed = createCorn()
//console.log(cornSeed)

const potatoSeed = createPotato()
//console.log(potatoSeed)

const soybeanSeed = createSoybean()
//console.log(soybeanSeed)

const sunflowerSeed = createSunflower()
//console.log(sunflowerSeed)

const wheatSeed = createWheat()
//console.log(wheatSeed)

//Tilling the field 




const plantedPlants = usePlants()
//console.log(plantedPlants)

//Sowing the Field
const plantedSeeds = plantSeeds(yearlyPlan)
console.log (plantedSeeds)
console.log(plantedPlants)

const harvestedPlants = harvestPlants(plantedSeeds)
console.log(harvestedPlants)

const htmllist = Catalog(harvestedPlants)
console.log(htmllist)

const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = Catalog(harvestedPlants)