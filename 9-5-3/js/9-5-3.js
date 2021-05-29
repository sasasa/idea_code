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


//=========== 棒グラフ（横・複数バー） ============//

$('#chart02').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
if (isInView) {

var ctx=document.getElementById("chart02");//グラフを描画したい場所のid
var chart=new Chart(ctx,{
type:'horizontalBar',//グラフのタイプ
data:{//グラフのデータ
	labels:["令和3年度","令和4年度","令和5年度",],//データの名前
	datasets: [
        {
          label: 'A室',
          data: [62.5, 65.9, 93.1,],
          backgroundColor: "rgba(219,39,91,0.5)"
        },{
          label: 'B室',
          data: [55.3, 89.7, 73.2,],
          backgroundColor: "rgba(130,201,169,0.5)"
        },{
          label: 'C室',
          data: [33.1, 45.5, 62.9,],
          backgroundColor: "rgba(255,183,76,0.5)"
        }
      ]

},
options:{//グラフのオプション 
	legend:{	
		display: true//グラフの説明を表示
	},
tooltips:{//グラフへカーソルを合わせた際のツールチップ詳細表示の設定
	callbacks:{
        label: function(tooltipItems, data) {
            if(tooltipItems.xLabel == "0"){
                return "";
            }
            return data.datasets[tooltipItems.datasetIndex].label + "：" + tooltipItems.xLabel + "%";//パーセントを最後につける
        }
    }
	
	},
	title:{//上部タイトル表示の設定
		display: true,
		fontSize:10,
		text: '単位：％'
	},
	scales:{
		xAxes:[//グラフ縦軸（X軸）設定
			{
				ticks:{
					beginAtZero:true,//0からスタート
					suggestedMax: 100,//最大が100
					suggestedMin: 0,//最小が0
					stepSize: 10,//10づつ数値が刻まれる
					callback: function(value){
						return  value +  '%'//数字＋%で表示			
				}
			}
			}
		],
		yAxes:[//グラフ横（Y軸）設定
			{
				barPercentage:0.5,//バーの太さ
			}
		]
	}
}
});       
}
});