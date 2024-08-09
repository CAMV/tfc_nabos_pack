
ServerEvents.recipes(event  => {

  event.remove({id: 'woodencog:compacting/brick'})
  event.remove({id: 'woodencog:compacting/crucible'})

  event.remove({id: 'woodencog:mixing/create_mixing_alloying_weak_steel'})
  event.remove({id: 'woodencog:mixing/create_mixing_alloying_weak_blue_steel'})
  event.remove({id: 'woodencog:mixing/create_mixing_alloying_weak_red_steel'})
  
  event.remove({ id: `woodencog:rock_knapping/andesite_alloy` })

})