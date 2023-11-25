function publicCarousel(mc, tc, c, m) {
    var margin = typeof m!=='undefined'? m : 12;
    var moveCon = $(mc);
    var moveToggle = $(tc);
    var moveConDis = $(mc + ' a').eq(0).width();
    var moveToggleDis = $(tc + ' span').eq(0).width() + margin;
    var len = $(tc + ' span').length;
    var timer;
    var t = 4500;
    var canMove = true;
    $(c).on('click', '.s1-right', function () {
        if (canMove) {
            canMove = false;
            var tmpI = moveToggle.find('.active').index();
            moveCon.animate({left: '-' + moveConDis + 'px'}, 300, function () {
                canMove = true;
                moveCon.css('left', 0);
                moveCon.append(moveCon.find('a:first-child'));
            });
            moveToggle.animate({left: '-' + moveToggleDis + 'px'}, 300, function () {
                moveToggle.css('left', 0);
                moveToggle.append(moveToggle.find('span:first-child'));
                moveToggle.find('span').removeClass('active').eq(tmpI).addClass('active')
            });
        }
    });


    $(c).on('click', '.s1-left', function () {
        if (canMove) {
            canMove = false;
            var tmpI = moveToggle.find('.active').index();
            moveCon.prepend(moveCon.find('a:last-child'));
            moveCon.css('left', '-' + moveConDis + 'px');
            moveCon.animate({left: 0}, 300, function () {
                canMove = true;
            });
            moveToggle.prepend(moveToggle.find('span:last-child'));
            moveToggle.css('left', '-' + moveToggleDis + 'px');
            moveToggle.find('span').removeClass('active').eq(tmpI).addClass('active')
            moveToggle.animate({left: 0}, 300);
        }
    });


    $(tc).on('click', 'span', function () {
        if (canMove && !$(this).hasClass('active')) {
            var dis = $(this).index() - $(tc + ' .active').index();
            if (dis > 0) {
                moveCon.animate({left: '-' + moveConDis * dis + 'px'}, 300, function () {
                    canMove = true;
                    moveCon.css('left', 0);
                    moveCon.append(moveCon.find('a:lt(' + dis + ')'));
                });
            } else {
                moveCon.css('left', moveConDis * dis + 'px');
                moveCon.prepend(moveCon.find('a:gt(' + (dis + len - 1) + ')'));
                moveCon.animate({left: 0}, 300);
            }
            moveToggle.find('span').removeClass('active');
            $(this).addClass('active');
        }

    });

function autoplay() {
        timer = setTimeout(function () {
            $(c + ' .s1-right').get(0).click();
            autoplay();
        }, t)
    }

    autoplay();


}
$(function () {
    // // 头部轮播
    (function () {
        publicCarousel('.s1-l-con', '.s1-toggle', '.Slides',0);
    })();
});


$(function(){
	baseJs.hoverTab(); //鼠标经过tab
	baseJs.addHover(); //鼠标经过添加class
	//baseJs.generalPpt(); //通用PPT
	//baseJs.randomAddclass(); //随机给class（颜色）
	//baseJs.xscrollMore();//横向滚动
	baseJs.gotoTop(); //返回顶部
})
var baseJs = {
	hoverTab:function(){
		if($(".f-hover-tabbox").length <= 0){return false}
		var n = 0;
		if(typeof _pageinfo !== 'undefined'){
			if(_pageinfo.path == "newdown" && getQueryVariable("class")){
				$(".m-lalink a").each(function(){
					if($(this).attr('data-type') == getQueryVariable("class")){
						n = $(this).index();	
					}
				})
			}
		}
		$(".f-hover-tabbox").each(function(){
			var thisObj = $(this);
			thisObj.find(".f-hover-tabbtn").children().eq(0).addClass("f-hover");
			thisObj.children(".f-hover-tabcont:first").show().siblings(".f-hover-tabcont").hide();
			$(".g-qqzqdl").find(".f-hover-tabbtn").children().eq(n).addClass("f-hover").siblings().removeClass("f-hover");
			$(".g-qqzqdl").children(".f-hover-tabcont").eq(n).show().siblings(".f-hover-tabcont").hide();
			
			var tabSetTimeout;
			thisObj.find(".f-hover-tabbtn").children().hover(function(){
				n = $(this).index();
				var hoverThisObj = $(this);
				tabSetTimeout = setTimeout(function(){
					hoverThisObj.addClass("f-hover").siblings().removeClass("f-hover");
					thisObj.find(".f-hover-tabcont").eq(n).show().siblings(".f-hover-tabcont").hide();
					
				},160)
			},function(){
				clearTimeout(tabSetTimeout)	
			})
		});		
	},
	addHover:function(){
		if($(".f-hover-add").length <= 0){return false;}
		
		$(".f-hover-add").each(function(){
			$(this).children().first().addClass("f-hover");
			$(this).children().hover(function(){
				$(this).addClass("f-hover").siblings().removeClass("f-hover");	
			})	
		})
	},
	gotoTop:function(){
		$("head").append('<style>.f-backtop-btn{ width:50px; height:50px; background:rgba(0,0,0,0.5); border-radius:4px; display:none; overflow:hidden; position:fixed; left:57%; bottom:200px; margin:0 0 0 620px; z-index:10; cursor:pointer}.f-backtop-btn:hover{background:rgba(255,152,0,0.5)}.f-backtop-btn:after{ content:"";width:18px; height:18px; border-left:4px solid #fff;border-top:4px solid #fff; display:block; overflow:hidden; position:absolute; left:15px; top:20px; transform:rotate(45deg)}</style>')
		$("body").append('<div class="f-backtop-btn"></div>');
		$(window).scroll(function(){
			if($(window).scrollTop()>=100){			
				$(".f-backtop-btn").show();
			}else{
				$(".f-backtop-btn").hide();
			}
		})
		$(".f-backtop-btn").click(function(){
			$("html,body").animate({scrollTop:0},300)
		})
	},
}
    //懒加载
    $("img.lazy").lazyload({
        effect: "fadeIn",
        skip_invisible : false
    });
    // 公共切换
    $('.toggle-li').on('click', function () {
        if (!$(this).hasClass('active') && !$(this).hasClass('link-li')) {
            var i = $(this).index();
            $(this).parent().children('.toggle-li').removeClass('active').eq(i).addClass('active');
            $(this).parent().next().children('.toggle-con-li').hide().eq(i).show();
        }
    });
	//初始化侧边栏跟随
	var navH = $(".MarginTop").offset().top;
    $(window).scroll(function(){ //滚动条事件
        var scroH = $(this).scrollTop(); //获取要随动的元素的滑动距离
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定
        if(scroH>=navH){
        $(".MarginTop").css({position: 'fixed'});
        $(".MarginTop").animate({top: '10px'},100);
    }
    else{
        $(".MarginTop").css({position: 'static',top:'0px'});
    }
    });
    
    
    