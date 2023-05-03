jQuery(document).ready(function() {
			jQuery('#menu-icon').on('click', function() {
				jQuery('.navbar').toggleClass('expand');
				return false;
			});
		});
// ----------------------------------------------------

        (function(){
      var words = [
          'capable',
          'dynamic'
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 3000);
        
  })();

// slideshow

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


// hr
$(document).ready(function() {
    $(".h3").after("<hr>");
});


// scroll effect
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});




// move to top
  $(window).on('scroll load', function(){
    

         if($(window).scrollTop() > 0){
            $('.rocket').show();
         }else{
             $('.rocket').hide();
         }

    })



    

    // --------  owl carousel------

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: false,
   
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1.25
      },
      576: {
        items: 1.70
      },
      768: {
        items: 2.90
      },
      992: {
        items: 3.40
      },
      1200: {
        items: 4.4
      }
    }
  });
});


