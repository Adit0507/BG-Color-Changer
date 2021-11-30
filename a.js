const button = document.querySelector('button')

const body = document.querySelector('body')

const colors = ['#F90716', '#FFF323' , '#125C13' , '#9A0680','#344CB7','#FF00E4','#A9333A','#28B5B5','#79018C','#49FF00','#5C7AEA','#1DB9C3','#94DAFF','#F9B208', '#FF5C58', '#7027A0', '#71DFE7', '#FFAB4C', '#396EB0', '#B91646']

body.style.backgroundColor = "#88E0EF";

button.addEventListener('click', changeBackground); 

function changeBackground(){
    const ColorIndex = parseInt(Math.random() * colors.length)

    body.style.backgroundColor = colors[ColorIndex]
}
