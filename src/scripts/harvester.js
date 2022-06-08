//define and export a harvestPlants fn x
//-this will take the plants array as a parameter x
//-this will return an array of seed objs
//iterate the array of growing plants
//get the value of the output property
//add that many obj to the returned array


export const harvestPlants = (seedObj) => {
    const outputHarvest = []
    console.log("this works")
    for (const plant of seedObj) { //plant obj of plants
        if (plant.type !== "Corn") {
                for (let i = 0; i < plant.output; i++) {
                    outputHarvest.push(plant)
               } 
            }
            else{
                   for (let i = 0; i < plant.output/2 ; i++) {
                        outputHarvest.push(plant)
                   }
        }
        // 
        // } else {
        //     for (const seed of plant) {
        //         if(seed.type === "Corn"){
        //         console.log('corn')}
          }return outputHarvest
        }
        

            
        
            
           
         
  
         

    


