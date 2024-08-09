
ServerEvents.recipes(event  => {

    let basin_fermenting = (input, fluid_input, fluid_input_amount, fluid_output, fluid_output_amount, time, recipe_id) =>
    {
        event.custom({
            type: "createdieselgenerators:basin_fermenting",
            heatRequirement: "heated",
            ingredients: [
              {
                item: input
              },
              {
                fluid: fluid_input,
                amount: fluid_input_amount
              },
            ],
            processingTime: time,
            results: [
              {
                fluid: fluid_output,
                amount: fluid_output_amount
              },
            ]
        }).id(recipe_id)
    }

    basin_fermenting('artisanal:suet', 'minecraft:water', 100, 'tfc:tallow', 100, 1000, 'kubejs:basin_fermenting/tallow_from_suet')
    basin_fermenting('tfc:blubber', 'minecraft:water', 200, 'tfc:tallow', 100, 1000, 'kubejs:basin_fermenting/tallow_from_blubber')
    basin_fermenting('artisanal:pork_fat', 'minecraft:water', 100, 'artisanal:lard', 100, 1000, 'kubejs:basin_fermenting/lard_from_pork_fat')
    basin_fermenting('artisanal:bear_fat', 'minecraft:water', 100, 'artisanal:lard', 100, 1000, 'kubejs:basin_fermenting/lard_from_bear_fat')
    basin_fermenting('artisanal:poultry_fat', 'minecraft:water', 100, 'artisanal:schmaltz', 100, 1000, 'kubejs:basin_fermenting/schmaltz_from_poultry_fat')

    event.custom({
      type: "createdieselgenerators:basin_fermenting",
      ingredients: [
        {
          fluid: "artisanal:soap",
          amount: 125
        },
      ],
      processingTime: 1200,
      results: [
        {
          item: "artisanal:soap",
        },
      ]
    }).id('kubejs:basin_fermenting/soap')

    event.custom({
      type: "createdieselgenerators:basin_fermenting",
      heatRequirement: "heated",
      ingredients: [
          {
          fluid: 'artisanal:condensed_milk',
          amount: 100
          },
      ],
      processingTime: 1200,
      results: [
          {
            item: 'artisanal:milk_flakes',
          },
      ]
    }).id('kubejs:basin_fermenting/milk_flakes')

    event.custom({
      type: "createdieselgenerators:basin_fermenting",
      heatRequirement: "heated",
      ingredients: [
        {
          fluid: 'minecraft:milk',
          amount: 2
        },
      ],
      processingTime: 120,
      results: [
        {
          fluid: 'artisanal:condensed_milk',
          amount: 1
        },
      ]
    }).id('kubejs:basin_fermenting/condensed_milk')
})