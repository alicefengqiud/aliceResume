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


	$conn=mysqli_connect('221.231.138.40','free5q0cu1r5','Balis.1023','f_vip',80);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="SELECT wid,wpic,wtheme,wtime FROM f_vip_woman LIMIT $start,$count";
	$result=mysqli_query($conn,$sql);
	$output=[];
  while(($list = mysqli_fetch_assoc($result))!=null){

    $output[]=$list;
  }
  echo json_encode($output);
?>