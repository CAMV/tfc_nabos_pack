
ServerEvents.recipes(event  => {

    let basin_fermenting = (input, fluid_input, fluid_input_amount, fluid_output, fluid_output_amount, time) =>
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
        })
    }

    let liquid_to_item_and_liquid_basin_fermenting = (fluid_input, fluid_input_amount, output, fluid_output, fluid_output_amount, time) =>
        {
            event.custom({
                type: "createdieselgenerators:basin_fermenting",
                heatRequirement: "heated",
                ingredients: [
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
                  {
                    item: output
                  },
                ]
            })
        }

    let liquid_to_liquid_basin_fermenting_heated = (fluid_input, fluid_input_amount, fluid_output, fluid_output_amount, time) =>
        {
            event.custom({
                type: "createdieselgenerators:basin_fermenting",
                heatRequirement: "heated",
                ingredients: [
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
            })
        }

    let liquid_to_item_basin_fermenting = (fluid_input, fluid_input_amount, output, time) =>
        {
            event.custom({
                type: "createdieselgenerators:basin_fermenting",
                ingredients: [
                  {
                    fluid: fluid_input,
                    amount: fluid_input_amount
                  },
                ],
                processingTime: time,
                results: [
                  {
                    item: output,
                  },
                ]
            })
        }

    let liquid_to_item_basin_fermenting_heated = (fluid_input, fluid_input_amount, output, time) =>
        {
            event.custom({
                type: "createdieselgenerators:basin_fermenting",
                heatRequirement: "heated",
                ingredients: [
                    {
                    fluid: fluid_input,
                    amount: fluid_input_amount
                    },
                ],
                processingTime: time,
                results: [
                    {
                    item: output,
                    },
                ]
            })
        }

    let vat = (input, fluid_input, fluid_input_amount, fluid_output, fluid_output_amount) =>
    {
        event.custom({
            type: "firmalife:vat",
            input_item: {
                ingredient: {
                item: input
                }
            },
            input_fluid: {
                ingredient: fluid_input,
                amount: fluid_input_amount
            },
            output_fluid: {
                fluid: fluid_output,
                amount: fluid_output_amount
            }
        })
    }

    basin_fermenting('artisanal:suet', 'minecraft:water', 100, 'tfc:tallow', 100, 1000)
    vat('artisanal:suet', 'minecraft:water', 100, 'tfc:tallow', 100)

    basin_fermenting('tfc:blubber', 'minecraft:water', 200, 'tfc:tallow', 100, 1000)

    basin_fermenting('artisanal:pork_fat', 'minecraft:water', 100, 'artisanal:lard', 100, 1000)
    vat('artisanal:pork_fat', 'minecraft:water', 100, 'artisanal:lard', 100)

    basin_fermenting('artisanal:poultry_fat', 'minecraft:water', 100, 'artisanal:schmaltz', 100, 1000)
    vat('artisanal:poultry_fat', 'minecraft:water', 100, 'artisanal:schmaltz', 100)

    basin_fermenting('artisanal:bear_fat', 'minecraft:water', 100, 'artisanal:lard', 100, 1000)
    vat('artisanal:bear_fat', 'minecraft:water', 100, 'artisanal:lard', 100)

    liquid_to_item_basin_fermenting('artisanal:soap', 125, 'artisanal:soap', 1000)

    event.remove({ id: `artisanal:crafting/trimmed_feather` })
    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `artisanal:trimmed_feather`,
            [`minecraft:feather`, '#tfc:knives'])
        ).id(`kubejs:crafting/trimmed_feather_manual_only`)

    event.recipes.create.filling('artisanal:soaked_feather', [Fluid.water(), 'artisanal:trimmed_feather'])

    event.remove({ id: `artisanal:crafting/tempered_feather` })
    event.custom({
        type: "tfc:advanced_shapeless_crafting",
        ingredients: [
          {
            item: "artisanal:soaked_feather"
          },
          {
            type: "tfc:heatable",
            min_temp: 350,
            ingredient: {
              tag: "forge:sand"
            }
          }
        ],
        result: {
          item: "artisanal:tempered_feather"
        }
    }).id(`kubejs:crafting/tempered_feather_manual_only`)

    event.remove({ id: `artisanal:crafting/quill` })
    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `artisanal:quill`,
            [`artisanal:tempered_feather`, '#tfc:knives'])
        ).id(`kubejs:crafting/quill_manual_only`)


    event.recipes.create.filling('artisanal:food/cleaned_sugarcane', [Fluid.of('artisanal:soapy_water', 100), 'tfc:food/sugarcane'])
    event.recipes.create.crushing(['artisanal:wet_bagasse', Item.of('artisanal:wet_bagasse').withChance(0.2)], 'artisanal:food/cleaned_sugarcane').processingTime(500)

    event.remove({ id: `artisanal:barrel/dry_bagasse` })

    event.recipes.create.compacting([Fluid.of('artisanal:sugarcane_juice', 200), `artisanal:dry_bagasse`], `artisanal:wet_bagasse`)

    liquid_to_item_basin_fermenting_heated('artisanal:condensed_milk', 100, 'artisanal:milk_flakes', 2000)
    
    liquid_to_liquid_basin_fermenting_heated('minecraft:milk', 1000, 'artisanal:condensed_milk', 200, 1000)

    event.recipes.create.milling('2x artisanal:powdered_milk', 'artisanal:milk_flakes')
    event.recipes.create.crushing('2x artisanal:powdered_milk', 'artisanal:milk_flakes').processingTime(100)

    let mag_metals = [
        'bismuth',
        'brass',
        'gold',
        'rose_gold',
        'silver',
        'sterling_silver',
        'tin'
    ]

    mag_metals.forEach((metal) => {
        event.remove({ id: `artisanal:crafting/metal/magnifying_glass/${metal}_uncraft` })
        event.remove({ id: `artisanal:crafting/metal/magnifying_glass/${metal}` })

        event.shapeless(`artisanal:metal/magnifying_glass/${metal}`, [`artisanal:metal/magnifying_glass_frame/${metal}`, 'tfc:lens']).id(`kubejs:magnifying_glass_${metal}_manual_only`)
    })

    let inter = "kubejs:incomplete_tin_can"
    event.recipes.create.sequenced_assembly([
          Item.of('artisanal:metal/tin_can'),
      ], 'artisanal:metal/tinplate', [ 
          event.recipes.createPressing(inter, inter),
          event.recipes.createCutting(inter, inter),
          event.recipes.createFilling(inter, [inter, Fluid.water(100)]),
          event.recipes.createPressing(inter, inter),
      ]).transitionalItem(inter).loops(1) 

    inter = "kubejs:incomplete_tinplate"
    event.recipes.create.sequenced_assembly([
        Item.of('4x artisanal:metal/tinplate'),
    ], 'firmalife:metal/sheet/stainless_steel', [ 
		event.recipes.createDeploying(inter, [inter, 'tfc:powder/flux']),
		event.recipes.createDeploying(inter, [inter, 'tfc:metal/sheet/tin']),
        event.recipes.createPressing(inter, inter),
    ]).transitionalItem(inter).loops(1) 

    event.remove({ id: `artisanal:welding/metal/tinplate_from_steel` })
    event.remove({ id: `artisanal:welding/metal/tinplate_from_iron` })

    event.recipes.tfc.welding('4x artisanal:metal/tinplate', 'firmalife:metal/sheet/stainless_steel', 'tfc:metal/sheet/tin')


    event.recipes.create.filling('artisanal:metal/tin_can', [Fluid.of('artisanal:soapy_water', 100), 'artisanal:metal/dirty_tin_can'])
    event.recipes.create.filling('artisanal:metal/dented_tin_can', [Fluid.of('artisanal:soapy_water', 100), 'artisanal:metal/dirty_dented_tin_can'])

    event.recipes.create.pressing('artisanal:metal/tin_can', 'artisanal:metal/dented_tin_can')
    event.recipes.create.pressing('artisanal:metal/dirty_tin_can', 'artisanal:metal/dirty_dented_tin_can')

    liquid_to_item_and_liquid_basin_fermenting('artisanal:clarified_sugarcane_juice', 200, 'artisanal:non_perishable_sugar', 'artisanal:molasses', 20, 2000)
    liquid_to_item_and_liquid_basin_fermenting('artisanal:sugarcane_juice', 200, 'artisanal:perishable_sugar', 'artisanal:molasses', 20, 2000)

    event.recipes.create.mixing(Fluid.of('artisanal:soap', 10), [Fluid.of('tfc:lye', 1), Fluid.of('artisanal:lard', 9)])
    event.recipes.create.mixing(Fluid.of('artisanal:soap', 10), [Fluid.of('tfc:lye', 1), Fluid.of('artisanal:schmaltz', 9)])
    event.recipes.create.mixing(Fluid.of('artisanal:soapy_water', 1000), [Fluid.of('minecraft:water', 1000), 'artisanal:soap'])



})