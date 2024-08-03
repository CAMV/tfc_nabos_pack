

ServerEvents.recipes(event  => {


  let colors = [
    'white',
    'light_gray',
    'gray',
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'cyan',
    'light_blue',
    'blue',
    'purple',
    'magenta',
    'pink',
  ]

  let vanilla_dyeables = [
    'wool',
    'carpet',
    'terracotta',
    'concrete_powder',
    'bed'
  ]

  event.remove({ id: `create:crafting/kinetics/copper_valve_handle_from_others` })
  event.remove({ id: `tfc:barrel/dye/bleach_terracotta` })

  colors.forEach((c) =>{

    vanilla_dyeables.forEach((vd) => {
      event.remove({ id: `minecraft:dye_${c}_${vd}` })
    })

    event.remove({ id: `minecraft:${c}_terracotta` })

    event.remove({ output: `create:${c}_valve_handle` })
    event.remove({ id: `create:create.toolbox.color.block.create.${c}_toolbox` })
    event.remove({ output: `create:${c}_seat` })

    event.remove({ id: `tfc:crafting/ceramic/${c}_unfired_vessel` })
    event.remove({ id: `tfc:crafting/ceramic/${c}_unfired_large_vessel` })

    event.remove({ id: `tfc:barrel/dye/${c}_terracotta` })

    event.shapeless(`create:${c}_seat`, [`minecraft:${c}_wool`, `#minecraft:wooden_slabs`]).id(`kubejs:create_${c}_seat_manual_only`)

    event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`create:${c}_valve_handle`)
        .inputs(`#create:valve_handles`, TFC.fluidStackIngredient(`tfc:${c}_dye`, 25))

    event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`create:${c}_seat`)
        .inputs(`#create:seats`, TFC.fluidStackIngredient(`tfc:${c}_dye`, 25))

    event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`create:${c}_toolbox`)
        .inputs(`#create:toolboxes`, TFC.fluidStackIngredient(`tfc:${c}_dye`, 25))

    event.recipes.tfc.barrel_sealed(1000)
        .outputItem(`minecraft:${c}_terracotta`)
        .inputs(`minecraft:terracotta`, TFC.fluidStackIngredient(`tfc:${c}_dye`, 25))

    event.recipes.create.filling(`minecraft:${c}_wool`, [Fluid.of(`tfc:${c}_dye`, 25), `minecraft:white_wool`])
    event.recipes.create.filling(`minecraft:${c}_carpet`, [Fluid.of(`tfc:${c}_dye`, 25), `minecraft:white_carpet`])
    event.recipes.create.filling(`minecraft:${c}_terracotta`, [Fluid.of(`tfc:${c}_dye`, 25), `minecraft:terracotta`])
    event.recipes.create.mixing(`minecraft:${c}_concrete_powder`, [Fluid.of(`tfc:${c}_dye`, 25), `tfc:aggregate`])
    event.recipes.create.filling(`minecraft:${c}_bed`, [Fluid.of(`tfc:${c}_dye`, 25), `#minecraft:beds`])

    event.recipes.create.filling(`tfc:alabaster/raw/${c}`, [Fluid.of(`tfc:${c}_dye`, 25), `tfc:alabaster/raw`])
    event.recipes.create.filling(`tfc:alabaster/bricks/${c}`, [Fluid.of(`tfc:${c}_dye`, 25), `tfc:alabaster/bricks`])
    event.recipes.create.filling(`tfc:alabaster/polished/${c}`, [Fluid.of(`tfc:${c}_dye`, 25), `tfc:alabaster/polished`])
    event.recipes.create.filling(`tfc:candle/${c}`, [Fluid.of(`tfc:${c}_dye`, 25), `#tfc:candles`])
    event.recipes.create.filling(`tfc:ceramic/${c}_unfired_vessel`, [Fluid.of(`tfc:${c}_dye`, 25), `tfc:ceramic/unfired_vessel`])
    event.recipes.create.filling(`tfc:ceramic/unfired_large_vessel/${c}`, [Fluid.of(`tfc:${c}_dye`, 25), `tfc:ceramic/unfired_large_vessel`])
    event.recipes.create.filling(`tfc:${c}_windmill_blade`, [Fluid.of(`tfc:${c}_dye`, 25), `#tfc:default_windmill_blades`])

    event.recipes.create.filling(`create:${c}_valve_handle`, [Fluid.of(`tfc:${c}_dye`, 25), `#create:valve_handles`])
    event.recipes.create.filling(`create:${c}_toolbox`, [Fluid.of(`tfc:${c}_dye`, 25), `#create:toolboxes`])
    event.recipes.create.filling(`create:${c}_seat`, [Fluid.of(`tfc:${c}_dye`, 25), `#create:seats`])
  })

  event.recipes.create.mixing(`minecraft:white_bed`, [Fluid.of(`tfc:lye`, 25), `#minecraft:beds`])
  event.recipes.create.mixing(`tfc:windmill_blade`, [Fluid.of(`tfc:lye`, 25), `#tfc:colored_windmill_blades`])
  event.recipes.create.mixing(`minecraft:terracotta`, [Fluid.of(`tfc:lye`, 25), `#minecraft:colored_terracotta`])
  event.recipes.create.mixing(`minecraft:white_banner`, [Fluid.of(`tfc:lye`, 25), `#minecraft:colored_banner`])
  event.recipes.create.mixing(`tfc:alabaster/bricks`, [Fluid.of(`tfc:lye`, 25), `#tfc:colored_bricks_alabaster`])
  event.recipes.create.mixing(`tfc:aggregate`, [Fluid.of(`tfc:lye`, 25), `#tfc:colored_concrete_powder`])

  event.recipes.create.mixing(`tfc:alabaster/polished`, [Fluid.of(`tfc:lye`, 25), `#tfc:colored_polished_alabaster`])
  event.recipes.create.mixing(`tfc:candle`, [Fluid.of(`tfc:lye`, 25), `#tfc:colored_candles`])
  event.recipes.create.mixing(`tfc:white_glazed_terracotta`, [Fluid.of(`tfc:lye`, 25), `#tfc:colored_galzed_terracotta`])
  event.recipes.create.mixing(`minecraft:white_wool`, [Fluid.of(`tfc:lye`, 25), `#tfc:colored_wool`])
  event.recipes.create.mixing(`minecraft:white_carpet`, [Fluid.of(`tfc:lye`, 25), `#tfc:colored_carpet`])
  event.recipes.create.mixing(`tfc:alabaster/raw`, [Fluid.of(`tfc:lye`, 25), `#tfc:colored_raw_alabaster`])

  event.recipes.create.mixing(`create:brown_toolbox`, [Fluid.of(`tfc:lye`, 25), `#create:toolboxes`])
  event.recipes.create.mixing(`create:copper_valve_handle`, [Fluid.of(`tfc:lye`, 25), `#create:valve_handles`])
  event.recipes.create.mixing(`create:white_seat`, [Fluid.of(`tfc:lye`, 25), `#create:seats`])

  event.recipes.tfc.barrel_sealed(1000)
    .outputItem(`create:copper_valve_handle`)
    .inputs(`#create:valve_handles`, TFC.fluidStackIngredient(`tfc:lye`, 25))

  event.recipes.tfc.barrel_sealed(1000)
    .outputItem(`create:seat`)
    .inputs(`#create:seats`, TFC.fluidStackIngredient(`tfc:lye`, 25))

  event.recipes.tfc.barrel_sealed(1000)
    .outputItem(`create:brown_toolbox`)
    .inputs(`#create:toolboxes`, TFC.fluidStackIngredient(`tfc:lye`, 25))

  event.recipes.tfc.barrel_sealed(1000)
    .outputItem(`minecraft:terracotta`)
    .inputs(`#tfc:colored_terracotta`, TFC.fluidStackIngredient(`tfc:lye`, 25))

})