$(document).ready(function(){

    // inizializzo le variabili freccia

    var arrowPrev = $('.slider-wrapper .prev');
    var arrowNext = $('.slider-wrapper .next');

    // onclick

    arrowNext.click(function(){
        nextImage();
    });
    
    arrowPrev.click(function(){
        prevImage();
    });

    /***FUNZIONI***/

    function nextImage() {
        var currentImage = $('.images img.active');
        var currentCircle = $('.nav i.active');

        currentImage.removeClass('active');
        currentCircle.removeClass('active');

        if(currentImage.hasClass('last')) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active')
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
            $('.nav i.last').addClass('active')
        }  else {
            currentImage.prev().addClass('active');
            currentCircle.prev().addClass('active');
        }
    }







});