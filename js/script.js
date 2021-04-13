$(function(){
     //グーグルフォーム
    let $form = $('#js-form')
    $form.submit(function(e) {
            $.ajax({
            url: $form.attr('action'),
            data: $form.serialize(),
            type: "POST",
            dataType: "xml",
            statusCode: {
                    0: function() {
                  //送信に成功したときの処理
            $form.slideUp()
            $('#js-success').slideDown()
            },
            200: function() {
                  //送信に失敗したときの処理
            $form.slideUp()
            $('#js-error').slideDown()
            }
            }
            });
            return false;
    });
    let $submit=$( '#js-submit' )
    $('#js-form input, #js-form textarea').on ('change',function(){
            if(
                    $('#js-form input[type="text"]').val() !== ""  &&
                    $('#js-form input[type="email"]').val() !== ""  &&
                    $('#js-form input[name="entry.178784114"]').prop('checked') === true
            ){
                    $submit.addClass('-active')
            }else{
                    $submit.removeClass('-active')
            }
    });
　　   //スムーススクロール
　　   $('a[href^="#"]').click(function(){
　　           //移動速度
　　           let speed = 1000 ;
　　           //idを取得
　　           let id = $(this).attr("href");
　　           //idが#のみだったらトップに行くようにする
　　           let target = $("#" == id ? "html" : id);
　　           //ページのトップにを基準にターゲットの位置を決定
　　           let position = $(target).offset().top;
　　           //ターゲットの位置までの速度
　　           jQuery("html,body").animate(
　　                   {
　　                           scrollTop: position
　　                   },
　　                   speed
　　           );
　　           return  false;
　　   });
})