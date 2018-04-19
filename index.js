let personas = []
let users = []
let currentUser;
let currentPersona;
$(function(){


  // GETS ALL PERSONAS THROUGH FETCH
  fetch('http://localhost:3000/personaas')
     .then(res=> res.json())
     .then(json => personas = json.map(persona=> {
       return new Persona(
         persona.name,
         persona.strength,
         persona.agility,
         persona.luck,
         persona.magic,
         persona.ability1,
         persona.ability2,
         persona.ability3,
         persona.ability4,
         persona.url,
         persona.id
       )
     }))

  // SAME THING FOR USERS
  fetch('http://localhost:3000/users')
     .then(res => res.json())
     .then(json => users = json.map(user=> {
       return new User(
         user.username,
         user.id,
         user.personaa_id
       )
     }))

  // GREETS
  setTimeout(()=>{
    $('#title').fadeIn()
  }, 500)


  setTimeout(()=>{

    $('#name_input').fadeIn();
    $('#name_input').css('display', 'block')
  },1000)


  // QUIZ FORM
  $('#name_input').change(()=>{

    // CHECK IF USER EXISTS ALREADY
    let newUsername = $('#name_input').val()
    currentUser = users.find(x=>x.username === newUsername)

    // currentUser = new User($('#name_input').val())

    $('#intro_panel').remove()

    // CREATE NEW USER
    if (!currentUser){
      currentUser = new User(newUsername)
      currentUser.online = true
      users.push(currentUser)

      // APPPEND NEW PANEL
      $('body').append(`<div id="quiz_panel" style="position: absolute;left: 0;right: 0;margin: auto;width:50%;margin-top:11%"><h3 id="question">When faced with an existential life crisis, I woul.</h3>
       <div class="option" name="a" onclick="add_data(this)" id="option1">
         <h5>Driving across the country</h5>
        </div>
       <div class="option" name="b"  onclick="add_data(this)" id="option2">
         <h5>Be in peaceful solitude</h5>
        </div><br>
       <div class="option"  name="c" onclick="add_data(this)" id="option3">
         <h5>Hit mailboxes with a bat</h5>
        </div>
       <div class="option" name="d"  onclick="add_data(this)" id="option4">
         <h5>Immerse yourself in friendship</h5>
        </div>
      </div>`)

      $('#quiz_panel').hide()
      $('#quiz_panel').fadeIn('slow')
    } else {
      currentPersona = personas.find(x => x.id === currentUser.persona_id)
      showLobby()
    }
  })
})
