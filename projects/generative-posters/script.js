 $(document).ready(function() {
      $(".container").hover(
        function() {
          $(this).find(".description").show(); // Show text on mouseenter
        },
        function() {
          $(this).find(".description").hide(); // Hide text on mouseleave
        }
      );
    });