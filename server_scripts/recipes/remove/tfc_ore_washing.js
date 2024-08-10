// priority: 0



ServerEvents.recipes(event  => {
    let mod = 'tfcorewashing'

    let ores = ['bauxite', 'galena', 'uraninite']

    ores.forEach((o) => {
      event.remove( {id: `${mod}:dirt_dusts/splashing/${o}_dirt_dust_splashing`})
      event.remove( {id: `${mod}:ores/${o}/${o}_normal_pressing`})
      event.remove( {id: `${mod}:ores/${o}/${o}_small_pressing`})
      event.remove( {id: `${mod}:ores/${o}/${o}_poor_pressing`})
      event.remove( {id: `${mod}:ores/${o}/${o}_rich_pressing`})

      event.remove({  id: `${mod}:rocky_chunks/splashing/${o}_rocky_chunk_splashing` })
      event.remove({  id: `${mod}:chunks/quern/chunks_${o}_quern` })
      event.remove({  id: `${mod}:chunks/milling/chunks_${o}_milling` })
    
      event.remove( {id: `${mod}:crafting/pellet/${o}`})
      event.remove( {id: `${mod}:crafting/briquet/${o}`})
      event.remove( {id: `${mod}:crafting/dirt_dust/${o}`})
    })

})