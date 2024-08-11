
ServerEvents.recipes(event  => {

  event.remove({id: 'woodencog:compacting/brick'})
  event.remove({id: 'woodencog:compacting/crucible'})

  event.remove({id: 'woodencog:mixing/create_mixing_alloying_weak_steel'})
  event.remove({id: 'woodencog:mixing/create_mixing_alloying_weak_blue_steel'})
  event.remove({id: 'woodencog:mixing/create_mixing_alloying_weak_red_steel'})
  
  event.remove({ id: `woodencog:rock_knapping/andesite_alloy` })
  event.remove({ id: `woodencog:mixing/barrel/clean_jute_net` })
  event.remove({ id: `woodencog:mixing/barrel/sugar` })
  event.remove({ id: `woodencog:crafting/appliances/copper_backtank` })

  event.remove({ id: `woodencog:crafting/mechanical_crafting/wand_of_symmetry` })
  event.remove({ id: `woodencog:crafting/schematics/schematic_table` })

  event.remove({ id: 'woodencog:crafting/schematics/schematicannon' })
  event.remove({ id: 'woodencog:crafting/kinetics/belt_connector' })

  event.remove({ id: 'woodencog:crafting/kinetics/hose_pulley' })
  event.remove({ id: 'woodencog:crafting/kinetics/item_drain' })
  event.remove({ id: 'woodencog:crafting/kinetics/spout' })
  event.remove({ id: 'woodencog:crafting/kinetics/elevator_pulley' })
  event.remove({ id: 'woodencog:crafting/kinetics/sticker' })
  event.remove({ id: 'woodencog:crafting/kinetics/item_vault' })

})