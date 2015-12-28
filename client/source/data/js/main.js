$(document).ready(function() {
    //files description
    $('.fs_dir').click(function() {
        $(this).next('.dir_o').slideToggle();
    });
    $('.fs_fl').click(function() {
        $(this).next('.fl_o').slideToggle();
    });
    //logo link
    var path = location.pathname.split('/');
    if(path.length >= 3) {
        $('.logo').css('cursor', 'pointer');
        $('.logo').click(function() {
            location.pathname = '/' + path[1];
        });
    }
});