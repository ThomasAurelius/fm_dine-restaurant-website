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


// family gathering section

const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      console.log('fuck')
    });
});

function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    
    console.log(targetTab);
}







// const family = document.getElementById('family-article')
// const special = document.getElementById('special-article')
// const social = document.getElementById('social-event')

// const familyBtn = document.getElementById('family')
// const specialBtn = document.getElementById('special')
// const socialBtn = document.getElementById('social')

// specialBtn.addEventListener('click', (e) => {
//    e.preventDefault()
//    family.setAttribute("hidden", true)
//    special.setAttribute("hidden", false)
// }










// Special Events
// Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you.
// We’ll be sure to mark your special date with an unforgettable meal.
// Social Events
// Are you looking to have a larger social event? No problem! We’re more than happy to cater for big
// parties. We’ll work with you to make your event a hit with everyone.