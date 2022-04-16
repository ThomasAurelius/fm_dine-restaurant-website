const peopleCount = document.getElementById('people-count')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const guests = document.getElementById('guests')

let currentCount = peopleCount.innerText[0]

plus.addEventListener('click', (e) => {
   e.preventDefault()
   parseInt(currentCount ++)
   console.log(currentCount)
   peopleCount.innerText = currentCount + " people" 
   guests.innerText = currentCount 
})

minus.addEventListener('click', (e) => {
   e.preventDefault()
   parseInt(currentCount --)
   console.log(currentCount)
   peopleCount.innerText = currentCount + " people"
   guests.innerText = currentCount   
})
