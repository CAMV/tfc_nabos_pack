JEIEvents.hideItems( event => {
    event.hide('create:andesite_bars')
    event.hide('create:copper_bars')
    event.hide('create:brass_sheet')

    event.hide('createaddition:gold_rod')
    event.hide('createaddition:iron_rod')
    event.hide('createaddition:copper_rod')
    event.hide('createaddition:chocolate_cake')
    event.hide('createaddition:honey_cake')
    event.hide('createaddition:diamond_grit_sandpaper')
    event.hide('createaddition:diamond_grit')
    event.hide('createaddition:seed_oil_bucket')
    event.hide('createaddition:bioethanol_bucket')

    event.hide('createdieselgenerators:ethanol_bucket')
    event.hide('createdieselgenerators:ethanol_bucket')

    event.hide('createoreecavation:netherite_drill')

    event.hide('create:wheat_flour')
    event.hide('create:dough')
    event.hide('create:sturdy_sheet')
    event.hide('create:bar_of_chocolate')
    event.hide('create:sweet_roll')
    event.hide('create:chocolate_glazed_berries')
    event.hide('create:honeyed_apple')
    event.hide('create:raw_zinc')
    event.hide('create:zinc_ingot')
    event.hide('create:zinc_nugget')
    event.hide('create:zinc_sheet')

    event.hide('create:brass_ingot')
    event.hide('create:brass_nugget')
    event.hide('create:copper_nugget')
    event.hide('create:experience_nugget')
    event.hide('create:copper_sheet')
    event.hide('create:iron_sheet')
    event.hide('create:brass_sheet')
    event.hide('create:crushed_raw_iron')
    event.hide('create:crushed_raw_copper')
    event.hide('create:crushed_raw_gold')
    event.hide('create:crushed_raw_zinc')
    event.hide('create:crushed_raw_silver')
    event.hide('create:crushed_raw_tin')
    event.hide('create:crushed_raw_nickel')
    event.hide('create:rose_quartz_lamp')
    event.hide('create:red_sand_paper')
    event.hide('create:tree_fertilizer')
    event.hide('create:andesite_ladder')
    event.hide('create:copper_ladder')
    event.hide('create:brass_ladder')
    event.hide('create:andesite_scaffolding')
    event.hide('create:copper_scaffolding')
    event.hide('create:brass_scaffolding')
    event.hide('create:copycat_step')
    event.hide('create:copycat_panel')
    event.hide('create:zinc_ore')
    event.hide('create:deepslate_zinc_ore')
    event.hide('create:raw_zinc')
    event.hide('create:raw_zinc_block')
    event.hide('create:zinc_block')
    event.hide('create:industrial_iron_block')
    event.hide('create:experience_block')
    event.hide('create:brass_block')

  let stones = [
    'granite', 
    'diorite', 
    'andesite', 
    'calcite', 
    'dripstone', 
    'deepslate', 
    'tuff',
    'asurine',
    'crimsite',
    'limestone',
    'ochrum',
    'scoria',
    'scorchia',
    'veridium' 
  ]

  stones.forEach((stone) => {
    event.hide(`create:${stone}`)
    event.hide(`create:cut_${stone}`)
    event.hide(`create:cut_${stone}_stairs`)
    event.hide(`create:cut_${stone}_slab`)
    event.hide(`create:cut_${stone}_wall`)
    event.hide(`create:polished_cut_${stone}`)
    event.hide(`create:polished_cut_${stone}_stairs`)
    event.hide(`create:polished_cut_${stone}_slab`)
    event.hide(`create:polished_cut_${stone}_wall`)
    event.hide(`create:cut_${stone}_bricks`)
    event.hide(`create:cut_${stone}_brick_stairs`)
    event.hide(`create:cut_${stone}_brick_slab`)
    event.hide(`create:cut_${stone}_brick_wall`)
    event.hide(`create:small_${stone}_bricks`)
    event.hide(`create:small_${stone}_brick_stairs`)
    event.hide(`create:small_${stone}_brick_slab`)
    event.hide(`create:small_${stone}_brick_wall`)
    event.hide(`create:layered_${stone}`)
    event.hide(`create:${stone}_pillar`)
  })

  event.hide('create:rose_quartz_block')
  event.hide('create:rose_quartz_tiles')
  event.hide('create:small_rose_quartz_tiles')

  let window_mat = [
    'oak',
    'birch',
    'spruce',
    'jungle',
    'acacia',
    'dark_oak',
    'mangrove',
    'crimson',
    'warped',
    'ornate_iron',
  ]

  window_mat.forEach((mat) => {
      event.hide(`create:${mat}_window`)
      event.hide(`create:${mat}_window_pane`)
  })

  event.hide('create:tiled_glass')
  event.hide('create:framed_glass')
  event.hide('create:horizontal_framed_glass')
  event.hide('create:vertical_framed_glass')
  event.hide('create:tiled_glass_pane')
  event.hide('create:framed_glass_pane')
  event.hide('create:horizontal_framed_glass_pane')
  event.hide('create:vertical_framed_glass_pane')
  event.hide('create:framed_glass_door')
  event.hide('create:framed_glass_trapdoor')

  event.hide('create:framed_glass_door')


  let shapes = [
    'shingles',
    'shingle_slab',
    'shingle_stairs',
    'tiles',
    'tile_slab',
    'tile_stairs'
  ]

  let expositions = [
      'exposed_',
      'weathered_',
      'oxidized_',
      ''
  ]

  shapes.forEach((shape) => {
      expositions.forEach((exp) => {
          event.hide(`create:${exp}copper_${shape}`)
          event.hide(`create:waxed_${exp}copper_${shape}`)
      })
  })

  event.hide('alekiships:cannon')
  event.hide('alekiships:watercraft_frame_angled')
  event.hide('alekiships:watercraft_frame_flat')

})

JEIEvents.hideFluids ( event => {
  event.hide('createaddition:seed_oil')
  event.hide('createaddition:bioethanol')
  event.hide('createdieselgenerators:plant_oil')
  event.hide('createdieselgenerators:ethanol')
})

