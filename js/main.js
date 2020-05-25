$(document).ready(function(){
    $('.counter').counterUp(
        {
            delay: 5,
            time: 1000
        }
    );

    var typed = new Typed('#typed',{
          strings:["SERVICES","BUSNESS","CARRIER"],
           backSpeed: 0,
           typeSpeed: 200,
           loop:true,
           cursorChar: ' ',
           autoInsertCss: true

         });


  //Smooth Scrool
  $("a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {
        window.location.hash = hash;
      });
    }
  });


  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });



         $(window).scroll(function(){
           if($(this).scrollTop()>500){
             $('.menu').addClass("sticky");
           }
           else{
             $('.menu').removeClass("sticky");
           }
         })


  });


  $(function() {
  var selectedClass = "";
  $(".filter").click(function(){
  selectedClass = $(this).attr("data-rel");
  $("#gallery").fadeTo(100, 0.1);
  $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
  setTimeout(function() {
  $("."+selectedClass).fadeTo().addClass('animation');
  $("#gallery").fadeTo(300, 1);
  }, 300);
  });
  });
