$(function() {
    $(".header__arrow").on('click', function() {
        $(this).toggleClass('header__arrow_reverse');
        $(".header-menu__tablet").toggleClass('header-menu__tablet_active');
    });

});