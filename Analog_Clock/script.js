 const hrEle= document.querySelector(".hr")
const minEle= document.querySelector(".min")
const secEle= document.querySelector(".sec")


setInterval(()=>{
    let date = new Date()

    hr = date.getHours()*30
    // 30 because there in a minute clock diffrence is 30 degree..so clock is round in 360 Degree.

    min = date.getMinutes()*6
    // 6 beacuse 1 minute is 60 seconds so 6 degree round

    sec = date.getSeconds()*6
    // 6 because 1 minute is 60 seconds so 6 degree

    hrEle.style.transform =`rotateZ(${(hr)+min/12}
    deg)`

    minEle.style.transform =`rotateZ(${min}deg)`

    secEle.style.transform =`rotateZ(${sec}deg)`
})