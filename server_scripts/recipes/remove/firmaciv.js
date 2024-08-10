
ServerEvents.recipes(event  => {

  let mod = 'firmaciv'

  let roofing_materials = [
    'thatch',
    'acacia', 
    'ash',
    'aspen',
    'birch',
    'blackwood',
    'chestnut',
    'douglas_fir',
    'hickory',
    'kapok',
    'mangrove',
    'maple',
    'oak',
    'palm',
    'pine',
    'rosewood',
    'sequoia',
    'spruce',
    'sycamore',
    'white_cedar',
    'willow'
  ]

  event.remove({id: `${mod}:crafting/thatch_roofing_slab`})
  event.remove({id: `${mod}:crafting/thatch_roofing_slab_to_straw`})
  event.remove({id: `${mod}:crafting/thatch_roofing_to_straw`})

  roofing_materials.forEach((mat) => {
    event.remove({id: `${mod}:crafting/${mat}_roofing`})
  })

  event.remove({id: `${mod}:anvil/copper_bolt`})
  event.remove({ id: `firmaciv:crafting/large_waterproof_hide` })

})