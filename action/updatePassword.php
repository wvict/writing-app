<?php
	session_start();
	include "../classes/User.php";

  $id = $_SESSION['id'];
	$password_actual = $_POST['password_actual'];
	$password_new = $_POST['password_new'];
	$password_new2 = $_POST['password_new2'];

$passwordCheck = password_verify($password_actual, $_SESSION['password']);
if($passwordCheck == true){
  if($password_new2 == $password_new){
    $password = password_hash($password_new, PASSWORD_DEFAULT);
    $update = new User;
    $update->updatePassword($password, $id);

    header("Location: ../profile.php?update=success");
    }
    else{
      header("Location: ../profile.php?update=failed&passwordNew=notEqual");
    }
}
else {
  header("Location: ../profile.php?update=failed&password=wrong");
}
