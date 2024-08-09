
ServerEvents.recipes(event  => {

  let colors = [
    'white',
    'light_gray',
    'gray',
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'cyan',
    'light_blue',
    'blue',
    'purple',
    'magenta',
    'pink',
  ]

  colors.forEach((c) => {
    event.remove({ id: `chalk:chalk_from_${c}_dye` })

  })

  event.remove({ id: `chalk:chalk_box` })
  
})