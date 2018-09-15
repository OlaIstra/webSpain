$(function(){
  $('.contacts__phone__js').click(function() {
    $('#exampleModal').arcticmodal({
      overlay: {
        css: {
          backgroundColor: '#000',            
          opacity: .9,
          }
      }
/*     $('.form__btn__js').click(function() {
        document.getElementById('exampleModal').style.display = 'none';
        $('#exampleModal1').arcticmodal({
          overlay: {
            css: {
            backgroundColor: '#000',            
            opacity: .9,
            }
          }
        })
        */          
      })
  

})
});

$(function(){
  $('.form__btn__js').click(function() {
    document.getElementById('exampleModal').style.display = 'none';
    $('#exampleModal1').arcticmodal();          
  })
});









$(document).ready(function(){
  $('.gallery').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    appendArrows:'.gallery__arrow',
    nextArrow: '<i class="fas fa-arrow-circle-right fa-3x blue" aria-hidden="true"></i>',
    prevArrow: '<i class="fas fa-arrow-circle-left fa-3x blue" aria-hidden="true"></i>',
  })
 });
