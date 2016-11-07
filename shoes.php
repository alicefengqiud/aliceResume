<?php
	header('Content-Type: application/json;charset=UTF-8');
  //$countDown = time()*1000;
  //起始行
    $start = $_REQUEST['start'];
    //判断是否有数据传入
    if(empty($start)){
      $start=0;
    }
    //行数
    $count=8;


	$conn=mysqli_connect('221.231.138.40','root','','f_vip',3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="SELECT sid,spic,stheme,stime FROM f_vip_shoes LIMIT $start,$count";
	$result=mysqli_query($conn,$sql);
	$output=[];
  while(($list = mysqli_fetch_assoc($result))!=null){

    $output[]=$list;
  }
  echo json_encode($output);
?>