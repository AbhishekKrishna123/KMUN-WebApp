<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>MUN Moderator Viewer</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- normalize.css -->
		<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/base-min.css">
		<!-- Pure CSS -->
		<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
		<!--Import Font Awesome Icons -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
		<!-- Materialize -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css">
		<!-- Open Sans Font -->
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
		<!-- Custom CSS -->
		<!-- <link rel="stylesheet" href="munmod.css"> -->
		<!-- <link rel="stylesheet/less" type="text/css" href="munmod.less" /> -->
		<!-- For processing the less file -->
		

		<style type="text/css">
		#top-bar {
			height: 50px;
			width: 100%;
			background-color: #000000;
			color: #d69d36;
			border-bottom: 1px solid #d69d36;
			text-align: center;
			cursor: default;
		}
		#headerImage {
			height: 50px;
			min-width: 50px;
			background-image: url("logoSmall.png");
			background-repeat: no-repeat;
			background-size: 40px 40px;
			background-position: center;
			display: inline-block;
			float: left;
		}
		.pure-menu-heading {
			cursor: default;
			color: rgba(14,113,195,1);
			margin: 0;
			height: 30px;
			padding-top: 15px;
			padding-bottom: 5px;
			text-transform: capitalize;
		}
		hr {
			display: block;
			height: 1px;
			border: 0;
			border-top: 1px solid #eeeeee;
			margin-left: 2em;
			margin-right: 2em;
			padding: 0;
		}
		.divider {
			display: block;
			height: 0.3em;
			border: 0;
			border-top: 1px solid #0078D7;
			width: 2em;
			padding: 0;
			text-align: center;
			margin-left: auto;
			margin-right: auto;
		}
		#display-UnmodStartFlag {
			margin-left: auto;
			margin-right: auto;
			margin-top: 1em;
			height: 6em;
			width: 9em;
			background-image: url('logoSmall.png');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			border: 1px solid #cccccc;
		}

		</style>
	</head>
	<body>
		<div id="top-bar" class="z-depth-2">
					<div id="committeeName">Committee Name</div>
					<div class="input-field" id="sessionSelector">
						<select>
							<option value="" selected>Select Session</option>
							<option value="1">Session 1</option>
							<option value="2">Session 2</option>
							<option value="3">Session 3</option>
						</select>
  					</div>
				</div>
		
		<div class="pure-g">
			<div class="pure-u-1-1" style="text-align: center; margin: 0.4em;">
				<span class="ms-font-l ms-fontColor-themePrimary ms-fontWeight-semibold" style="padding-right: 0.4em;">Current Agenda</span>
				<span class="ms-font-l ms-fontColor-neutralPrimary" id="display-CurrentAgenda"></span>	
			</div>

			<div class="pure-u-1-1" style="text-align: center; margin: 1em;" id="display-panel-UnmoderatedCaucus">
				<div class="ms-font-xl ms-fontColor-themePrimary">Unmoderated Caucus</div>
				<hr class="divider">
				<div class="pure-u-1-1" style="text-align: center;">
					<span class="ms-font-l ms-fontColor-themePrimary ms-fontWeight-semibold" style="padding-right: 0.4em; margin: 0.4em;">Topic</span>
					<span class="ms-font-l ms-fontColor-neutralPrimary" id="display-UnmodTopic"></span>	
				</div>
				<div class="pure-u-1-1" style="text-align: center;">
					<span class="ms-font-l ms-fontColor-themePrimary ms-fontWeight-semibold" style="padding-right: 0.4em; margin: 0.4em;">Caucus started by</span>
					<span class="ms-font-l ms-fontColor-neutralPrimary" id="display-UnmodStart"></span>	
				</div>
				<div class="pure-u-1-1" style="text-align: center;">
					<div class="ms-font-l ms-fontColor-neutralPrimary" id="display-UnmodStartFlag"></div>	
				</div>
			</div>
		</div>

		<!-- Javascript Files -->
		<!-- jQuery -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<!-- Custom JS -->
		<script src="munmodDisplay.js"></script>
	</body>
</html>