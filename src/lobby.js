function showLobby(){
  let video = document.getElementById('myVideo')
  let source = document.getElementById('video_src')


  setTimeout(()=>{

    source.setAttribute('src', 'src/video/newtrim.mp4')
    video.load()
    video.play()

    setTimeout(()=>{
      video.pause()

      // DISPLAY PERSONA
      $('body').append(`<img id="currentImage" src="${currentPersona.url}" style="position: absolute;left: 0;right: 0;margin: auto;width:30%;margin-top:4%;">`)
      $('body').append(`<div id="message_box" style="position: absolute;left: 0;right: 0;margin: auto;width:80%;margin-top:34%;background:#2f2e2e"><h3>You are now infused with ${currentPersona.name}</h3></div>`)
      $('body').append(`<div id="start_game" style="position: absolute;left: 0;right: 0;margin: auto;width:80%;margin-top:54%;background:#2f2e2e"><h3>Start Game</h3></div>`)

      $('#start_game').click(()=>{
        // change video
        source.setAttribute('src', 'src/video/blue.mp4')
        video.load()
        video.play()
        $('#currentImage').fadeOut()
        $('#message_box').fadeOut()
        $('#start_game').fadeOut()
        console.log("hi")
        showBattleScene()

        // APPEND MAIN LOBBY div
        // $('body').append(`<div id="lobby"style="position: absolute;display:none;left: 0;right: 0;margin: auto;width:90%;margin-top:4%;background:#2f2e2e;opacity:0.7;height:90%"><ul id="online_users"></ul></div>`)
        // $('#lobby').fadeIn()

        // fetch('http://localhost:3000/users').then(resp => resp.json()).then(json => filterOnlineUsers(json))
        //
        // function filterOnlineUsers(json){
        //   console.log(json)
        //   onlineUsers = json.filter(x=>x.online && x.username !== currentUser.username)
        //   $('#online_users').append(`<h1>Select thine enemy</h1>`)
        //   $('#online_users').append(onlineUsers.map(user=>`<li data-id="${user.id}">${user.username}</li>`).join(''))
        //
        //   $('#online_users').click((e)=>{
        //
        //     currentBattle = {
        //       user1_id: currentUser.id, // currentUser doesn't have an id
        //       user2_id: parseInt(e.target.dataset.id),
        //       request: true,
        //       user1_hp:10,
        //       user2_hp:10
        //     }
        //
        //     fetch('http://localhost:3000/battles', {
        //       method:'POST',
        //       headers:{
        //         'Content-Type':'application/json'
        //       },
        //       body: JSON.stringify(currentBattle)
        //     }).then(res => showBattleScene())
        //   })
        // }


        // NOW SETUP POLLING



        // const battleFetcher = setInterval(()=>{
        //   fetch('http://localhost:3000/battles').then(res => res.json()).then(res => filterBattles(res))
        // },500)
        //
        // function filterBattles(json){
        //   battle = json.find(x=>x.user2_id === currentUser.id && x.request)
        //
        //   if (battle){
        //     currentBattle = battle
        //     window.clearInterval(battleFetcher)
        //     let user1 = users.find(x=>x.id === battle.user1_id)
        //
        //      $('#lobby').fadeOut()
        //      $('#lobby').html('')
        //      $('#lobby').append(`<h2 id="challenge_box" style="position: absolute;display:none;left: 0;right: 0;margin: auto;width:90%;margin-top:4%;">${user1.username} is challenging you...</h2>`)
        //      $('#lobby').fadeIn()
        //      setTimeout(()=>{
        //        $('#challenge_box').fadeIn()
        //        setTimeout(()=>{
        //          showBattleScene()
        //        }, 2000)
        //      }, 2000)
        //
        //   }
        //
        //
        // }

      })
    }, 1500)
  },3000)
}
