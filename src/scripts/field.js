//create variable with empty array 
//-this will store the growing plants in the field 

const plantStorage = []

//define and export a fn named addPlant

export const addPlant = (seedObj) => {
    //must accept a seed object as input 
    //fn must add the seed to the field
    plantStorage.push(seedObj)
    return plantStorage
}

//define and export a fn named usePlants
//-this will return a copy of the array of plants 

export const usePlants = () => {
    const plantArray = plantStorage.map(plant =>({...plant}))
    return plantArray
    //return plantStorage
} 