$(document).ready(function(){

    // inizializzo le variabili freccia

    var arrowPrev = $('.slider-wrapper .prev');
    var arrowNext = $('.slider-wrapper .next');
    var circles = $('.nav i');

    // onclick

    arrowNext.click(function(){
        nextImage();
    });

    arrowPrev.click(function(){
        prevImage();
    });

    circles.click(function(){
        var currentCircles = $('.nav i.active');
        var currentImage = $('.images img.active');

        currentCircles.removeClass('active');
        currentImage.removeClass('active');

        $(this).addClass('active');

        if ($('.nav i:first-child').hasClass('active')) {
            $('.images img:first-child').addClass('active');
        }  else if ($('.nav i:nth-child(2)').hasClass('active')){
            $('.images img:nth-child(2)').addClass('active');
        }  else if ($('.nav i:nth-child(3)').hasClass('active')){
            $('.images img:nth-child(3)').addClass('active');
        }  else if($('.nav i:last-child').hasClass('active')){
            $('.images img:last-child').addClass('active');
        }
    
    }) 



    /***FUNZIONI***/

    function nextImage() {
        var currentImage = $('.images img.active');
        var currentCircle = $('.nav i.active');

        currentImage.removeClass('active');
        currentCircle.removeClass('active');

        if(currentImage.hasClass('last')) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        }  else {
            currentImage.next().addClass('active');
            currentCircle.next().addClass('active');
        }
    }

    function prevImage() {
        var currentImage = $('.images img.active');
        var currentCircle = $('.nav i.active');

        currentImage.removeClass('active');
        currentCircle.removeClass('active');

        if(currentImage.hasClass('first')) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        }  else {
            currentImage.prev().addClass('active');
            currentCircle.prev().addClass('active');
        }
    }

});
