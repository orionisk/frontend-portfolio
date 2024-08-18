<?php
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';
require_once 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;

class MyMailer extends PHPMailer
{
	var $charset = 'utf-8';
	var $to_name;
	var $to_email;
	var $From = null;
	var $FromName = null;
	var $Sender = null;

	function MyMailer()
	{
		global $site;
		if ($site['smtp_mode'] == 'enabled') {
			$this->Host = $site['smtp_host'];
			$this->Port = $site['smtp_port'];
			if ($site['smtp_username'] != '') {
				$this->SMTPAuth  = true;
				$this->Username  = $site['smtp_username'];
				$this->Password  =  $site['smtp_password'];
			}
			$this->isSMTP();
		}
		if (!$this->From) {
			$this->From = $site['from_email'];
		}
		if (!$this->FromName) {
			$this->FromName = $site['from_name'];
		}
		if (!$this->Sender) {
			$this->Sender = $site['from_email'];
		}
		$this->CharSet = $this->charset;
	}
}