<?php
if (isset($_POST)) {
     error_reporting(0);
   $name = $_POST["name"];
   $email = $_POST["email"];
   $subject = $_POST["subject"];
   $comments = $_POST["comments"];


   $domain = $_SERVER["HTTP_HOST"];
   $to = "gerardojao@gmail.com";
   $subject = "Contact from form $domain: $subject";
   $message = "
   <p> Data sent from form $domain: $subject </p> 
   <ul>
    <li>Name: <b> $name </b> </li>
    <li>Email: <b> $email </b> </li>
    <li>Subject: $subject </li>
    <li>Comments: $comments  </li>
   <ul>
    ";
    $headers = "MIME-Version:1.0\r\n"."Content-type:text/html, charset=utf-8\r\n"."From: Sent automatic, no reply <noreply@$domain>";

   $send_mail = mail($to,$subject,$message,$headers);


   if($send_mail){
       $res = [
        "err"=>false,
        "message"=>"Your data has been sent."
       ];
   }else{
    $res = [
        "err"=>true,
        "message"=>"Error to send data, try again." 
    ];
   }
   header("Content-type:application/json");
   echo json_encode($res);
   exit;
};
