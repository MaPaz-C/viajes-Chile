$(function(){

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

      // $(".text-uppercase").on('click',function(){
      //   $(this).css('color','red');
      // });

    
      $('[data-toggle="tooltip"]').tooltip();
      

      
     


});