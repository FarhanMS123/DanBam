$(document).ready(function(){
    $("#db-nav .menu .open").click(function(ev){
        $("#db-nav .menu .list").css({
            display: 'block'
        });
        
        setTimeout(function(){
            $("#db-nav .menu .list").addClass('show');
        }, 1);
    });

    $("#db-nav .menu .list-btn .close").click(function(ev){
        $("#db-nav .menu .list").removeClass('show');

        setTimeout(function(ev){
            $("#db-nav .menu .list").css({
                display: ''
            });
        }, 1000);
    });
});