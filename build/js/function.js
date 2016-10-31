function bgchange() {
    var width = $(window).width();
    //console.log(width);
    $("header").width(width);
}
bgchange();


function animation(id, cfg) {
    var scrolled = $(window).scrollTop(),
        win_height_padded = $(window).height() * 1.1;
    $(id).each(function() {
        var $this = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded > offsetTop) {
            setTimeout(function() {
                cfg.animateIn && $this.animate(cfg.animateIn);
            }, cfg.delay || 0)
        }
    })
}
window.onresize = function() {
    bgchange();
}
$(window).scroll(function() {
    addanimation();
});
console.log("by:blankshsh");
console.log("github.com/blankshsh");
console.log("blankshsh@163.com");
