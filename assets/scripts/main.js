(function ($) {
  "use strict";

  /* Toggle Card Color
   * When click on card, toggle the
   *****************************************************************/
  var toggle_card_color = function () {
    $(document).ready(function () {
      $("#programs .row")
        .children()
        .each(function () {
          let header_id = $(this).children().attr("id");
          let click_id = $(this).children().children().attr("href");

          $(`a[href='${click_id}']`).on("click", function () {
            $(`#${header_id}`)
              .css("transition", "1000ms linear")
              .toggleClass("bg-dark-blue")
              .toggleClass("bg-dark-purple");
            $(`#${header_id} .arrow-icon`)
              .css("transition", "1000ms linear")
              .toggleClass("bg-dark-blue")
              .toggleClass("bg-dark-purple");
          });
        });
    });
  };

  var close_announcement_button = function () {
    $(".announcement-btn").on("click", function () {
      $("#announcement").addClass("animate__fadeOutDown");
    });
  };

  (function ssInit() {
    toggle_card_color();
    close_announcement_button();
  })();
})(jQuery);
