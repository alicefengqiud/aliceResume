<?php
	header('Content-Type: application/json;charset=UTF-8');
	$uname=$_REQUEST['uname'];
	$upwd=$_REQUEST['upwd'];
	$conn=mysqli_connect('221.231.138.40','free5q0cu1r5','Balis.1023','f_vip',80);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="SELECT * FROM f_vip_user WHERE uname='$uname' AND upwd='$upwd'
	";
	$result=mysqli_query($conn,$sql);

	$output=['code'=>0,'msg'=>null];
	if($result===false){
		$output['code']=1001;
		$output['msg']='SQL语句错误';
	}
	else{
		$user=mysqli_fetch_assoc($result);
		if($user===null){
			$output['code']=1002;
			$output['msg']='用户名或密码错误';
		}
		else{
			$output['code']=1000;
			$output['msg']='登录信息验证正确';
		}
	}
	echo json_encode($output);
?>