//開くボタンを押した時には
$(".open-btn").click(function () {
    $("#search-wrap").addClass('panelactive');//#search-wrapへpanelactiveクラスを付与
	$('#search-text').focus();//テキスト入力のinputにフォーカス
});

//閉じるボタンを押した時には
$(".close-btn").click(function () {
    $("#search-wrap").removeClass('panelactive');//#search-wrapからpanelactiveクラスを除去
});