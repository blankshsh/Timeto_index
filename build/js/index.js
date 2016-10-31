function addanimation() {
    animation(animation_page1, {
        animateIn: {
            opacity: 1,
            right: 50,
        },
        animateOut: {
            opacity: 0,
            right: -50,
        },
    })
    animation(animation_page2, {
        animateIn: {
            opacity: 1,
            left: 40,
        },
        animateOut: {
            opacity: 1,
            left: -40,
        },
    })
    animation(animation_page3, {
        animateIn: {
            opacity: 1,
            right: 30,
        },
        animateOut: {
            opacity: 0,
            right: -50,
        },
    })
}

$(window).scroll(function () {
	addanimation();
});
