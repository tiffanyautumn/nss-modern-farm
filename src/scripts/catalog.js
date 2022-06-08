//define and export a catalog fn 
//-this should accept the harvested food array as a parameter
//iterates the food object
// creates sections with the food name

export const Catalog = (harvestedfood) => {
    let htmlString = ``
    for (const plant of harvestedfood) {
        htmlString += `
        <section class ="plant">${plant.type}</section>
        `
    } return htmlString
}