$(function() {
    $(".services__carosel").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 300,
        arrows: false,
        dots: true,
        draggable: false,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
});