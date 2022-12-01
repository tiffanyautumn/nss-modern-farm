//create variable with empty array 
//-this will store the growing plants in the field 

const plantStorage = []

//define and export a fn named addPlant

export const addPlant = (seedObj) => {
    Array.isArray(seedObj)
        ? seedObj.map((s) => plantStorage.push(s))
        : plantStorage.push(seedObj)
    //must accept a seed object as input 
    //fn must add the seed to the field

}

//define and export a fn named usePlants
//-this will return a copy of the array of plants 

export const usePlants = () => {
    const plantArray = [...plantStorage]
    // plantStorage.map(plant => ({ ...plant }))
    return plantArray
} 