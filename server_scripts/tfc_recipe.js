
ServerEvents.recipes(event  => {
  
  let knife_translation = (output, input, id) => {
    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            output,
            [input, '#tfc:knives'])
        ).id(`kubejs:${id}_manual_only`)
  }

  let saw_translation = (output, input, id) => {
    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            output,
            [input, '#tfc:chisels'])
        ).id(`kubejs:${id}_manual_only`)
    event.recipes.create.cutting(output, input)
}
  
  let lamp_metals = [
    'bismuth_bronze',
    'black_bronze',
    'bronze',
    'copper',
    'wrought_iron',
    'steel',
    'black_steel',
    'blue_steel',
    'red_steel',
  ]

  lamp_metals.forEach((m) => {
    event.remove({ id: `tfc:crafting/metal/lamp/${m}` })

    event.recipes.tfc.damage_inputs_shapeless_crafting(
      event.recipes.minecraft.crafting_shapeless(
          `tfc:metal/lamp/${m}`,
          [`tfc:metal/unfinished_lamp/${m}`, 'tfc:lamp_glass'])
      ).id(`kubejs:crafting/metal/lamp/${m}_manual_only`)
  })

  event.remove({ id: `tfc:crafting/alabaster_brick` })
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless(
        `tfc:alabaster_brick`,
        [`tfc:ore/gypsum`, '#tfc:chisels'])
    ).id(`kubejs:alabaster_brick_manual_only`)
  event.recipes.create.deploying('tfc:alabaster_brick', [`tfc:ore/gypsum`, '#tfc:chisels'])

  event.remove({ id: `tfc:crafting/vanilla/crafting_table` })
  saw_translation('minecraft:crafting_table', '#tfc:workbenches', 'vanilla_workbench')

  event.remove({ id: `tfc:crafting/vanilla/lectern` })
  saw_translation('minecraft:lectern', '#tfc:lecterns', 'vanilla_lectern')

  let fluxstones = [
    'limestone', 
    'dolomite',
    'chalk',
    'marble'
  ]

  event.remove({ id: `tfc:crafting/flux` })
  // hammer_flux('#tfc:fluxstone', 'tfc:powder/flux', 1)
  // hammer_flux('#tfc:fluxstone', 'tfc:powder/flux', 2)
  // hammer_flux('#tfc:fluxstone', 'tfc:powder/flux', 3)

  event.remove({ id: `tfc:crafting/bone_needle` })
  event.recipes.tfc.damage_inputs_shapeless_crafting(
      event.recipes.minecraft.crafting_shapeless(
          'tfc:bone_needle',
          ['minecraft:bone', '#tfc:knives'])
      ).id(`kubejs:bone_needle_manual_only`)

  event.remove({ id: `tfc:crafting/papyrus_strips` })
  event.recipes.tfc.damage_inputs_shapeless_crafting(
      event.recipes.minecraft.crafting_shapeless(
          '4x tfc:papyrus_strip',
          ['tfc:papyrus', '#tfc:knives'])
      ).id(`kubejs:papyrus_strip_manual_only`)
    event.recipes.create.cutting('4x tfc:papyrus_strip', 'tfc:papyrus').processingTime(300)

  event.remove({ id: `tfc:crafting/wood/stick_from_twigs` })
  event.recipes.tfc.damage_inputs_shapeless_crafting(
      event.recipes.minecraft.crafting_shapeless(
          'minecraft:stick',
          ['#tfc:firepit_sticks','#tfc:knives'])
      ).id(`kubejs:stick_from_twigs_manual_only`)

      event.recipes.create.milling('tfc:charcoal', 'tfc:powder/charcoal').id('kubejs:milling/powder/charcoal')


})