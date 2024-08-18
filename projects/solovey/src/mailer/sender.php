<?php
require_once 'config.php';
require_once 'MyMailer.php';

function include_vars($vars, $body)
{
	$temp = $body;
	if (!isset($vars)) return;
	foreach ($vars as $k => $v) {
		$temp = str_replace('{' . strtoupper($k) . '}', $v, $temp);
	}
	return $temp;
}

$data = array(
	'name' => filter_var($_POST['name'], FILTER_SANITIZE_STRING),
	'phone' => filter_var($_POST['phone'], FILTER_SANITIZE_STRING),
	'email' => filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)
);

$title = "Заголовок письма";
$body = include_vars($data, file_get_contents('mail.html'));

$mail = new MyMailer();

$mail->isHTML(true);
$mail->addAddress('info@mailtrap.io', 'Mailtrap');
$mail->Subject = 'Test Email';
$mail->Body = $body;

if ($mail->send()) {
	echo 'Message has been sent';
} else {
	echo 'Message could not be sent.';
	echo 'Mailer Error: ' . $mail->ErrorInfo;
}