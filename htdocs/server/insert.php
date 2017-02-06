<?php 
	header("Content-type: application/json; charset=utf-8");
	// $link = mysqli_connect('localhost', 'root', 'root','baidunews',8889);

	require_once('db.php');
	
	if ($link) {
		// 插入新闻
		$newstitle = addslashes(htmlspecialchars($_POST['newstitle']));
		$newstype =addslashes(htmlspecialchars($_POST['newstype']));
		$newsimg =addslashes(htmlspecialchars($_POST['newsimg']));
		$newstime =addslashes(htmlspecialchars($_POST['newstime']));
		$newssrc =addslashes(htmlspecialchars($_POST['newssrc']));

		
		
			$sql = "INSERT INTO news (newstitle,newstype,newsimg,newstime,newssrc) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";

			mysqli_query($link,"SET NAMES 'utf8'");
			// $sql = "INSERT INTO news (id,newstitle,newstype,newsimg,newstime,newssrc) VALUES ('13','1','2','3','4','5')";
			

			$result = mysqli_query($link,$sql);

			// echo json_encode($result);
			echo json_encode(array('success'=>'ok'));
		
	}
	mysqli_close($link);

?>