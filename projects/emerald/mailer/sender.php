<?php
require_once 'config.php';
require_once 'MyMailer.php';

function include_vars($vars, $body) {
	$temp = $body;
	if (!isset($vars)) return;
	foreach ($vars as $k => $v) {
		$temp = str_replace('{' . strtoupper($k) . '}', $v, $temp);
	}
	return $temp;
}

$data = [
	'name' => filter_var($_POST['name'], FILTER_SANITIZE_STRING),
	'phone' => filter_var($_POST['phone'], FILTER_SANITIZE_STRING),
	'origin' => filter_var($_POST['origin'], FILTER_SANITIZE_STRING)
];

$data2 = [
	'rooms' => filter_var($_POST['rooms'], FILTER_SANITIZE_NUMBER_INT),
	'floors' => filter_var($_POST['floors'], FILTER_SANITIZE_STRING),
	'additional_options' => filter_var($_POST['additional_options'], FILTER_SANITIZE_STRING)
];

$data3 = [
	'house_item' => filter_var($_POST['houseItem'], FILTER_SANITIZE_STRING)
];

$title = "Новая заявка";
$body = '';
$body .= include_vars($data, file_get_contents('./templates/mail.php'));

if (array_filter($data2))
	$body .= include_vars($data2, file_get_contents('./templates/mail2.php'));

if (array_filter($data3))
	$body .= include_vars($data3, file_get_contents('./templates/mail3.php'));

$body .= file_get_contents('./templates/mail-footer.php');

$mail = new MyMailer();

$mail->isHTML(true);
$mail->Body = $body;

if ($mail->send()) {
	echo 'Message has been sent';
} else {
	echo 'Message could not be sent.';
	echo 'Mailer Error: ' . $mail->ErrorInfo;
}