
ServerEvents.recipes(event  => {
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

})