
ServerEvents.recipes(event  => {

  event.remove({ id: `afc:vat/rubber` })
  event.remove({ id: `afc:pot/rubber` })

  event.remove({ id: `afc:crafting/0_maple_sugar_bucket` })
  event.remove({ id: `afc:crafting/1_maple_sugar` })
  event.remove({ id: `afc:crafting/0_birch_sugar_bucket` })
  event.remove({ id: `afc:crafting/1_birch_sugar` })

  event.remove({ id: `afc:vat/maple_concentrate` })
  event.remove({ id: `afc:vat/birch_concentrate` })

  event.remove({ id: `afc:vat/maple_syrup` })
  event.remove({ id: `afc:vat/maple_syrup_half_batch` })
  event.remove({ id: `afc:vat/birch_syrup` })
  event.remove({ id: `afc:vat/birch_syrup_half_batch` })
})