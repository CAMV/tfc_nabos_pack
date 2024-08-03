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

    metals.forEach((metal) => 
        {
            smelting(`tfc:metal/block/${metal}` , `tfc:metal/${metal}`, 100)
            smelting(`tfc:metal/block/${metal}_slab` , `tfc:metal/${metal}`, 50)
            smelting(`tfc:metal/block/${metal}_stairs` , `tfc:metal/${metal}`, 75)
        })
})