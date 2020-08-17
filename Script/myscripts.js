$(function () {
    $("#hamburger-menu") .on("click", function() {
        $(".toggle").toggleClass("open");
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });
 