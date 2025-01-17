function addanimation() {
    animation("#animation_page1", {
        animateIn: {
            opacity: 1,
            right: 50,
        }
    })
    animation("#animation_page2", {
        animateIn: {
            opacity: 1,
            left: 40,
        },
        delay: 200,
    })
    animation("#animation_page3", {
        animateIn: {
            opacity: 1,
            right: 30,
        },
        delay: 200,
    })
    animation(".page1wrp .info", {
        animateIn: {
            opacity: 1,
            top: 260,
        },
        delay: 1000,
    })
    animation(".page2wrp .info", {
        animateIn: {
            opacity: 1,
            top: 254,
        },
        delay: 1000,
    })
    animation(".page3wrp .info", {
        animateIn: {
            opacity: 1,
            left: 24,
        },
        delay: 1000,
    })

}

addanimation();
$(window).scroll(function() {
    addanimation();
});

$(".download-btn").on("click",function () {
   $('.linkinfo').show();
})
$(".linkinfo").on("click",function () {
   $('.linkinfo').hide();
})