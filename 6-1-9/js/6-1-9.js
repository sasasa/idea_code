//スライド上の設定
	$('.slider-top').slick({
		accessibility: false,// 左右矢印ボタンでの切り替えなし
		arrows: false,//左右矢印ボタン表示なし
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
		pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
		slidesToShow: 1,//スライドを画面に1枚見せる
		slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
		swipe: false,//タッチスワイプに対応しない
	});
//スライド下の設定
	$('.slider-bottom').slick({
		accessibility: false,// 左右矢印ボタンでの切り替えなし
		arrows: false,//左右矢印ボタン表示なし
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
		pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
		slidesToShow: 1,//スライドを画面に1枚見せる
		slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
		swipe: false,//タッチスワイプに対応しない
		rtl: true,//スライダの表示方向を左⇒右に変更する
	});
