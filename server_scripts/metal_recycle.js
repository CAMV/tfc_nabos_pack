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
        'wrought_iron',
        'steel',
        'black_steel',
        'red_steel',
        'blue_steel',
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

    let smelting = (input, output, output_amount) =>
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
                heatRequirement: 'heated'
            })
        }

    let superSmelting = (input, output, output_amount) =>
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
                heatRequirement: 'superheated'
            })
        }

    metals.forEach((metal) => 
        {
            smelting(`tfc:metal/sheet/${metal}`, `tfc:metal/${metal}`, 200)
            smelting(`tfc:metal/double_sheet/${metal}`, `tfc:metal/${metal}`, 400)
            smelting(`tfc:metal/ingot/${metal}`, `tfc:metal/${metal}`, 100)
            smelting(`tfc:metal/double_ingot/${metal}`, `tfc:metal/${metal}`, 200)
            smelting(`tfchotornot:tongs/${metal}`, `tfc:metal/${metal}`, 200)
            smelting(`tfchotornot:tong_part/${metal}`, `tfc:metal/${metal}`, 100)
            smelting(`tfc:metal/rod/${metal}`, `tfc:metal/${metal}`, 50)
        })

    lamp_metals.forEach((metal) => 
        {
            smelting(`tfc:metal/lamp/${metal}`, `tfc:metal/${metal}`, 100)
            smelting(`tfc:metal/unfinished_lamp/${metal}`, `tfc:metal/${metal}`, 100)

        })

        
    magnifying_glass_metals.forEach((metal) => 
        {
            smelting(`artisanal:metal/magnifying_glass_frame/${metal}`, `tfc:metal/${metal}`, 50)
            smelting(`artisanal:metal/magnifying_glass/${metal}`, `tfc:metal/${metal}`, 50)
        })

    bars_metals.forEach((metal) => 
        {
            if (metal == 'brass')
            {
                smelting(`create:${metal}_bars`, `tfc:metal/${metal}`, 25)
            }
            else
            {
                smelting(`tfc:metal/bars/${metal}`, `tfc:metal/${metal}`, 25)
            }
        })

    chain_metals.forEach((metal) => 
        {
            smelting(`tfc:metal/chain/${metal}`, `tfc:metal/${metal}`, 6)
        })

    tools_metals.forEach((metal) => 
        {
            smelting(`rnr:metal/mattock_head/${metal}`, `tfc:metal/${metal}`, 100)
            smelting(`tfc:metal/pickaxe_head/${metal}`, `tfc:metal/${metal}`, 100)
            smelting(`tfc:metal/propick_head/${metal}`, `tfc:metal/${metal}`, 100)
            smelting(`tfc:metal/axe_head/${metal}`, `tfc:metal/${metal}`, 100)
            smelting(`tfc:metal/shovel_head/${metal}`, `tfc:metal/${metal}`, 100)
            smelting(`tfc:metal/hoe_head/${metal}`, `tfc:metal/${metal}`, 100)
            smelting(`tfc:metal/chisel_head/${metal}`, `tfc:metal/${metal}`, 100)
            smelting(`tfc:metal/hammer_head/${metal}`, `tfc:metal/${metal}`, 100)
            smelting(`tfc:metal/javelin_head/${metal}`, `tfc:metal/${metal}`, 100)
            smelting(`tfc:metal/mace_head/${metal}`, `tfc:metal/${metal}`, 200)
            smelting(`tfc:metal/sword_blade/${metal}`, `tfc:metal/${metal}`, 200)
            smelting(`tfc:metal/fish_hook/${metal}`, `tfc:metal/${metal}`, 200)
            smelting(`artisanal:metal/circle_blade/${metal}`, `tfc:metal/${metal}`, 50)
            smelting(`tfc:metal/tuyere/${metal}`, `tfc:metal/${metal}`, 200)
            smelting(`tfc:metal/trapdoor/${metal}`, `tfc:metal/${metal}`, 200)

            smelting(`tfc:metal/unfinished_helmet/${metal}`, `tfc:metal/${metal}`, 400)
            smelting(`tfc:metal/unfinished_chestplate/${metal}`, `tfc:metal/${metal}`, 400)
            smelting(`tfc:metal/unfinished_greaves/${metal}`, `tfc:metal/${metal}`, 400)
            smelting(`tfc:metal/unfinished_boots/${metal}`, `tfc:metal/${metal}`, 200)
        })


    wire_metals.forEach((metal) => 
        {
            smelting(`createaddition:${metal}_wire`, `tfc:metal/${metal}`, 25)
        })


    event.remove({ id: `woodencog:mixing/ingot_to_liquid_steel` })
    event.remove({ id: `woodencog:mixing/ingot_to_liquid_black_steel` })
    event.remove({ id: `woodencog:mixing/ingot_to_liquid_red_steel` })
    event.remove({ id: `woodencog:mixing/ingot_to_liquid_blue_steel` })

    superSmelting(`tfc:wrought_iron_grill`, `tfc:metal/cast_iron`, 400)

    steels.forEach((metal) =>
    {
        let cast = metal
        if (metal == 'wrought_iron')
            cast = 'cast_iron'

        superSmelting(`tfc:metal/ingot/${metal}`, `tfc:metal/${cast}`, 100)
        superSmelting(`tfc:metal/double_ingot/${metal}`, `tfc:metal/${cast}`, 200)
        superSmelting(`tfc:metal/sheet/${metal}`, `tfc:metal/${cast}`, 200)
        superSmelting(`tfc:metal/double_sheet/${metal}`, `tfc:metal/${cast}`, 400)
        superSmelting(`tfc:metal/sheet/${metal}`, `tfc:metal/${cast}`, 200)
        superSmelting(`tfc:metal/bars/${metal}`, `tfc:metal/${cast}`, 25)
        superSmelting(`tfc:metal/chain/${metal}`, `tfc:metal/${cast}`, 6)
        superSmelting(`tfc:metal/anvil/${metal}`, `tfc:metal/${cast}`, 1400)

        superSmelting(`rnr:metal/mattock_head/${metal}`, `tfc:metal/${cast}`, 100)
        superSmelting(`tfc:metal/pickaxe_head/${metal}`, `tfc:metal/${cast}`, 100)
        superSmelting(`tfc:metal/propick_head/${metal}`, `tfc:metal/${cast}`, 100)
        superSmelting(`tfc:metal/axe_head/${metal}`, `tfc:metal/${cast}`, 100)
        superSmelting(`tfc:metal/shovel_head/${metal}`, `tfc:metal/${cast}`, 100)
        superSmelting(`tfc:metal/hoe_head/${metal}`, `tfc:metal/${cast}`, 100)
        superSmelting(`tfc:metal/chisel_head/${metal}`, `tfc:metal/${cast}`, 100)
        superSmelting(`tfc:metal/hammer_head/${metal}`, `tfc:metal/${cast}`, 100)
        superSmelting(`tfc:metal/javelin_head/${metal}`, `tfc:metal/${cast}`, 100)
        superSmelting(`tfc:metal/mace_head/${metal}`, `tfc:metal/${cast}`, 200)
        superSmelting(`tfc:metal/sword_blade/${metal}`, `tfc:metal/${cast}`, 200)
        superSmelting(`tfc:metal/fish_hook/${metal}`, `tfc:metal/${cast}`, 200)
        superSmelting(`artisanal:metal/circle_blade/${metal}`, `tfc:metal/${cast}`, 50)
        superSmelting(`tfc:metal/tuyere/${metal}`, `tfc:metal/${cast}`, 200)
        superSmelting(`tfc:metal/trapdoor/${metal}`, `tfc:metal/${cast}`, 200)

        superSmelting(`tfc:metal/unfinished_helmet/${metal}`, `tfc:metal/${cast}`, 400)
        superSmelting(`tfc:metal/unfinished_chestplate/${metal}`, `tfc:metal/${cast}`, 400)
        superSmelting(`tfc:metal/unfinished_greaves/${metal}`, `tfc:metal/${cast}`, 400)
        superSmelting(`tfc:metal/unfinished_boots/${metal}`, `tfc:metal/${cast}`, 200)
    })

    weak_steels.forEach((metal) =>{
        event.remove({ id: `woodencog:mixing/ingot_to_liquid_${metal}` })
        superSmelting(`tfc:metal/ingot/${metal}`, `tfc:metal/${metal}`, 100)
    })

    let firmaSteels = [
        'stainless_steel',
        'chromium'
    ]

    firmaSteels.forEach((metal) =>
        {
            let cast = metal
    
            superSmelting(`firmalife:metal/ingot/${metal}`, `firmalife:metal/${cast}`, 100)
            superSmelting(`firmalife:metal/double_ingot/${metal}`, `firmalife:metal/${cast}`, 200)
            superSmelting(`firmalife:metal/sheet/${metal}`, `firmalife:metal/${cast}`, 200)
            superSmelting(`firmalife:metal/double_sheet/${metal}`, `firmalife:metal/${cast}`, 400)
            superSmelting(`firmalife:metal/sheet/${metal}`, `firmalife:metal/${cast}`, 200)
            superSmelting(`firmalife:metal/rod/${metal}`, `firmalife:metal/${cast}`, 50)
    })

})