$(function (){

    'use strict';

    // gift.html

    // search navbar

    $('.navbar-nav .search').click(function (){
        $('.search-card').addClass('click-search');
    });

    $('.search-card .close').click(function (){
        $('.search-card').removeClass('click-search');
    });

    // products carousel

    $(".products .owl-carousel").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 4,
        nav: true,
        loop: true,
        dots: false,
        responsive: {
            0 : {
                items: 1
            },
            485 : {
                items: 2
            },
            728 : {
                items: 3
            },
            1200 : {
                items: 4
            }
        }
    });

    // featured list

$('.featured-list li').click(function (){

    $(this).addClass('active').siblings().removeClass("active");

    $('.featured .row > div').hide();

    $($(this).data('list')).fadeIn();
});

// heart button

$('.button-heart').click(function(){
    $(this).toggleClass('active');
});

// client

$(".client .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 1,
    nav: true,
    loop: true,
    dots: true,
});

// arrival

$(".arrival .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 4,
    nav: true,
    loop: true,
    dots: false,
    responsive: {
        0 : {
            items: 1
        },
        485 : {
            items: 2
        },
        728 : {
            items: 3
        },
        1200 : {
            items: 4
        }
    }
});

// menufacture

$(".menufacture .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 5,
    nav: true,
    loop: true,
    dots: false,
    responsive: {
        0 : {
            items: 1
        },
        485 : {
            items: 2
        },
        728 : {
            items: 3
        },
        1200 : {
            items: 5
        }
    }
});

// scroll to top

$(window).scroll(function () {
    if ($(window).scrollTop() >= 700) {
        $('.scroll-top').fadeIn(400);
    }else{
        $('.scroll-top').fadeOut(400);
    }
});
$('.scroll-top').click(function () {
    
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

///////////////////////////web page detail/////////////////////////////

// gallery

var numOfThum = $('.thumbnails').children().length,
marginBetweenThum = '0.5',
totMarginBetwThum = (numOfThum - 1) * marginBetweenThum,
thumWidth = (100 - totMarginBetwThum) / numOfThum;

$('.thumbnails img').css({

'width' : thumWidth + '%',
'margin-right' : marginBetweenThum + '%'
});   

$('.thumbnails img').on('click', function (){

$(this).addClass('selected').siblings().removeClass('selected');

$('.master-image img').hide().attr('src', $(this).attr('src')).fadeIn(500);
});

// increment and decrement number

var i;
$('.plus').click(function () {
    i = parseInt($('.number').val());
    i = i + 1;
    $('.number').val(i);
});
$('.minus').click(function () {
    i = parseInt($('.number').val());
    i = i - 1;
    if (i == 0) {
        i = 1;
    }
    $('.number').val(i);
});

// color add .active

$('.color div').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
});

 // size add .active

 $('.size li').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
});

// tabs describtion

$('.tabs-list li').on('click', function (){

    $(this).addClass('show').siblings().removeClass('show');

    $('.content-list > div').hide();

    $($(this).data('content')).fadeIn();
});

////////////////////////////////web page product1//////////////////

// class active color product

$('.color-product li').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
});

$('.number-page div').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
});

////////////////////////////////web page faq//////////////////

$('.btn-faq').click(function(){
    $(this).toggleClass('active');
});

////////////////////////////////web page whishlist//////////////////

$('.close-shop-cart').click(function (){

    $($(this).data('close')).fadeOut();
});

$('.close-shop-whish').click(function (){

    $($(this).data('close')).fadeOut();
});

////////////////////////////////web page my account//////////////////

$('.show-account').on('click', function (){

    $(this).addClass('active').siblings().removeClass('active');

    $('.content-list > div').hide();

    $($(this).data('content')).fadeIn();
});

});
