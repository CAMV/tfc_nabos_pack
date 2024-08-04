
ServerEvents.recipes(event  => {

  event.remove({id: 'rnr:crafting/base_course'})
  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless(
        '6x rnr:crushed_base_course',
        ['#forge:gravel', '#rnr:loose_rock_items', '#tfc:hammers'])
    ).id(`kubejs:crushed_base_course_manual_only`)

  event.recipes.create.mixing('6x rnr:crushed_base_course', ['#forge:gravel', '#rnr:loose_rock_items'])


})