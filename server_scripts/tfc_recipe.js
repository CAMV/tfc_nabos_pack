
ServerEvents.recipes(event  => {
  
  let hammer_flux = (block_input, item_out, out_count) => {
    event.custom({
      type: "lychee:block_interacting",
      block_in: {
        blocks : [block_input],
        state: {
            count: out_count
        }
      },
      item_in: {
        tag: "tfc:hammer"
      },
      post: [
        {
            type: "damage_item"
        },
        {
            type: "place",
            block: "air"
        },
        {
            type: "drop_item",
            item: item_out,
            count: out_count * 2
        }
      ],
    })
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

})