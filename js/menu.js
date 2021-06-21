$(document).ready(function(){
    $("#tab button").click(function (event) {
        $("article > .slide").removeClass("active");
        $(`article > ${this.dataset['target']}`).addClass("active");
        $("#tab button").removeClass("active");
        $(this).addClass("active");
        // this.dataset['target']
        // console.log({this: this, event});
    });

    var slides = $("#promo .slides");
    var slides_item = slides.children();
    var index_slides = 0;
    var q;
    $("#promo .next").click(function (event) {
        ++index_slides;
        if(index_slides >= slides_item.length) index_slides = 0;
        slides.css({transform: `translateX(calc(-100% * ${index_slides} / ${slides_item.length}))`});
    });
    $("#promo .prev").click(function (event) {
        if(index_slides <= 0) index_slides = slides_item.length;
        --index_slides;
        slides.css({transform: `translateX(calc(-100% * ${index_slides} / ${slides_item.length}))`});
    });
});