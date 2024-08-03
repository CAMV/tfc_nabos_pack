
ServerEvents.recipes(event  => {
  // let grains = [
  //   'barley',
  //   'maize',
  //   'oat',
  //   'rye',
  //   'rice',
  //   'wheat',
  // ]

  // grains.forEach((g) => {
  //   event.remove({ id: `tfc:crafting/${g}_cutting` })

  //   event.custom({
  //     type:"tfc:extra_products_shapeless_crafting",
  //     extra_products:[{
  //       item: "tfc:straw"
  //     }],
  //     recipe:{
  //       type: "tfc:damage_inputs_shapeless_crafting",
  //       recipe: {
  //         type: "tfc:advanced_shapeless_crafting",
  //         ingredients:[{
  //           type: "tfc:not_rotten",
  //           ingredient:{
  //             item: `tfc:food/${g}`
  //           }},{
  //             tag:"tfc:knives"
  //           }],
  //           primary_ingredient:{
  //             item: `tfc:food/${g}`
  //           },
  //           result:{
  //             stack:{
  //               item: `tfc:food/${g}_grain`
  //             },
  //             modifiers:[
  //               "tfc:copy_food"]
  //           }
  //       }
  //     }
  //   }).id(`tfc:crafting/${g}_cutting_manual_only`)
  // })

})