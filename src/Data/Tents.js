import econ_noCase from './tentPricing/241239.png';
import econ from './tentPricing/241240.png';
import standard from './tentPricing/240619.png';
import dlxSixft from './tentPricing/240809.png';
import dlxeightFt from './tentPricing/240829.png';
import deluxe from './tentPricing/240629.png';
import deluxeSummit from './tentPricing/241222.png';
import premium from './tentPricing/240639.png';
import premiumFifteen from './tentPricing/240563.png';
import premiumTwenty from './tentPricing/240583.png';
import premiumGable from './tentPricing/241129.png';
import premium15Gable from './tentPricing/241134.png';
import premium20Gable from './tentPricing/241171.png';
import elite from './tentPricing/240989.png';


const tents = [

{
    id: [],
    name: "Select a tent"
},
{
    category: 'good',
    id: 241239,
    price: econ_noCase,
    name: "10ft Economy Tent Kit",
    locations: "Dye Sub",
    canopy: "400 denier polyester. Three-piece construction",
    tent_imprint_method: "Full color Dye Sublimation",
    frame: "0.9mm steel with smooth white powder-coated finish Center spring loaded pole. Compatible with Deluxe accessories. Case not Included",
    joints: "ABS nylon joints",
    legs: "1.1875\" x 1.1875\" Square-shaped legs. plastic push buttons",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "117.5\" W x 128.75\"H x 117.5\"D ",
    collapsible_dimensions: "8.875\" x 64\" x 8.875\"",
    tent_weight: "41.5 lbs",
    tent_production: 'Dye Sub: 7 business days',
    tent_warranty: "6 month"
},
{
    category: 'good',
    id: 241240,
    price: econ,
    name: "10ft Economy Plus Tent Kit",
    locations: "Dye Sub",
    canopy: "400 denier polyester. Three-piece construction",
    tent_imprint_method: "Full color Dye Sublimation",
    frame: "0.9mm steel with white powder-coated finish Center spring loaded pole. Compatible with Deluxe accessories",
    joints: "ABS nylon joints",
    legs: "1.1875\" x 1.1875\" Square-shaped legs. plastic push buttons",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "117.5\" W x 128.75\"H x 117.5\"D ",
    collapsible_dimensions: "8.875\" x 64\" x 8.875\"",
    tent_weight: "41.5 lbs",
    tent_production: 'Dye Sub: 7 business days',
    tent_warranty: "6 months"
},
{
    category: 'better',
    id: 240619,
    price: standard,
    name: "10ft Standard Tent Kit ",
    locations: "Location & Dye sub",
    canopy: "400 denier polyester. Weather-resistant",
    tent_imprint_method: "Thermal & Full color Dye Sublimation",
    frame: "1mm steel with a powder-coated finish",
    joints: "ABS nylon joints",
    legs: "1.125\" x 1.125\" Square-shaped legs. plastic push buttons",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "118.5\" W x 138.25\"H x 118.5\"D ",
    collapsible_dimensions: "8.37\"W x 64\"H x 15.5\" D",
    tent_weight: "36 lbs",
    tent_production: 'Dye Sub: 7 business days, Thermal: 4 business days',
    tent_warranty: "Hardware: Lifetime, Graphics: 1 year"
    
},
{
    category: 'better',
    id: 240809,
    price: dlxSixft,
    name: "6ft Deluxe Tent Kit",
    locations: "Dye sub",
    canopy: "400 denier polyester. Weather-resistant",
    tent_imprint_method: "Thermal & Full color Dye Sublimation",
    frame: "1mm steel powder-coated finish",
    joints: "ABS glass-filled nylon joints",
    legs: "1.25\" x 1.25\" Square-shaped legs. plastic levers",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "72\" W x 121.5\"H x 72\"D ",
    collapsible_dimensions: "8.5\"W x 62.75\"H x 8.5\" D",
    tent_weight: "38.5 lbs",
    tent_production: 'Dye Sub: 7 business days',
    tent_warranty: "Hardware: Lifetime, Graphics: 1 year"
},
{
    category: 'better',
    id: 240829,
    price: dlxeightFt,
    name: "8ft Deluxe Tent Kit",
    locations: "Dye Sub",
    canopy: "400 denier polyester. Weather-resistant",
    tent_imprint_method: "Full color Dye Sublimation",
    frame: "1mm steel powder-coated finish",
    joints: "ABS glass-filled nylon joints",
    legs: "1.25\" x 1.25\" Square-shaped legs. plastic levers",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "96\" W x 130\"H x 96\"D ",
    collapsible_dimensions: "8.5\"W x 62.75\"H x 8.5\" D",
    tent_weight: "44.5 lbs",
    tent_production: 'Dye Sub: 7 business days',
    tent_warranty: "Hardware: Lifetime, Graphics: 1 year"
},

{
    category: 'better',
    id: 240629,
    price: deluxe,
    name: "10ft Deluxe Tent Kit",
    locations: "Location & Dye sub",
    canopy: "400 denier polyester. Weather-resistant",
    tent_imprint_method: "Thermal & Full color Dye Sublimation",
    frame: "1mm steel powder-coated finish",
    joints: "ABS glass-filled nylon joints",
    legs: "1.25\" x 1.25\" Square-shaped legs. plastic levers",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "118.5\" W x 138.25\"H x 118.5\"D ",
    collapsible_dimensions: "8.37\"W x 62.75\"H x 15.5\" D",
    tent_weight: "48 lbs",
    tent_production: 'Dye Sub: 7 business days, Thermal: 4 business days',
    tent_warranty: "Hardware: Lifetime, Graphics: 1 year"
},
{
    category: 'better',
    id: 241222,
    price: deluxeSummit,
    name: "10ft Deluxe Summit Tent Kit",
    locations: "Dye sub",
    canopy: "400 denier polyester. Weather-resistant. Crank-up",
    tent_imprint_method: "Full color Dye Sublimation",
    frame: "1mm pebble powder-coated steel. Extender pole for increase peak height",
    joints: "ABS glass-filled nylon joints",
    legs: "1.25\" x 1.25\" Square-shaped legs. plastic levers",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "118.5\" W x 151\" - 164.25\"H x 118.5\"D ",
    collapsible_dimensions: "Not on website. If you know let me know!",
    tent_weight: "49.6 lbs",
    tent_production: 'Dye Sub: 7 business days, Thermal: 4 business days',
    tent_warranty: "Hardware: Lifetime, Graphics: 1 year"
},
{
    category: 'best',
    id: 240639,
    price: premium,
    name: "10ft Premium Tent Kit",
    locations: "Location & Dye sub",
    canopy: "400 denier polyester.Durable, Weather-resistant. Crank-up",
    tent_imprint_method: "Thermal & Full color Dye Sublimation",
    frame: "0.8mm anodized aluminum",
    joints: "ABS glass-filled nylon joints",
    legs: "hexagon-shaped legs are 1.75\" in diameter. plastic levers",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "118\" W x 139.25\"H x 118\"D ",
    collapsible_dimensions: "9.12\"W x 62.75\"H x 9.12\" D",
    tent_weight: "36.5 lbs",
    tent_production: 'Dye Sub: 7 business days, Thermal: 4 business days',
    tent_warranty: "Hardware: Lifetime, Graphics: 1 year"
},
{
    category: 'best',
    id: 240563,
    price: premiumFifteen,
    name: "15ft Premium Tent Kit",
    locations: "Location & Dye sub",
    canopy: "400 denier polyester.Durable, Weather-resistant. Crank-up",
    tent_imprint_method: "Thermal & Full color Dye Sublimation",
    frame: "0.8mm anodized aluminum",
    joints: "ABS glass-filled nylon joints",
    legs: "hexagon-shaped legs are 1.75\" in diameter. plastic levers",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "175.5\" W x 139.25\"H x 118.25\"D ",
    collapsible_dimensions: "12.12\"W x 62.75\"H x 9.37\" D",
    tent_weight: "46 lbs",
    tent_production: 'Dye Sub: 7 business days, Thermal: 4 business days',
    tent_warranty: "Hardware: Lifetime, Graphics: 1 year"
},
{
    category: 'best',
    id: 240583,
    price: premiumTwenty,
    name: "20ft Premium Tent Kit",
    locations: "Location & Dye sub",
    canopy: "400 denier polyester.Durable, Weather-resistant. Crank-up",
    tent_imprint_method: "Thermal & Full color Dye Sublimation",
    frame: "0.8mm anodized aluminum",
    joints: "ABS glass-filled nylon joints",
    legs: "hexagon-shaped legs are 1.75\" in diameter. plastic levers",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "234.5\" W x 139.25\"H x 118.25\"D ",
    collapsible_dimensions: "16.37\"W x 62.75\"H x 9.37\" D",
    tent_weight: "62.75 lbs",
    tent_production: 'Dye Sub: 7 business days, Thermal: 4 business days',
    tent_warranty: "Hardware: Lifetime, Graphics: 1 year"
},
{
    category: 'best',
    id: 241129,
    price: premiumGable,
    name: "10ft Premium Gable Tent Kit",
    locations: "Location & Dye sub",
    canopy: "400 denier polyester.Durable, Weather-resistant. Three canopy cranks",
    tent_imprint_method: "Thermal & Full color Dye Sublimation",
    frame: "0.8mm anodized aluminum",
    joints: "ABS glass-filled nylon joints",
    legs: "hexagon-shaped legs are 1.75\" in diameter. plastic levers",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "118\" W x 131.25\"H x 118\"D ",
    collapsible_dimensions: "9.12\"W x 62.75\"H x 9.12\" D",
    tent_weight: "37.4 lbs",
    tent_production: 'Dye Sub: 7 business days, Thermal: 4 business days',
    tent_warranty: "Hardware: Lifetime, Graphics: 1 year"
},
{
    category: 'best',
    id: 241134,
    price: premium15Gable,
    name: "15ft Premium Gable Tent Kit",
    locations: "Location 1-12",
    canopy: "400 denier polyester.Durable, Weather-resistant. Three canopy cranks",
    tent_imprint_method: "Thermal imprint, white only",
    frame: "0.8mm anodized aluminum",
    joints: "ABS glass-filled nylon joints",
    legs: "hexagon-shaped legs are 1.75\" in diameter. plastic levers",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "175.5\" W x 131.25\"H x 118.25\"D ",
    collapsible_dimensions: "unavailable",
    tent_weight: "47.2 lbs",
    tent_production: 'Thermal: 4 business days',
    tent_warranty: "Hardware: Lifetime, Graphics: 1 year"
},
{
    category: 'best',
    id: 241171,
    price: premium20Gable,
    name: "20ft Premium Gable Tent Kit",
    locations: "Location 1-12",
    canopy: "400 denier polyester.Durable, Weather-resistant. Three canopy cranks",
    tent_imprint_method: "Thermal imprint, white only",
    frame: "0.8mm anodized aluminum",
    joints: "ABS glass-filled nylon joints",
    legs: "hexagon-shaped legs are 1.75\" in diameter. plastic levers",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "234.5\" W x 131.25\"H x 118.25\"D ",
    collapsible_dimensions: "unavailable",
    tent_weight: "64 lbs",
    tent_production: 'Thermal: 4 business days',
    tent_warranty: "Hardware: Lifetime, Graphics: 1 year"
},
{
    category: 'best',
    id: 240989,
    price: elite,
    name: "10ft Elite Tent Kit",
    locations: "Location & Dye sub",
    canopy: "400 denier polyester.Durable, Weather-resistant. ",
    tent_imprint_method: "Thermal & Full color Dye Sublimation",
    frame: "1.55mm anodized aluminum",
    joints: "Machined Aluminum Joints",
    legs: "hexagon-shaped legs are 2.125\" in diameter. Push buttons",
    feet: "Easy-glide Tent Feet",
    setup_dimensions: "118\" W x 116.75\" x 131.5\"H x 118\"D ",
    collapsible_dimensions: "9.12\"W x 62.75\"H x 9.12\" D",
    tent_weight: "63 lbs",
    tent_production: 'Dye Sub: 7 business days, Thermal: 4 business days',
    tent_warranty: "Hardware: Lifetime, Graphics: 1 year"
}


]


// const tentJsonData = JSON.stringify(tents)



export default tents;