
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

  woods.forEach((wood) => {

    let w = wood[1]
    let m = wood[0]

    event.remove({ id: `rnr:crafting/shingle/${w}`})

    event.custom({
        type: "lychee:block_interacting",
        post: [
        {
            type: "damage_item"
        },
        {
          type: "place",
          contextual: [
          {
              "type": "chance",
              "chance": 0.8
          }
          ],
          block: "air"
      },
        {
            type: "drop_item",
            contextual: [
            {
                type: "chance",
                chance: 0.8
            }
            ],
            item: `rnr:wood/shingle/${w}`,
            count: 1
        },
        {
            type: "drop_item",
            contextual: [
            {
                type: "chance",
                chance: 0.8
            }
            ],
            item: `rnr:wood/shingle/${w}`,
            count: 1
        },
        {
          type: "drop_item",
          contextual: [
          {
              type: "chance",
              chance: 0.8
          }
          ],
          item: `rnr:wood/shingle/${w}`,
          count: 1
      },
      {
          type: "drop_item",
          contextual: [
          {
              type: "chance",
              chance: 0.8
          }
          ],
          item: `rnr:wood/shingle/${w}`,
          count: 1
      },
        ],
          item_in: {
          tag: "tfc:chisels"
        },
          block_in: `${m}:wood/log/${w}`
    })

    event.recipes.create.deploying(`4x rnr:wood/shingle/${w}`, [`${m}:wood/log/${w}`, '#tfc:chisels'])

  })
})