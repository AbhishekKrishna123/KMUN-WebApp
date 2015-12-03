<?php
	$servername = "localhost";
	$username = "sqlUserOne";
	$password = "Chess123";
	$dbname = "TheData";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);

	// Check connection
	if (!$conn) {
		echo '0';
		die;
	}
	$sqll = "SELECT Information, Value FROM ConnectivityCheck WHERE Information = 'ConnectivityVariable'";	// SQL command
	if(!($check = mysqli_query($conn, $sqll))) {
		echo '0';
		die;
	}

	$val = mysqli_fetch_array($check);
	echo $val['Value'];
?>