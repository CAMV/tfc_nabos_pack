// priority: 0

ServerEvents.recipes(event  => {
    
    let rolling = (input, output, output_amount) =>
        {
            event.custom({
                type: 'createaddition:rolling',
                input : {
                    item: input
                },
                result: {
                    item : output,
                    count: output_amount
                }
            })
        }

    event.remove({ id: 'minecraft:leather' })
    event.remove({ id: 'tfc:crafting/small_sheepskin' })
    event.remove({ id: 'tfc:crafting/medium_sheepskin' })
    event.remove({ id: 'tfc:crafting/large_sheepskin' })

    event.remove({ id: 'tfc:crafting/small_treated_hide' })
    event.remove({ id: 'tfc:crafting/medium_treated_hide' })
    event.remove({ id: 'tfc:crafting/large_treated_hide' })

    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `tfc:treated_hide`,
            ['tfc:small_scraped_hide', 'tfc:groundcover/pumice', '#tfc:hammers'])
        ).id(`kubejs:treated_hide_small_manual_only`)

    event.recipes.create.deploying(
        `tfc:treated_hide`, 
        [`tfc:small_scraped_hide`, 'tfc:groundcover/pumice'])

    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `2x tfc:treated_hide`,
            ['tfc:medium_scraped_hide', 'tfc:groundcover/pumice', '#tfc:hammers'])
        ).id(`kubejs:treated_medium_small_manual_only`)

    event.recipes.create.deploying(
        `2x tfc:treated_hide`, 
        [`tfc:medium_scraped_hide`, 'tfc:groundcover/pumice'])

    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `3x tfc:treated_hide`,
            ['tfc:large_scraped_hide', 'tfc:groundcover/pumice', '#tfc:hammers'])
        ).id(`kubejs:treated_hide_large_manual_only`)

    event.recipes.create.deploying(
        `3x tfc:treated_hide`, 
        [`tfc:large_scraped_hide`, 'tfc:groundcover/pumice'])

    rolling('tfc:small_soaked_hide', 'tfc:small_scraped_hide', 1)
    rolling('tfc:medium_soaked_hide', 'tfc:medium_scraped_hide', 1)
    rolling('tfc:large_soaked_hide', 'tfc:large_scraped_hide', 1)

    event.recipes.create.deploying(
        ['tfc:small_raw_hide', 'tfc:wool'], 
        [`tfc:small_sheepskin_hide`, '#tfc:knives'])

    event.recipes.create.deploying(
        ['tfc:medium_raw_hide', '2x tfc:wool'], 
        [`tfc:medium_sheepskin_hide`, '#tfc:knives'])

    event.recipes.create.deploying(
        ['tfc:large_raw_hide', '3x tfc:wool'], 
        [`tfc:large_sheepskin_hide`, '#tfc:knives'])

    event.remove({ id: 'tfc:crafting/wool_yarn' })

    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `8x tfc:wool_yarn`,
            ['tfc:wool', 'tfc:spindle'])
        ).id(`kubejs:wool_yarn_manual_only`)

    rolling('tfc:wool', 'tfc:wool_yarn', 8)

    event.remove({ id: 'firmalife:crafting/pineapple_yarn' })

    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `8x firmalife:pineapple_yarn`,
            ['firmalife:pineapple_fiber', 'tfc:spindle'])
        ).id(`kubejs:pineapple_yarn_manual_only`)

    rolling('firmalife:pineapple_fiber', 'firmalife:pineapple_yarn', 8)

    event.remove({ id: 'firmalife:crafting/pineapple_fiber' })

    event.custom({
        type : "tfc:damage_inputs_shapeless_crafting",
        recipe: {
          type: "minecraft:crafting_shapeless",
          ingredients: [
            {
              type: "tfc:not_rotten",
              ingredient: {
                type: "tfc:has_trait",
                trait: "firmalife:dried",
                ingredient: {
                  item: "firmalife:food/pineapple"
                }
              }
            },
            {
              tag: "tfc:knives"
            }
          ],
          result: {
            item: "firmalife:pineapple_fiber"
          }
        }
    }).id(`kubejs:pineapple_fiber_manual_only`)

    event.custom({
        type: "create:cutting",
        ingredients: [
            {
                type: "tfc:not_rotten",
                ingredient: {
                  type: "tfc:has_trait",
                  trait: "firmalife:dried",
                  ingredient: {
                    item: "firmalife:food/pineapple"
                  }
                }
              }
        ],
        processingTime: 50,
        results: [
          {
            item: "firmalife:pineapple_fiber"
          }
        ]
    })

})