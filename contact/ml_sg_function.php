<?php
require 'vendor/autoload.php'; // If you're using Composer (recommended)

function sg_mailto($var_mail_to,$var_subject,$var_body,$var_mail_from,$var_header)
{
    $url = 'https://api.sendgrid.com/v3/mail/send'; // ★APIのURL
    $apikey = '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';				 // ★発行したAPIkey
    $mail_to = $var_mail_to; 			// ★送信先メールアドレス
    $mail_from = $var_mail_from; 		// ★送信元メールアドレス（固定）
    $subject = $var_subject; 			// ★件名
    $body = $var_body; 					// ★本文
    $header = $var_header;				// header
    $body_type = 'text/plain';
	
	if( strpos($var_mail_to,',') !== false){
		$mail_to = $var_mail_to;
		$sendmailcnt = 1;
	}
	else
	{
		$mail_to = "";
		$tmp_tos = "";
		$sendmailcnt = 2;
		$tmp_mail_tos = explode(",", $var_mail_to);
		foreach($tmp_mail_tos as $value) {
			$tos[$value] = $value;
		}
	}

$email = new \SendGrid\Mail\Mail();
$email->setFrom($mail_from);
$email->setSubject( $subject );

if( $sendmailcnt == 1 )
{
	$email->addTo($mail_to);
}
else
{
	$email->addTos($tos);
}

$email->addContent("text/plain", $body);

$sendgrid = new \SendGrid('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');
try {
    $response = $sendgrid->send($email);
//    error_log(print ($response->statusCode() . "\n"));
//    error_log(print_r($response->headers()));
//    error_log(print_r($response->body() . "\n"));
	  return TRUE;
} catch (Exception $e) {
//    error_log(print( 'Caught exception: '. $e->getMessage() ."\n"));
	  return FALSE;
}

}
