// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event  => {

    const metals = [
        'bismuth', 
        'bismuth_bronze', 
        'black_bronze',
        'bronze',
        'brass',
        'copper',
        'gold', 
        'rose_gold', 
        'silver',
        'tin',
        'zinc',
        'sterling_silver'
    ]

    const lamp_metals = [
        'bismuth_bronze', 
        'black_bronze',
        'bronze',
        'copper'

    ]

    const bars_metals = [
        'bismuth_bronze', 
        'black_bronze',
        'bronze',
        'brass',
        'copper',
    ]

    const chain_metals = [
        'bismuth_bronze', 
        'black_bronze',
        'bronze',
        'copper',
    ]

    const tools_metals = [
        'bismuth_bronze', 
        'black_bronze',
        'bronze',
        'copper',
    ]

    const wire_metals = [
        'copper',
        'gold',
    ]

    const magnifying_glass_metals = [
        'bismuth', 
        'brass',
        'gold', 
        'rose_gold', 
        'silver',
        'tin',
        'sterling_silver'
    ]

    const steels = [
        {name: 'wrought_iron', hasTools: true, modName: "tfc"},
        {name: 'steel', hasTools: true, modName: "tfc"},
        {name: 'black_steel', hasTools: true, modName: "tfc"},
        {name: 'red_steel', hasTools: true, modName: "tfc"},
        {name: 'blue_steel', hasTools: true, modName: "tfc"},
        {name: 'nickel', hasTools: false, modName: "tfc"},
        {name: 'stainless_steel', hasTools: false, modName: "firmalife"},
        {name: 'chromium', hasTools: false, modName: "firmalife"}
    ]

    const weak_steels = [
        'pig_iron',
        'high_carbon_steel',
        'weak_steel',
        'weak_red_steel',
        'weak_blue_steel',
        'high_carbon_black_steel',
        'high_carbon_red_steel',
        'high_carbon_blue_steel',
    ]

    let smelting = (input, output, output_amount, heat) =>
        {
            event.custom({
                type: 'create:mixing',
                ingredients: [
                    { item: input }
                ],
                results: [
                    { 
                        fluid: output, 
                        nbt: {},
                        amount : output_amount
                    }
                ],
                heatRequirement: heat
            })
        }

    metals.forEach((metal) => 
        {
            smelting(`tfc:metal/sheet/${metal}`, `tfc:metal/${metal}`, 200, 'heated')
            smelting(`tfc:metal/double_sheet/${metal}`, `tfc:metal/${metal}`, 400, 'heated')
            smelting(`tfc:metal/ingot/${metal}`, `tfc:metal/${metal}`, 100, 'heated')
            smelting(`tfc:metal/double_ingot/${metal}`, `tfc:metal/${metal}`, 200, 'heated')
            smelting(`tfchotornot:tongs/${metal}`, `tfc:metal/${metal}`, 200, 'heated')
            smelting(`tfchotornot:tong_part/${metal}`, `tfc:metal/${metal}`, 100, 'heated')
            smelting(`tfc:metal/rod/${metal}`, `tfc:metal/${metal}`, 50, 'heated')
        })

    lamp_metals.forEach((metal) => 
        {
            smelting(`tfc:metal/lamp/${metal}`, `tfc:metal/${metal}`, 100, 'heated')
            smelting(`tfc:metal/unfinished_lamp/${metal}`, `tfc:metal/${metal}`, 100, 'heated')

        })

        
    magnifying_glass_metals.forEach((metal) => 
        {
            smelting(`artisanal:metal/magnifying_glass_frame/${metal}`, `tfc:metal/${metal}`, 50, 'heated')
            smelting(`artisanal:metal/magnifying_glass/${metal}`, `tfc:metal/${metal}`, 50, 'heated')
        })

    bars_metals.forEach((metal) => 
        {
            if (metal == 'brass')
            {
                smelting(`create:${metal}_bars`, `tfc:metal/${metal}`, 25, 'heated')
            }
            else
            {
                smelting(`tfc:metal/bars/${metal}`, `tfc:metal/${metal}`, 25, 'heated')
            }
        })

    chain_metals.forEach((metal) => 
        {
            smelting(`tfc:metal/chain/${metal}`, `tfc:metal/${metal}`, 6, 'heated')
        })

    tools_metals.forEach((metal) => 
        {
            smelting(`rnr:metal/mattock_head/${metal}`, `tfc:metal/${metal}`, 100, 'heated')
            smelting(`tfc:metal/pickaxe_head/${metal}`, `tfc:metal/${metal}`, 100, 'heated')
            smelting(`tfc:metal/propick_head/${metal}`, `tfc:metal/${metal}`, 100, 'heated')
            smelting(`tfc:metal/axe_head/${metal}`, `tfc:metal/${metal}`, 100, 'heated')
            smelting(`tfc:metal/shovel_head/${metal}`, `tfc:metal/${metal}`, 100, 'heated')
            smelting(`tfc:metal/hoe_head/${metal}`, `tfc:metal/${metal}`, 100, 'heated')
            smelting(`tfc:metal/chisel_head/${metal}`, `tfc:metal/${metal}`, 100, 'heated')
            smelting(`tfc:metal/hammer_head/${metal}`, `tfc:metal/${metal}`, 100, 'heated')
            smelting(`tfc:metal/javelin_head/${metal}`, `tfc:metal/${metal}`, 100, 'heated')
            smelting(`tfc:metal/mace_head/${metal}`, `tfc:metal/${metal}`, 200, 'heated')
            smelting(`tfc:metal/sword_blade/${metal}`, `tfc:metal/${metal}`, 200, 'heated')
            smelting(`tfc:metal/fish_hook/${metal}`, `tfc:metal/${metal}`, 200, 'heated')
            smelting(`artisanal:metal/circle_blade/${metal}`, `tfc:metal/${metal}`, 50, 'heated')
            smelting(`tfc:metal/tuyere/${metal}`, `tfc:metal/${metal}`, 200, 'heated')
            smelting(`tfc:metal/trapdoor/${metal}`, `tfc:metal/${metal}`, 200, 'heated')

            smelting(`tfc:metal/unfinished_helmet/${metal}`, `tfc:metal/${metal}`, 400, 'heated')
            smelting(`tfc:metal/unfinished_chestplate/${metal}`, `tfc:metal/${metal}`, 400, 'heated')
            smelting(`tfc:metal/unfinished_greaves/${metal}`, `tfc:metal/${metal}`, 400, 'heated')
            smelting(`tfc:metal/unfinished_boots/${metal}`, `tfc:metal/${metal}`, 200, 'heated')
        })


    wire_metals.forEach((metal) => 
        {
            smelting(`createaddition:${metal}_wire`, `tfc:metal/${metal}`, 25, 'heated')
        })


    event.remove({ id: `woodencog:mixing/ingot_to_liquid_steel` })
    event.remove({ id: `woodencog:mixing/ingot_to_liquid_black_steel` })
    event.remove({ id: `woodencog:mixing/ingot_to_liquid_red_steel` })
    event.remove({ id: `woodencog:mixing/ingot_to_liquid_blue_steel` })

    smelting(`tfc:wrought_iron_grill`, `tfc:metal/cast_iron`, 400, 'superheated')

    steels.forEach((metal) =>
    {
        let cast = metal.name
        if (metal.name == 'wrought_iron')
            cast = 'cast_iron'

        smelting(`${metal.modName}:metal/ingot/${metal.name}`, `${metal.modName}:metal/${cast}`, 100, 'superheated')
        smelting(`${metal.modName}:metal/double_ingot/${metal.name}`, `${metal.modName}:metal/${cast}`, 200, 'superheated')
        smelting(`${metal.modName}:metal/sheet/${metal.name}`, `${metal.modName}:metal/${cast}`, 200, 'superheated')
        smelting(`${metal.modName}:metal/double_sheet/${metal.name}`, `${metal.modName}:metal/${cast}`, 400, 'superheated')
        smelting(`${metal.modName}:metal/sheet/${metal.name}`, `${metal.modName}:metal/${cast}`, 200, 'superheated')
        smelting(`${metal.modName}:metal/rod/${metal.name}`, `${metal.modName}:metal/${cast}`, 50, 'superheated')
        
        if (metal.hasTools){
            smelting(`tfc:metal/bars/${metal.name}`, `tfc:metal/${cast}`, 25, 'superheated')
            smelting(`tfc:metal/chain/${metal.name}`, `tfc:metal/${cast}`, 6, 'superheated')
            smelting(`tfc:metal/anvil/${metal.name}`, `tfc:metal/${cast}`, 1400, 'superheated')

            smelting(`rnr:metal/mattock_head/${metal.name}`, `tfc:metal/${cast}`, 100, 'superheated')
            smelting(`tfc:metal/pickaxe_head/${metal.name}`, `tfc:metal/${cast}`, 100, 'superheated')
            smelting(`tfc:metal/propick_head/${metal.name}`, `tfc:metal/${cast}`, 100, 'superheated')
            smelting(`tfc:metal/axe_head/${metal.name}`, `tfc:metal/${cast}`, 100, 'superheated')
            smelting(`tfc:metal/shovel_head/${metal.name}`, `tfc:metal/${cast}`, 100, 'superheated')
            smelting(`tfc:metal/hoe_head/${metal.name}`, `tfc:metal/${cast}`, 100, 'superheated')
            smelting(`tfc:metal/chisel_head/${metal.name}`, `tfc:metal/${cast}`, 100, 'superheated')
            smelting(`tfc:metal/hammer_head/${metal.name}`, `tfc:metal/${cast}`, 100, 'superheated')
            smelting(`tfc:metal/javelin_head/${metal.name}`, `tfc:metal/${cast}`, 100, 'superheated')
            smelting(`tfc:metal/mace_head/${metal.name}`, `tfc:metal/${cast}`, 200, 'superheated')
            smelting(`tfc:metal/sword_blade/${metal.name}`, `tfc:metal/${cast}`, 200, 'superheated')
            smelting(`tfc:metal/fish_hook/${metal.name}`, `tfc:metal/${cast}`, 200, 'superheated')
            smelting(`artisanal:metal/circle_blade/${metal.name}`, `tfc:metal/${cast}`, 50, 'superheated')
            smelting(`tfc:metal/tuyere/${metal.name}`, `tfc:metal/${cast}`, 200, 'superheated')
            smelting(`tfc:metal/trapdoor/${metal.name}`, `tfc:metal/${cast}`, 200, 'superheated')

            smelting(`tfc:metal/unfinished_helmet/${metal.name}`, `tfc:metal/${cast}`, 400, 'superheated')
            smelting(`tfc:metal/unfinished_chestplate/${metal.name}`, `tfc:metal/${cast}`, 400, 'superheated')
            smelting(`tfc:metal/unfinished_greaves/${metal.name}`, `tfc:metal/${cast}`, 400, 'superheated')
            smelting(`tfc:metal/unfinished_boots/${metal.name}`, `tfc:metal/${cast}`, 200, 'superheated')
        }
    })

    weak_steels.forEach((metal) =>{
        event.remove({ id: `woodencog:mixing/ingot_to_liquid_${metal}` })
        smelting(`tfc:metal/ingot/${metal}`, `tfc:metal/${metal}`, 100, 'superheated')
    })

})