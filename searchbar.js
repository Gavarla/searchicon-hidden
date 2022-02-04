const search=document.querySelector('.search')
const icon=document.querySelector('.icon')
const input=document.querySelector('.input')
icon.addEventListener('click',()=>{
    search.classList.toggle('active')
    input.focus()
})