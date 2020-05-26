$(document).ready(function(){

    $('.counter').counterUp(
        {
            delay: 2,
            time: 1000
        }
    );


    $('#t').t({
        repeat:true,
        speed:40,
        pause_on_click:true,
        beep:false,
    });

//Click NavBar
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
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

//Sticky Menu

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.menu').addClass("sticky");
        }
        else {
            $('.menu').removeClass("sticky");
        }
    })


      });
