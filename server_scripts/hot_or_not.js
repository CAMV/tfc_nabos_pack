// priority: 0

ServerEvents.recipes(event  => {

    const tong_metals = [
        'bismuth', 
        'bismuth_bronze', 
        'black_bronze',
        'bronze',
        'brass',
        'copper',
        'gold', 
        'nickel',
        'rose_gold', 
        'silver',
        'tin',
        'zinc',
        'sterling_silver',
        'wrought_iron',
        'steel',
        'black_steel',
        'red_steel',
        'blue_steel',
    ]

    tong_metals.forEach((m) => {
        event.remove({ id: `tfchotornot:crafting/tongs/${m}` })

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.recipes.minecraft.crafting_shapeless(
                `tfchotornot:tongs/${m}`,
                [`2x tfchotornot:tong_part/${m}`, `#forge:rods`, '#tfc:hammers'])
            ).id(`kubejs:tongs/${m}_manual_only`)
    })

    event.remove({ output: `tfchotornot:tongs/wood` })

    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `tfchotornot:tongs/wood`,
            [`2x #tfc:firpit_sticks`, '#tfc:knives'])
        ).id(`kubejs:tongs/wood_manual_only`)
    

})