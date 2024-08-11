// Get the container element
var $container = $('.properties__contents');

// Initialize Isotope
$container.isotope({
    itemSelector: '.content',
    layoutMode: 'fitRows',
    responsive: [
        {
            breakpoint: 442,
            options: {
                layoutMode: 'vertical',
            },
        },
    ]
});

// Filter buttons
$('.right__buttons .button').on('click', function () {
    $('.right__buttons .button').removeClass('active__btn');
    $(this).addClass('active__btn');
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
});

// Show all items on page load
$('.right__buttons .active__btn').trigger('click');