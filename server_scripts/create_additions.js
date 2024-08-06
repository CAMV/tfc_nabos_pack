ServerEvents.recipes(event  => {

  event.remove({ output: 'createaddition:connector' })
  event.shaped('2x createaddition:connector', [
    ' A ', 
    ' B ', 
    ' C '  
  ], {
    A: 'createaddition:copper_spool', 
    B: 'createaddition:electrum_rod', 
    C: 'create:andesite_alloy' 
  })

  event.remove({ output: 'createaddition:small_light_connector' })
  event.shaped('createaddition:small_light_connector', [
    ' A ', 
    ' B ', 
    ' C '  
  ], {
    A: '#tfc:lamp_glass', 
    B: 'createaddition:iron_wire', 
    C: 'createaddition:connector' 
  })

  event.remove({ output: 'createaddition:large_connector' })
  event.shaped('createaddition:large_connector', [
    ' A ', 
    'CBC', 
    'CBC'  
  ], {
    A: 'createaddition:electrum_spool', 
    B: 'tfc:metal/rod/steel',
    C: 'create:andesite_alloy' 
  })

  event.remove({ input: 'createaddition:cake_base_baked' })

  event.remove({ id: 'createaddition:modular_accumulator_gold' })

  event.remove({ output: 'createaddition:portable_energy_interface' })
  event.shaped('createaddition:portable_energy_interface', [
    ' A ', 
    ' B ', 
    'CBC'  
  ], {
    A: 'create:chute' , 
    B: 'create:brass_casing', 
    C: 'createaddition:copper_spool' 
  })

  event.remove({ output: 'createaddition:diamond_grit_sandpaper' })

  event.remove({ output: 'createaddition:zinc_sheet' })

  event.remove({ output: 'createaddition:spool' })
  event.shaped('16x createaddition:spool', [
    ' A ', 
    ' B ', 
    ' A '  
  ], {
    A: 'tfc:metal/sheet/wrought_iron' , 
    B: 'tfc:metal/rod/wrought_iron', 
  })

  event.remove({ output: 'createaddition:festive_spool' })
  event.shaped('16x createaddition:spool', [
    ' A ', 
    'CBC', 
    ' A '  
  ], {
    A: 'minecraft:redston' , 
    B: 'createaddition:copper_spool', 
    C: '#tfc:gem_powders', 
  })

  event.remove({ output: 'createaddition:diamond_grit' })

  event.remove({ id: 'createaddition:mixing/bioethanol' })
  event.remove({ id: 'create:empty_createaddition_seed_oil_bucket_of_createaddition_seed_oil' })
  event.remove({ id: 'create:empty_createaddition_bioethanol_bucket_of_createaddition_bioethanol' })

  event.remove({ id: 'createaddition:charging/channeling' })

  event.remove({ id: 'createaddition:compacting/biomass_pellet' })
})