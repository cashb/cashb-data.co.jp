    // 入力内容チェックのための関数
    function input_check(){
    var result = true;
 
    // エラー用装飾のためのクラスリセット
    $('#f-name').removeClass("inp_error");
    $('#s-name').removeClass("inp_error");
    $('#f-kana').removeClass("inp_error");
    $('#s-kana').removeClass("inp_error");
    $('#company').removeClass("inp_error");
    $('#organ').removeClass("inp_error");
    $('#tel').removeClass("inp_error");
    $('#email').removeClass("inp_error");
    $('#know').removeClass("inp_error");
    $('#inq-naiyo').removeClass("inp_error");
    $('#privacy').removeClass("inp_error");

 
    // 入力エラー文をリセット
    $("#f-name_error").empty();
    $("#s-name_error").empty();
    $("#f-kana_error").empty();
    $("#s-kana_error").empty();
    $("#company_error").empty();
    $("#organ_error").empty();
    $("#tel_error").empty();
    $("#email_error").empty();
    $("#know_error").empty();
    $("#inq-naiyo_error").empty();
    $("#privacy_error").empty();

 
    // 入力内容セット
    var f__name = $("#f-name").val();
    var s__name = $("#s-name").val();
    var f__kana = $("#f-kana").val();
    var s__kana = $("#s-kana").val();
    var company = $("#company").val();
    var organ = $("#organ").val();
    var tel = $("#tel").val();
    var email = $("#email").val();
//    var know = $('input[name="know[]"]:checked').val();
    var inq__naiyo = $("#inq-naiyo").val();
    var privacy = $("#privacy").val();

	$('input[name="know[]"]:checked').each(function() {
        var var__know = $(this).val();
        if( var__know != ""){
        	know = true;
        }
        else{
        	know = false;
        }
    })
 
    // 入力内容チェック
 
    // 姓
    if(f__name == ""){
        $("#f-name_error").html("<i style=\"font-size:0.8em;color:red;\"><br> 必須です。</i>");
        $("#f-name").addClass("inp_error");
        result = false;
    }

    // 名
    if(s__name == ""){
        $("#s-name_error").html("<i style=\"font-size:0.8em;color:red;\"><br> 必須です。</i>");
        $("#s-name").addClass("inp_error");
        result = false;
    }

    // 姓（カナ）
    if(f__name == ""){
        $("#f-kana_error").html("<i style=\"font-size:0.8em;color:red;\"><br> 必須です。</i>");
        $("#f-kana").addClass("inp_error");
        result = false;
    }

    // 名（カナ）
    if(s__kana == ""){
        $("#s-kana_error").html("<i style=\"font-size:0.8em;color:red;\"><br> 必須です。</i>");
        $("#s-kana").addClass("inp_error");
        result = false;
    }

    // 貴社名
    if(company == ""){
        $("#company_error").html("<i style=\"font-size:0.8em;color:red;\"><br> 必須です。</i>");
        $("#company").addClass("inp_error");
        result = false;
    }

    // 部署名
    if(organ == ""){
        $("#organ_error").html("<i style=\"font-size:0.8em;color:red;\"><br> 必須です。</i>");
        $("#organ").addClass("inp_error");
        result = false;
    }

    // 電話番号
    if(tel == ""){
        $("#tel_error").html("<i style=\"font-size:0.8em;color:red;\"><br> 必須です。</i>");
        $("#tel").addClass("inp_error");
        result = false;
    }

    // メールアドレス
    if(email == ""){
        $("#email_error").html("<i style=\"font-size:0.8em;color:red;\"><br> 必須です。</i>");
        $("#email").addClass("inp_error");
        result = false;
    }

    // 当社を知ったきっかけ
    if(know != true){
        $("#know_error").html("<i style=\"font-size:0.8em;color:red;\"><br> 必須です。</i>");
        $("#know").addClass("inp_error");
        result = false;
    }

    // お問い合わせ内容
    if(inq__naiyo == ""){
        $("#inq-naiyo_error").html("<i style=\"font-size:0.8em;color:red;\"><br> 必須です。</i>");
        $("#inq-naiyo").addClass("inp_error");
        result = false;
    }


    // 「個⼈情報のお取扱いに関する同意事項」
    if(privacy == ""){
        $("#privacy_error").html("<i style=\"font-size:0.8em;color:red;\"><br> 必須です。</i>");
        $("#privacy").addClass("inp_error");
        result = false;
    }

    return result;
}

    function input_reset(){
    var result = true;
 
    // エラー用装飾のためのクラスリセット

    // 入力エラー文をリセット
    $("#f-name_error").removeClass("inp_error");
    $("#s-name_error").removeClass("inp_error");
    $("#f-kana_error").removeClass("inp_error");
    $("#s-kana_error").removeClass("inp_error");
    $("#company_error").removeClass("inp_error");
    $("#organ_error").removeClass("inp_error");
    $("#tel_error").removeClass("inp_error");
    $("#email_error").removeClass("inp_error");
    $("#know_error").removeClass("inp_error");
    $("#inq-naiyo_error").removeClass("inp_error");
    $("#privacy_error").removeClass("inp_error");

 
    // 入力エラー文をリセット
    $("#f-name_error").empty();
    $("#s-name_error").empty();
    $("#f-kana_error").empty();
    $("#s-kana_error").empty();
    $("#company_error").empty();
    $("#organ_error").empty();
    $("#tel_error").empty();
    $("#email_error").empty();
    $("#know_error").empty();
    $("#inq-naiyo_error").empty();
    $("#privacy_error").empty();

    return result;
}
