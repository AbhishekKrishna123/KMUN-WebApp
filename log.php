<!-- log.php -->
<!-- logs to file -->

<?php
	$servername = "localhost";
	$username = "sqlUserOne";
	$password = "Chess123";
	$dbname = "TheData";

	$filename = "log.txt";

	if ($_POST['mode'] == "app") {
		$myfile = fopen($filename, 'a');
		fwrite($myfile, $_POST['string']);
	}
	else if ($_POST['mode'] == "new"){
		$myfile = fopen($filename, 'w');
		fwrite($myfile, $_POST['string']);
	}

	fclose($myfile);
?>