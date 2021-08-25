$(window).on('load', function() {
  $('#modal').modal('show');
  console.log("abre modal")
});

$(document).ready(function () {

  

  //botão de scroll para o topo
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("#scrollBtn").addClass("show");
    } else {
      $("#scrollBtn").removeClass("show");
    }
  });

  $("#scrollBtn").click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  });

  //Animação de preloader no site
  //<![CDATA[
  // $(window).on('load', function () {
  setTimeout(function(){
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(350).fadeOut('slow'); 
    $('body').delay(350).css({'overflow': 'visible'});
    
  // })
}, 100);
  //]]>





  //fazendo animações para o site
  var $target = $('.animacao-l, .animacao-t, .animacao-b, .animacao-r, .animacao-s'),
      animacaoClass = 'animacao-start',
      offset = $(window).height() ;


//debounce do lodash
debounce = function(func,wait,immediate){
  var timeOut;
  return function(){
    var context = this,args = arguments;
    var later = function (){
      timeOut = null;
      if(!immediate) func.apply(context,args);
    };
    var callNow = immediate && !timeOut;
    clearTimeout(timeOut);
    timeOut = setTimeout(later,wait);
    if(callNow) func.apply(context,args);
  };
}

  //função que fará os elementos aparecerem    
  function animaScroll(){
    var documentoTopo = $(document).scrollTop(); 

    //para cada div que tenha animação
    $target.each(function(){
      var itemTopo = $(this).offset().top;
      if(documentoTopo > itemTopo - offset){
        $(this).addClass(animacaoClass);
      }else{
        // $(this).removeClass(animacaoClass)
      }
    })
  }

  // animaScroll();
  animaScroll();
  $(document).scroll(debounce(function(){
    animaScroll();
  },100));

  

});
