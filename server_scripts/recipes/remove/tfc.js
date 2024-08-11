
ServerEvents.recipes(event  => {

  event.remove({id: 'tfc:crafting/fire_clay'})
  event.remove({id: 'firmalife:pot/beet_sugar_freshwater'})
  event.remove({id: 'firmalife:pot/beet_sugar'})
  event.remove({id: 'firmalife:vat/beet_sugar'})

  event.remove({id: 'tfc_knapsacks:backpack_recipe_2'})


})