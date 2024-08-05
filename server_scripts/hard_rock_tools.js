
ServerEvents.recipes(event  => {
  event.remove({id: 'htm:materials/plant_fiber'})
  event.remove({id: 'htm:materials/plant_mesh'})

  event.shapeless('htm:plant_mesh', ['#forge:string/plant', '#forge:string/plant', '#forge:string/plant', '#forge:string/plant']).id('kubejs:plant_mesh_manual_only')
  event.shapeless('htm:plant_fabric', ['htm:plant_mesh', 'htm:plant_mesh']).id('kubejs:plant_fiber_manual_only')

  event.remove({id: 'htm:materials/plant_mesh'})

  event.remove({id: 'htm:materials/sawdust'})

  event.remove({id: 'htm:compat/firmalife/pulp_plant'})

  event.custom(
    {
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid": "firmalife"
        }
      ],
      "type": "firmalife:mixing_bowl",
      "ingredients": [
        {
          "tag": "tfc:clay_knapping"
        },
        {
          "tag": "forge:plant_fiber"
        },
        {
          "tag": "forge:plant_fiber"
        },
        {
          "tag": "forge:plant_fiber"
        },
        {
          "tag": "forge:plant_fiber"
        }
      ],
      "fluid_ingredient": {
        "ingredient": "minecraft:water",
        "amount": 1000
      },
      "output_item": {
        "item": "htm:plant_pulp"
      }
    }
  )
})