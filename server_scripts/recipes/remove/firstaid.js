
ServerEvents.recipes(event  => {

  event.remove({ id: `firstaid:plaster` })
  event.remove({ id: `firstaid:morphine` })
  event.remove({ id: `firstaid:bandage` })
  
})