// priority: 0

ServerEvents.tags('item', event => {

    event.add('kubejs:ore_gems', 'tfc:ore/amethyst')
    event.add('kubejs:ore_gems', 'tfc:ore/diamond')
    event.add('kubejs:ore_gems', 'tfc:ore/emerald')
    event.add('kubejs:ore_gems', 'tfc:ore/lapis_lazuli')
    event.add('kubejs:ore_gems', 'tfc:ore/opal')
    event.add('kubejs:ore_gems', 'tfc:ore/pyrite')
    event.add('kubejs:ore_gems', 'tfc:ore/ruby')
    event.add('kubejs:ore_gems', 'tfc:ore/sapphire')
    event.add('kubejs:ore_gems', 'tfc:ore/topaz')

    event.add('kubejs:gems', 'tfc:gem/amethyst')
    event.add('kubejs:gems', 'tfc:gem/diamond')
    event.add('kubejs:gems', 'tfc:gem/emerald')
    event.add('kubejs:gems', 'tfc:gem/lapis_lazuli')
    event.add('kubejs:gems', 'tfc:gem/opal')
    event.add('kubejs:gems', 'tfc:gem/pyrite')
    event.add('kubejs:gems', 'tfc:gem/ruby')
    event.add('kubejs:gems', 'tfc:gem/sapphire')
    event.add('kubejs:gems', 'tfc:gem/topaz')
})


ServerEvents.recipes(event  => {

    let gems = ['amethyst', 'diamond', 'emerald', 'lapis_lazuli', 'opal', 'pyrite', 'ruby', 'sapphire', 'topaz']


    gems.forEach((gem) => {

        event.remove({ output: `tfc:gem/${gem}` })
        event.recipes.create.sandpaper_polishing(`tfc:gem/${gem}`, `tfc:ore/${gem}`).id(`kubejs:${gem}_polish`)

    })

    // {
    //     type:"createaddition:charging",
    //     input: {
    //       item: "kubejs:ungalvanized_engine_piston",
    //       count: 1
    //     },
    //     result: {
    //       item: "createdieselgenerators:engine_piston",
    //       count: 1
    //     },
    //     energy: 4000,
    //     maxChargeRate: 100
    // }

    event.custom(
        {
            type: "create:sequenced_assembly",
            ingredient: {
              item: "tfc:wood/planks/acacia_slab"
            },
            loops: 1,
            results: [
              {
                item: "create:track"
              }
            ],
            sequence: [
                {
                    type: "createaddition:charging",
                    ingredients: [{
                        item: "create:incomplete_track"
                    }],
                    results:[{
                        item: "create:incomplete_track"
                    }],
                    energy: 4000,
                    maxChargeRate: 100
                },
                {
                    type: "create:pressing",
                    ingredients: [
                    {
                        item: "create:incomplete_track"
                    }
                    ],
                    results: [
                    {
                        item: "create:incomplete_track"
                    }
                    ]
                }
            ],
            transitionalItem: {
              item: "create:incomplete_track"
            }
          }
    ).id('kubejs:test_1')

})