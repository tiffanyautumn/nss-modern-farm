//define and export a plantSeeds fn
//-this must accept the year's planting plan as input

import { addPlant, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

//takes in an array of arrays as parameter
//the array of arrays must be iterated 
//the arrays themselves must also be iterated
// invoke the matching seed fn to the food type

// export const plantSeeds = (plantingPlan) => {
//     for (const row of plantingPlan) { //grabs single array of arrays
//         for (const plant of row) { //iterates plants of row 
//             if (plant === "Potato") {
//                 //createPotato()
//                 addPlant(createPotato())
//             } else if (plant === "Asparagus") {
//                 //createAsparagus()
//                 addPlant(createAsparagus())
//             } else if (plant === "Corn") {
//                 //createCorn ()
//                 const newCorn = createCorn()
//                 for (const corn of newCorn) {
//                     addPlant(corn)
//                 }
//                 //addPlant(createCorn())
//             } else if (plant === "Soybean") {
//                 //createSoybean()
//                 addPlant(createSoybean())
//             } else if (plant === "Sunflower") {
//                 //createSunflower()
//                 addPlant(createSunflower())
//             } else if (plant === "Wheat") {
//                 // createWheat()
//                 addPlant(createWheat())
//             }
//         }
//     } return usePlants()
// }





export const plantSeeds = (plantingPlan) => {
//REFACTORED CODE ** works
    const mappedPlan = plantingPlan.map(row => { 
        row.map(plant => {
            (plant === "Potato") ?  //could this be a .filter.. 
                addPlant(createPotato())

            : (plant === "Asparagus") ? 
                addPlant(createAsparagus())

            : (plant === "Corn") ? ""
            // const newCorn = createCorn()
            //     for (const corn of newCorn) {
            //         addPlant(corn)
            //     }

            : (plant === "Soybean") ?
                addPlant(createSoybean())

            : (plant === "Sunflower") ?
                addPlant(createSunflower())

            : (plant === "Wheat") ?
                addPlant(createWheat())
                : ""
        })
        }
    ) 
    return usePlants()
}
        

    

// condition ? if true : if false