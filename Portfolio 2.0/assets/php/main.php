<?php 
// Get data from form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "brendan.losinski@yahoo.com";
$subject = "Subject line"

// The following will be sent
$txt = "Name = ". $name . "\r\n Email = " . $email . "\r\n message = ". $message;

$headers = "From: noreply@demosite.com" . "\r\n" .

if ($email != NULL) {
    mail($to, $subject, $txt, $headers):
}

// Redirect to
header("Location:last.html");
?>