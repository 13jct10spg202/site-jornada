// //função que carrega o preloader
// $(window).load(function () {
//   $('#preloader .inner').fadeOut();
//   $('#preloader').delay(350).fadeOut('slow'); 
//   $('body').delay(350).css({'overflow': 'visible'});
// })


// cronometro
var DataLimite = new Date('Jul 6, 2021 00:00:00').getTime();

function CalculaTempo(){
  var agora = new Date().getTime(); // pegando o tempo de agora
    intervalo = DataLimite - agora;

    var segundos = 1000;
    var minutos = segundos * 60;
    var horas = minutos * 60;
    var dias = horas * 24;

    var d = Math.floor(intervalo/(dias));
    var h = Math.floor((intervalo % (dias))/(horas));
    var m = Math.floor((intervalo % (horas))/(minutos));
    var s = Math.floor((intervalo %(minutos))/segundos);

    document.getElementById('dia').innerHTML = d;
    document.getElementById('horas').innerHTML = h;
    document.getElementById('minutos').innerHTML = m;
    document.getElementById('segundos').innerHTML = s;


    
}

setInterval(function(){
  CalculaTempo();
},1000)