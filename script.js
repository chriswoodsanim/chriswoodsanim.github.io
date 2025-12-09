//gsap.to('h1', {keyframes: { x: [0, 0, 0], y: [0, 200, 0], opacity: [0, 1, 1], ease: "power3.out"}, duration: 2})

gsap.set('h1', {opacity: 0})
gsap.to('h1', { duration: 1.5, y: 400, opacity: 1, ease: 'elastic', delay: 0.1})
gsap.to('h1', { duration: 0.5, y: 0, ease: 'power1.inOut', delay: 1.75})

gsap.set('h3', {opacity: 0})
gsap.to('h3', { duration: 1.5, y: 400, opacity: 1, ease: 'elastic', delay: 0.12})
gsap.to('h3', { duration: 0.5, y: 0, ease: 'power1.inOut', delay: 1.78})

gsap.from('.container', { duration: 0.5, y: 400, ease: 'power1', opacity: 0, delay: 2, stagger: 0.1})

function open(evt, tab) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}

