$(document).ready(function() {
  $('#planepic1').click(function() {
//        
//        
//$(this).rotate({
//      duration:1000,
//      angle: 0,
//      animateTo:30
//      });
//       
//        
//        
        $("#planepic1").animate({
            top: '+=10vh'
        }, 1000);    
//      $(this).rotate({
//      duration:2000,
//      angle: 50,
//      animateTo:-30
//      });      
//        
        $("#planepic1").animate({
            top: '-=15vh'
        }, 1000);
//        
//        
        $("#planepic1").animate({
            top: '+=5vh'
        }, 1000);
//        
//        
//        
    });
    
    
    $('.cactus_1').click(function() {
    $("#jumbo1").toggleClass('jumbotronstate1');
    $("#jumbo1").toggleClass('jumbotronstate2');    
});
    
    
    
    
    
    
});
