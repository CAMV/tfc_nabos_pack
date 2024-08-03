// priority: 0

ServerEvents.recipes(event  => {


    let woods = [
        ['tfc', 'acacia'],
        ['tfc', 'ash'],
        ['tfc', 'aspen'],
        ['tfc', 'birch'],
        ['tfc', 'blackwood'],
        ['tfc', 'chestnut'],
        ['tfc', 'douglas_fir'],
        ['tfc', 'hickory'],
        ['tfc', 'kapok'],
        ['tfc', 'mangrove'],
        ['tfc', 'maple'],
        ['tfc', 'oak'],
        ['tfc', 'palm'],
        ['tfc', 'pine'],
        ['tfc', 'rosewood'],
        ['tfc', 'sequoia'],
        ['tfc', 'spruce'],
        ['tfc', 'sycamore'],
        ['tfc', 'white_cedar'],
        ['tfc', 'willow'],
    
        ['afc', 'baobab'],
        ['afc', 'eucalyptus'],
        ['afc', 'mahogany'],
        ['afc', 'hevea'],
        ['afc', 'tualang'],
        ['afc', 'teak'],
        ['afc', 'cypress'],
        ['afc', 'fig'],
        ['afc', 'ironwood'],
        ['afc', 'ipe']
      ]
    

    event.remove({ output: `firmalife:barrel_stave` })

    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `firmalife:barrel_stave`,
            [`2x firmalife:treated_lumber`, `tfc:metal/sheet/wrought_iron`, '#tfc:hammers'])
        ).id(`kubejs:barrel_stave_manual_only`)
    
    woods.forEach((wood) => {

        let w = wood[1]
        let m = wood[0]
    
        event.remove({ id: `${m}:crafting/wood/${w}_barrel_press`})
    
        event.shaped('tfcambiental:insulated_leather_hat', [
            ' A ', 
            ' B ', 
            'CDC'  
          ], {
            A: 'tfc:brass_mechanisms', 
            B: 'tfc:metal/sheet/wrought_iron',
            C: 'tfc:metal/rod/wrought_iron',
            D: `firmalife:wood/stomping_barrel/${w}`,
        })
        
    })


})