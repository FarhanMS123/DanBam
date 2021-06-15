$(document).ready(function(){
    var slides = $("header .slides");
    var slide = slides.children();
    var slideIndex = 0;

    var indicator = $("header .nav .indicator");

    for(i=0; i<slide.length; i++){
        indicator.append($(`<div class="point${i==0 ? ' active' : ''}"></div>`));
    }

    var point = indicator.children();

    $("header .nav .control button.next").click(function(e){
        point.eq(slideIndex).removeClass('active');

        ++slideIndex;
        if(slideIndex == slide.length) slideIndex = 0;

        slides.css({
            // transform: `translateX(-${100 * slideIndex}%)`
            transform: `translateX(calc(-100% * ${slideIndex} / ${slide.length}))`
        });
        point.eq(slideIndex).addClass('active');
    });

    $("header .nav .control button.prev").click(function(e){
        point.eq(slideIndex).removeClass('active');

        if(slideIndex == 0) slideIndex = slide.length;
        --slideIndex;

        slides.css({
            // transform: `translateX(-${100 * slideIndex}%)`
            transform: `translateX(calc(-100% * ${slideIndex} / ${slide.length}))`
        });
        point.eq(slideIndex).addClass('active');
    });
});