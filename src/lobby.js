function showLobby(){
  let video = document.getElementById('myVideo')
  let source = document.getElementById('video_src')


  setTimeout(()=>{
    //let video = document.getElementById('myVideo')
    //let source = document.getElementById('video_src')

    source.setAttribute('src', 'src/video/newtrim.mp4')
    video.load()
    video.play()

    currentPersona.url = currentPersona.url.slice(1)
    setTimeout(()=>{
      video.pause()

      $('body').append(`<img id="currentImage" src="${currentPersona.url}" style="position: absolute;left: 0;right: 0;margin: auto;width:30%;margin-top:4%;">`)
      $('body').append(`<div id="message_box" style="position: absolute;left: 0;right: 0;margin: auto;width:80%;margin-top:34%;background:#2f2e2e"><h3>You are now infused with ${currentPersona.name}</h3></div>`)


      $('#message_box').click(()=>{
        // change video
        console.log('msg box clicked')
        source.setAttribute('src', 'src/video/blue.mp4')
        video.load()
        video.play()
        $('#currentImage').fadeOut()
        $('#message_box').fadeOut()

        // APPEND MAIN LOBBY div
        $('body').append(`<div id="lobby"style="position: absolute;display:none;left: 0;right: 0;margin: auto;width:90%;margin-top:4%;background:#2f2e2e;opacity:0.7;height:90%"><ul id="online_users"></ul></div>`)
        $('#lobby').fadeIn()

        fetch('http://localhost:3000/users').then(resp => resp.json()).then(json => filterOnlineUsers(json))

        function filterOnlineUsers(json){
          console.log(json)
          onlineUsers = json.filter(x=>x.online)
          $('#online_users').append(onlineUsers.map(user=>`<li data-id="${user.id}">${user.username}</li>`).join(''))

          $('#online_users').click((e)=>{
            debugger
            alert(e.target.dataset.id)
            fetch('http://localhost:3000/battles', {
              method:'POST',
              headers:{
                'Content-Type':'application/json'
              },
              body: JSON.stringify({
                user1_id: currentUser.id, // doesn't exist here
                user2_id: parseInt(e.target.dataset.id),
                request: true,
                user1_hp:10,
                user2_hp:10
              })
            }).then(res=> res.json())
          })
        }


        // NOW SETUP POLLING

        setInterval(()=>{
          fetch('http://localhost:3000/battles').then(res => res.json()).then(res => filterBattles(res))


        },500)
     // let users = []
        function filterBattles(json){
          if (json.find(x=>x.user2_id === currentUser.id && x.request)){

             $('#lobby').append(`<h2 id="challenge_box" style="position: absolute;display:none;left: 0;right: 0;margin: auto;width:90%;margin-top:4%;">${users[user1_id+1]}.username is challenging you...</h2>`)
             setTimeout(()=>{
               $('#challenge_box').fadeOut()
             },2000)
          }


        }

      })
    }, 1500)
  },3000)
}
