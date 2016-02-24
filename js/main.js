function main() {

    (function () {
        'use strict';

        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                            scrollTop: target.offset().top - 40
                        },
                        900
                    );
                    return false;
                }
            }
            //should also close navigation drawer
        });

        function setNavBar() {
            var navHeight = $(window).height() - 320;
            console.log( "navheight: " + navHeight + " ,  scrolltop" + $(window).scrollTop() )
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        }

        /*====================================
         Show Menu on Book
         ======================================*/
        $(window).bind('scroll', function() {
            setNavBar();
        });


        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })

        setNavBar();


        $(document).ready(function() {

            $("#techicons").owlCarousel({
                items : 11,               //10 items above 1000px browser width
                // itemsDesktop :      [1000,5], //5 items between 1000px and 901px
                // itemsDesktopSmall : [979,3],  // betweem 900px and 601px
                // itemsTablet:        [768,],  //2 items between 600 and 0
                // itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
                itemsCustom : [
                    [0,1],
                    [140,2],
                    [280,3],
                    [560,4],
                    [700,5],
                    [840,6],
                    [980,7],
                    [1120,8],
                    [1260,9],
                    [1400,10],
                    [1540,10]
                ],
                navigation : false, // Show next and prev buttons
                slideSpeed : 200,
                // singleItem:true,
                stopOnHover: true,
                autoPlay: true,
            });
        });

        /*====================================
         Portfolio Isotope Filter
         ======================================*/
        $(window).load(function() {
            var $container = $('#lightbox');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function() {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

        });

    }());
}
main();
