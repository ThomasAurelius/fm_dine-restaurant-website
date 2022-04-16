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

// const tabList = document.querySelector('[role="tablist"]');
// const tabs = tabList.querySelectorAll('[role="tab"]');

// tabs.forEach((tab) => {
//     tab.addEventListener('click', changeTabPanel);
// });

// function changeTabPanel(e) {
//     const targetTab = e.target;
//     const targetPanel = targetTab.getAttribute("aria-controls");
    
//     const tabContainer = targetTab.parentNode;
//     const mainContainer = tabContainer.parentNode;
    
//     mainContainer
//         .querySelectorAll('article')
//         .forEach((article) => article.setAttribute("hidden", true));
    
//     mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
    






const family = document.getElementById('family-tab')
const special = document.getElementById('special-tab')
const social = document.getElementById('social-tab')

const familyBtn = document.getElementById('family-btn')
const specialBtn = document.getElementById('special-btn')
const socialBtn = document.getElementById('social-btn')

specialBtn.addEventListener('click', (e) => {
   e.preventDefault()
   alert(e)
   family.setAttribute("hidden", true)
   special.removeAttribute("hidden")
})
