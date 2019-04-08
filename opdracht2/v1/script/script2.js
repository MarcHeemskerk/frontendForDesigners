var currentSlide = 1;
var maxSlide = $('.slide').length;

var caption = ['gatto', 'paolo', 'mario', 'giannio', 'roberto']


$('.slide').hide();
$('.slide').eq(0).show();

$('p').text(caption[0]);





function showSlide(){
  $('.slide').fadeOut();
  $('.slide:nth-child(' + currentSlide + ')').fadeIn(1000)
  $('p').text(caption[currentSlide-1])

  $('i').css('opacity', '0.3');
  $('i').eq(currentSlide-1).css('opacity', '1')



}

setInterval(function(){

  if(currentSlide < maxSlide){
    currentSlide++
    showSlide()
  } else {
    currentSlide = 1
    showSlide()
  }

},3000)







