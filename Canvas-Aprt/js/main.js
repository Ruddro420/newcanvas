function openNav(){document.getElementById("myNav").style.width="100%"}
function closeNav(){document.getElementById("myNav").style.width="0%"}



$(document).ready(function(){
  $('.logo-carousel').owlCarousel({
    loop:true,
    margin:90,
    autoplay:true,
    autoplaySpreed:100,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})


//Sticky Bar
$(window).scroll(function(){
          if($(this).scrollTop()>200){
            $('.menu').addClass("sticky");
          }
          else{
            $('.menu').removeClass("sticky");
          }
        });
//Smooth Scrool
$("a").on('click',function(event){

  if(this.hash !==""){
    event.preventDefault();

    var hash = this.hash;
    $('html,body').animate({
      scrollTop: $(hash).offset().top},1000,function(){
        window.location.hash = hash;
    });
  }
});

});
