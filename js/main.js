$(document).ready(function () {


  // cronometro
  var DataLimite = new Date("Jul 6, 2021 00:00:00").getTime();

  function CalculaTempo() {
    var agora = new Date().getTime(); // pegando o tempo de agora
    intervalo = DataLimite - agora;

    var segundos = 1000;
    var minutos = segundos * 60;
    var horas = minutos * 60;
    var dias = horas * 24;

    var d = Math.floor(intervalo / dias);
    var h = Math.floor((intervalo % dias) / horas);
    var m = Math.floor((intervalo % horas) / minutos);
    var s = Math.floor((intervalo % minutos) / segundos);

    document.getElementById("dia").innerHTML = d;
    document.getElementById("horas").innerHTML = h;
    document.getElementById("minutos").innerHTML = m;
    document.getElementById("segundos").innerHTML = s;
  }
  setInterval(function () {
    CalculaTempo();
  }, 1000);

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
  $(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(350).fadeOut('slow'); 
    $('body').delay(350).css({'overflow': 'visible'});
  })
  //]]>



  //fazendo animações para o site
  var $target = $('.animacao-l, .animacao-t, .animacao-b, .animacao-r, .animacao-s'),
      animacaoClass = 'animacao-start',
      offset = $(window).height() * .95;


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
        $(this).removeClass(animacaoClass)
      }
    })
  }

  // animaScroll();
  animaScroll();
  $(document).scroll(debounce(function(){
    animaScroll();
  },100));

  

});
