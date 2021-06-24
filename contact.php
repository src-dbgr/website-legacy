<?php

  session_start();

  require_once 'assets/php/libs/phpmailer/PHPMailerAutoload.php';

  $errors = [];

  if(isset($_POST['fullname'], $_POST['email'], $_POST['message'])) {

    $fields = [
      'fullname' => $_POST['fullname'],
      'email' => $_POST['email'],
      'message' => $_POST['message']
    ];

    foreach($fields as $field => $data) {
      if(empty($data)) {
        if(strcmp($field, "fullname") !== 0){
          $errors[] = 'The "' . strtoupper($field) . '" field is required.';
        }else{
          $errors[] = 'The "FULL NAME" field is required.';
        }
      }
    }

    if(empty($errors)){

      $m = new PHPMailer;

      $m->SMTPAuth = true;

      $m->Host = '';
      $m->Username = '';

      $carr = [];
      $keys = [];

      $m->Pwd = "";

      $m->SMTPSecure = 'ssl';
      $m->Port = 465;

      $m->isHTML();

      $m->Subject = 'samuelblehm.de //' . $fields['fullname'] . ' - ' . $fields['email'];
      $m->Body = 'From: ' . $fields['fullname'] . ' (' . $fields['email'] . ')<p>' . $fields['message'] . '</p>';

      $m->FromName = 'Contact Form - samuelblehm.de';

      $m->AddAddress('', '');

      if($m->send()){
        header('Location: entrance.php');
        die();
      }else{
        $errors[] = 'Sorry, something went wrong. Try again later.';
      }

    }

  } else {
    $errors[] = 'Something went wrong.';
  }

  $_SESSION['errors'] = $errors;
  $_SESSION['fields'] = $fields;

?>
