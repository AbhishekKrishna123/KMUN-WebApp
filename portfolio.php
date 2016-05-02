<!-- This script is used by munmod for retrieving the delegate portfolios from the server DB -->
<?php
	require("constants.php");

	// Create connection
	$conn = mysqli_connect(SERVER, USERNAME, PASSWORD, DATABASE);

	// Check connection
	if (!$conn) {
		echo 'SQL Error!';	// SQL Error
		die;
	}
	$query = "SELECT PortfolioName, DelegateEmail FROM ComUNSC ORDER BY PortfolioName";	// SQL command
	if(!($result = mysqli_query($conn, $query))) {
		echo 'SQL Error';
		die;
	}

	while ($value = mysqli_fetch_array($result)){
		// Skip the portfolios which haven't been assigned
		if ($value['DelegateEmail'] == "@") continue;
		// Creates a list of delegates
		echo "masterList.push('".$value['PortfolioName']."');";
		// Creates objects which get inserted into array from which they are inserted into database
		echo "DelegateArray.push(new Delegate('" . $value['PortfolioName'] . "'));";
	}
?>