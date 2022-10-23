<?php
  $fName = "Имя: ".$_POST['name'];
  $fNumber =  "\nНомер: ".$_POST['phonenumber'];
  $AllInOne =  $fName.$fNumber;
  $to = "utoik@ya.ru";
  $subject = "Заявка на звонок Blanchard";
  mail($to, $subject, $AllInOne, 'Content-Type: text/plain; charset=utf-8', '-f cq78305@server.timeweb.ru');
?>
