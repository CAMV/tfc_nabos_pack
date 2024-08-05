
ServerEvents.recipes(event  => {

  //event.recipes.create.mixing('tfc:powder/kaolinite', ['4x tfc:kaolin_clay']).heated()

  event.remove({id: 'tfc:crafting/fire_clay'})
  event.recipes.create.mixing('tfc:fire_clay' , ['4x tfc:powder/kaolinite', '4x tfc:powder/graphite', 'minecraft:clay_ball']).id('kubejs:create_mixing/fire_clay')

  event.recipes.firmalife.mixing_bowl()
    .outputItem('kubejs:fire_powder')
    .itemIngredients(['tfc:powder/kaolinite', 'tfc:powder/graphite']).id('kubejs:mixing_bowl/fire_powder')

  event.recipes.firmalife.mixing_bowl()
    .outputItem('tfc:fire_clay')
    .itemIngredients(['minecraft:clay_ball', 'kubejs:fire_powder', 'kubejs:fire_powder', 'kubejs:fire_powder', 'kubejs:fire_powder']).id('kubejs:mixing_bowl/fire_clay')

  event.remove({id: 'woodencog:compacting/brick'})
  event.remove({id: 'woodencog:compacting/crucible'})

  event.remove({id: 'tfc:crafting/fire_clay_block'})
  event.shaped('tfc:fire_clay_block', [
    'AA', 
    'AA',  
  ], {
    A: 'tfc:fire_clay', 
  }).id('kubejs:fire_clay_block_manual_only')
  
  event.recipes.create.compacting('tfc:fire_clay_block', '4x tfc:fire_clay').id('kubejs:compacting/fire_clay_block')

})