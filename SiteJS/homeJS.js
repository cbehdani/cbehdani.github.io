$(document).ready(function() {
  $('#planepic1').click(function() {
        $("#planepic1").animate({
            top: '+=10vh'
        }, 1000);    
        $("#planepic1").animate({
            top: '-=15vh'
        }, 1000);
        $("#planepic1").animate({
            top: '+=5vh'
        }, 1000);     
    });
    $('.cactus_1').click(function() {
    $("#jumbo1").toggleClass('jumbotronstate1');
    $("#jumbo1").toggleClass('jumbotronstate2');    
    });
});




