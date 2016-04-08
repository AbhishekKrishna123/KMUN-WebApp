<?php
	require("constants.php");

	// Create connection
	$conn = mysqli_connect(SERVER, USERNAME, PASSWORD, DATABASE);

	// Check connection
	if (!$conn) {
		echo '0';	// SQL Error
		die;
	}
	$sqll = "SELECT Information, Value FROM ConnectivityCheck WHERE Information = 'ConnectivityVariable'";	// SQL command
	if(!($check = mysqli_query($conn, $sqll))) {
		echo '0';	// SQL Error
		die;
	}

	$val = mysqli_fetch_array($check);
	// Should echo '1' from DB to indicate everything is OK
	echo $val['Value'];
?>