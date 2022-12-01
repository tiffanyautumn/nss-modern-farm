//define and export a harvestPlants fn x
//-this will take the plants array as a parameter x
//-this will return an array of seed objs
//iterate the array of growing plants
//get the value of the output property
//add that many obj to the returned array


export const harvestPlants = (plantsArr) => {
  const outputHarvest = []
  plantsArr
    .filter(plant => plant.type !== "Corn")
    .map(plant => {
      for (let i = 0; i < plant.output; i++) {
        outputHarvest.push(plant)
      }
    }
    )
  plantsArr
    .filter(plant => plant.type === "Corn")
    .map(plant => {
      for (let i = 0; i < plant.output / 2; i++) {
        outputHarvest.push(plant)
      }
    }
    )
  return outputHarvest
}



















