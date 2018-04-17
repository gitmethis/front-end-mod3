$(function(){

})

let data = []
let question = 1
function add_data(option){



  // SET QUESTION 10
  if (question == 9){
    question = 10
    data.push(option.id)
    //$('#question').html(data[0])
    // ADD NEW QUESTIONS

    $('#question').html('My biggest strength is:')
    $('#option1').html('<h5>Integrity</h5>')
    $('#option2').html('<h5>Empathy</h5>')
    $('#option3').html('<h5>Intelligence</h5>')
    $('#option4').html('<h5>Creativity</h5>')

    // LOG data
   console.log(data)
  }

  // SET QUESTION 9
  if (question == 8){
    question = 9
    data.push(option.id)
    //$('#question').html(data[0])
    // ADD NEW QUESTIONS

    $('#question').html('I wish the world could be more:')
    $('#option1').html('<h5>Egalitarian</h5>')
    $('#option2').html('<h5>Meritocratic</h5>')
    $('#option3').html('<h5>Predictable</h5>')
    $('#option4').html('<h5>Chaotic</h5>')
  }

   // SET QUESTION 8
  if (question == 7){
    question = 8
    data.push(option.id)
    //$('#question').html(data[0])
    // ADD NEW QUESTIONS

    $('#question').html('The most important thing to me:')
    $('#option1').html('<h5>Empathy</h5>')
    $('#option2').html('<h5>Intelligence</h5>')
    $('#option3').html('<h5>Relationships</h5>')
    $('#option4').html('<h5>Power</h5>')
  }

    // SET QUESTION 7
  if (question == 6){
    question = 7
    data.push(option.id)
    //$('#question').html(data[0])
    // ADD NEW QUESTIONS

    $('#question').html('My deepest fear:')
    $('#option1').html('<h5>Death</h5>')
    $('#option2').html('<h5>Forever a failure</h5>')
    $('#option3').html('<h5>Mediocrity</h5>')
    $('#option4').html('<h5>Chaos</h5>')
  }



    // SET QUESTION 6
  if (question == 5){
    question = 6
    data.push(option.id)
    //$('#question').html(data[0])
    // ADD NEW QUESTIONS

    $('#question').html('What does power mean to me:')
    $('#option1').html('<h5>Social Influence</h5>')
    $('#option2').html('<h5>Raw Physical Power</h5>')
    $('#option3').html('<h5>Mentality</h5>')
    $('#option4').html('<h5>No preference</h5>')
  }


     // SET QUESTION 5
  if (question == 4){
    question = 5
    data.push(option.id)
    //$('#question').html(data[0])
    // ADD NEW QUESTIONS

    $('#question').html('This word calls out to me:')
    $('#option1').html('<h5>Forever</h5>')
    $('#option2').html('<h5>Truth</h5>')
    $('#option3').html('<h5>Power</h5>')
    $('#option4').html('<h5>Arcane</h5>')
  }

    // SET QUESTION 4
  if (question == 3){
    question = 4
    data.push(option.id)
    //$('#question').html(data[0])
    // ADD NEW QUESTIONS

    $('#question').html('Confrontatins are:')
    $('#option1').html('<h5>Challenges of Dominance</h5>')
    $('#option2').html('<h5>Resolved with Charisma</h5>')
    $('#option3').html('<h5>Things that I like to avoid</h5>')
    $('#option4').html('<h5>annoying but necessary parts of life</h5>')
  }


   // SET QUESTION 3
  if (question == 2){
    question = 3
    data.push(option.id)
    //$('#question').html(data[0])
    // ADD NEW QUESTIONS

    $('#question').html('Emotions are:')
    $('#option1').html('<h5>Troublesome necessities</h5>')
    $('#option2').html('<h5>The joys of life</h5>')
    $('#option3').html('<h5>sometimes good, sometimes bad</h5>')
    $('#option4').html('<h5>Not things that to be concerned about</h5>')
  }

  // SET QUESTION 2
  if(question == 1){
    question = 2
    data.push(option.id)
    //$('#question').html(data[0])
    // ADD NEW QUESTIONS

    $('#question').html('If I could be anything, I would be:')
    $('#option1').html('<h5>Alchemist</h5>')
    $('#option2').html('<h5>Engineer</h5>')
    $('#option3').html('<h5>Sloth</h5>')
    $('#option4').html('<h5>Ruler of the World</h5>')
  }

}
