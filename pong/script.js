let canvas = document.getElementById('canvas')
let container = canvas.getContext("2d")

container.fillStyle= "#8b8b8b"
let jogador1 = container.fillRect(50,175,20,150)
let jogador2 = container.fillRect(875,175,20,150)
let bolinha  = container.fillRect(936/2-15,522/2-15,30,30)

let pts1 =0 , pts2=0
container.font = "20px Arial"
let score1 = container.fillText('Score 1:'+ pts1,125,50) 
let score2 = container.fillText('Score 2:'+ pts2,700,50) 