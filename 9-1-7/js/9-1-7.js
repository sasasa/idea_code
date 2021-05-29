//無限読み込みInfiniteScroll
	$('.article-list').infinitescroll({	//無限読み込みをさせたい要素を囲う親のクラス名を指定
		navSelector  : ".navigation",//次のページを読み込むリンクを囲んでいるクラス名を指定
		nextSelector : ".navigation a",//次のページにリンクする要素を指定
		itemSelector : ".article-list li",//無限スクロールで表示をさせたい要素を指定
		maxPage : 3,///読み込む全体のページ数。入れないと連番でURLが読まれて404エラーが出る
		animate: true, //アニメーション処理を行う
			loading: {
			finishedMsg: "全ての記事が読み込まれました", //全ての要素が読み込まれた後の終了メッセージ
			msgText: "読み込み中", //ローディング中の表示テキスト
			img: 'svg/loading.svg', //ローディング中の画像パスを指定
		},
	});

	$('.article-list').hide().delay(100).fadeIn(900);//0.9秒かけてフェードイン
