$(document).ready(function(){
  //Numero de slides
  var imgItems  = $('.slider li').length;
  var imgPos = 1;

  //Agreagando paginación
  for (var i = 1; i <= imgItems; i++) {
    $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
  }

  //Ocultamos todos los slides
  $('.slider li').hide();
  //Mostramos el primer slide
  $('.slider li:first').show();
  //Damos estilo al primer item de la paginación
  $('.pagination li:first').css({'color':'#cd6e2e'});

  //Ejecutamos todas las funciones
  $('.pagination li').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);


  setInterval(function(){
    nextSlider();
  }, 3000);

  //Funciones
  function pagination(){
    //Posicion de la paginación seleccionada
    var paginationPos = $(this).index() + 1;

    //Ocultamos todos los slides
    $('.slider li').hide();
    //Mostramos el slide seleccionado
    $('.slider li:nth-child('+ paginationPos +')').fadeIn();

    //Estilo a la paginación seleccionada
    $('.pagination li').css({'color':'#858585'});
    $(this).css({'color':'#cd6e2e'});

  }

  function nextSlider(){
    if(imgPos >= imgItems){
      imgPos = 1;}
      else {
        imgPos++;
      }

    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color':'#cd6e2e'});

    //Ocultamos todos los slides
    $('.slider li').hide();
    //Mostramos el slide seleccionado
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
  }

  function prevSlider(){
    if(imgPos <= 1){
      imgPos = imgItems;}
      else {
        imgPos--;
      }

    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color':'#cd6e2e'});

    //Ocultamos todos los slides
    $('.slider li').hide();
    //Mostramos el slide seleccionado
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
  }


});
