let jogo = document.querySelector('.jogo')
let nave = document.querySelector('.nave')

let quantTiros = 0

jogo.addEventListener("mousemove", movimentarNave)
jogo.addEventListener('click', (e)=>{
    let tiro = document.createElement('div')
    tiro.classList.add('tiro')
    tiro.id = 'tiro' + quantTiros
    tiro.style.top = e.clientY + 15 + 'px'
    tiro.style.left = e.clientX + 50 + 'px'

    jogo.appendChild(tiro)
})

function movimentarNave(e) {
        nave.style.top = e.clientY + 'px'
        nave.style.left = e.clientX + 'px'
    
}

setInterval(() => {
    let tiros = jogo.querySelectorAll('.tiro')
    tiros.forEach(e => {
        let left = e.style.left.match(/\d/g).join("")//pegar so numero
        
        if(left<=780){
            e.style.left = Number(left) + 12 + 'px'
        }else{
            e.remove()
        }
        
        console.log(e.style.top)
    });
}, 25);