const colorBtn = document.getElementById('color')
const placeBtn = document.getElementById('place')
const ritualBtn = document.getElementById('ritual')

const addColor = () => {
    alert("my favorite color is black")
}

const addPlace = () => {
    alert("My favorite place is wherever i'm with friends")
}

const addRitual = () => {
    alert("my favorite ritual is waking up and going right back to sleep :) ")
}



colorBtn.addEventListener('click', addColor)
placeBtn.addEventListener('click', addPlace)
ritualBtn.addEventListener('click', addRitual)