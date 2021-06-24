<?php
  include "env.php";
  $captchaIs = false;

  if(isset($_POST['g-recaptcha-response']) && $_POST['g-recaptcha-response']){
    //var_dump($_POST);
    $ip = $_SERVER['REMOTE_ADDR'];
    $captcha = $_POST['g-recaptcha-response'];
    $rsp = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".getenv("SECRET")."&response=$captcha&remoteip$ip");
    //var_dump($rsp);
    $arr = json_decode($rsp, TRUE);
    if($arr['success']){
      $captchaIs = true;
      echo true;
      //echo json_encode(true);
    }else{
      $captchaIs = false;
      echo false;
      //echo json_encode(false);
    }
  }else{
    $captchaIs = false;
    echo false;
  }
