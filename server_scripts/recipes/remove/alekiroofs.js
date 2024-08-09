
ServerEvents.recipes(event  => {

  let mod = 'alekiroofs'

  let roofing_materials = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'mangrove',
    'cherry',
    'crimson',
    'warped',
    'brick',
    'bamboo',
    'bamboo_mosaic',
    'cobbled_deepslate',
    'polished_deepslate',
    'deepslate_tile',
    'deepslate_brick',
    'andesite',
    'polished_andesite',
    'granite',
    'polished_granite',
    'diorite',
    'polished_diorite',
    'stone',
    'cobblestone',
    'mossy_cobblestone',
    'stone_brick',
    'mossy_stone_brick',
    'blackstone',
    'polished_blackstone',
    'polished_blackstone_brick',
    'prismarine',
    'dark_prismarine',
    'prismarine_brick',
    'purpur',
    'end_stone_brick',
    'mud_brick',
    'sandstone',
    'smooth_sandstone',
    'red_sandstone',
    'smooth_red_sandstone',
    'quartz',
    'smooth_quartz',
    'nether_brick',
    'red_nether_brick',
    'cut_copper',
    'exposed_cut_copper',
    'weathered_cut_copper',
    'oxidized_cut_copper',
    'waxed_cut_copper',
    'waxed_exposed_cut_copper',
    'waxed_weathered_cut_copper',
    'waxed_oxidized_cut_copper'
  ]

  let copper_roofing = [
    'waxed_cut_copper',
    'waxed_exposed_cut_copper',
    'waxed_weathered_cut_copper',
    'waxed_oxidized_cut_copper'
  ]

  roofing_materials.forEach((mat) => {
    event.remove({id: `${mod}:crafting/${mat}_roofing`})
  })

  copper_roofing.forEach((mat) => {
    event.remove({id: `${mod}:crafting/${mat}_roofing_from_honeycomb`})
  })

})