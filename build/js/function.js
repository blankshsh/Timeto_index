function BgSize() {
    // 自适应背景图片
    var width = $(window).width();
    //console.log(width);
    $("header").width(width);
}
function animation(id, cfg) {
    // 获取id图片 判断距顶部位置
    // 如果滚轮滚到图片位置
    // 就运行animation
    var $window_ = $(window),
        scrolled_ = $window_.scrollTop(),
        height_ = $window_.height() * 1.1;
    $(id).each(function() {
        var $this = $(this),
            offsetTop = $this.offset().top;
        if (scrolled_ + height_ > offsetTop) {
            setTimeout(function() {
                cfg.animateIn && $this.animate(cfg.animateIn,1000);
            }, cfg.delay || 0)
        }
    })
}
BgSize();
$(window).resize(function(){
    BgSize();
})
console.log("by:blankshsh");
console.log("github.com/blankshsh");
console.log("blankshsh@163.com");
