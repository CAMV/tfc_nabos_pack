

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
    .outputItem(`create:white_seat`)
    .inputs(`#create:seats`, TFC.fluidStackIngredient(`tfc:lye`, 25))

  event.recipes.tfc.barrel_sealed(1000)
    .outputItem(`create:brown_toolbox`)
    .inputs(`#create:toolboxes`, TFC.fluidStackIngredient(`tfc:lye`, 25))

  event.recipes.tfc.barrel_sealed(1000)
    .outputItem(`minecraft:terracotta`)
    .inputs(`#tfc:colored_terracotta`, TFC.fluidStackIngredient(`tfc:lye`, 25))


  let vanilla_mill_dyes = [
    'blue_orchid',
    'azure_bluet',
    'bone_meal',
    'daisy',
    'poppy',
    'allium',
    'red_tulip',
    'orange_tulip',
    'white_tulip',
    'pink_tulip',
    'oxeye_daisy',
    'cornflower',
    'lily_of_the_valley',
    'wither_rose',
    'large_fern',
    'sunflower',
    'lilac',
    'rose_bush',
    'peony',
    'sea_pickle',
    'beetroot',
    'cactus',
    'fern',
    'lapis_lazuli'
  ]

  vanilla_mill_dyes.forEach((vmd) => {
    event.remove({ id: `create:milling/${vmd}` })
    event.remove({ id: `create:crushing/${vmd}` })
  })

  // WHITE
  event.remove({ id: `minecraft:white_dye` })
  event.remove({ id: `minecraft:white_dye_from_lily_of_the_valley` })
  event.remove({ id: `create:milling/bone` })

  // LIGHT GRAY
  event.remove({ id: `minecraft:light_gray_dye_from_oxeye_daisy` })
  event.remove({ id: `minecraft:light_gray_dye_from_white_tulip` })
  event.remove({ id: `minecraft:light_gray_dye_from_azure_bluet` })
  event.remove({ id: `minecraft:light_gray_dye_from_black_white_dye` })
  event.remove({ id: `minecraft:light_gray_dye_from_gray_white_dye` })
  event.remove({ id: `tfc:crafting/vanilla/light_gray_dye_from_native_silver` })

  event.shaped('minecraft:light_gray_dye', [
    'A',  
  ], {
    A: 'tfc:powder/native_silver', 
  }).id('kubejs:white_dye_from_silver_powder_manual_only')

  event.recipes.create.mixing('3x minecraft:light_gray_dye', ['minecraft:black_dye', '2x minecraft:white_dye'])
  event.recipes.firmalife.mixing_bowl()
    .outputItem('3x minecraft:light_gray_dye')
    .itemIngredients(['minecraft:black_dye', 'minecraft:white_dye', 'minecraft:white_dye']).id('kubejs:mixing_bowl/light_gray_dye_from_white_black_dye')

  event.recipes.create.mixing('2x minecraft:light_gray_dye', ['minecraft:gray_dye', 'minecraft:white_dye'])
  event.recipes.firmalife.mixing_bowl()
    .outputItem('2x minecraft:light_gray_dye')
    .itemIngredients(['minecraft:gray_dye', 'minecraft:white_dye']).id('kubejs:mixing_bowl/light_gray_dye_from_white_gray_dye')

  // GRAY
  event.remove({ id: `minecraft:gray_dye` })
  event.remove({ id: `tfc:crafting/vanilla/gray_dye_from_magnetite` })
  event.remove({ id: `tfc:crafting/vanilla/gray_dye_from_cassiterite` })
  event.remove({ id: `tfc:crafting/vanilla/gray_dye_from_tetrahedrite` })
  event.remove({ id: `tfc:crafting/vanilla/gray_dye_from_sphalerite` })

  event.shaped('minecraft:gray_dye', [
    'A',  
  ], {
    A: 'tfc:powder/magnetite', 
  }).id('kubejs:gray_dye_from_magnetite_powder_manual_only')

  event.shaped('minecraft:gray_dye', [
    'A',  
  ], {
    A: 'tfc:powder/cassiterite', 
  }).id('kubejs:gray_dye_from_cassiterite_powder_manual_only')

  event.shaped('minecraft:gray_dye', [
    'A',  
  ], {
    A: 'tfc:powder/tetrahedrite', 
  }).id('kubejs:gray_dye_from_tetrahedrite_powder_manual_only')

  event.shaped('minecraft:gray_dye', [
    'A',  
  ], {
    A: 'tfc:powder/sphalerite', 
  }).id('kubejs:gray_dye_from_sphalerite_powder_manual_only')

  event.recipes.create.mixing('2x minecraft:gray_dye', ['minecraft:black_dye', '2x minecraft:white_dye'])
  event.recipes.firmalife.mixing_bowl()
    .outputItem('2x minecraft:gray_dye')
    .itemIngredients(['minecraft:black_dye', 'minecraft:white_dye']).id('kubejs:mixing_bowl/gray_dye_from_white_black_dye')

  // BLACK
  event.remove({ id: `minecraft:black_dye_from_wither_rose` })
  event.remove({ id: `minecraft:black_dye` })
  event.remove({ id: `tfc:crafting/vanilla/black_dye_from_charcoal` })
  event.remove({ id: `tfc:crafting/vanilla/black_dye_from_coke` })
  event.remove({ id: `woodencog:milling/charcoal` })
  event.remove({ id: `create:milling/charcoal` })

  event.shaped('minecraft:black_dye', [
    'A',  
  ], {
    A: 'tfc:powder/coke', 
  }).id('kubejs:black_dye_from_coke_powder_manual_only')

  event.shaped('minecraft:black_dye', [
    'A',  
  ], {
    A: 'tfc:powder/charcoal', 
  }).id('kubejs:black_dye_from_charcoal_powder_manual_only')
  
  event.shaped('minecraft:black_dye', [
    'A',  
  ], {
    A: 'minecraft:ink_sac', 
  }).id('kubejs:black_dye_from_ink_manual_only')
  
  event.remove({ id: `minecraft:ornge_dye_from_orange_tulip` })
  event.remove({ id: `minecraft:ornge_dye_from_orange_tulip` })
  
  //BROWN
  event.remove({ id: `minecraft:brown_dye` })
  event.remove({ id: `tfc:crafting/vanilla/brown_dye_from_garnierite` })
  event.remove({ id: `create:milling/cocoa_beans` })
  event.remove({ id: `create:crushing/cocoa_beans` })
  
  event.shaped('minecraft:brown_dye', [
    'A',  
  ], {
    A: 'tfc:powder/garnierite', 
  }).id('kubejs:brown_dye_from_garnierite_powder_manual_only')

  //RED
  event.remove({ id: `minecraft:red_dye_from_beetroot` })
  event.remove({ id: `minecraft:red_dye_from_poppy` })
  event.remove({ id: `minecraft:red_dye_from_rose_bush` })
  event.remove({ id: `minecraft:red_dye_from_tulip` })
  event.remove({ id: `tfc:crafting/vanilla/red_dye_from_hematite` })

  event.shaped('minecraft:red_dye', [
    'A',  
  ], {
    A: 'tfc:powder/hematite', 
  }).id('kubejs:red_dye_from_hematite_powder_manual_only')

  event.recipes.create.milling(['minecraft:red_dye', 'minecraft:red_dye'], 'tfc:plant/kangaroo_paw')
  event.recipes.create.milling(['minecraft:red_dye', 'minecraft:red_dye'], 'tfc:plant/anthurium')
  event.recipes.create.milling(['minecraft:red_dye', 'minecraft:red_dye'], 'tfc:plant/heliconia')
  event.recipes.create.milling(['minecraft:red_dye', 'minecraft:red_dye'], 'tfc:plant/blood_lily')
  event.recipes.create.crushing(['minecraft:red_dye', 'minecraft:red_dye'], 'tfc:plant/kangaroo_paw')
  event.recipes.create.crushing(['minecraft:red_dye', 'minecraft:red_dye'], 'tfc:plant/anthurium')
  event.recipes.create.crushing(['minecraft:red_dye', 'minecraft:red_dye'], 'tfc:plant/heliconia')
  event.recipes.create.crushing(['minecraft:red_dye', 'minecraft:red_dye'], 'tfc:plant/blood_lily')

  //ORANGE
  event.remove({ id: `minecraft:orange_dye_from_orange_tulip` })
  event.remove({ id: `minecraft:orange_dye_from_torchflower` })
  event.remove({ id: `minecraft:orange_dye_from_red_yellow` })
  event.remove({ id: `tfc:crafting/vanilla/orange_dye_from_native_copper` })
  event.remove({ id: `tfc:crafting/vanilla/orange_dye_from_sylvite` })

  event.shaped('minecraft:orange_dye', [
    'A',  
  ], {
    A: 'tfc:powder/native_copper', 
  }).id('kubejs:orange_dye_from_native_copper_powder_manual_only')

  event.shaped('minecraft:orange_dye', [
    'A',  
  ], {
    A: 'tfc:powder/sylvite', 
  }).id('kubejs:orange_dye_from_sylvite_powder_manual_only')

  event.recipes.create.mixing('2x minecraft:orange_dye', ['minecraft:red_dye', 'minecraft:yellow_dye'])
  event.recipes.firmalife.mixing_bowl()
    .outputItem('2x minecraft:orange_dye')
    .itemIngredients(['minecraft:red_dye', 'minecraft:yellow_dye']).id('kubejs:mixing_bowl/orange_dye_from_red_yellow_dye')

  event.recipes.create.milling(['minecraft:orange_dye', 'minecraft:orange_dye'], 'tfc:plant/marigold')
  event.recipes.create.crushing(['minecraft:orange_dye', 'minecraft:orange_dye'], 'tfc:plant/marigold')

  //YELLOW
  event.remove({ id: `minecraft:yellow_dye_from_sunflower` })
  event.remove({ id: `minecraft:yellow_dye_from_dandelion` })
  event.remove({ id: `tfc:crafting/vanilla/yellow_dye_from_limonite` })

  event.shaped('minecraft:yellow_dye', [
    'A',  
  ], {
    A: 'tfc:powder/limonite', 
  }).id('kubejs:yellow_dye_from_limonite_powder_manual_only')

  //LIME
  event.remove({ id: `minecraft:lime_dye` })

  event.recipes.create.mixing('2x minecraft:lime_dye', ['minecraft:green_dye', 'minecraft:white_dye'])
  event.recipes.firmalife.mixing_bowl()
    .outputItem('2x minecraft:lime_dye')
    .itemIngredients(['minecraft:green_dye', 'minecraft:white_dye']).id('kubejs:mixing_bowl/lime_dye_from_green_white_dye')

  //GREEN
  event.remove({ id: `tfc:crafting/vanilla/green_dye_from_malachite` })
  event.remove({ id: `tfc:crafting/vanilla/green_dye_from_bismuthinite` })
 
  event.shaped('minecraft:green_dye', [
    'A',  
  ], {
    A: 'tfc:powder/malachite', 
  }).id('kubejs:green_dye_from_malachite_powder_manual_only')

  event.shaped('minecraft:green_dye', [
    'A',  
  ], {
    A: 'tfc:powder/bismuthinite', 
  }).id('kubejs:green_dye_from_bismuthinite_powder_manual_only')

  //CYAN
  event.remove({ id: `minecraft:cyan_dye_from_pitcher_plant` })
  event.remove({ id: `minecraft:cyan_dye` })

  event.recipes.create.mixing('2x minecraft:cyan_dye', ['minecraft:blue_dye', 'minecraft:green_dye'])
  event.recipes.firmalife.mixing_bowl()
    .outputItem('2x minecraft:cyan_dye')
    .itemIngredients(['minecraft:blue_dye', 'minecraft:green_dye']).id('kubejs:mixing_bowl/cyan_dye_from_blue_green_dye')

  // LIGHT BLUE
  event.remove({ id: `minecraft:light_blue_dye_from_blue_orchid` })
  event.remove({ id: `minecraft:light_blue_dye_from_blue_white_dye` })

  event.recipes.create.mixing('2x minecraft:light_blue_dye', ['minecraft:blue_dye', 'minecraft:white_dye'])
  event.recipes.firmalife.mixing_bowl()
    .outputItem('2x minecraft:light_blue_dye')
    .itemIngredients(['minecraft:blue_dye', 'minecraft:white_dye']).id('kubejs:mixing_bowl/light_blue_dye_from_blue_white_dye')

  //BLUE
  event.remove({ id: `minecraft:blue_dye_from_cornflower` })
  event.remove({ id: `minecraft:blue_dye` })
  event.remove({ id: `tfc:crafting/vanilla/blue_dye_from_graphite` })
  event.remove({ id: `tfc:crafting/vanilla/blue_dye_from_lapis_lazuli` })

  event.shaped('minecraft:blue_dye', [
    'A',  
  ], {
    A: 'tfc:powder/graphite', 
  }).id('kubejs:blue_dye_from_graphite_powder_manual_only')

  event.shaped('minecraft:blue_dye', [
    'A',  
  ], {
    A: 'tfc:powder/lapis_lazuli', 
  }).id('kubejs:blue_dye_from_lapis_lazuli_powder_manual_only')

  //PURPLE
  event.remove({ id: `minecraft:purple_dye` })

  event.recipes.create.mixing('2x minecraft:purple_dye', ['minecraft:blue_dye', 'minecraft:red_dye'])
  event.recipes.firmalife.mixing_bowl()
    .outputItem('2x minecraft:purple_dye')
    .itemIngredients(['minecraft:blue_dye', 'minecraft:red_dye']).id('kubejs:mixing_bowl/purple_dye_from_blue_red_dye')

  event.recipes.create.milling(['minecraft:purple_dye', 'minecraft:purple_dye'], 'tfc:plant/blue_ginger')
  event.recipes.create.crushing(['minecraft:purple_dye', 'minecraft:purple_dye'], 'tfc:plant/blue_ginger')
  event.recipes.create.milling(['minecraft:purple_dye', 'minecraft:purple_dye'], 'tfc:plant/pickerelweed')
  event.recipes.create.crushing(['minecraft:purple_dye', 'minecraft:purple_dye'], 'tfc:plant/pickerelweed')
  event.recipes.create.milling(['minecraft:purple_dye', 'minecraft:purple_dye'], 'tfc:plant/heather')
  event.recipes.create.crushing(['minecraft:purple_dye', 'minecraft:purple_dye'], 'tfc:plant/heather')

  //MAGENTA
  event.remove({ id: `minecraft:magenta_dye_from_lilac` })
  event.remove({ id: `minecraft:magenta_dye_from_allium` })
  event.remove({ id: `minecraft:magenta_dye_from_blue_red_white_dye` })
  event.remove({ id: `minecraft:magenta_dye_from_blue_red_pink` })
  event.remove({ id: `minecraft:magenta_dye_from_purple_and_pink` })

  event.recipes.create.mixing('2x minecraft:magenta_dye', ['minecraft:purple_dye', 'minecraft:pink_dye'])
  event.recipes.firmalife.mixing_bowl()
    .outputItem('2x minecraft:magenta_dye')
    .itemIngredients(['minecraft:purple_dye', 'minecraft:pink_dye']).id('kubejs:mixing_bowl/magenta_dye_from_purple_pink_dye')

  event.recipes.create.mixing('3x minecraft:magenta_dye', ['minecraft:blue_dye', 'minecraft:red_dye', 'minecraft:pink_dye'])
  event.recipes.firmalife.mixing_bowl()
    .outputItem('3x minecraft:magenta_dye')
    .itemIngredients(['minecraft:blue_dye', 'minecraft:red_dye', 'minecraft:pink_dye']).id('kubejs:mixing_bowl/magenta_dye_from_blue_red_pink_dye')
    
  event.recipes.create.mixing('4x minecraft:magenta_dye', ['minecraft:blue_dye', '2x minecraft:red_dye', 'minecraft:white_dye'])
  event.recipes.firmalife.mixing_bowl()
    .outputItem('4x minecraft:magenta_dye')
    .itemIngredients(['minecraft:blue_dye', 'minecraft:red_dye', 'minecraft:red_dye', 'minecraft:white_dye']).id('kubejs:mixing_bowl/magenta_dye_from_blue_red_white_dye')
  
  event.recipes.create.milling(['minecraft:magenta_dye', 'minecraft:magenta_dye'], 'tfc:plant/silver_spurflower')
  event.recipes.create.crushing(['minecraft:magenta_dye', 'minecraft:magenta_dye'], 'tfc:plant/silver_spurflower')

  event.recipes.create.milling(['minecraft:magenta_dye', 'minecraft:magenta_dye'], 'tfc:plant/lilac')
  event.recipes.create.crushing(['minecraft:magenta_dye', 'minecraft:magenta_dye'], 'tfc:plant/lilac')

  //PINK
  event.remove({ id: `minecraft:pink_dye_from_pink_tulip` })
  event.remove({ id: `minecraft:pink_dye_from_pink_petals` })
  event.remove({ id: `minecraft:pink_dye_from_pink_peony` })
  event.remove({ id: `minecraft:pink_dye_from_red_white_dye` })
  event.remove({ id: `tfc:crafting/vanilla/pink_dye_from_kaolinite` })

  event.shaped('minecraft:pink_dye', [
    'A',  
  ], {
    A: 'tfc:powder/kaolinite', 
  }).id('kubejs:pink_dye_from_pink_powder_manual_only')

  event.recipes.create.mixing('2x minecraft:pink_dye', ['minecraft:red_dye', 'minecraft:white_dye'])
  event.recipes.firmalife.mixing_bowl()
    .outputItem('2x minecraft:pink_dye')
    .itemIngredients(['minecraft:red_dye', 'minecraft:white_dye']).id('kubejs:mixing_bowl/pink_dye_from_red_white_dye')
  
  event.recipes.create.milling(['minecraft:pink_dye', 'minecraft:pink_dye'], 'tfc:plant/hibiscus')
  event.recipes.create.crushing(['minecraft:pink_dye', 'minecraft:pink_dye'], 'tfc:plant/hibiscus')

  event.recipes.create.milling(['minecraft:pink_dye', 'minecraft:pink_dye'], 'tfc:plant/lotus')
  event.recipes.create.crushing(['minecraft:pink_dye', 'minecraft:pink_dye'], 'tfc:plant/lotus')

  event.recipes.create.milling(['minecraft:pink_dye', 'minecraft:pink_dye'], 'tfc:plant/maiden_pink')
  event.recipes.create.crushing(['minecraft:pink_dye', 'minecraft:pink_dye'], 'tfc:plant/maiden_pink')

})