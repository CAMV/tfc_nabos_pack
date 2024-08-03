
ServerEvents.recipes(event  => {
  let woods = [
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

  woods.forEach((wood) => {
    event.remove({ id: `tfc:crafting/wood/${wood}_lumber_log` })
    event.remove({ id: `tfc:crafting/wood/${wood}_lumber_planks` })
    event.remove({ id: `tfc:crafting/wood/${wood}_slab_undo` })
    event.remove({ id: `tfc:crafting/wood/${wood}_stairs_undo` })
    event.remove({ id: `firmaciv:crafting/uncraft_${wood}_roofing` })

    event.remove({ id: `tfc:crafting/wood/${wood}_support` })

    event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`4x tfc:wood/lumber/${wood}`,[`tfc:wood/planks/${wood}`, '#tfc:saws'])).id(`kubejs:crafting/wood/${wood}_lumber_planks_manual_only`)
    event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`2x tfc:wood/lumber/${wood}`, [`tfc:wood/planks/${wood}_slab`, '#tfc:saws'])).id(`kubejs:crafting/wood/${wood}_slab_undo_manual_only`)
    event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`3x tfc:wood/lumber/${wood}`,[`tfc:wood/planks/${wood}_stairs`, '#tfc:saws'])).id(`kubejs:crafting/wood/${wood}_stairs_undo_manual_only`)
    event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`2x tfc:wood/lumber/${wood}`,[`firmaciv:wood/${wood}_roofing`, '#tfc:saws'])).id(`kubejs:crafting/wood/uncraft_${wood}_roofing_manual_only`)
  
    event.remove({ id: `tfc:crafting/wood/${wood}_bladed_axle` })

    event.recipes.minecraft.crafting_shapeless(`tfc:wood/bladed_axle/${wood}`,[`tfc:wood/axle/${wood}`, 'tfc:metal/ingot/steel']).id(`kubejs:crafting/wood/${wood}_axle_manual_only`)
    event.recipes.create.deploying(`tfc:wood/bladed_axle/${wood}`, [`tfc:wood/axle/${wood}`, 'tfc:metal/ingot/steel'])

    event.remove({ id: `tfc:crafting/wood/${wood}_trapped_chest` })

    event.recipes.minecraft.crafting_shapeless(`tfc:wood/trapped_chest/${wood}`,[`tfc:wood/chest/${wood}`, 'minecraft:tripwire_hook']).id(`kubejs:crafting/wood/${wood}_trapped_chest_manual_only`)
    event.recipes.create.deploying(`tfc:wood/trapped_chest/${wood}`, [`tfc:wood/chest/${wood}`, 'minecraft:tripwire_hook'])
  
    event.remove({ id: `firmalife:crafting/wood/${wood}_stomping_barrel` })

    event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`firmalife:wood/stomping_barrel/${wood}`,[`tfc:wood/barrel/${wood}`, '#tfc:saws'])).id(`kubejs:crafting/stomping_barrel/${wood}_manual_only`)
    event.recipes.create.cutting(`firmalife:wood/stomping_barrel/${wood}`, `tfc:wood/barrel/${wood}`)

    event.remove({ id: `tfc:crafting/wood/${wood}_chest_minecart` })
    event.recipes.minecraft.crafting_shapeless(`tfc:wood/chest_minecart/${wood}`, ['minecraft:minecart', `tfc:wood/chest/${wood}`]).id(`kubejs:crafting/chest_minecart/${wood}_manual_only`)
    event.recipes.create.deploying(`tfc:wood/chest_minecart/${wood}`, ['minecraft:minecart', `tfc:wood/chest/${wood}`])
  
  })

  event.remove({ id: `tfc:crafting/wood/palm_mosaic_slab_undo` })
  event.remove({ id: `tfc:crafting/wood/palm_mosaic_stairs_undo` })
  event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`2x tfc:wood/lumber/palm`, [`tfc:wood/planks/palm_mosaic_slab`, '#tfc:saws'])).id(`kubejs:crafting/wood/palm_mosaic_slab_undo_manual_only`)
  event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`3x tfc:wood/lumber/palm`,[`tfc:wood/planks/palm_mosaic_stairs`, '#tfc:saws'])).id(`kubejs:crafting/wood/palm_mosaic_stairs_undo_manual_only`)
 
})