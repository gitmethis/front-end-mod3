$(function(){


  $('#message_box').click(()=>{
    // change video
    console.log('msg box clicked')
    source.setAttribute('src', 'src/video/blue.mp4')
    video.load()
    video.play()
  })
})
