<?
$adminemail="optrbk77@yandex.ru";  // e-mail админа 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
$backurl="thanks.html";  // На какую страничку переходит после отправки письма 
"Content-Type: text/plain; charset=utf-8";

$headers = "From:" . $adminemail . "\r\n" .
            "Reply-To: \n" .
            "X-Mailer: PHP/" . phpversion() . "\n".
            "MIME-Version: 1.0" . "\r\n" .
            "Content-Type: text/plain; charset=utf-8";

// Принимаем данные с формы 
$name=$_POST['name'];
$phone=$_POST['phone'];
$mail=$_POST['mail'];
$city=$_POST['city'];
 
// Проверяем валидность e-mail 

$msg="
Заявка с пули Джилет
Имя: $name 
Телефон: $phone
E-mail: $mail
Город: $city
"; 

// Отправляем письмо админу  

mail("$adminemail", "$date $time Заявка с пули Джилет РФ
от $name", "$msg", "$headers"); 

// Выводим сообщение пользователю 
 
print " <script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 0);
//--></script> 

$msg 
 
<p></p>";  
exit; 

header('Refresh: 0; URL=thanks.html');
?>
