ServerEvents.recipes(event  => {

  event.remove({ output: 'createoreexcavation:drilling_machine' })
  event.recipes.create.mechanical_crafting('createoreexcavation:drilling_machine', [
    'ABCBA',
    'BDEDB',
    'FGHGI',
    'BJGJB',
    'ABJBA'
  ], {
      A: 'tfc:metal/block/brass', 
      B: 'tfc:metal/sheet/brass', 
      C: 'create:copper_casing',
      D: 'create:electron_tube',
      E: 'create:spout', 
      F: 'create:brass_casing', 
      G: 'create:precision_mechanism', 
      H: 'create:mechanical_drill', 
      I: 'create:brass_tunnel', 
      J: 'tfc:metal/double_sheet/black_steel', 
  })

  event.remove({ output: 'createoreexcavation:extractor' })
  event.recipes.create.mechanical_crafting('createoreexcavation:extractor', [
    'ABCBA',
    'BDEDB',
    'FGHGB',
    'BIGIB',
    'ABIBA'
  ], {
      A: 'tfc:metal/block/brass', 
      B: 'tfc:metal/sheet/brass', 
      C: 'create:mechanical_pump',
      D: 'create:electron_tube',
      E: 'create:hose_pulley', 
      F: 'create:brass_casing', 
      G: 'create:precision_mechanism', 
      H: 'create:mechanical_drill', 
      I: 'tfc:metal/double_sheet/black_steel', 
  })

  event.remove({ output: 'createoreexcavation:sample_drill' })
  event.recipes.create.mechanical_crafting('createoreexcavation:sample_drill', [
    'ABA',
    'CDA',
    'EFE',
  ], {
      A: 'tfc:metal/sheet/brass', 
      B: 'create:electron_tube',
      C: 'create:precision_mechanism', 
      D: 'create:brass_casing', 
      E: 'tfc:metal/double_sheet/steel', 
      F: 'create:mechanical_drill', 
  })

  event.remove({ output: 'createoreexcavation:netherite_drill' })

  event.remove({ output: 'createoreexcavation:vein_finder' })
  event.shaped('createoreexcavation:vein_finder', [
    '  A', 
    ' B ', 
    'C  '  
  ], {
    A: 'tfc:metal/propick_head/wrought_iron', 
    B: 'tfc:brass_mechanisms', 
    C: 'tfc:metal/rod/wrought_iron', 
  })

  event.remove({ output: 'createoreexcavation:vein_atlas' })
  event.shaped('createoreexcavation:vein_atlas', [
    'AB ', 
    'CD ', 
    '   '  
  ], {
    A: '#forge:chests', 
    B: '#forge:gems', 
    C: 'minecraft:map',
    D: 'minecraft:writable_book', 
  })
})