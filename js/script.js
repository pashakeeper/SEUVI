$(document).ready(function () {
    $('.more_content').click(function () { //you can give id or class name here for $('button')
        $(this).html(function (i, old) {
            return old == '<span class="more_img_box">+</span> Розгорнути' ? '<span class="more_img_box">-</span> Згорнути' : '<span class="more_img_box">+</span> Розгорнути';
        });
    });
    $('#number_phone').niceSelect();
    $('#language').niceSelect();
    $('.main_slider').slick({
        prevArrow: '<div class="prev navs_slide"><i class="fa fa-angle-left"></i></div>',
        nextArrow: '<div class="next navs_slide"><i class="fa fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            }
        ]
    });
    $('.new_prod__slider').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    })
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('active');
        $('.main_menu__mobile').toggleClass('active');
    })
    $('#overlay').click(function () {
        $(this).toggleClass('active');
        $('.burger').toggleClass('active');
        $('.main_menu__mobile').toggleClass('active');
    })
})
