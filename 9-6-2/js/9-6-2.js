//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
	var access = $.cookie('access')
	if(!access){
		flag = true;
		$.cookie('access', false);
	}else{
		flag = false	
	}
	
	//モーダル表示
	$(".video-open").modaal({
	start_open:flag, // ページロード時に表示するか
	overlay_close:true,//モーダル背景クリック時に閉じるか
	type: 'video',
	background: '#28BFE7', // 背景色
	overlay_opacity:0.8, // 透過具合
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
	});