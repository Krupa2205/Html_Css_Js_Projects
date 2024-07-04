const textArea = document.getElementById("textarea")
const totalChar =document.getElementById("total-char")
const remainChar =document.getElementById("remaining-char")



textArea.addEventListener("keyup",
() => {
    // console.log("pressed")
    updateCounter()
})
updateCounter()

function updateCounter()
{
    totalChar.innerText = textArea.value.length

    remainChar.innerText =  textArea.getAttribute("maxlength") - textArea.value.length
}