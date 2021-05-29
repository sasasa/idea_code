//値をグラフに表示させる
Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // 値の表示
                    ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                    var fontSize = 12;//フォントサイズ
                    var fontStyle = 'normal';//フォントスタイル
                    var fontFamily = 'Arial';//フォントファミリー
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    var dataString = dataset.data[index].toString();
					
                    // 値の位置
                    ctx.textAlign = 'center';//テキストを中央寄せ
                    ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え

                    var padding = 5;//余白
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
		
                });
            }
        });
    }
});


//=========== 折れ線グラフ（1本） ============//

$('#chart01').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
if (isInView) {

var ctx=document.getElementById("chart01");//グラフを描画したい場所のid
var chart=new Chart(ctx,{
type:'line',//グラフのタイプ
data:{//グラフのデータ
	labels:["1月","2月","3月","4月","5月","6月",],//データの名前
	datasets:[{
			label:"体重の変化",//グラフのタイトル
			borderColor: "rgba(255,0,0,1)",//グラフの線の色
			backgroundColor:"rgba(255,0,0,0.1)",//グラフの背景色
			data:["60","55","54","50","49","47",]//横列に並ぶデータ
		}]
},
options:{//グラフのオプション
	legend:{
		display: false//グラフの説明を非表示
	},
	tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
		callbacks:{
        label: function(tooltipItems, data) {
            if(tooltipItems.yLabel == "0"){
                return "";
            }
            return data.datasets[tooltipItems.datasetIndex].label + "：" + tooltipItems.yLabel + "Kg";//Kgを最後につける
        }
    }
	},
title:{//上部タイトル表示の設定
		display: true,
		fontSize:10,
		text: '単位：Kg'
	},
scales:{
		yAxes:[//グラフ縦軸（Y軸）設定
			{
				ticks:{
					beginAtZero:true,//0からスタート
					suggestedMax: 100,//最大が1000
					suggestedMin: 0,//最小が0
					stepSize: 10,//10づつ数値が刻まれる
					callback: function(value){
						return  value +  'Kg'//数字＋Kgで表示					
				}
			}
		}
	],
		xAxes:[//棒グラフ縦軸（X軸）設定
			{
				barPercentage:0.5,//バーの太さ
			}
		]
	}
}
});

}
});