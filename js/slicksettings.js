
$('.team-carousel').slick({
    autoplay: true,
    mobileFirst: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});
