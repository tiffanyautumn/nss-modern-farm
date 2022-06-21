//define and export a catalog fn 
//-this should accept the harvested food array as a parameter
//iterates the food object
// creates sections with the food name

// export const Catalog = (harvestedfood) => {
//     let htmlString = ``
//     for (const plant of harvestedfood) {
//         htmlString += `
//         <section class ="plant">${plant.type}</section>
//         `
//     } return htmlString
// }

//REFACTORED CODE **works

export const Catalog = (harvestedfood) => {
    let htmlString = ``
    const harvestSections = harvestedfood.map(plant => {
        return `
        <section class ="plant">${plant.type}</section>
        `
    })
        htmlString += harvestSections.join("")
        return htmlString
}

