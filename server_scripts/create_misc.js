

TFCEvents.data(event => {


})

ServerEvents.recipes(event  => {
    event.remove({ id: 'create:crafting/appliances/netherite_backtank_from_netherite' })
    event.remove({ id: 'create:crafting/appliances/netherite_backtank' })

    event.remove({ id: 'create:crafting/appliances/copper_backtank' })

    event.remove({ id: 'create:crafting/kinetics/wrench' })

    event.remove({ output: 'create:super_glue' })
    event.shaped('create:super_glue', [
        ' B ', 
        'AAA', 
        'AAA'  
      ], {
        A: 'tfc:glue', 
        B: 'tfc:metal/sheet/wrought_iron', 
      })
  
    event.remove({ id: 'create:crafting/appliances/crafting_blueprint' })

    event.remove({ output: 'create:copper_diving_helmet' })
    event.shaped('create:copper_diving_helmet', [
        'CAC', 
        'CBC', 
        '   '  
      ], {
        A: 'tfc:metal/helmet/copper', 
        B: '#forge:glass',
        C: 'create:andesite_alloy', 
      })

      event.remove({ output: 'create:copper_diving_boots' })
      event.shaped('create:copper_diving_boots', [
          'CAC', 
          'CCC', 
          '   '  
        ], {
          A: 'tfc:metal/boots/copper', 
          C: 'create:andesite_alloy', 
        })
      
      event.remove({ output: `create:andesite_door` })
      event.shapeless(`create:andesite_door`, [`create:andesite_casing`, '#minecraft:wooden_doors']).id(`kubejs:andesite_door_manual_only`)

      event.remove({ output: `create:copper_door` })
      event.shapeless(`create:copper_door`, [`create:copper_casing`, '#minecraft:wooden_doors']).id(`kubejs:copper_door_manual_only`)

      event.remove({ output: `create:train_door` })
      event.shapeless(`create:train_door`, [`create:railway_casing`, '#minecraft:wooden_doors']).id(`kubejs:train_door_manual_only`)

      event.remove({ output: `create:schematic_and_quill` })
      event.shapeless(`create:schematic_and_quill`, [`create:empty_schematic`, 'artisanal:quill']).id(`kubejs:schematic_and_quill_manual_only`)

      event.remove({ id: `create:mixing/lava_from_cobble` })

})