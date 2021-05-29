//要素やクラス名をクリックしたら動かしたい場合の記述
$('.zoomInClickTrigger').on('click', function() {
    $(this).addClass('zoomIn');//要素をクリックしたらzoomInというクラス名を追記
})
//ここまで要素やクラス名をクリックしたら動かしたい場合の記述

//要素やクラス名をクリックしたら何度も動かしたい場合の記述
$('.zoomInClickTriggerTimes').on('click', function() {
	$(this).addClass('zoomIn');//要素をクリックしたらzoomInというクラス名を追記
	$(".zoomIn").on('animationend', function(){
		$(this).removeClass('zoomIn');//アニメーションが終了したらクラス名を取り除く
	});
});
//ここまで要素やクラス名をクリックしたら何度も動かしたい場合の記述


