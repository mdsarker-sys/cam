



document.addEventListener("DOMContentLoaded", function() {
  const universityCards = document.querySelectorAll('.university-card');
  
  universityCards.forEach(card => {
    card.addEventListener('click', function() {
      const universityName = this.querySelector('h3').textContent;
      
      if (universityName === 'University of Oxford') {
        window.location.href = 'https://www.ox.ac.uk/';
      } else if (universityName === 'University of Cambridge') {
        window.location.href = 'https://www.cam.ac.uk/';
      }
      // Add more conditions for other universities
    });
  });
});




document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', function() {
    navList.classList.toggle('show');
  });
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


  AOS.init({
    duration: 1200, // You can also add other options here
  });

  function showMoreContent(id) {
    const content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
  

//testimonials statistics



var win = $(window);

var allMods = $("block-reveal");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("block-reveal-inner");
    }
  });
});




var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


function toggleMenu() {
  var menuLinks = document.querySelector('.mainNav__links');
  menuLinks.classList.toggle('show');
}


document.addEventListener("DOMContentLoaded", function() {
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
      triggerElement: ".mainHeading", // trigger animation when this element is in view
      reverse: false // only play animation once
  })
  .setClassToggle(".mainHeading__text", "animated") // toggle class on scroll
  .addTo(controller);
});

document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', event => {
      // Your code to toggle the display of the sub-menu
  })
})


(function() {
  var selectors = {
      nav: '[data-features-nav]',
      tabs: '[data-features-tabs]',
      active: '.__active'
  }
  var classes = {
      active: '__active'
  }
  $('a', selectors.nav).on('click', function() {
      let $this = $(this)[0];
      $(selectors.active, selectors.nav).removeClass(classes.active);
      $($this).addClass(classes.active);
      $('div', selectors.tabs).removeClass(classes.active);
      $($this.hash, selectors.tabs).addClass(classes.active);
      return false
  });
}());

$(".btn-with-icon").on("click", function() {
  $(".wave-anim").addClass('visible').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd", function() {
      $(".wave-anim").removeClass('visible');
  });
});



var win = $(window);

var allMods = $("block-reveal");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("block-reveal-inner");
    }
  });
});









