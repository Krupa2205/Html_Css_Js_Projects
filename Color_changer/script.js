const button =document.querySelectorAll('.box')
const body = document.querySelector('body')

button.forEach(function(box){
    box.addEventListener('click',function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor='#F19ED2'
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor='#95D2B3'
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor='#FD9B63'
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor='#B1AFFF'
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor='#987070'
        }
    })
})