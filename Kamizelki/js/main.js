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




 


  function filterAction() {
    const types = document.querySelectorAll('.form-control');
    const storeProducts = document.querySelectorAll('.shopItem');
    const appliedFilters = {}; //obiekt do zapisywania  wyborów filtrów
    
    types.forEach((type) => {
      type.addEventListener('change', function() {
        appliedFilters[this.id] = this.value;     
        console.log(appliedFilters);
        storeProducts.forEach(function(product) {
          let canShow = true;    //flaga czy można wyświetlać
          Object.keys(appliedFilters).forEach(function(key) { //iteracja po wszystkich i szukanie ktore mozna wyswietlić         
            if (appliedFilters[key].toLowerCase() !== 'wszystkie' && product.getAttribute('data-' + key).toLowerCase() !== appliedFilters[key].toLowerCase()) {
              canShow = false;
            }
          })
          if (canShow) {     
            product.style.display = 'block';
          } else {
            product.style.display = 'none';
          }
        })
      })
    })
  }
  filterAction();
  


