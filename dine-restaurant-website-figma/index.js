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
















// Special Events
// Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you.
// We’ll be sure to mark your special date with an unforgettable meal.
// Social Events
// Are you looking to have a larger social event? No problem! We’re more than happy to cater for big
// parties. We’ll work with you to make your event a hit with everyone.