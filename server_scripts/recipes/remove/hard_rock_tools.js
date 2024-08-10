
ServerEvents.recipes(event  => {

  event.remove({id: 'htm:materials/plant_mesh'})
  event.remove({id: 'htm:materials/sawdust'})
  event.remove({id: 'htm:compat/create/mixing/plant_pulp'})
  event.remove({id: 'htm:compat/firmalife/pulp_plant'})

})