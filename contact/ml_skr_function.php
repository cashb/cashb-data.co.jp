<?php
//名前空間を定義
 use PHPMailer\PHPMailer\PHPMailer;
 use PHPMailer\PHPMailer\SMTP;
 use PHPMailer\PHPMailer\Exception;

//設定ファイルの読み込み
require_once('./sakura_config.php');

//PHPMailerの各ファイルを読み込み
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/POP3.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/OAuth.php';
require 'PHPMailer/language/phpmailer.lang-ja.php';


function skr_mailto($var_mail_to,$var_subject,$var_body,$var_mail_from,$var_header)
{

mb_language("japanese");
mb_internal_encoding("UTF-8");


	if( strpos($var_mail_to,',') === false){
		$mail_to = $var_mail_to;
		$sendmailcnt = 1;
	}
	else
	{
		$mail_to = "";
		$tmp_tos = "";
		$sendmailcnt = 2;
		$tmp_mail_tos = explode(',', $var_mail_to);
		foreach($tmp_mail_tos as $value) {
			$tos[$value] = $value;
		}
	}

    $sendmode = TRUE;

    $name = mb_encode_mimeheader($var_mail_from, 'ISO-2022-JP');
    $email = $var_mail_to;
    $subject = $var_subject;
    $message = $var_body;
//    $message = mb_convert_encoding($var_body, "UTF-8", "AUTO");


//PHPMailerをインスタンス化
        $mailer = new PHPMailer(true);
        
//必要なプロパティを上書き
		$mailer->ClearAddresses();
        $mailer->IsSMTP();
        $mailer->isHTML(false);
        $mailer->Host = SMTP_HOST;
        $mailer->Username = SMTP_USERNAME;
        $mailer->Password = SMTP_PASSWORD;
        $mailer->SMTPAuth = SMTP_AUTH;
        $mailer->SMTPSecure = SMTP_SECURE;
        $mailer->Port = SMTP_PORT;
        $mailer->From = $var_mail_from;			// 送信元

        $mailer->FromName = $name;			//送信先名称
        $mailer->Subject = $subject;		//件名

// ISO-2022-JP の場合
		$mailer->Encoding = SMTP_Encoding;
		$mailer->CharSet = SMTP_CHARSET;
		$mailer->Body    = mb_convert_encoding($message, "JIS", "UTF-8");

	if( $sendmailcnt == 1 )
	{
		$mailer->AddAddress($mail_to);
	}
	else
	{
		for ( $i = 0; $i < count($tmp_mail_tos); $i++)
		{
			 $mailer->AddAddress($tmp_mail_tos[$i]);
		}
	}

//DEBUG
//$mailer->SMTPDebug = SMTP::DEBUG_SERVER;


        if($mailer->Send()){
            header('Location: ./thanks.html');
        }else{
//            echo "送信に失敗しました";
//            echo $mailer->ErrorInfo;
            header('Location: ./error.html');
        }

}
