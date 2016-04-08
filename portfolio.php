<?php
	require("constants.php");

	// Create connection
	$conn = mysqli_connect(SERVER, USERNAME, PASSWORD, DATABASE);

	// Check connection
	if (!$conn) {
		echo 'SQL Error!';	// SQL Error
		die;
	}
	$query = "SELECT PortfolioName FROM ComUNSC ORDER BY PortfolioName";	// SQL command
	if(!($result = mysqli_query($conn, $query))) {
		echo 'SQL Error';
		die;
	}

	while ($value = mysqli_fetch_array($result)){
		// Creates a list of delegates
		echo "masterList.push('".$value['PortfolioName']."');";
		// Creates objects which get inserted into array from which they are inserted into database
		echo "DelegateArray.push(new Delegate('" . $value['PortfolioName'] . "'));";
	}
?>