; ($ => {
    /*
     * @description     Animate typing text in an element
     * @param   {HTML Element} elementTyping - The element which the text be typed in it
     * @param   {string} text - The text that must be typed
     * @param   {number} speed(ms) - The speed of typing each character
     * @param   {number} delay(ms) - The delay before starting to type
     * @return  {Promise}
    */
    const typeText = (elementTyping, text, speed, delay) =>
        new Promise(resolve =>
            // Use setTimeout to controll the delay before starting
            setTimeout(() => {
                var charIndex = 0;
                var typing = setInterval(() => {
                    elementTyping.text(text.substr(0, ++charIndex));
                    if (charIndex == text.length) {
                        clearInterval(typing);
                        return resolve();
                    }
                }, speed);
            }, delay));

    /*
     * @description     Animate removing text from an element
     * @param   {HTML Element} elementTyping - The element which the text be removed from it
     * @param   {number} speed(ms) - The speed of removing each character
     * @param   {number} delay(ms) - The delay before starting to remove
     * @return  {Promise}
    */
    const removeText = (elementTyping, speed, delay) =>
        new Promise(resolve =>
            // Use setTimeout to controll the delay before starting
            setTimeout(function () {
                var text = elementTyping.text();
                var removing = setInterval(function () {
                    text = text.substr(0, text.length - 1);
                    elementTyping.text(text);
                    if (!text.length) {
                        clearInterval(removing);
                        return resolve();
                    }
                }, speed);
            }, delay));

    /*
     * @description     Show the cursor at the end of the text
     * @param   {HTML Element} elementTyping - The element to add an index to it
     * @param   {number} index - The index of each .animated-typing element
     * @param   {number} speed(ms) - The speed of blinking cursor
    */
    const showCursor = (elementTyping, index, speed) => {
        // Seperate each element by adding an index attribute to them to reach individual speed for each of them
        elementTyping.attr('data-animate-index', index);
        // The cursor be shown just by adding a CSS pseudo-element(::after) and animate that
        $('head').append(`
           <style>
               .animate-typing[data-animate-index="${index}"]::after {
                   content: '|';
                   animation: animateCursor ${speed}ms infinite alternate cubic-bezier(.68,-0.55,.27,1.55);
               }
           </style>
       `);
    }

    /*
     * @description     Show the cursor at the end of the text
     * @param   {number} speed(ms) - The speed of blinking cursor
    */
    $('.animate-typing').each(function (index) {
        const elementTyping = $(this);
        // The speed of typing each character
        const typeSpeed = +elementTyping.data('type-speed') || 200;
        // The delay before start to type
        const typeDelay = +elementTyping.data('type-delay') || 200;
        // The speed of removing each character
        const removeSpeed = +elementTyping.data('remove-speed') || 50;
        // The delay before start to remove
        const removeDelay = +elementTyping.data('remove-delay') || 500;
        // The speed of animate cursor
        const cursorSpeed = +elementTyping.data('cursor-speed') || 300;
        // If the loop equals to true, iterate through animation sub-texts will be infinity
        const loop = elementTyping.data('animate-loop') || false;
        // Convert the initialized text to sub-texts
        const textList = elementTyping.text().split('|');
        // Make the element clear from text
        elementTyping.text('');

        // Show the animated cursor at the end of text
        showCursor(elementTyping, index, cursorSpeed);

        // Iterate to sub-texts for animating
        // Use async/await because each iteration must wait for each animation to be done
        (async () => {
            var cycle = 0;
            // Use do/while because the iteration for all sub-texts must be run at least once
            do {
                // Iterate for each sub-text
                for (let subText of textList) {
                    if (cycle++)
                        await removeText(elementTyping, removeSpeed, removeDelay);
                    if (subText.trim())
                        await typeText(elementTyping, subText.trim(), typeSpeed, typeDelay)
                }
                // Set loop to true to iterate animate typing for sub-texts Infinity
            } while (loop);
        })();
    });

    /*
     * @description     Add keyframes animation for animating the cursor once to Head tag
    */
    (() =>
        $('head').append(`
            <style>
                @keyframes animateCursor {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
            </style>
        `)
    )();

})(jQuery);
















document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const items = document.querySelectorAll(".pro-card-mobile");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filterValue = this.getAttribute("data-filter");

            items.forEach(item => {
                item.style.opacity = "0";
                item.style.display = "none";
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.style.display = "block";
                    setTimeout(() => {
                        item.style.opacity = "1";
                    }, 100);
                }
            });

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});




// const popupScreen = document.querySelector('.popup');
// window.addEventListener('click', () =>{
//     setTimeout(() => {
//         popupScreen.classList.add()
//     })
// })
// const count_id = "<?php $date_today; ?>";
// var countDownDate = new Date(count_id).getTime();

// // update conunt dowun every 1 1second 

// var x = setInterval(function(){

// // gettoday s and time

// var now = new Date().getTime();

// // find the distance betwwn now and count daoun date

// var distance = countDownDate - now;

// // time calculation for today 

// var days = math.floor(distance/(1000 * 60 * 60 * 24));
// var hours = math.floor((distance%(1000*60*60*24))/(1000*60*60));
// var minutes = math.floor((distance%(1000*60*60))/(1000*60));
// var secinds = math.floor((distance%(1000*60))/1000);

// // output the ruselt in an elemrnts euth id deom

//     document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + secinds + "s ";
//     if (distance<0){
//         clearInterval(x);
//         document.getElementById("demo").innerHTML="EXPIRED";
//     }
// },1000);

// or just with selector string



window.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const previewImage = document.getElementById('preview-image');

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', function () {
            const imagePath = this.getAttribute('src');
            previewImage.setAttribute('src', imagePath);
        });
    });
});









// rempving the image alt from the user iamge


document.addEventListener('DOMContentLoaded', function () {
    // Get the img element within the div with class "image"
    var myImage = document.querySelector('.user-img a img');

    // Change the alt attribute
    if (myImage) {
        myImage.alt = '';
    }
});




AOS.init();
(function ($) {

    $.fn.hScroll = function (amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent,
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
                position = $(this).scrollLeft();
            position += direction > 0 ? -amount : amount;
            $(this).scrollLeft(position);
            event.preventDefault();
        })
    };


    $(document).ready(function () {
        $('#box').hScroll(40); // You can pass (optionally) scrolling amount
    });



    $('.laptop-btn').click(function () {
        if ($('.laptop-menu').hasClass("show-menu")) {
            $('.laptop-menu').removeClass("show-menu");
            $('.laptop-menu ul').removeClass("show-menu-one");
        } else {
            $('.laptop-menu').addClass("show-menu");
            $('.laptop-menu ul').addClass("show-menu-one");
        }
    });


    $('.navbar-toggler').click(function () {
        if ($('.row-one').hasClass("show-menu-one")) {
            $('.row-one').removeClass("show-menu-one");
        } else {
            $('.row-one').addClass("show-menu-one");
        }
    });

    $('.navbar-toggler').click(function () {
        // 
        if ($('.onee').hasClass("x")) {
            $('.onee').removeClass("x");
        } else {
            $('.onee').addClass("x");
        }
        // 
        if ($(".toww").hasClass('towww')) {
            $(".toww").removeClass('towww');
        } else {
            $(".toww").addClass('towww');
        }
        // 
        if ($('.thrree').hasClass("y")) {
            $('.thrree').removeClass("y");
        } else {
            $('.thrree').addClass("y");
        }
        // 
    });



    var navbarHeight = $('.navbar').outerHeight(); // Get navbar height

    $(window).scroll(function () {
        if ($(window).scrollTop() > navbarHeight) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });


    // $('.grid').masonry({
    //     // options
    //     itemSelector: '.grid-item',
    //     columnWidth: 200,
    //     horizontalOrder: true,
    //     // itemSelector: '.grid-item',
    //     // // stamp elements
    //     // stamp: '.stamp'
    //   });

    $(document).ready(function () {
        $('.sss.g-masonry').masonry({
            // Masonry options
            gutter: 10,

        });
    });






    $('.hotel-gallery-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        mouseDrag: true,
        rtl: false,
        dots: false,
        autoHeight: true,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause: true,
        navText: [
            "<i class='fa fa-solid fa-arrow-left'></i>",
            "<i class='fa fa-solid fa-arrow-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });
    //  Hero Slider Wrap JS
    $('.hero-slider-wrap').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        mouseDrag: true,
        items: 1,
        rtl: false,
        dots: true,
        autoHeight: true,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause: true,
        navText: [
            "<i class='fa fa-solid fa-arrow-left'></i>",
            "<i class='fa fa-solid fa-arrow-right'></i>",
        ],
    });
    $('.product-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        mouseDrag: true,
        rtl: false,
        dots: true,
        autoHeight: true,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause: true,
        navText: [
            "<i class='fa fa-solid fa-arrow-left'></i>",
            "<i class='fa fa-solid fa-arrow-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 4,
            }
        }
    });
    $('.trending-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        mouseDrag: true,
        rtl: false,
        dots: true,
        autoHeight: true,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause: true,
        navText: [
            "<i class='fa fa-solid fa-arrow-left'></i>",
            "<i class='fa fa-solid fa-arrow-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });
    $('.deal-slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        mouseDrag: true,
        rtl: false,
        dots: false,
        autoHeight: true,
        autoplay: false,
        smartSpeed: 800,
        autoplayHoverPause: true,
        navText: [
            "<i class='fa fa-solid fa-arrow-left'></i>",
            "<i class='fa fa-solid fa-arrow-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    });
    //  Hero Slider Wrap JS
    $('.link-list').owlCarousel({
        loop: false,
        margin: 1,
        nav: false,
        mouseDrag: true,
        items: 3,
        autoWidth: true,
        rtl: false,
        dots: false,
        autoHeight: true,
        autoplay: false,
        smartSpeed: 800,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 4,
            },
            576: {
                items: 5,
            },
            768: {
                items: 7,
            },
            992: {
                items: 10,
            },
            1200: {
                items: 10,
            }
        }
    });


    $(document).ready(function () {
        var bigimage = $("#big");
        var thumbs = $("#thumbs");
        //var totalslides = 10;
        var syncedSecondary = true;

        bigimage
            .owlCarousel({
                items: 1,
                slideSpeed: 2000,
                nav: true,
                // autoplay: true,
                dots: false,
                loop: true,
                responsiveRefreshRate: 200,
                navText: [
                    '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                    '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
                ]
            })
            .on("changed.owl.carousel", syncPosition);

        thumbs
            .on("initialized.owl.carousel", function () {
                thumbs
                    .find(".owl-item")
                    .eq(0)
                    .addClass("current");
            })
            .owlCarousel({
                items: 4,
                dots: true,
                autoWidth: true,
                nav: true,
                margin: 2,
                navText: [
                    '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                    '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
                ],
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: 4,
                responsiveRefreshRate: 100
            })
            .on("changed.owl.carousel", syncPosition2);

        function syncPosition(el) {
            //if loop is set to false, then you have to uncomment the next line
            //var current = el.item.index;

            //to disable loop, comment this block
            console.log(el);
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }
            //to this
            thumbs
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = thumbs.find(".owl-item.active").length - 1;
            console.log(onscreen)
            var start = thumbs
                .find(".owl-item.active")
                .first()
                .index();
            var end = thumbs
                .find(".owl-item.active")
                .last()
                .index();
            console.log(end);
            if (current > end) {
                thumbs.data("owl.carousel").to(current, 100, true);
            }
            if (current < start) {
                thumbs.data("owl.carousel").to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                bigimage.data("owl.carousel").to(number, 100, true);
            }
        }

        thumbs.on("click", ".owl-item", function (e) {
            e.preventDefault();
            var number = $(this).index();
            bigimage.data("owl.carousel").to(number, 300, true);
        });
    });



    // Client Wrap JS
    $('.client-wrap').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        rtl: true,
        mouseDrag: false,
        items: 1,
        dots: false,
        autoHeight: true,
        autoplay: true,

        smartSpeed: 1500,
        autoplayHoverPause: true,
        center: true,
        navText: [
            "<i class='fa fa-solid fa-arrow-right'></i>",
            "<i class='fa fa-solid fa-arrow-left'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 4,
            }
        }
    });

    // revies
    $('.reviews').owlCarousel({

        loop: true,
        nav: true,
        mouseDrag: true,
        navText: [
            "<i class='fa fa-solid fa-arrow-left'></i>",
            "<i class='fa fa-solid fa-arrow-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    });
    // blogslider
    $('.blogslider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        mouseDrag: true,
        navText: [
            "<i class='fa fa-solid fa-arrow-left'></i>",
            "<i class='fa fa-solid fa-arrow-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });
    // counter'




    // $('.value').each(function(){
    //     $(this).prop('Counterr',0).animate({
    //         Counter: $(this).text()
    //     },{
    //         duration: 3500,
    //         easing: 'swing',
    //         step: function (now){
    //             $(this).text(Math.ceil(now));
    //         }
    //     });
    // });


    // ########################################################################
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // ########################################################################


    // filter items
    $(function () {
        $('#easy-filter-wrap').easyFilter({
            // or 'fade'
            animation: 'slide',
            // duration of the animation
            duration: 400
        });
    });

    $(".wwwoffline").click(function () {
        $(".online").removeClass("red");
        $(".all").removeClass("red");
        $(".offline").addClass("red");
    });
    $(".wwwonline").click(function () {
        $(".all").removeClass("red");
        $(".offline").removeClass("red");
        $(".online").addClass("red");
    });
    $(".wwwall").click(function () {
        $(".all").addClass("red");
        $(".offline").removeClass("red");
        $(".online").removeClass("red");
    });

    var countdownDate = new Date("2024-1-29 00:00:00").getTime();

    var countdown = setInterval(function () {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        if (distance < 0) {
            clearInterval(countdown);
            $("#days").text("0");
            $("#hours").text("0");
            $("#minutes").text("0");
            $("#seconds").text("0");
        }
    }, 1000);


    // Start the countdown
    countdown(startDay, endDay);
    // Start the countdown
    countdown();

    $(".mobile-search-btn").click(function () {
        $(".lang").toggle();
    });

    //Header Search
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function () {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function () {
            $('body').removeClass('search-active');
        });
    }


    // data-background    
    $(document).on('ready', function () {
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    });

    // wow init
    new WOW().init();

    // project-carousel
    $('.project-carousel').owlCarousel({
        margin: -1,

        loop: false,

        autoplay: true,
        autoplayTimeout: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }

    })
    // hero slider
    $('.hero-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: -1,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        navText: [
            "<i class='fal fa-long-arrow-left'></i>",
            "<i class='fal fa-long-arrow-right'></i>"
        ],
    });

    $('.hero-slider').on('change.owl.carousel', function (event) {
        new WOW().init();
    });


    // partner-slider
    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    // testimonial-slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // case-slider
    $('.case-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        navText: [
            "<i class='fal fa-long-arrow-left'></i>",
            "<i class='fal fa-long-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // pest-problem-slider
    $('.pest-problem-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    // preloader
    $(window).on('load', function () {
        $(".preloader").fadeOut("slow");
    });

    // scroll to top
    $(window).scroll(function () {

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").fadeIn('slow');
        } else {
            $("#scroll-top").fadeOut('slow');
        }
    });

    $("#scroll-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("fixed-top");
        } else {
            $('.navbar').removeClass("fixed-top");
        }
    });

})(jQuery);