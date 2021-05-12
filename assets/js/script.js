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

      // cambio color

      // $(".btn-link").on('click',function(){
      //   $(this).css('color','black');
      // });

      // $(".btn-link").dblclick(function(){
      //   $(this).css('color','red');
      // });

      // popover: ¿Quienes somos?
      $('[data-toggle="popover"]').popover()


    // tooltip: footer
      $('[data-toggle="tooltip"]').tooltip();
      
      
});