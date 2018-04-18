$(function(){

})

let data = []
let question = 1
function add_data(option){

  // SET QUESTION 11
  if (question == 10){
    question = 11
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
   const goodnessScore = data.reduce((total, x, i) => (total + questions[i+1][x]['goodness']), 0)
   const strengthScore = data.reduce((total, x, i) => (total + questions[i+1][x]['strength']), 0)
   console.log(goodnessScore)
   console.log(strengthScore)
   console.log(personaMapping(goodnessScore, strengthScore))
   personaFromTemplate(personaMapping(goodnessScore, strengthScore))

   // RENDER NEW VIEW
   $('#quiz_panel').fadeOut()
   $('body').append(`<h3 id="greet_msg" style="position: absolute;left: 0;right: 0;margin: auto;width:50%;margin-top:11%;display:none;color:white;text-align:center;font-size:35pt">Your persona is ready ...</h3>`)

   setTimeout(()=>{
    $('#greet_msg').fadeIn()
   }, 800)

   setTimeout(()=>{
     $('#greet_msg').fadeOut()
   }, 2300)





   let video = document.getElementById('myVideo')
   let source = document.getElementById('video_src')


   setTimeout(()=>{
     //let video = document.getElementById('myVideo')
     //let source = document.getElementById('video_src')

     source.setAttribute('src', 'src/video/newtrim.mp4')
     video.load()
     video.play()
     let currentPersona = personas.find(x => x.id === currentUser.persona_id)
     currentPersona.url = currentPersona.url.slice(1)
     setTimeout(()=>{
       video.pause()

       $('body').append(`<img src="${currentPersona.url}" style="position: absolute;left: 0;right: 0;margin: auto;width:30%;margin-top:4%;">`)
       $('body').append(`<div id="message_box" style="position: absolute;left: 0;right: 0;margin: auto;width:80%;margin-top:34%;background:#2f2e2e"><h3>You are now infused with ${currentPersona.name}</h3></div>`)


       $('#message_box').click(()=>{
         // change video
         console.log('msg box clicked')
         source.setAttribute('src', 'src/video/blue.mp4')
         video.load()
         video.play()
       })
     }, 1500)
   },3000)
  }


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

const questions = {
	1: {
		option1: {
			goodness: 1,
			strength: 1
		},
		option2: {
			goodness: 1,
			strength: -1
		},
		option3: {
			goodness: -1,
			strength: 1
		},
		option4: {
			goodness: 1,
			strength: -1
		}
	},
	2: {
		option1: {
			goodness: 1,
			strength: 1
		},
		option2: {
			goodness: 1,
			strength: -1
		},
		option3: {
			goodness: 0,
			strength: -1
		},
		option4: {
			goodness: -1,
			strength: 1
		}
	},
	3: {
		option1: {
			goodness: -1,
			strength: 1
		},
		option2: {
			goodness: 1,
			strength: -1
		},
		option3: {
			goodness: 0,
			strength: -1
		},
		option4: {
			goodness: -1,
			strength: 1
		}
	},
	4: {
		option1: {
			goodness: -1,
			strength: 1
		},
		option2: {
			goodness: 1,
			strength: 1
		},
		option3: {
			goodness: 0,
			strength: -1
		},
		option4: {
			goodness: 0,
			strength: -1
		}
	},
	5: {
		option1: {
			goodness: 0,
			strength: -1
		},
		option2: {
			goodness: 1,
			strength: -1
		},
		option3: {
			goodness: 0,
			strength: 1
		},
		option4: {
			goodness: 0,
			strength: 1
		}
	},
	6: {
		option1: {
			goodness: 0,
			strength: 1
		},
		option2: {
			goodness: 0,
			strength: 1
		},
		option3: {
			goodness: 0,
			strength: 1
		},
		option4: {
			goodness: 0,
			strength: -1
		}
	},
	7: {
		option1: {
			goodness: 0,
			strength: -1
		},
		option2: {
			goodness: 0,
			strength: 1
		},
		option3: {
			goodness: 0,
			strength: 1
		},
		option4: {
			goodness: 1,
			strength: -1
		}
	},
	8: {
		option1: {
			goodness: 1,
			strength: -1
		},
		option2: {
			goodness: 1,
			strength: 1
		},
		option3: {
			goodness: 0,
			strength: -1
		},
		option4: {
			goodness: 1,
			strength: -1
		}
	},
	9: {
		option1: {
			goodness: 0,
			strength: -1
		},
		option2: {
			goodness: 0,
			strength: 1
		},
		option3: {
			goodness: 0,
			strength: -1
		},
		option4: {
			goodness: 1,
			strength: -1
		}
	},
	10: {
		option1: {
			goodness: 1,
			strength: 1
		},
		option2: {
			goodness: 0,
			strength: -1
		},
		option3: {
			goodness: 0,
			strength: 1
		},
		option4: {
			goodness: 0,
			strength: -1
		}
	}
}

function personaMapping(goodness, strength){
  if (strength >= 3){
    if (goodness >= 0){
      return "God"
    } else {
      return "Lucifer"
    }
  }

  else {
    if (goodness >= 3){
      return "Oberon"
    } else if (goodness <= 1){
      return "Arahabaki"
    } else {
      return "Unicorn"
    }
  }
}

function personaFromTemplate(name){
  const template = personas.find(x=>x.name === name)
  const newPersona = Object.assign({}, template)
  // id is copied from template's
  newPersona.id = personas.length+1
  currentUser.persona_id = newPersona.id

  newPersona.luck = Math.floor(Math.random() * 3) + 1
  newPersona.strength = Math.floor(Math.random() * 3) + 1
  newPersona.agility = Math.floor(Math.random() * 3) + 1
  newPersona.magic = Math.floor(Math.random() * 3) + 1

  personas.push(newPersona)
  console.log(newPersona)

  return newPersona
}
