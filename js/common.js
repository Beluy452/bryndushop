(function () {
    let header = $('header');
    (window.onresize = function () {
        var widthDisplay = window.innerWidth;
        var heightDisplay = window.innerHeight;
        $('header .caret').css({'max-height':heightDisplay})
        if(widthDisplay <= 1080){
            $('.background-menu').css({'max-height':heightDisplay});
        }
        if(widthDisplay >= 1080){
            $('.mobile-menu').removeClass('active');
        }
    })();

    window.addEventListener("scroll", function () {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        if (header) {
            if (scroll >= 120) {
                header.addClass('active');
            }else if(scroll <= 120){
                header.removeClass('active');
            }
        }
    });

    // function addEvent(selector,event,callback) {
    //     const items = document.querySelectorAll(selector);
    //     let itemLen = items.length;
    //     while(itemLen--) {
    //         items[itemLen].addEventListener(event,callback);
    //     }
    // }
    // addEvent('.item','click',function () {
    //     this.classList.toggle('active');
    // });

    // function adClass(url) {
    //     switch (url) {
    //         case "/" : {
    //             document.getElementsByClassName('conf')[0].classList.add('active');
    //             break
    //         }
    //         case "/views/restaurant.html" : {
    //             document.getElementsByClassName('res')[0].classList.add('active');
    //             break
    //         }
    //         case "/views/pizzeria.html" : {
    //             document.getElementsByClassName('pizza')[0].classList.add('active');
    //             break
    //         }
    //         case "/views/hotel.html" : {
    //             document.getElementsByClassName('hotel-link')[0].classList.add('active');
    //             break
    //         }
    //     }
    // }
    //
    // adClass(window.location.pathname);

    // let scroll = document.getElementsByClassName('scroll');
    // for (let i = 0; i < scroll.length; i++) {
    //     scroll[i].onclick = function (event) {
    //         event.preventDefault();
    //         down.click();
    //         let anchor = this.hash;
    //         $('html, body').animate({
    //             scrollTop: $(anchor).offset().top - 0
    //         }, 600);
    //     };
    // }
    //
    // let form = document.querySelector("form");
    // if (form) {
    //     form.addEventListener("submit", function (event) {
    //         let formData = new FormData(form);
    //         let xhr = new XMLHttpRequest();
    //         xhr.open("POST", "/libs/send.php");
    //         xhr.onreadystatechange = function () {
    //             if (xhr.readyState === 4) {
    //                 if (xhr.status === 200) {
    //                     showPopup();
    //                     form.reset();
    //                 } else {
    //                     console.error('error');
    //                 }
    //             }
    //         };
    //         xhr.send(formData);
    //         event.preventDefault();
    //     });
    // }

    $('.decrement').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.increment').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.go-to-cart,.return-to-shopping').click(function (e) {
        e.preventDefault();
        $('.caret').toggleClass('active');
    })

    $('.search-link,.close-search').click(function (e) {
        e.preventDefault();
        var searchMobile = $('.search-mobile');
        searchMobile.toggleClass('active');
    })

    $('.toggle-menu,.close-menu').click(function (e) {
        e.preventDefault();
        $('.mobile-menu').toggleClass('active');
    })

    $('.banner-slider').slick({
        arrows:false,
        autoplay:true,
        dots:true,
        fade: true,
        slidesToShow:1,
        speed:500,
        autoplaySpeed: 5000,
    });

    $('.category-slider').slick({
        arrows:true,
        autoplay:true,
        dots:false,
        slidesToShow:1,
        speed:500,
        autoplaySpeed: 5000,
        nextArrow: '<a href="#" class="arrow-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve">\n' + '<g>\n' +
        '\t<path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5   c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' +'</svg>\n</a>',
        prevArrow: '<a href="#" class="arrow-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve">\n' + '<g>\n' +
        '\t<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225   c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '<g>\n' + '</g>\n' + '</svg>\n</a>',
        responsive: [
            {
                breakpoint: 1160,
                settings: {
                    arrows:false
                }
            }
        ]
    });

    $('.close-all-characteristic').click(function (e) {
        e.preventDefault();
        $('.hidden-characteristic').toggleClass('active');
        $('.one-goods-container').toggleClass('active');
    })

})();

window.onload = function() {
    $('.preload').remove();
};
