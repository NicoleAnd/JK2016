<?php
	
	header("Content-type: application/json; charset=utf-8");
	// $link = mysqli_connect('localhost', 'root', 'root','baidunews',8889);
	require_once('db.php');

	// if(!$link){
	// 	echo json_encode(array('连接信息' =>'连接失败'));
	// }else{
	// 	echo json_encode(array('连接信息' =>'连接成功'));
	// }


	if ($link) {
		//执行成功的过程

		if (isset($_GET['newstype'])) {

			$newstype = $_GET['newstype'];//index页面分类

			$sql = "SELECT * FROM news WHERE newstype = '{$newstype}' order by id desc";
			mysqli_query($link,"SET NAMES 'utf8'");

			$result = mysqli_query($link,$sql);

			$senddata = array();

			while ($row = mysqli_fetch_assoc($result)) {
				array_push($senddata,array(
					'id' => $row['id'],
					'newstype' => ($row['newstype']),
					'newstitle' => $row['newstitle'],
					'newsimg' => $row['newsimg'],
					'newstime' => $row['newstime'],
					'newssrc' => $row['newssrc'],
					));
			}
			echo json_encode($senddata);
		}else{
			$sql = 'SELECT * FROM news order by id desc';
			mysqli_query($link,"SET NAMES 'utf8'");

			$result = mysqli_query($link,$sql);

			$senddata = array();

			while ($row = mysqli_fetch_assoc($result)) {
				array_push($senddata,array(
					'id' => $row['id'],
					'newstype' => $row['newstype'],
					'newstitle' => $row['newstitle'],
					'newsimg' => $row['newsimg'],
					'newstime' => $row['newstime'],
					'newssrc' => $row['newssrc'],
					));
			}
			echo json_encode($senddata);
		}

		
	}else{
		echo json_encode(array('success'=>'none'));
	}
	mysqli_close($link);



	// [{newstype: , newstitle: , ...},{},{}]
	// $arr = array(
	// 				'newstype' =>'百家',
	// 				'newsimg' => 'img/12.jpg',
	// 				'newstime' => '2016-11-16',
	// 				'newssrc' => '新浪要闻',
	// 				'newstitle' => '测试动态获取的新闻标题'
	// 			);
	// echo json_encode($arr);

 
?>