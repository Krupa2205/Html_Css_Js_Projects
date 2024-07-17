const bodyEle = document.querySelector("body")

bodyEle.addEventListener("mousemove",(e)=>{
    const xCord = e.offsetX
    const yCord = e.offsetY

    // console.log(xCord,yCord);

    const spanEle = document.createElement("span")

    spanEle.style.left = `${xCord}px`
    spanEle.style.top = `${yCord}px`

    const size =Math.random()*100
    spanEle.style.width = `${size}px`
    spanEle.style.height = `${size}px`

    bodyEle.appendChild(spanEle)

    setTimeout(()=>{
        spanEle.remove()
        
    },1000)
})