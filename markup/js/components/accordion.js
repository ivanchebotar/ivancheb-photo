export function initAccordion() {
  var $firstItem = $('.accordion-item').first();
  $firstItem.addClass('active');
  $firstItem.find('.accordion-content').css('display', 'flex');

  $('.accordion-header').on('click', function() {
    var $parentItem = $(this).parent('.accordion-item');
    
    if ($parentItem.hasClass('active')) {
      return;
    }
    
    $('.accordion-item').removeClass('active');
    $('.accordion-content').hide();
    
    $parentItem.addClass('active');
    $parentItem.find('.accordion-content').css('display', 'flex');
  });

  function checkAccordionOrientation() {
    if ($(window).width() <= 768) {
      $('.accordion-content').css({
        display: 'none',
        width: '100%'
      });
      
      $('.accordion-item.active').find('.accordion-content').css('display', 'block');
    } else {
      $('.accordion-item').removeClass('active');
      $('.accordion-content').css({
        display: 'none',
        width: '100%'
      });
      
      $firstItem.addClass('active');
      $firstItem.find('.accordion-content').css('display', 'flex');
    }
  }

  checkAccordionOrientation();

  $(window).resize(function() {
    checkAccordionOrientation();
  });
}
