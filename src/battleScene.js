function showBattleScene(){

  // PERSONA1 - USER
  const persona1 = personas.find(x=>x.id === currentUser.persona_id)
  // PERSONA2 - ENEMY
  let num = Math.floor(Math.random() * 5) + 1
  console.log(num)
  const persona2 = personas.find(x=>x.id === num)


  $('body').html(`
    <div id="battle">
      <div id="stage">
        <div id="enemy_section">
          <div id="enemy_name"></div>
          <div id="enemy_hp">fs</div>
          <img id="enemy_img" src="">
        </div>

        <div id="user_section">
          <div id="user_name"></div>
          <div id="user_hp"></div>
        </div>

        <div id="buttons" >
          <button type="button" id="ability_button1"></button>
          <button type="button" id="ability_button2"></button><br>
          <button type="button" id="ability_button3"></button>
          <button type="button" id="ability_button4"></button>
        </div>

        <h3 id="battle_msg">h0s</h3>
      </div>
    </div>
  `)

$(function(){
  // DISPLAY NAMES AND ENEMY IMAGE
  $('#user_name').html(persona1.name)
  $('#enemy_name').html(persona2.name)

  $('#enemy_img').attr('src', persona2.url)
})

// GAME LOGIC
$('#ability_button1').html(persona1.ability1)
$('#ability_button2').html(persona1.ability2)
$('#ability_button3').html(persona1.ability3)
$('#ability_button4').html(persona1.ability4)


// GAME LOGIC
let user = {}
let enemy = {}

// DATABASE FOR MOVESET ------------------------------------------
moves = [
 {
   name:'Salvation',
   damage:-100,
   target:user,
   repeat:'no',
   negate_enemy:false,
   automatic:false,
   probability:1
 },

 {
   name:'Morning Star',
   target:enemy,
   damage: 3,
   repeat:'no',
   automatic:'no',
   probability: 1
 },
 {
   name:'God’s Hand',
   damage:7,
   target:enemy,
   repeat:'no',
   negate_enemy:false,
   automatic:false,
   probability:1
  },
 {
   name:'Blazing Hell',
   damage:0,
   target:user,
   repeat:'no',
   negate_enemy:true,
   automatic:false,
   probability:1
 },

 {
  name:'Stigmatic Gleam',
   damage:8,
   target:enemy,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:true,
   automatic:false,
   probability:1
  },

   {
  name:'Damnation',
   damage:3,
   target:enemy,
   repeat:'yes',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:1
  },

 {
  name:'Damnation',
   damage:3,
   target:enemy,
   repeat:'yes',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:1
  },

 {
  name:'Diarahan',
   damage:-100,
   target:user,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:1
  },

  {
   name:'Spiritual Focus',
   damage:0,
   target:user,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:1
  // special: Change Stigmatic Gleam to have damage 100%
  },

  {
  name:'Sexy Dance',
   damage:0,
   target:enemy,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability: .45
  // special: choose opponent’s move
  },

  {
  name:'Mazandyne',
   damage:3,
   target:enemy,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:1
  },

  {
  name:'Grydyne',
   damage:3,
   target:enemy,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:1
  },

   {
  name:'Life Lift',
   damage:-2,
   target:user,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:true,
   probability:1
  },

   {
   name:'Assault Dive',
   damage:8,
   target:enemy,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability: .7
  },

    {
  name:'Shockburst',
   damage:3,
   target:enemy,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:1
  },

  {
   name:'Dia',
   damage:-2,
   target:user,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:1

  },
  {
   name:'Amrita',
   damage:0,
   target:enemy,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:1
  // special: eliminate all negative repeats
  },

  {
   name:'Virus Breath',
   damage:4,
   target:enemy,
   repeat:'yes',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:1
  },

  {
   name:'Tetrakarn',
   damage:0,
   target:enemy,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:.5,
  // special: reflect attack
  },

   {
   name:'Immunity',
   damage:0,
   target:enemy,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:1
  },

 {
   name:'Panic Voice',
   damage: 0,
   target:enemy,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:1
  },
]

user.ability1 = moves.find((each_move)=>{
  return each_move.name == persona1.ability1
})

user.ability2 = moves.find((each_move)=>{
  return each_move.name == persona1.ability2
})

user.ability3 = moves.find((each_move)=>{
  return each_move.name == persona1.ability3
})

user.ability4 = moves.find((each_move)=>{
  return each_move.name == persona1.ability4
})

enemy.ability1 = moves.find((each_move)=>{
  return each_move.name == persona2.ability1
})

enemy.ability2 = moves.find((each_move)=>{
  return each_move.name == persona2.ability2
})

enemy.ability3 = moves.find((each_move)=>{
  return each_move.name == persona2.ability3
})

enemy.ability4 = moves.find((each_move)=>{
  return each_move.name == persona2.ability4
})


user.hp = 10
enemy.hp = 10

// HEALTH BARS
let userhp_bar = $('#user_hp')
let enemyhp_bar = $('#enemy_hp')
userhp_bar.html('hi')

let enemyhp_bar_health = 100
let userhp_bar_health = 100

// EVENT LISTENER FOR buttons

$('#buttons').click((e) =>{
  switch(e.target.id){
    case 'ability_button1':
      userTurn(user.ability1)
      break;
    case 'ability_button2':
      userTurn(user.ability2)
      break;
    case 'ability_button3':
      userTurn(user.ability3)
      break;
    case 'ability_button4':
      userTurn(user.ability4)
      break;
  }
})

function userTurn(ability){
  $('#battle_msg').html(`${persona1.name} used ${ability.name}.`)
  if (ability.target === enemy){
    enemy.hp -= ability.damage


    // update enemy bar

    let enemy_bar_style = window.getComputedStyle(enemyhp_bar[0])
    let enemy_bar_width = enemy_bar_style.getPropertyValue('width')

    enemy_bar_style = enemy_bar_style.getPropertyValue('width').slice(0,-2)
    enemy_bar_style = parseInt(enemy_bar_style)

    enemy_bar_style -= ability.damage* 50
    enemyhp_bar_health = enemy_bar_style
    $('#enemy_hp').width(enemyhp_bar_health)

  } else {
    user.hp -= ability.damage

    // update user bar

    let user_bar_style = window.getComputedStyle(userhp_bar[0])
    let user_bar_width = user_bar_style.getPropertyValue('width')

    user_bar_style = user_bar_style.getPropertyValue('width').slice(0,-2)
    user_bar_style = parseInt(user_bar_style)

    user_bar_style -= ability.damage* 50
    userhp_bar_health = user_bar_style
    $('#user_hp').width(userhp_bar_health)
  }


  console.log('enemy hp ' + enemy.hp)
  console.log('user hp ' + user.hp)

  checkIfGameOver()

  // gray out buttons
  $('#ability_button1').attr('disabled', true)
  $('#ability_button2').attr('disabled', true)
  $('#ability_button3').attr('disabled', true)
  $('#ability_button4').attr('disabled', true)
  setTimeout(()=>{
    enemyTurn()
  }, 1500)
}

function enemyTurn(){
  let choice = Math.floor(Math.random() * 4) + 1
  let ability = enemy[`ability${choice}`]


  $('#battle_msg').html(`${persona2.name} used ${ability.name}.`)

  if (ability.target === enemy){
    user.hp -= ability.damage

    // update user bar

    let user_bar_style = window.getComputedStyle(userhp_bar[0])
    let user_bar_width = user_bar_style.getPropertyValue('width')

    user_bar_style = user_bar_style.getPropertyValue('width').slice(0,-2)
    user_bar_style = parseInt(user_bar_style)

    user_bar_style -= ability.damage* 50
    userhp_bar_health = user_bar_style
    $('#user_hp').width(userhp_bar_health)

  } else {

    enemy.hp -= ability.damage


    // update enemy bar

    let enemy_bar_style = window.getComputedStyle(enemyhp_bar[0])
    let enemy_bar_width = enemy_bar_style.getPropertyValue('width')

    enemy_bar_style = enemy_bar_style.getPropertyValue('width').slice(0,-2)
    enemy_bar_style = parseInt(enemy_bar_style)

    enemy_bar_style -= ability.damage* 50
    enemyhp_bar_health = enemy_bar_style
    $('#enemy_hp').width(enemyhp_bar_health)

  }


  console.log('enemy hp ' + enemy.hp)
  console.log('user hp ' + user.hp)

  checkIfGameOver()

  // un-gray out buttons
  $('#ability_button1').attr('disabled', false)
  $('#ability_button2').attr('disabled', false)
  $('#ability_button3').attr('disabled', false)
  $('#ability_button4').attr('disabled', false)





  checkIfGameOver()
}

function checkIfGameOver(){

}

// //
// //
// // EVENT LISTENERS FOR ABILITIES
// $('#ability_button1').click((e)=>{
//   // $('#battle_msg').html('Belial used ' + user.ability1[0].name + '!')
//
//   // DAMAGE
//   enemy.hp = enemy.hp - user.ability1.damage
//   //$('#battle_msg').html('sup')
//
//   console.log(enemyhp_bar);
//   let bar_style = window.getComputedStyle(enemyhp_bar[0])
//   let bar_width = bar_style.getPropertyValue('width')
//
//   bar_style = bar_style.getPropertyValue('width').slice(0,-2)
//   bar_style = parseInt(bar_style)
//   //bar_style = bar_style + 500
//
//
//   bar_style -= user.ability1.damage* 50
//   $('#battle_msg').html( bar_style)
//   enemyhp_bar_health = bar_style
//   $('#enemy_hp').width(enemyhp_bar_health)
//
//   setTimeout(()=>{
//     if(enemy.hp <=0){
//        alert('You win')
//     }
//   },1500)
// })
//
// $('#ability_button2').click((e)=>{
//   // $('#battle_msg').html('Belial used ' + user.ability1[0].name + '!')
//
//   // DAMAGE
//   enemy.hp = enemy.hp - user.ability2.damage
//   //$('#battle_msg').html('sup')
//
//   console.log(enemyhp_bar);
//   let bar_style = window.getComputedStyle(enemyhp_bar[0])
//   let bar_width = bar_style.getPropertyValue('width')
//
//   bar_style = bar_style.getPropertyValue('width').slice(0,-2)
//   bar_style = parseInt(bar_style)
//   //bar_style = bar_style + 500
//
//
//   bar_style -= user.ability2.damage * 50
//   $('#battle_msg').html(user.ability2)
//   enemyhp_bar_health = bar_style
//   $('#enemy_hp').width(enemyhp_bar_health)
//
// })

}
