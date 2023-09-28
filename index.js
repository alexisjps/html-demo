const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')
const reviews = document.querySelector('.reviews')

function show(){
  reviews.classList.toggle('d-none')
  btn.classList.add('d-none')
  btn2.classList.toggle('d-none')
}

function reset(){
  console.log(reviews)
  reviews.classList.toggle('d-none')
  btn.classList.remove('d-none')
  btn2.classList.toggle('d-none')
}
btn.addEventListener('click', show)
btn2.addEventListener('click', reset)