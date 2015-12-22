$(document).ready(function() {
    //files description
    $('.fs_dir').click(function() {
        $(this).next('.dir_o').slideToggle();
    });
    $('.fs_fl').click(function() {
        $(this).next('.fl_o').slideToggle();
    });
});