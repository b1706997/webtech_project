<?php 
require '../init.php';
use Classes\Input;
use Classes\User;

if(Input::exist()) {
   $login = User::login($_POST['username'],$_POST['password']);
   if($login) 
        print_r(true);
   else
        print_r('Đăng nhập không thành công');
}
?>