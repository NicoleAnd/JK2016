<?php 
	header("Content-type: application/json; charset=utf-8");

	require_once('db.php');
	
	if ($link) {
		// 插入新闻
		$newstitle = addslashes(htmlspecialchars($_POST['newstitle']));
		$newstype = addslashes(htmlspecialchars($_POST['newstype']));
		$newsimg = addslashes(htmlspecialchars($_POST['newsimg']));
		$newstime = addslashes(htmlspecialchars($_POST['newstime']));
		$newssrc = addslashes(htmlspecialchars($_POST['newssrc']));
		$newsid = addslashes(htmlspecialchars($_POST['id']));

		$sql = "UPDATE news SET newstitle = '{$newstitle}',newstype = '{$newstype}',newsimg = '{$newsimg}',newstime = '{$newstime}',newssrc = '{$newssrc}' WHERE id = {$newsid}";

		mysqli_query($link,"SET NAMES 'utf8'");		

		$result = mysqli_query($link,$sql);

		// echo json_encode($result);
		echo json_encode(array('success'=>'ok'));
	}
	mysqli_close($link);

?>