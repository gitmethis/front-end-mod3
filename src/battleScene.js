function showBattleScene(){
  currentBattle.request = false

  const user1 = users.find(x=>x.id === currentBattle.user1_id)
  const user2 = users.find(x=>x.id === currentBattle.user2_id)

  const persona1 = personas.find(x=>x.id === user1.persona_id)
  const persona2 = personas.find(x=>x.id === user2.persona_id)

  // make a battle div for now
  console.log(user1, user2, persona1, persona2)













}
