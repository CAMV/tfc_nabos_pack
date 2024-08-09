// priority: 0

ServerEvents.recipes(event  => {

    let gems = [
        'amethyst', 
        'diamond', 
        'emerald', 
        'lapis_lazuli', 
        'opal', 
        'pyrite', 
        'ruby', 
        'sapphire', 
        'topaz'
    ]

    gems.forEach((gem) => {

        event.remove({ output: `tfc:gem/${gem}` })
        event.recipes.create.sandpaper_polishing(`tfc:gem/${gem}`, `tfc:ore/${gem}`).id(`kubejs:${gem}_polish`)

    })

})