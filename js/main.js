<<<<<<< HEAD
=======
$(document).ready(function(){  
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-61202468-1', 'auto');
  ga('send', 'pageview');
>>>>>>> c30fc75bb32e1e9914dd8925146ad3413192eda0

/*filtros-responsive*/


  $('#abrir-filtros').click(function(e){
        $(this).hide();
        $('#cerrar-filtros').show();
        $('.filtros-2').show();
        return false;
    });

      $('#cerrar-filtros').click(function(e){
        $(this).hide();
        $('#abrir-filtros').show();
        $('.filtros-2').hide();
        return false;
    });
     $('#abrir-ordenar').click(function(e){
        $(this).hide();
        $('#cerrar-ordenar').show();
        $('.container-ordenar-mobile').show();
        return false;
    });

      $('#cerrar-ordenar').click(function(e){
        $(this).hide();
        $('#abrir-ordenar').show();
        $('.container-ordenar-mobile').hide();
        return false;
    });
/*filtros*/
    $('.categoria-arquitectura').click(function(e){
        e.preventDefault();
        if($('.categoria-arquitectura').hasClass('select')) {
          $('.categoria-arquitectura').removeClass('select');
          $('.anuncios li:not(.arquitectura)').show();
        } else {
          $('.categoria-arquitectura').addClass('select');
          $('.anuncios li.arquitectura').show();
          $('.anuncios li:not(.arquitectura)').hide();
          $('.lista-categorias a:not(.categoria-arquitectura)').removeClass('select');
        }
      });
      $('.categoria-animacion').click(function(e){
        e.preventDefault();
        if($('.categoria-animacion').hasClass('select')) {
          $('.categoria-animacion').removeClass('select');
          $('.anuncios li:not(.animacion)').show();
        } else {
          $('.categoria-animacion').addClass('select');
          $('.anuncios li.animacion').show();
          $('.anuncios li:not(.animacion)').hide();
          $('.lista-categorias a:not(.categoria-animacion)').removeClass('select');
        }
      });
      $('.categoria-audiovisual').click(function(e){
        e.preventDefault();
        if($('.categoria-audiovisual').hasClass('select')) {
          $('.categoria-audiovisual').removeClass('select');
          $('.anuncios li:not(.audiovisual)').show();
        } else {
          $('.categoria-audiovisual').addClass('select');
          $('.anuncios li.audiovisual').show();
          $('.anuncios li:not(.audiovisual)').hide();
          $('.lista-categorias a:not(.categoria-audiovisual)').removeClass('select');
        }
      });
      $('.categoria-industrial').click(function(e){
        e.preventDefault();
        if($('.categoria-industrial').hasClass('select')) {
          $('.categoria-industrial').removeClass('select');
          $('.anuncios li:not(.industrial)').show();
        } else {
          $('.categoria-industrial').addClass('select');
          $('.anuncios li.industrial').show();
          $('.anuncios li:not(.industrial)').hide();
          $('.lista-categorias a:not(.categoria-industrial)').removeClass('select');
        }
      });
      $('.categoria-grafico').click(function(e){
        e.preventDefault();
        if($('.categoria-grafico').hasClass('select')) {
          $('.categoria-grafico').removeClass('select');
          $('.anuncios li:not(.grafico)').show();
        } else {
          $('.categoria-grafico').addClass('select');
          $('.anuncios li.grafico').show();
          $('.anuncios li:not(.grafico)').hide();
          $('.lista-categorias a:not(.categoria-grafico)').removeClass('select');
        }
      });
      $('.categoria-moda').click(function(e){
       e.preventDefault();
        if($('.categoria-moda').hasClass('select')) {
          $('.categoria-moda').removeClass('select');
          $('.anuncios li:not(.moda)').show();
        } else {
          $('.categoria-moda').addClass('select');
          $('.anuncios li.moda').show();
          $('.anuncios li:not(.moda)').hide();
          $('.lista-categorias a:not(.categoria-moda)').removeClass('select');
        }
      });
      $('.categoria-web').click(function(e){
        e.preventDefault();
        if($('.categoria-web').hasClass('select')) {
          $('.categoria-web').removeClass('select');
          $('.anuncios li:not(.web)').show();
        } else {
          $('.categoria-web').addClass('select');
          $('.anuncios li.web').show();
          $('.anuncios li:not(.web)').hide();
          $('.lista-categorias a:not(.categoria-web)').removeClass('select');
        }
      });
      $('.categoria-fotografia').click(function(e){
        e.preventDefault();
        if($('.categoria-fotografia').hasClass('select')) {
          $('.categoria-fotografia').removeClass('select');
          $('.anuncios li:not(.fotografia)').show();
        } else {
          $('.categoria-fotografia').addClass('select');
          $('.anuncios li.fotografia').show();
          $('.anuncios li:not(.fotografia)').hide();
          $('.lista-categorias a:not(.categoria-fotografia)').removeClass('select');
        }
      });
      $('.categoria-programacion').click(function(e){
        e.preventDefault();
        if($('.categoria-programacion').hasClass('select')) {
          $('.categoria-programacion').removeClass('select');
          $('.anuncios li:not(.programacion)').show();
        } else {
          $('.categoria-programacion').addClass('select');
          $('.anuncios li.programacion').show();
          $('.anuncios li:not(.programacion)').hide();
          $('.lista-categorias a:not(.categoria-programacion)').removeClass('select');
        }
      });
/*mensajeria*/

$('.pestanya-m-no-leido').click(function() {
    $('.option-recibido').hide();
    $('.option-no-leido').show();
    $('.option-enviado').hide();
    $('.seleccionado-m').removeClass('seleccionado-m');
    $('.pestanya-m-no-leido').addClass('seleccionado-m');
    return false;
});
$('.pestanya-m-enviado').click(function() {
    $('.option-recibido').hide();
    $('.option-no-leido').hide();
    $('.option-enviado').show();
    $('.seleccionado-m').removeClass('seleccionado-m');
    $('.pestanya-m-enviado').addClass('seleccionado-m');
    return false;
});
$('.pestanya-m-recibido').click(function() {
    $('.option-recibido').show();
    $('.option-no-leido').hide();
    $('.option-enviado').hide();
    $('.seleccionado-m').removeClass('seleccionado-m');
    $('.pestanya-m-recibido').addClass('seleccionado-m');
    return false;
});
 $(".mensaje-1").click(function () {
    $('.mensaje-desplegado-1').fadeToggle("fast");
    $('.mensaje-desplegado-2').hide();
    $('.mensaje-desplegado-3').hide();
    $('.mensaje-desplegado-4').hide();
    $('.mensaje-desplegado-5').hide();
    });

$(".mensaje-2").click(function () {
    $('.mensaje-desplegado-2').fadeToggle("fast");
    $('.mensaje-desplegado-1').hide();
    $('.mensaje-desplegado-3').hide();
    $('.mensaje-desplegado-4').hide();
    $('.mensaje-desplegado-5').hide();
    });

$(".mensaje-3").click(function () {
    $('.mensaje-desplegado-3').fadeToggle("fast");
    $('.mensaje-desplegado-1').hide();
    $('.mensaje-desplegado-2').hide();
    $('.mensaje-desplegado-4').hide();
    $('.mensaje-desplegado-5').hide();
    });

$(".mensaje-4").click(function () {
    $('.mensaje-desplegado-4').fadeToggle("fast");
    $('.mensaje-desplegado-1').hide();
    $('.mensaje-desplegado-2').hide();
    $('.mensaje-desplegado-3').hide();
    $('.mensaje-desplegado-5').hide();
    });

$(".mensaje-5").click(function () {
    $('.mensaje-desplegado-5').fadeToggle("fast");
    $('.mensaje-desplegado-1').hide();
    $('.mensaje-desplegado-2').hide();
    $('.mensaje-desplegado-3').hide();
    $('.mensaje-desplegado-4').hide();
    });
/*ordenar*/
$('a.reciente').click(function(e) {
        e.preventDefault();
        tinysort('ul.anuncios>li',{data:'reciente', order:'desc'});
        $('.reciente').addClass('selection');
        $('.menu-ordenar a:not(.reciente').removeClass('selection');
      });

      $('a.popular').click(function(e) {
        e.preventDefault();
        tinysort('ul.anuncios>li',{data:'popularidad', order:'desc'});
        $('.popular').addClass('selection');
        $('.menu-ordenar a:not(.popular').removeClass('selection');
      });
      $('a.puntuado').click(function(e) {
        e.preventDefault();
        tinysort('ul.anuncios>li',{data:'puntuacion', order:'desc'});
        $('.puntuado').addClass('selection');
        $('.menu-ordenar a:not(.puntuado').removeClass('selection');
      });
/*pestanyas*/
$('.pestanya-2').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-2').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-2').addClass('seleccionado');
    return false;
});
$('.pestanya-3').click(function() {
    $('.option-1').hide();
    $('.option-2').hide();
    $('.option-4').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-3').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-3').addClass('seleccionado');
    return false;
});
$('.pestanya-4').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-2').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-4').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-4').addClass('seleccionado');
    return false;
});
$('.pestanya-5').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-2').hide();
    $('.option-6').hide();
    $('.option-5').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-5').addClass('seleccionado');
    return false;
});
$('.pestanya-6').click(function() {
    $('.option-1').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-2').hide();
    $('.option-5').hide();
    $('.option-6').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-6').addClass('seleccionado');
    return false;
});
$('.pestanya-1').click(function() {
    $('.option-2').hide();
    $('.option-3').hide();
    $('.option-4').hide();
    $('.option-5').hide();
    $('.option-6').hide();
    $('.option-1').show();
    $('.seleccionado').removeClass('seleccionado');
    $('.pestanya-1').addClass('seleccionado');
    return false;
});
/*scroll*/
$('#scroll-to-cursos').click(function(e) {
    e.preventDefault();
    $(window).scrollTo($('#cursos'), 800);
});
$('#scroll-to-creativos').click(function(e) {
    e.preventDefault();
    $(window).scrollTo($('#creativos'), 800);
});
$('#scroll-to-dudas').click(function(e) {
    e.preventDefault();
    $(window).scrollTo($('#dudas'), 800);
});
$('#scroll-to-como-funciona').click(function(e) {
    e.preventDefault();
    $(window).scrollTo($('#como-funciona'), 800);
});
/*tablas*/
$('td .icono-tabla-off').click(function() {
    $(this).hide();
    $(this).siblings('.icono-tabla-on').css({
        'display': 'block'
    });
});
$('td .icono-tabla-on').click(function() {
    $(this).hide();
    $(this).siblings('.icono-tabla-off').css({
        'display': 'block'
    });
});
/*buscador*/
$('#abrir').click(function(e){
    $('.buscador-desplegado').show();
    return false;
    });

$('#cerrar').click(function(e){
   $('.buscador-desplegado').hide();
    return false;
    });
<<<<<<< HEAD
/*estrellas valorar*/
$( "li.primera-estrella" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
    }else{
        $(this).nextAll().addClass("estrella-inactiva");
    }
});

$( "li.segunda-estrella" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
        $(this).prevAll().addClass("estrella-activa");
        $(this).prevAll().removeClass("estrella-inactiva");
    }else{

        $(this).nextAll().addClass("estrella-inactiva");

    }

});
$( "li.tercera-estrella" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
        $(this).prevAll().addClass("estrella-activa");
        $(this).prevAll().removeClass("estrella-inactiva");
    }else{

         $(this).nextAll().addClass("estrella-inactiva");

    }
});
$( "li.cuarta-estrella" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
        $(this).prevAll().addClass("estrella-activa");
        $(this).prevAll().removeClass("estrella-inactiva");
    }else{
         $(this).nextAll().addClass("estrella-inactiva");

    }
});
$( "li.quinta-estrella" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("estrella-inactiva")){
        $(this).addClass("estrella-activa");
        $(this).removeClass("estrella-inactiva");
        $(this).prevAll().addClass("estrella-activa");
        $(this).prevAll().removeClass("estrella-inactiva");
    }else{
         $(this).nextAll().addClass("estrella-inactiva");

    }
});
=======

>>>>>>> c30fc75bb32e1e9914dd8925146ad3413192eda0
/*niveles barras*/
$( "li.primera-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
    }else{
        $(this).nextAll().addClass("barra-inactiva");
    }
});

$( "li.segunda-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{

        $(this).nextAll().addClass("barra-inactiva");

    }

});
$( "li.tercera-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{

         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.cuarta-barra" ).click(function(e){
    e.preventDefault();
    if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.quinta-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.sexta-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.septima-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.octava-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.novena-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
$( "li.decima-barra" ).click(function(e){
    e.preventDefault();
     if($(this).hasClass("barra-inactiva")){
        $(this).addClass("barra-activa");
        $(this).removeClass("barra-inactiva");
        $(this).prevAll().addClass("barra-activa");
        $(this).prevAll().removeClass("barra-inactiva");
    }else{
         $(this).nextAll().addClass("barra-inactiva");

    }
});
})