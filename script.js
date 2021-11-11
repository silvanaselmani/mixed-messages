function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const positiveQuotes = {
    quotes: ['Inspire others', 'Be patient', 'Never give up', 'Dont\'t judge'],
    messag: ['Be the reason someone believes', 'Don\'t be ashamed of slow progress', 'No matter how much " you gotta be friggin\' kidding me!', 'Thou shalt not judge too harshly'],
    messag1: ['In the goodness of people.', 'Baby steps, still move, you forward.', 'Life Throws at you.', 'Because thou has messed up in the past also.']
  }
  
  // Store the 'quotes' in an array
  let messPositiveQuotes = [];
  
  for(let prop in positiveQuotes) {
    let optionIdx = generateRandomNumber(positiveQuotes[prop].length)
    
   // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'quotes':
        messPositiveQuotes.push(` Positive quotes : "${positiveQuotes[prop][optionIdx]}"`)
        break
      case 'messag':
        messPositiveQuotes.push(`  ${positiveQuotes[prop][optionIdx]}`)
        break
      case 'messag1':
        messPositiveQuotes.push(`${positiveQuotes[prop][optionIdx]}`)
        break
      default:
        messPositiveQuotes.push('There is not enough info.')
    }
  }
  
  function formatMessag(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = messPositiveQuotes.join('\n')
    console.log(formatted)
  }
  
  formatMessag(messPositiveQuotes);