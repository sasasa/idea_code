//スクロールした際の動きを関数でまとめる
function setFadeElement(){
	var windowH = $(window).height();	//ウィンドウの高さを取得
	var scroll = $(window).scrollTop(); //スクロール値を取得
    
    //出現範囲の指定
	var contentsTop = Math.round($('#area-3').offset().top);	//要素までの高さを四捨五入した値で取得
	var contentsH = $('#area-3').outerHeight(true);	//要素の高さを取得
    
    //2つ目の出現範囲の指定※任意
	//var contentsTop2 = Math.round($('#area-5').offset().top);	//要素までの高さを取得
	//var contentsH2 = $('#area-5').outerHeight(true);//要素の高さを取得

    //出現範囲内に入ったかどうかをチェック
	if(scroll+windowH >= contentsTop && scroll+windowH  <= contentsTop+contentsH){
		$("#page-top").addClass("LeftMove");    //入っていたらLeftMoveをクラス追加
		$("#page-top").removeClass("RightMove");   //RightMoveを削除
		$(".hide-btn").removeClass("hide-btn");	  //hide-btnを削除
	}//2つ目の出現範囲に入ったかどうかをチェック※任意
    //else if(scroll+windowH >= contentsTop2 && scroll+windowH <= contentsTop2+contentsH2){       
		//$("#page-top").addClass("LeftMove");    //入っていたらLeftMoveをクラス追加
		//$("#page-top").removeClass("RightMove");   //RightMoveを削除
	//}//それ以外は
    else{
        if(!$(".hide-btn").length){				//サイト表示時にRightMoveクラスを一瞬付与させないためのクラス付け。hide-btnがなければ下記の動作を行う
			$("#page-top").addClass("RightMove");  //RightMoveをクラス追加
			$("#page-top").removeClass("LeftMove"); //LeftMoveを削除
		}		
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	setFadeElement();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	setFadeElement();/* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});