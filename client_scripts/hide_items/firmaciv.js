JEIEvents.hideItems( event => {
  
  let mod = 'firmaciv'

  let roof_materials = [
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

  roof_materials.forEach((m) => {
    event.hide(`${mod}:wood/${m}_roofing`)
  })
 
  event.hide(`${mod}:thatch_roofing_slab`)
})



