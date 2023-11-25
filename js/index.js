$(function () {

    $(".banner").thumbnailImg({
        large_elem: ".large_box",
        small_elem: ".small_list",
        left_btn: ".left_btn",
        right_btn: ".right_btn"
    });
    $(".banner1").thumbnailImg({
        large_elem: ".large_box1",
        small_elem: ".small_list1",
        left_btn: ".left_btn1",
        right_btn: ".right_btn1"
    });
    $(".banner2").thumbnailImg({
        large_elem: ".large_box2",
        small_elem: ".small_list2",
        left_btn: ".left_btn2",
        right_btn: ".right_btn2"
    });
    $(".banner3").thumbnailImg({
        large_elem: ".large_box3",
        small_elem: ".small_list3",
        left_btn: ".left_btn3",
        right_btn: ".right_btn3"
    });
    $(".banner4").thumbnailImg({
        large_elem: ".large_box4",
        small_elem: ".small_list4",
        left_btn: ".left_btn4",
        right_btn: ".right_btn4"
    });
});
$(function () {
    changTab(1);
});

function changTab(num) {
    if (num == 1) {
        $("#zd").show();
        $("#tj").hide();
        $("#zdpz").removeClass("cjl");
        $("#zdpz").addClass("addClas");
        $("#tjpz").addClass("cjl");
        $("#tjpz").removeClass("addClas");
    } else {
        $("#tj").show();
        $("#zd").hide();
        $("#tjpz").removeClass("cjl");
        $("#zdpz").addClass("cjl")
        $("#tjpz").addClass("addClas");
        $("#zdpz").removeClass("addClas");
    }
}

function whoShow(names) {
    if (names == "mdc") {
        $("#mdc,#md,#lx,#ix,#sx,#fx").show();
        $("#lyg,#inazuma,#sumeru,#fengdan,#mx,#ld,#id,#sd,#fd").hide();
        $(".mdc").addClass("cheCity");
        $(".lyg").removeClass("cheCity");
        $(".inazuma").removeClass("cheCity");
        $(".sumeru").removeClass("cheCity");
        $(".fengdan").removeClass("cheCity");
        $(".character__bg1").css("background-image","url(./image/bg1.jpg)");
        $(".character__bg2").css("background-image","url(./image/bg2.jpg)");
    } else if (names == "lyg") {
        $("#lyg,#mx,#ld,#ix,#sx,#fx").show();
        $("#mdc,#inazuma,#sumeru,#fengdan,#md,#lx,#id,#sd,#fd").hide();
        $(".mdc").removeClass("cheCity");
        $(".lyg").addClass("cheCity");
        $(".inazuma").removeClass("cheCity");
        $(".sumeru").removeClass("cheCity");
        $(".fengdan").removeClass("cheCity");
        $(".character__bg1").css("background-image","url(./image/bg3.jpg)");
        $(".character__bg2").css("background-image","url(./image/bg4.jpg)");
    } else if (names == "inazuma") {
        $("#inazuma,#mx,#lx,#id,#sx,#fx").show();
        $("#mdc,#lyg,#sumeru,#fengdan,#md,#ld,#ix,#sd,#fd").hide();
        $(".mdc").removeClass("cheCity");
        $(".lyg").removeClass("cheCity");
        $(".inazuma").addClass("cheCity");
        $(".sumeru").removeClass("cheCity");
        $(".fengdan").removeClass("cheCity");
        $(".character__bg1").css("background-image","url(./image/bg5.jpg)");
        $(".character__bg2").css("background-image","url(./image/bg6.jpg)");
    } else if (names == "sumeru") {
        $("#sumeru,#mx,#lx,#ix,#sd,#fx").show();
        $("#mdc,#lyg,#inazuma,#fengdan,#md,#ld,#id,#sx,#fd").hide();
        $(".mdc").removeClass("cheCity");
        $(".lyg").removeClass("cheCity");
        $(".inazuma").removeClass("cheCity");
        $(".sumeru").addClass("cheCity");
        $(".fengdan").removeClass("cheCity");
        $(".character__bg1").css("background-image","url(./image/bg7.jpg)");
        $(".character__bg2").css("background-image","url(./image/bg8.jpg)");
    } else if (names == "fengdan") {
        $("#fengdan,#mx,#lx,#ix,#sx,#fd").show();
        $("#mdc,#lyg,#inazuma,#sumeru,#md,#ld,#id,#sd,#fx").hide();
        $(".mdc").removeClass("cheCity");
        $(".lyg").removeClass("cheCity");
        $(".inazuma").removeClass("cheCity");
        $(".sumeru").removeClass("cheCity");
        $(".fengdan").addClass("cheCity");
        $(".character__bg1").css("background-image","url(./image/bg9.jpg)");
        $(".character__bg2").css("background-image","url(./image/bg10.jpg)");
    }
}

function Fnav() {
    var winW = $(window).width();
    var sTop = $(window).scrollTop();
    if (sTop > 800) {
        $(".zz").addClass("zhezhao");
        $(".Top").addClass("topbg");
    } else {
        $(".zz").removeClass("zhezhao");
        $(".Top").removeClass("topbg");
    }
}

$(window).resize(Fnav).scroll(Fnav).trigger("resize");
Swiping(".Ldiv", ".Mnav", ".phblist");
Swiping(".peizhi", ".pznav", ".PZ");

function Swiping(div, nav, conli) {
    var $div = $(div);
    $div.find(nav).on("click", "a", function () {
        var $this = $(this),
            i = $this.parents(nav).find("a").index($this);
        if ($this.hasClass("cur")) {
            return;
        }
        $this.parents(nav).find("a").removeClass("cur").eq(i).addClass("cur");
        $div.find(conli).fadeOut(300).eq(i).fadeIn(300);
        $div.find(conli).eq(i).find("img").each(function () {
            $(this).attr("src", $(this).attr("data-src"));
        });
    });
}

var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    // 垂直切换选项
    loop: true,
    // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5,
    //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5,
    //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});
// (function($){var defaluts={large_elem:".large_elem",small_elem:".small_elem",left_btn:".left_btn",right_btn1:".right_btn1",state:"on",speed:"normal",vis:4,autoplay:false,autotime:3000};$.fn.extend({"thumbnailImg":function(options){var opts=$.extend({},defaluts,options);return this.each(function(){var $this=$(this);var t=0;$(opts.large_elem).find("ul li").eq(0).show();$(opts.small_elem).find("ul li").eq(0).addClass(opts.state);var l=$(opts.small_elem).find("ul li").length;var l_mean;if(l<opts.vis){l_mean=0}else{l_mean=((parseInt(l/opts.vis)-1)*opts.vis)+(l%opts.vis)}var w=$(opts.small_elem).find("ul li").outerWidth(true);$(opts.small_elem).find("ul").css("width",l*w+"px");$(opts.small_elem).find("ul li").click(function(){$(this).addClass(opts.state).siblings().removeClass(opts.state);t=$(this).index();Img($(this).index())});$(opts.left_btn).click(function(){var i;$(opts.small_elem).find("ul li").each(function(index){if($(this).hasClass(opts.state)){i=index}});i--;if(i<0){i=l-1}$(opts.small_elem).find("ul li").eq(i).addClass(opts.state).siblings().removeClass(opts.state);var ml=i*w;if(ml<=l_mean*w){$(opts.small_elem).find("ul").stop().animate({marginLeft:-ml+"px"},opts.speed)}else{$(opts.small_elem).find("ul").stop().animate({marginLeft:-(l_mean*w)+"px"},opts.speed)}t=i;Img(i)});$(opts.right_btn1).click(function(){var i;$(opts.small_elem).find("ul li").each(function(index){if($(this).hasClass(opts.state)){i=index}});i++;if(i>l-1){i=0}$(opts.small_elem).find("ul li").eq(i).addClass(opts.state).siblings().removeClass(opts.state);var ml=i*w;if(ml<=l_mean*w){$(opts.small_elem).find("ul").stop().animate({marginLeft:-ml+"px"},opts.speed)}else{$(opts.small_elem).find("ul").stop().animate({marginLeft:-(l_mean*w)+"px"},opts.speed)}t=i;Img(i)});function Img(i){$(opts.large_elem).find("ul li").eq(i).fadeIn().siblings().hide();$(opts.small_elem).find("ul li").eq(i).addClass(opts.state).siblings().removeClass(opts.state);var ml=i*w;if(ml<=l_mean*w){$(opts.small_elem).find("ul").stop().animate({marginLeft:-ml+"px"},opts.speed)}else{$(opts.small_elem).find("ul").stop().animate({marginLeft:-(l_mean*w)+"px"},opts.speed)}}if(opts.autoplay){var timing=setInterval(function(){t++;if(t>l-1){t=0}Img(t)},opts.autotime);$this.hover(function(){clearInterval(timing)},function(){timing=setInterval(function(){t++;if(t>l-1){t=0}Img(t)},opts.autotime)})}})}})})(jQuery);

(function ($) {
    var defaluts = {
        large_elem: ".large_elem",
        small_elem: ".small_elem",
        left_btn: ".left_btn",
        right_btn: ".right_btn",
        state: "on",
        speed: "normal",
        vis: 4,
        autoplay: false,
        autotime: 3000
    };
    $.fn.extend({
        "thumbnailImg": function (options) {
            var opts = $.extend({}, defaluts, options);
            return this.each(function () {
                var $this = $(this);
                var t = 0;
                $(opts.large_elem).find("ul li").eq(0).show();
                $(opts.small_elem).find("ul li").eq(0).addClass(opts.state);
                var l = $(opts.small_elem).find("ul li").length;
                var l_mean;
                if (l < opts.vis) {
                    l_mean = 0
                } else {
                    l_mean = ((parseInt(l / opts.vis) - 1) * opts.vis) + (l % opts.vis)
                }
                var w = $(opts.small_elem).find("ul li").outerWidth(true);
                $(opts.small_elem).find("ul").css("width", l * w + "px");
                $(opts.small_elem).find("ul li").click(function () {
                    $(this).addClass(opts.state).siblings().removeClass(opts.state);
                    t = $(this).index();
                    Img($(this).index())
                });
                $(opts.left_btn).click(function () {
                    var i;
                    $(opts.small_elem).find("ul li").each(function (index) {
                        if ($(this).hasClass(opts.state)) {
                            i = index
                        }
                    });
                    i--;
                    if (i < 0) {
                        i = l - 1
                    }
                    $(opts.small_elem).find("ul li").eq(i).addClass(opts.state).siblings().removeClass(opts.state);
                    var ml = i * w;
                    if (ml <= l_mean * w) {
                        $(opts.small_elem).find("ul").stop().animate({
                            marginLeft: -ml + "px"
                        }, opts.speed)
                    } else {
                        $(opts.small_elem).find("ul").stop().animate({
                            marginLeft: -(l_mean * w) + "px"
                        }, opts.speed)
                    }
                    t = i;
                    Img(i)
                });
                $(opts.right_btn).click(function () {
                    var i;
                    $(opts.small_elem).find("ul li").each(function (index) {
                        if ($(this).hasClass(opts.state)) {
                            i = index
                        }
                    });
                    i++;
                    if (i > l - 1) {
                        i = 0
                    }
                    $(opts.small_elem).find("ul li").eq(i).addClass(opts.state).siblings().removeClass(opts.state);
                    var ml = i * w;
                    if (ml <= l_mean * w) {
                        $(opts.small_elem).find("ul").stop().animate({
                            marginLeft: -ml + "px"
                        }, opts.speed)
                    } else {
                        $(opts.small_elem).find("ul").stop().animate({
                            marginLeft: -(l_mean * w) + "px"
                        }, opts.speed)
                    }
                    t = i;
                    Img(i)
                });

                function Img(i) {
                    $(opts.large_elem).find("ul li").eq(i).fadeIn().siblings().hide();
                    $(opts.small_elem).find("ul li").eq(i).addClass(opts.state).siblings().removeClass(opts.state);
                    var ml = i * w;
                    if (ml <= l_mean * w) {
                        $(opts.small_elem).find("ul").stop().animate({
                            marginLeft: -ml + "px"
                        }, opts.speed)
                    } else {
                        $(opts.small_elem).find("ul").stop().animate({
                            marginLeft: -(l_mean * w) + "px"
                        }, opts.speed)
                    }
                }

                if (opts.autoplay) {
                    var timing = setInterval(function () {
                        t++;
                        if (t > l - 1) {
                            t = 0
                        }
                        Img(t)
                    }, opts.autotime);
                    $this.hover(function () {
                        clearInterval(timing)
                    }, function () {
                        timing = setInterval(function () {
                            t++;
                            if (t > l - 1) {
                                t = 0
                            }
                            Img(t)
                        }, opts.autotime)
                    })
                }
            })
        }
    })
})(jQuery);

(function (b) {
    b("img").each(function () {
        var c = b(this),
            a = c.attr("src");
        0 <= a.indexOf("https://") && (a = a.replace("https://", "http://"),
            c.attr("src", a))
    })
})(jQuery);