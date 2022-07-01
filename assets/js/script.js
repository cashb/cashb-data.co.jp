/*******************************************/
/*****スクロール時のコンテンツフェードイン設定*****/
/*******************************************/
$(function(){
	$(window).scroll(function (){
        //下からフェードイン
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
        //フェードインのみ
        $('.fadein2').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 100){
				$(this).addClass('scrollin2');
			}
		});

	});
});

/*******************************************/
/************一文字ずつフェードイン************/
/*******************************************/
$('.fadetext').each(function(){
    //一文字ずつ<span>で括る
    $(this).children().addBack().contents().each(function() {
        if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="fwno">$1</span>'));
        }
    });
     
　　//inviewを使って画面に表れたら起動させる
    $(this).on('inview',function(){
        //一文字ずつ順番に不透明させる
        $(this).css({'opacity':1});
        for (var i = 0; i <= $(this).children('span').length; i++) {
        $(this).children('span').eq(i).delay(20*i).animate({'opacity':1},1000);
        };
    });
});