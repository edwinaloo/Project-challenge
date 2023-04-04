fetch('http://localhost:3000/films')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('container');
  console.log(data);
  const items = data;
  let html = '';
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('First Name');
    img.src = item.poster;
    img.alt = item.title;
    card.appendChild(img);
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    const title = document.createElement('h2');
    title.textContent = item.title;
    cardContent.appendChild(title);
    const description = document.createElement('p');
    description.textContent = item.description;
    cardContent.appendChild(description);
    card.appendChild(cardContent);
    container.appendChild(card);
  });
})
.catch(error => console.error(error));
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Add smooth scrolling to all links
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

// Add sticky navbar
window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
var navBtn = document.getElementById("navBtn");
var navbarLinks = document.querySelectorAll("#navbar a");
var topnavLinks = document.querySelectorAll(".topnav a");

navBtn.addEventListener("click", function() {
  // Scroll to the section with the ID "section1"
  var section1 = document.getElementById("section1");
  window.scrollTo(0, section1.offsetTop);
});

navbarLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var targetId = this.getAttribute("href");
    var targetSection = document.querySelector(targetId);
    window.scrollTo(0, targetSection.offsetTop);
  });
});

topnavLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var targetId = this.getAttribute("href");
    var targetSection = document.querySelector(targetId);
    window.scrollTo(0, targetSection.offsetTop);
  });
});




