$(function() {
    $(".header__arrow").on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('header__arrow_reverse');
        $(".header-menu_tablet").toggleClass('header-menu_tablet_active');
    });

});