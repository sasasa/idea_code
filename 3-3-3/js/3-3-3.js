//要素やクラス名にマウスが乗ったり外れたりしたら動かしたい場合の記述

$('.rotateXHoverTrigger').on('mouseenter touchstart', function () {
    $(this).addClass('rotateX');//要素にマウスが乗ったら rotateXというクラス名①をつける
   $(this).removeClass('fadeUp');//要素にマウスが乗ったら fadeUpというクラス名②を外す
})
$('.rotateXHoverTrigger').on('mouseleave touchend', function () {
    $(this).removeClass('rotateX');//要素からマウスが外れたら rotateXというクラス名①を外す
    $(this).addClass('fadeUp');//要素からマウスが外れたら fadeUpというクラス名②をつける
  })

//ここまで要素やクラス名にマウスが乗ったり外れたりしたら動かしたい場合の記述
