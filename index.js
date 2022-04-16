const family = document.getElementById('family-tab')
const special = document.getElementById('special-tab')
const social = document.getElementById('social-tab')

const familyBtn = document.getElementById('family-btn')
const specialBtn = document.getElementById('special-btn')
const socialBtn = document.getElementById('social-btn')

const img = document.getElementById('section-5-img')


familyBtn.addEventListener('click', () => {
   social.setAttribute("hidden", true)
   special.setAttribute("hidden", true)
   family.removeAttribute("hidden")

   specialBtn.setAttribute('aria-selected', false)
   socialBtn.setAttribute('aria-selected', false)
   familyBtn.setAttribute('aria-selected', true)

  img.innerHTML = `
          <img class="desktop section-5-img" src="./images/homepage/family-gathering-desktop.jpg" alt="family gathering">
          <img class="tablet section-5-img" src="./images/homepage/family-gathering-tablet.jpg" alt="family gathering">
          <img class="mobile section-5-img" src="./images/homepage/family-gathering-mobile.jpg" alt="family gathering">
          <img class="section-5-lines" src="./images/patterns/pattern-lines.svg" alt="">
  `
})

specialBtn.addEventListener('click', () => {
   social.setAttribute("hidden", true)
   family.setAttribute("hidden", true)
   special.removeAttribute("hidden")

   familyBtn.setAttribute('aria-selected', false)
   socialBtn.setAttribute('aria-selected', false)
   specialBtn.setAttribute('aria-selected', true)

  img.innerHTML = `
          <img class="desktop section-5-img" src="./images/homepage/special-events-desktop.jpg" alt="special event">
          <img class="tablet section-5-img" src="./images/homepage/special-events-tablet.jpg" alt="special event">
          <img class="mobile section-5-img" src="./images/homepage/special-events-mobile.jpg" alt="special event">
          <img class="section-5-lines" src="./images/patterns/pattern-lines.svg" alt="">
  `
})

socialBtn.addEventListener('click', () => {
   family.setAttribute("hidden", true)
   special.setAttribute("hidden", true)
   social.removeAttribute("hidden")

   specialBtn.setAttribute('aria-selected', false)
   familyBtn.setAttribute('aria-selected', false)
   socialBtn.setAttribute('aria-selected', true)

  img.innerHTML = `
          <img class="desktop section-5-img" src="./images/homepage/social-events-desktop.jpg" alt="social events">
          <img class="tablet section-5-img" src="./images/homepage/social-events-tablet.jpg" alt="social events">
          <img class="mobile section-5-img" src="./images/homepage/social-events-mobile.jpg" alt="social events">
          <img class="section-5-lines" src="./images/patterns/pattern-lines.svg" alt="">
  `
})



   // social.setAttribute("aria-selected", false)
   // family.setAttribute("aria-selected", false)
   // special.setAttribute("aria-selected", true)