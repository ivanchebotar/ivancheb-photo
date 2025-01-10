export default function msnryGallery () {
  $(document).ready(function() {
    // Initialize Isotope with Masonry layout
    var $grid = $('.gallery-grid').isotope({
      itemSelector: '.gallery-grid-item',
      layoutMode: 'masonry',
      masonry: {
        columnWidth: '.gallery-grid-item',
        percentPosition: true
      }
    });
  
    // Trigger Masonry layout after images are loaded
    $grid.imagesLoaded().progress(function() {
      $grid.isotope('layout');
    });
  
    // Filter items on click
    $('#filter-grid').on('click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
  
    // Add active class to clicked filter
    $('#filter-grid li').on('click', function() {
      $('#filter-grid li').removeClass('active-filter');
      $(this).addClass('active-filter');
    });
  });
  
}
