
ServerEvents.recipes(event  => {


    event.remove({ output: `musketmod:musket` })
    event.remove({ output: `musketmod:musket_with_bayonet` })
    event.remove({ output: `musketmod:pistol` })
    event.remove({ output: `musketmod:cartridge` })


    event.shaped(`8x musketmod:cartridge`, [
        ' A ', 
        'CBC', 
        '   '  
      ], {
        A: 'tfc:metal/ingot/cast_iron', 
        B: 'minecraft:gunpowder',
        C: `minecraft:paper`, 
      })
 
      event.shaped(`musketmod:musket_with_bayonet`, [
        'AB ', 
        '   ', 
        '   '  
      ], {
        A: 'tfc:metal/sword_blade/wrought_iron', 
        B: 'musketmod:musket',

      })

      event.shaped(`musketmod:musket`, [
        'A  ', 
        ' AB', 
        ' DC'  
      ], {
        A: 'tfc:metal/sheet/wrought_iron', 
        B: 'minecraft:flint_and_steel',
        C: `firmalife:treated_lumber`, 
        D: 'tfc:metal/ingot/wrought_iron', 

      })


      event.shaped(`musketmod:pistol`, [
        'AB ', 
        'DC ', 
        '   '  
      ], {
        A: 'tfc:metal/sheet/wrought_iron', 
        B: 'minecraft:flint_and_steel',
        C: `firmalife:treated_lumber`,
        D: 'tfc:metal/ingot/wrought_iron', 

      })

})