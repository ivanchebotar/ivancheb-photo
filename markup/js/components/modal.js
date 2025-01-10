export default function initModal () {
  if (!sessionStorage.getItem('offerShown')) {
    const modalHTML = `
        <div id="offerModal" class="modal">
          <div class="modal-overlay"></div>
          <div class="modal-content">
            <span class="modal-content__close">&times;</span>
            <h2>Get 20% Off</h2>
            <p>Enjoy a special discount on your first photoshoot, available exclusively for portrait and couple sessions!</p>
            <button id="claimButton" class="btn btn--primary">Claim Offer</button>
            <p id="offerCode" style="display:none;">Your code: <strong>photo7881</strong></p>
          </div>
        </div>
    `;

    $('#modalContainer').html(modalHTML);

    function closeModal() {
      $('#offerModal').fadeOut();
      sessionStorage.setItem('offerShown', 'true');
    }

    $('.modal-content__close').on('click', function () {
      closeModal();
      $(".body").removeClass("modal-active");
    });

    $('.modal-overlay').on('click', function () {
      closeModal();
      $(".body").removeClass("modal-active");
    });

    $('#claimButton').on('click', function () {
      $(this).hide();
      $('#offerCode').fadeIn();
    });


    let isModalShown = false;

    if ($(window).width() >= 1024) {
      setTimeout(function () {
        $(document).on('mouseleave', function (e) {
          if (e.clientY <= 0 && !isModalShown) {
            $('#offerModal').fadeIn();
            $(".body").addClass("modal-active");
            isModalShown = true;
          }
        });
      }, 6000);
    } else {
      setTimeout(function () {
        $('#offerModal').fadeIn();
        $(".modal").addClass("modal-active");
      }, 15000);
    }
  }
}