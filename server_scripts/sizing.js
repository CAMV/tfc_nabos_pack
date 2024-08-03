TFCEvents.data(event => {


  const all_ores = [
    'bismuthinite', 
    'cassiterite', 
    'chromite',
    'cinnabar',
    'copper',
    'cryolite',
    'garnierite',
    'gold',
    'graphite',
    'hematite',
    'limonite',
    'magnetite',
    'malachite',
    'silver',
    'sphalerite',
    'sulfur',
    'tetrahedrite',
  ]

  const all_minerals = [
      'cinnabar',
      'cryolite',
      'graphite',
      'sulfur',
  ]

  all_ores.forEach((o) => {
    let mod = 'tfc'
    if (o == 'chromite')
      mod - 'firmalife'

    event.itemSize(`${mod}:ore/small_${o}`, 'small', 'medium')
    event.itemSize(`${mod}:ore/poor_${o}`, 'normal', 'medium')
    event.itemSize(`${mod}:ore/normal_${o}`, 'large', 'heavy')
    event.itemSize(`${mod}:ore/rich_${o}`, 'very_large', 'very_heavy')

    event.itemSize(`tfcorewashing:rocky_chunks_${o}`, 'large', 'medium')
    event.itemSize(`tfcorewashing:chunks_${o}`, 'large', 'medium')
    event.itemSize(`tfcorewashing:dirty_dust_${o}`, 'normal', 'medium')
    event.itemSize(`tfc:powder/${o}`, 'normal', 'medium')
    event.itemSize(`tfcorewashing:dirty_pile_${o}`, 'small', 'light')

    event.itemSize(`tfcorewashing:briquet_${o}`, 'normal', 'medium')
    event.itemSize(`tfcorewashing:pellet_${o}`, 'small', 'light')
  })

  event.itemSize(`minecraft:redstone`, 'normal', 'medium')
  event.itemSize(`minecraft:redstone_block`, 'large', 'heavy')


  all_minerals.forEach((o) => {
    let mod = 'tfc'

    event.itemSize(`${mod}:ore/small_${o}`, 'small', 'medium')
    event.itemSize(`${mod}:ore/poor_${o}`, 'normal', 'medium')
    event.itemSize(`${mod}:ore/normal_${o}`, 'large', 'heavy')
    event.itemSize(`${mod}:ore/rich_${o}`, 'very_large', 'very_heavy')

    event.itemSize(`tfcorewashing:rocky_chunks_${o}`, 'large', 'medium')
    event.itemSize(`tfcorewashing:chunks_${o}`, 'large', 'medium')
    event.itemSize(`tfcorewashing:dirty_dust_${o}`, 'normal', 'medium')
    if (o == 'graphite' || o == "sulfur")
      event.itemSize(`tfc:powder/${o}`, 'normal', 'medium')
    event.itemSize(`tfcorewashing:dirty_pile_${o}`, 'small', 'light')
  })



})