// let antiMicrobial = (num) => {
//     let validId = [108263, 108264, 108265]

//     for(let i = 0; i > validId.length; i++) {
//         if (num === validId[i]) {
//             return {
//                 id: num,
//                 name: "Anti Microbial",
//                 item_numbers: validId,
//                 print_options: "Dye Sub",
//                 fit: 'drape',
//                 size: "48\"/72\"/96\" x 29\" x 29.75\"",
//                 flat_size: "86\" x 104\"/128\"",
//                 material: 'Anti Microbial polyester',
//                 finish: 'Hemmed',
//                 care: 'Machine wash',
//                 weight: '2.4lbs',
//                 warranty: '1 year'
//             };
//         } else  {
//             return null; // return null if the ID is invalid
//         }
        
//     } 


// }

const tableThrows = [
{
    name:"select a table throw"
},
{   id: 108263,
    name: "Anti Microbial",
    item_numbers:[ 108263, 108264, 108265],
    print_options: "Dye Sub",
    fit: 'drape',
    size: "48\"/72\"/96\" x 29\" x 29.75\"",
    flat_size: "86\" x 104\"/128\"",
    material: 'Anti Microbial polyester',
    finish: 'Hemmed',
    care: 'Machine wash',
    weight: '2.4lbs',
    warranty: '1 year'
},
{
    // id: 108264,
    id: "6' Anti Microbial",
    print_options: "Dye Sub",
    fit: 'drape',
    size: "72\" x 29\" x 29.75\"",
    flat_size: "86\" x 128\"",
    material: 'Anti Microbial polyester',
    finish: 'Hemmed',
    care: 'Machine wash',
    weight: '2.4lbs',
    warranty: '1 year'

},
{
    // id: 108265,
    id: "8' Anti Microbial",
    print_options: "Dye Sub",
    fit: 'drape',
    size: "96\" x 29\" x 29.75\"",
    flat_size: "86\" x 128\"",
    material: 'Anti Microbial polyester',
    finish: 'Hemmed',
    care: 'Machine wash',
    weight: '4.8 lbs',
    warranty: '1 year'
},
//Convertable
{
    id: 104010,
    name: "4'/ 6' Convertable",
    print_options: "Dye Sub",
    fit: 'convertable',
    size: "48\"/72\" x 29\" x 29.75\"",
    flat_size: "86\" x 104\"/128\"",
    material: 'polyester poplin',
    finish: 'serged',
    care: 'Machine wash',
    weight: '2.4lbs',
    warranty: '1 year'

}

]

export default tableThrows;