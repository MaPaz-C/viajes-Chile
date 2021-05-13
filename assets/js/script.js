$(function(){

// smooth scroll
    $("a").click(function(event){
        if(this.hash !==""){
          event.preventDefault();
    
          var gato = this.hash;
    
          $("html, body").animate({
            scrollTop: $(gato).offset().top
          }, 800, function(){
            window.location.hash = gato;
          });
        }
      });

// cambio color al pasa mouse en título de section "Quiénes somos", "Destacados" y "contacto".
$(".secQS").on('mouseenter',function(){
  $(this).css('color','#5bc0de');
});
$(".secQS").mouseleave(function() {
  $(this).css("color","white");
});

$(".secDest").on('mouseenter',function(){
  $(this).css('color','#5bc0de');
});
$(".secDest").mouseleave(function() {
  $(this).css("color","white");
});

$(".secCont").on('mouseenter',function(){
  $(this).css('color','#5bc0de');
});
$(".secCont").mouseleave(function() {
  $(this).css("color","white");
});


  // popover: ¿Quienes somos?
  $('[data-toggle="popover"]').popover()


  // tooltip: footer
  $('[data-toggle="tooltip"]').tooltip();
      
      
});