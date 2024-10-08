ServerEvents.recipes(event  => {

  event.remove({ id: 'createaddition:mixing/biomass_from_sticks' })
  event.remove({ id: 'createaddition:mixing/biomass_from_leaves' })
  event.remove({ id: 'createaddition:mixing/biomass_from_flowers' })
  event.remove({ id: 'createaddition:mixing/biomass_from_crops' })
  event.remove({ id: 'createaddition:mixing/biomass_from_plant_foods' })
  event.remove({ id: 'createaddition:mixing/biomass_from_plants' })
  event.remove({ id: 'createaddition:mixing/biomass_from_saplings' })
  event.remove({ id: 'createaddition:mixing/biomass_from_honeycomb' })
  event.remove({ id: 'createaddition:modular_accumulator_gold' })
  event.remove({ id: 'createaddition:mixing/bioethanol' })
  event.remove({ id: 'create:empty_createaddition_seed_oil_bucket_of_createaddition_seed_oil' })
  event.remove({ id: 'create:empty_createaddition_bioethanol_bucket_of_createaddition_bioethanol' })
  event.remove({ id: 'createaddition:charging/channeling' })
  event.remove({ id: 'createaddition:compacting/biomass_pellet' })
  event.remove({ id: 'createaddition:mechanical_crafting/electric_motor' })
  event.remove({ id: 'createaddition:mechanical_crafting/alternator' })
  event.remove({ input: 'createaddition:cake_base_baked' })

  event.remove({ id: 'createaddition:crafting/portable_energy_interface' })
  event.remove({ id: 'createaddition:crafting/small_connector_copper' })
  event.remove({ id: 'createaddition:crafting/small_light_connector' })
  event.remove({ id: 'createaddition:crafting/large_connector_electrum' })
  event.remove({ id: 'createaddition:crafting/large_connector_gold' })
  event.remove({ id: 'createaddition:crushing/diamond' })
  event.remove({ id: 'createaddition:crafting/diamond_grit_sandpaper' })

  event.remove({ id: 'createaddition:pressing/zinc_ingot' })
  event.remove({ id: 'createaddition:crafting/spool' })
  event.remove({ id: 'createaddition:crafting/festive_spool' })
  event.remove({ id: 'createaddition:crafting/gold_spool' })

  event.remove({ id: 'createaddition:rolling/straw' })
  event.remove({ id: 'createaddition:crafting/electrum_amulet' })

  event.remove({ id: `createaddition:mixing/electrum` })
  event.remove({ id: `createaddition:pressing/electrum_ingot` })

  event.remove({ id: `createaddition:crafting/capacitor_1` })
  event.remove({ id: `createaddition:crafting/capacitor_2` })

  event.remove({ id: `createaddition:crafting/modular_accumulator_electrum` })
  event.remove({ id: `createaddition:crafting/modular_accumulator_gold` })

  event.remove({ id: `createaddition:crafting/biomass_pellet` })
  event.remove({ id: `createaddition:crafting/biomass_pellet_block` })

})