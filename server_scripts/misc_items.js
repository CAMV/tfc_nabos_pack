ServerEvents.recipes(event  => {

    event.remove({ output: `tfc:sandpaper` })
    event.remove({ output: `create:sand_paper` })
    event.remove({ output: `create:red_sand_paper` })
    event.remove({ output: `create:diamond_grit_sandpaper` })

    event.shapeless('create:sand_paper', ['minecraft:paper', '#forge:sand', '#tfc:gem_powders', 'tfc:glue', 'tfc:powder/flux']).id('kubejs:sand_paper_manual_only')
        

})