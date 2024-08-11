JEIEvents.hideItems( event => {
  let mod = 'tfcorewashing'
  
  let ores = ['bauxite', 'galena', 'uraninite']

  ores.forEach((o) => {
    event.hide(`${mod}:rocky_chunks_${o}`)
    event.hide(`${mod}:chunks_${o}`)
    event.hide(`${mod}:dirty_dust_${o}`)
    event.hide(`${mod}:dirty_pile_${o}`)
    event.hide(`${mod}:pellet_${o}`)
    event.hide(`${mod}:briquet_${o}`)
  })



})



