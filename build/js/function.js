$(function() {
    function bgchange() {
        var width = $(window).width();
        //console.log(width);
        $("header").width(width);
    }
    bgchange();
    window.onresize = function() {
        bgchange();
    }
    console.log("by:blankshsh");
    console.log("github.com/blankshsh");
    console.log("blankshsh@163.com");
})
