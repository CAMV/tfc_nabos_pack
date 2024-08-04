
ServerEvents.recipes(event  => {

    event.custom({
        type: "create:mixing",
        heatRequirement: "heated",
        ingredients: [
            {
              fluidTag: "afc:latex",
              amount: 1000
            },
            {
              item: "tfc:powder/sulfur",
            },
        ],
        results: [
            {
                item: 'afc:rubber_bar',
            }
        ],
      })

      event.remove({ output: `afc:maple_sugar` })

      event.custom({
        type: "createdieselgenerators:basin_fermenting",
        heatRequirement: "heated",
        ingredients: [
          {
            fluid: "afc:maple_syrup",
            amount: 200
          },
        ],
        processingTime: 2000,
        results: [
          {
            item: "afc:maple_sugar",
          },
        ]
      })

      event.custom({
        type: "artisanal:scalable_pot",
        ingredients: [],
        fluid_ingredient: {
          ingredient: "afc:maple_syrup",
          amount: 200
        },
        duration: 2000,
        temperature: 107,
        item_output: [
          {
            item: "afc:maple_sugar"
          }
        ]
      })

      event.custom({
        type: "createdieselgenerators:basin_fermenting",
        heatRequirement: "heated",
        ingredients: [
          {
            fluid: "afc:maple_sap",
            amount: 1000
          }
        ],
        processingTime: 2000,
        results: [
          {
            fluid: "afc:maple_sap_concentrate",
            amount: 100
          },
        ]
      })

      event.custom({
        type: "createdieselgenerators:basin_fermenting",
        heatRequirement: "heated",
        ingredients: [
          {
            fluid: "afc:maple_sap_concentrate",
            amount: 1000
          }
        ],
        processingTime: 2000,
        results: [
          {
            fluid: "afc:maple_syrup",
            amount: 200
          },
        ]
      })

      event.remove({ output: `afc:birch_sugar` })

      event.custom({
        type: "createdieselgenerators:basin_fermenting",
        heatRequirement: "heated",
        ingredients: [
          {
            fluid: "afc:birch_syrup",
            amount: 200
          },
        ],
        processingTime: 2000,
        results: [
          {
            item: "afc:birch_sugar",
          },
        ]
      })

      event.custom({
        type: "artisanal:scalable_pot",
        ingredients: [],
        fluid_ingredient: {
          ingredient: "afc:birch_syrup",
          amount: 200
        },
        duration: 2000,
        temperature: 107,
        item_output: [
          {
            item: "afc:birch_sugar"
          }
        ]
      })

      event.custom({
        type: "createdieselgenerators:basin_fermenting",
        heatRequirement: "heated",
        ingredients: [
          {
            fluid: "afc:birch_sap",
            amount: 1000
          }
        ],
        processingTime: 2000,
        results: [
          {
            fluid: "afc:birch_sap_concentrate",
            amount: 100
          },
        ]
      })

      event.custom({
        type: "createdieselgenerators:basin_fermenting",
        heatRequirement: "heated",
        ingredients: [
          {
            fluid: "afc:birch_sap_concentrate",
            amount: 1000
          }
        ],
        processingTime: 2000,
        results: [
          {
            fluid: "afc:birch_syrup",
            amount: 200
          },
        ]
      })

})