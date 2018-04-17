$(function(){

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
    console.log('this happened')
    // CHECK IF USER EXISTS ALREADY
    $('#intro_panel').remove()

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
  })
})
