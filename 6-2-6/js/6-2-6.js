//画像をクリックしたら現れる画面の設定	
$(".gallery-list").modaal({
	fullscreen:'true', //フルスクリーンモードにする
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
});