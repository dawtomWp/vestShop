//carousel produkty
$(document).ready(function(){
    $('#product-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav: true,
        dots: false,
        autoplay:true,
        responsive: {
            0: {
                items:1
            },
            600: {
                items:2
            },
            1000: {
                items:4
            }
        }
    })

    $('body').scrollspy({ target: '.navbar-nav', offset:50 }); // podswietlanie scrolla
    $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })
  $(".navbar-nav a[href^='#']").on('click', function(e) { //animacja scrolla
 
    e.preventDefault();
 
    var hash = this.hash;
 
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
 
        window.location.hash = hash;
      });
    $('.navbar-collapse').collapse('hide');
 });
 $("#startBtn").click(function(e) { // btn rozpocznij scroll
    e.preventDefault();
    var offset = 0; 
    $('html, body').animate({
      
        scrollTop: $("#about").offset().top + offset
    }, 1000);
});
});


//carousel opinie
$(document).ready(function(){
    $('#testimonial-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav: true,
        dots: false,
        autoplay:true,
        responsive: {
            0: {
                items:1
            },
            600: {
                items:1
            },
            1000: {
                items:2
            }
        }
    })
});
