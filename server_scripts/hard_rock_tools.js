
ServerEvents.recipes(event  => {
  event.remove({id: 'htm:materials/plant_fiber'})
  event.remove({id: 'htm:materials/plant_mesh'})

  event.shapeless('htm:plant_mesh', ['#forge:string/plant', '#forge:string/plant', '#forge:string/plant', '#forge:string/plant']).id('kubejs:plant_mesh_manual_only')
  event.shapeless('htm:plant_fabric', ['htm:plant_mesh', 'htm:plant_mesh']).id('kubejs:plant_fiber_manual_only')

  event.remove({id: 'htm:materials/plant_mesh'})

  event.remove({id: 'htm:materials/sawdust'})
})