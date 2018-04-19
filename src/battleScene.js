function showBattleScene(){
  // currentBattle.request = false  need to do a post for this, and maybe not right here

  const user1 = users.find(x=>x.id === currentBattle.user1_id)
  const user2 = users.find(x=>x.id === currentBattle.user2_id)

  const persona1 = personas.find(x=>x.id === user1.persona_id)
  const persona2 = personas.find(x=>x.id === user2.persona_id)

  $('body').html(`<div id="battle">
    <div id="stage">
    <div id="enemy_section">
      <div id="enemy_name"></div>
      <div id="enemy_hp">fs
      </div>
      <img id="enemy_img" src="">
    </div>

    <div id="user_section">
      <div id="user_name"></div>
      <div id="user_hp">
      </div>
    </div>

    <div id="buttons" >
       <button type="button" id="ability_button1"></button>
  <!--      <button type="button" id="ability_button2"></button><br>
       <button type="button" id="ability_button3"></button>
       <button type="button" id="ability_button4"></button> -->
    </div>
    <h3 id="battle_msg">h0s</h3>
  </div>
  </div>`
)

// let persona1 = {
//   name:'Jack Frost',
//   url:'https://vignette.wikia.nocookie.net/vsbattles/images/6/69/Jack_Frost_Render.png/revision/latest?cb=20170125185221',
//   strength:2,
//   magic:2,
//   agility:2,
//   luck:2
// }
//
// let persona2 = {
//   name:'Belial',
//   url:'https://vignette.wikia.nocookie.net/vsbattles/images/6/69/Jack_Frost_Render.png/revision/latest?cb=20170125185221',
//   strength:2,
//   magic:2,
//   agility:2,
//   luck:2,
//   ability1:'Mazandyne',
//   ability2:"God's Hand",
//   ability3:'Virus Breath',
//   ability4:'Life Aid'
// }

$(function(){
  // DISPLAY NAMES
  $('#user_name').html(persona2.name)
  $('#enemy_name').html(persona1.name)

  // DISPLAY ENEMY IMAGE
  debugger
  $('#enemy_img').attr('src', persona1.url)
})

// GAME LOGIC
$('#ability_button1').html(persona2.ability1)
$('#ability_button2').html(persona2.ability2)
$('#ability_button3').html(persona2.ability3)
$('#ability_button4').html(persona2.ability4)


// GAME LOGIC
let user = {}
let enemy = {}

// DATABASE FOR MOVESET ------------------------------------------
moves = [
 {
   name:'Salvation',
   damage:-100,
   target:self,
   repeat:'no',
   negate_enemy:false,
   automatic:false,
   probability:1
 },

 {
   name:'morning star',
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
   target:self,
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
   target:self,
   repeat:'no',
   negate_enemy:false,
   prevent_enemy_heal:false,
   automatic:false,
   probability:1
  },

  {
   name:'Spiritual Focus',
   damage:0,
   target:self,
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
   target:self,
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
   target:self,
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

user.ability1 = moves.filter((each_move)=>{
  return each_move.name == persona2.ability1
})

user.ability2 = moves.filter((each_move)=>{
  return each_move.name == persona2.ability2
})

user.ability3 = moves.filter((each_move)=>{
  return each_move.name == persona2.ability3
})

user.ability4 = moves.filter((each_move)=>{
  return each_move.name == persona2.ability4
})


user.hp = 10
enemy.hp = 10

// HEALTH BARS
let userhp_bar = $('#user_hp')
let enemyhp_bar = $('#enemy_hp')

let enemyhp_bar_health = 100


// EVENT LISTENERS FOR ABILITIES
$('#ability_button1').click((e)=>{
  // $('#battle_msg').html('Belial used ' + user.ability1[0].name + '!')

  // DAMAGE
  enemy.hp = enemy.hp - user.ability1[0].damage
  //$('#battle_msg').html('sup')

  console.log(enemyhp_bar);
  let bar_style = window.getComputedStyle(enemyhp_bar[0])
  let bar_width = bar_style.getPropertyValue('width')

  bar_style = bar_style.getPropertyValue('width').slice(0,-2)
  bar_style = parseInt(bar_style)
  //bar_style = bar_style + 500


  bar_style -= user.ability1[0].damage* 50
  $('#battle_msg').html( bar_style)
  enemyhp_bar_health = bar_style
  $('#enemy_hp').width(enemyhp_bar_health)

  setTimeout(()=>{
    if(enemy.hp <=0){
       alert('You win')
    }
  },1500)
})

$('#ability_button2').click((e)=>{
  // $('#battle_msg').html('Belial used ' + user.ability1[0].name + '!')

  // DAMAGE
  enemy.hp = enemy.hp - user.ability2[0].damage
  //$('#battle_msg').html('sup')

  console.log(enemyhp_bar);
  let bar_style = window.getComputedStyle(enemyhp_bar[0])
  let bar_width = bar_style.getPropertyValue('width')

  bar_style = bar_style.getPropertyValue('width').slice(0,-2)
  bar_style = parseInt(bar_style)
  //bar_style = bar_style + 500


  bar_style -= user.ability2[0].damage * 50
  $('#battle_msg').html(user.ability2)
  enemyhp_bar_health = bar_style
  $('#enemy_hp').width(enemyhp_bar_health)

})




  console.log(user1, user2, persona1, persona2)














}
