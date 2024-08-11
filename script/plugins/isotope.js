// Get the container element
var $container = jQuery('.properties__contents');

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
jQuery('.right__buttons .button').on('click', function () {
    jQuery('.right__buttons .button').removeClass('active__btn');
    jQuery(this).addClass('active__btn');
    var filterValue = jQuery(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
});

// Show all items on page load
jQuery('.right__buttons .active__btn').trigger('click');