<?php

error_reporting();

include './config/db_config.php';

$link = mysqli_connect($host, $user, $password, $db_name) or die("Connect error");

if(isset($_GET['getVideos'])){


	$query = "SELECT * FROM `playlist` ORDER BY `created_at` DESC";
	$response = mysql_query($link, $query);

	$data = [];

	while($row = mysql_fetch_assoc($response)){
		$data[] = $row;
	}

	echo json_decode($data);
}


//Далее предполагается, что в $_POST нам придут title, url, created_at и order параметры (параметр provider можно
//вытащить из url).

//Также обязательно нужно проводить корректность переданных данных, но предполагается, что это будет сделано на клиенте.
//На сервере тоже нужно, но боюсь, что у меня уже не осталось времени.
if(isset($_GET['addVideo'])){
	$title = $_POST['title'];
	$url = $_POST['url'];
	$created_at = $_POST['created_at'];
	$order = $_POST['order'];

	$query = "INSERT INTO `playlist`('title', 'url', 'created_at', 'order') VALUES ('".$title."', '".$url."', '".$created_at."', '".$order."')";

	$response = mysql_query($link, $query);
}


if(isset($_GET['editVideo'])){
	$id = $_POST['id'];
	$title = $_POST['title'];
	$url = $_POST['url'];
	$created_at = $_POST['created_at'];
	$order = $_POST['order'];

	$query = "UPDATE `playlist` SET `title`='".$title."', `url`='".$url."', `created_at`='".$created_at."', `order`='".$order."' WHERE `id`=".$id.;

	$response = mysql_query($link, $query);
}

if(isset($_GET['deleteVideo'])){
	$id = $_POST['id'];

	$query = "DELETE FROM `playlist` WHERE `id`=".$id;

	$response = mysql_query($link, $query);
}




$mysql_close($link);