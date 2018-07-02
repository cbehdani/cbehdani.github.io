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

$(function() {
      // Select link by id and add click event
      $('#scrolltest, #mp').click(function() {

        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#bodyscroll").offset().top }, // Tell it to scroll to the top #bottom
          2000 // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
      });
    });

$(function() {
      // Select link by id and add click event
      $('#home').click(function() {

        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: '0px'}, // Tell it to scroll to the top #bottom
          1500 // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
      });
    });

