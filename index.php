<!-- 
MUN Moderator 2016
A Web App for MUN organizers to automate and moderate committees easily
Developed by KMUN Tech Team for Kumarans Model United Nations <kmun.in> 
-->
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>MUN Moderator</title>
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
		<link rel="stylesheet/less" type="text/css" href="munmod.less" />
		<!-- For processing the less file -->
		<script src="less.min.js" type="text/javascript"></script>


		<!-- Favicons: From realfavicongenerator.net -->
		<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
		<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
		<link rel="icon" type="image/png" href="/favicon-194x194.png" sizes="194x194">
		<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
		<link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192">
		<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
		<link rel="manifest" href="/manifest.json">
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
		<meta name="msapplication-TileColor" content="#0e71c3">
		<meta name="msapplication-TileImage" content="/mstile-144x144.png">
		<meta name="theme-color" content="#ffffff">
	</head>

	<body>
		<div id="loading">
			<div class="preloader-wrapper active">
		      <div class="spinner-layer spinner-blue">
		        <div class="circle-clipper left">
		          <div class="circle"></div>
		        </div><div class="gap-patch">
		          <div class="circle"></div>
		        </div><div class="circle-clipper right">
		          <div class="circle"></div>
		        </div>
		      </div>

		      <div class="spinner-layer spinner-red">
		        <div class="circle-clipper left">
		          <div class="circle"></div>
		        </div><div class="gap-patch">
		          <div class="circle"></div>
		        </div><div class="circle-clipper right">
		          <div class="circle"></div>
		        </div>
		      </div>

		      <div class="spinner-layer spinner-yellow">
		        <div class="circle-clipper left">
		          <div class="circle"></div>
		        </div><div class="gap-patch">
		          <div class="circle"></div>
		        </div><div class="circle-clipper right">
		          <div class="circle"></div>
		        </div>
		      </div>

		      <div class="spinner-layer spinner-green">
		        <div class="circle-clipper left">
		          <div class="circle"></div>
		        </div><div class="gap-patch">
		          <div class="circle"></div>
		        </div><div class="circle-clipper right">
		          <div class="circle"></div>
		        </div>
		      </div>
		    </div>
		</div>
		<!-- layout contains the menu and content area -->
		<div id="layout">
			<!-- Menu toggle -->
			<a href="#menu" id="menuLink" class="menu-link">
				<!-- Hamburger icon -->
				<span></span>
			</a>

			<div id="menu"  class="z-depth-2">
				<div class="pure-menu">
					<div id="headerArea">
						<div id="headerImage"></div>
						<a href="#" class="pure-menu-heading">MUN Moderator 2016</a>
					</div>
					<!-- Navigation Panel -->
					<ul class="pure-menu-list">
						<li class="pure-menu-item main-navigation waves-effect waves-light" id="button-RollCall"><a href="#" class="pure-menu-link">Roll Call</a></li>
						<li class="pure-menu-item main-navigation waves-effect waves-light" id="button-voting"><a href="#" class="pure-menu-link">Voting</a></li>
						<li class="pure-menu-item main-navigation waves-effect waves-light" id="button-gsl"><a href="#" class="pure-menu-link">General Speakers List</a></li>
						<li class="pure-menu-item main-navigation waves-effect waves-light" id="button-ssl"><a href="#" class="pure-menu-link">Secondary Speakers List</a></li>
						<li class="pure-menu-item main-navigation waves-effect waves-light" id="button-mod"><a href="#" class="pure-menu-link">Moderated Caucus</a></li>
						<li class="pure-menu-item main-navigation waves-effect waves-light" id="button-unmod"><a href="#" class="pure-menu-link">Unmoderated Caucus</a></li>
						<li class="pure-menu-item main-navigation waves-effect waves-light" id="button-resolution"><a href="#" class="pure-menu-link">Resolution</a></li>
						

						<!-- <li class="pure-menu-item other-nav-items menu-item-divided" id="button-about"><a href="#" class="pure-menu-link"><i class="material-icons">info_outline</i> About</a></li>
						<li class="pure-menu-item other-nav-items" id="button-help"><a href="#" class="pure-menu-link"><i class="material-icons">help_outline</i> Help</a></li>
						<li class="pure-menu-item other-nav-items" id="button-settings"><a href="#" class="pure-menu-link"><i class="material-icons">settings</i> Settings</a></li>
						<li class="pure-menu-item menu-item-divided ExternalWebsite"><a class="pure-menu-link" href="http://kmun.in" target="_blank"><i class="material-icons">link</i> KMUN Website</a></li>
						<li class="pure-menu-item ExternalWebsite"><a class="pure-menu-link" href="#">Insert sponsor logo</a></li> -->
					</ul>
				</div>
			</div>

			<div id="main">
				<div id="top-bar" class="z-depth-2">
					<div id="status-bar">Connectivity Status <a id="status-icon"><i class="fa fa-circle"></i><span id="status-text"></span></a></div>
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
				
				<!-- Agenda -->
				<div class="container hidden" id="agenda">
					<div class="input-field" id="agenda-field">
						<input id="CurrentAgendaField" type="text">
						<label for="CurrentAgendaField">Current&nbsp;Agenda</label>
					</div>
				</div>

				<div class="conatiner centerText" id="welcome">
					<div id="welcomeImage"></div>
					<h5 class="blue-text text-lighten-2" style="font-weight: 300">Welcome to MUN Moderator 2016</h5>
					<h6 class="grey-text text-lighten-1" style="font-weight: 300">Use the navigation bar on the left side to access different sections</h6>
				</div>

				<!-- Roll Call Tab -->
				<div class=" hidden centerText" id="tab-RollCall">
					<h5 class="blue-text text-darken-2 centerText font-weight-light">Roll Call</h5>
					<a class="waves-effect waves-blue btn-flat" id="button-rollCallReset" onclick="resetRollCall()">Reset Roll</a>
					<!-- <div class="grey-text text-lighten-1"  >Clear All</divider> -->
					<div class="my-List container" id="list-rollCall"></div>
				</div>

				<!-- Voting Tab -->
				<div class="hidden centerText" id="tab-voting">
					<h5 class="blue-text text-darken-2 centerText font-weight-light">Voting</h5>
					<div id="voting-main" class="hidden">
						<h6 class="blue-text" id="votingLabel-delegate">DelegateName</h6>
						<div>
							<p class="grey-text text-lighten-1" style="display: inline;" id="votingLabel-current">x</p>
							<p class="grey-text text-lighten-1" style="display: inline;">&nbsp;of&nbsp;</p>
							<p class="grey-text text-lighten-1" style="display: inline;" id="votingLabel-max">y</p>
						</div>
						<div class="">
							<button class="waves-effect waves-light btn blue" id="votingButton-1" onClick="votingControlButton(this)">Yes</button>
							<button class="waves-effect waves-light btn blue" id="votingButton-2" onClick="votingControlButton(this)">No</button>
							<button class="waves-effect waves-light btn blue" id="votingButton-3" onClick="votingControlButton(this)">Abstain</button>
							<button class="waves-effect waves-light btn blue" id="votingButton-4" onClick="votingControlButton(this)">Pass</button>
						</div>
					</div>

					<div id="voting-results" class="centerText hidden">
						<h6 class="blue-text" id="votingLabel-delegate">Voting Result</h6>
						<div>
							<span>Yes </span>
							<span class="blue-text text-lighten-1" id="votingLabel-yes">x</span>
						</div>
						<div>
							<span>No </span>
							<span class="blue-text text-lighten-1" id="votingLabel-no">x</span>
						</div>
						<div>
							<span>Abstain </span>
							<span class="blue-text text-lighten-1" id="votingLabel-abstain">x</span>
						</div>
						<div>
							<span>Perentage </span>
							<span class="blue-text text-lighten-1" id="votingLabel-percent">x</span>
						</div>
						<div>
							<span>Result </span>
							<span class="blue-text text-lighten-1" id="votingLabel-statement">x</span>
						</div>
					</div>
					<a class="waves-effect waves-light btn blue" onclick="startVoting()"><span id="votingButton-start">Start Vote</span></a>
				</div>

				<!-- GSL Tab -->
				<div class="container hidden" id="tab-gsl">
					<div class="input-field" id="autocomplete-gsl-div">
						<input id="autocomplete-gsl" type="text">
						<label for="autocomplete-gsl">Add&nbsp;speaker&nbsp;</label>
					</div>

					<a class="waves-effect waves-light blue btn">Start calling speakers</a>
				
					<p>Current Delegate</p>
					<p>DelegateName</p>
				</div>

				<!-- SSL Tab -->
				<div class="container hidden" id="tab-ssl">
					<div class="input-field" id="autocomplete-ssl-div">
						<input id="autocomplete-ssl" type="text">
						<label for="autocomplete-ssl">Add&nbsp;speaker&nbsp;</label>
					</div>				
	
					<a class="waves-effect waves-light blue btn">Start calling speakers</a>

					<div>
						<p>Current Delegate</p>
					</div>
					<div>
						<p>DelegateName</p>
					</div>
				</div>

				<!-- Mod Tab -->
				<div class="container hidden" id="tab-mod">
					<h5 class="blue-text text-darken-2 centerText font-weight-light">Moderated Caucus</h5>
					<div class="row">
						<div class="col s12 m6">
							<div class="input-field" id="mod-topic">
								<input id="mod-topic-field" type="text">
								<label for="mod-topic-field">Topic</label>
							</div>
						</div>
						
						<div class="col s12 m6">
							<div class="input-field">
								<input id="autocomplete-mod-start" type="text">
								<label for="autocomplete-mod-start">Caucus&nbsp;started&nbsp;by</label>
							</div>
							<div class="flag" id="flag-mod-start"></div>
						</div>
					</div>
					
					<div class="row">
						<div class="col s3">
							<div class="flag" id="flag-mod-speaker"></div>
						</div>
						<div  class="col s6">
							<div class="input-field">
								<input id="autocomplete-mod-speaker" type="text">
								<label for="autocomplete-mod-start">Current&nbsp;speaker</label>
							</div>
						</div>
						<div class="col s3">
							<a class="waves-effect waves-light blue btn mod-control-buttons" onclick="modSpeakerButtonReset()">Reset Speaker Time</a>
						</div>
					</div>

					<h6 class="grey-text centerText">Time for Moderated Caucus</h6>
					<div class="row">
						<div class="col s2 offset-s4 m1 offset-m5">
							<div class="input-field">
								<input id="mod-minutes" type="number" value="0">
								<label for="mod-minutes">Minutes</label>
							</div>
						</div>
						<div class="col s2 m1">
							<div class="input-field">
								<input id="mod-seconds" type="number" value="0">
								<label for="mod-seconds">Seconds</label>
							</div>
						</div>
					</div>
										
					<h6 class="grey-text centerText">Set time per speaker</h6>
					<div class="row">
						<div class="col s2 m1 offset-s4 offset-m5">
							<div class="input-field">
								<input id="mod-speaker-set-minutes" type="number" value="0">
								<label for="mod-speaker-set-minutes">Minutes</label>
							</div>
						</div>
						<div class="col s2 m1">
							<div class="input-field">
								<input id="mod-speaker-set-seconds" type="number" value="0">
								<label for="mod-speaker-set-seconds">Seconds</label>
							</div>
						</div>
						<div class="col s2 m2">
							<a class="waves-effect waves-light blue btn" onclick="modSpeakerSet()">Set</a>
						</div>
					</div>
									
					<h6 class="grey-text centerText">Time for speaker</h6>
					<div class="row">
						<div class="col s2 offset-s4 m1 offset-m5">
							<div class="input-field">
								<input id="mod-speaker-minutes" type="number" value="0" disabled="true">
								<label for="mod-speaker-minutes">Minutes</label>
							</div>
						</div>
						<div class="col s2 m1">
							<div class="input-field">
								<input id="mod-speaker-seconds" type="number" value="0" disabled="true">
								<label for="mod-speaker-seconds">Seconds</label>
							</div>
						</div>
					</div>	
					
					<div class="row centerText">
						<a class="waves-effect waves-light blue btn" onclick="ModTimer()">
							<span id="mod-caucus-button-label">Start Moderated Caucus</span>
						</a>
						
						<a class="waves-effect waves-light blue btn mod-control-buttons" onclick="modPause()">
							<span id="mod-caucus-pause-button-label">Pause</span>
						</a>
						
						<a class="waves-effect waves-light blue btn mod-control-buttons" onclick="modExtendMin()">
							+1 min
						</a>

						<a class="waves-effect waves-light blue btn mod-control-buttons" onclick="modExtendSec()">
							+10 sec
						</a>
					</div>
				</div>
				

				<!-- Unmod Tab -->
				<div class="container hidden" id="tab-unmod">
					<h5 class="blue-text text-darken-2 centerText font-weight-light">Unmoderated Caucus</h5>

					<hr>
					
					<div class="row" style="text-align: center;">
						<div class="col s12 m6">
							<div class="input-field">
								<input id="unmod-topic-field" type="text">
								<label for="unmod-topic-field">Topic</label>
							</div>
						</div>
						<div class="col s12 m6">
							<div class="input-field">
								<input type="text" id="autocomplete-unmod-start">
								<label for="autocomplete-unmod-start">Caucus&nbsp;started&nbsp;by</label>
							</div>
							<div class="flag" id="flag-unmod-start"></div>
						</div>
					</div>

					<h6 class="grey-text centerText">Time for Unmoderated Caucus</h6>
					<div class="row">
						<div class="col s2 offset-s4 m1 offset-m5">
							<div class="input-field">
								<input type="number" id="unmod-minutes" value="0">
								<label for="unmod-minutes">Minutes</label>
							</div>
						</div>
						<div class="col s2 m1">
							<div class="input-field">
								<input type="number" id="unmod-seconds" value="0">
								<label for="unmod-seconds">Seconds</label>
							</div>
						</div>
					</div>

					<div class="progress" id="unmod-progress">
						<div class="determinate blue" style="width: 70%"></div>
					</div>
					
					
					<div class="row">
						<div class="col s12 centerText">

							<a class="waves-effect waves-light btn blue" onclick="UnmodTimer()">
								<span id="unmod-caucus-button-label">Start Unmoderated Caucus</span>
							</a>

							<a class="waves-effect waves-gold btn-flat hidden unmod-control-buttons" onclick="unmodPause()">
								<span id="unmod-caucus-pause-button-label">Pause</span>
							</a>

							<a class="waves-effect waves-gold btn-flat hidden unmod-control-buttons" onclick="unmodExtendMin()">
								+1 min
							</a>
							<a class="waves-effect waves-gold btn-flat hidden unmod-control-buttons" onclick="unmodExtendSec()">
								+10 sec
							</a>

						</div>
					</div>
				</div>

			</div>

			<!-- Resolution Tab -->
			<div class="container centerText hidden" id="tab-resolution">
				<p class="">Resolution Vote</p>
				<p class="">Current Delegate</p>
				<p class="">DelegateName</p>
				<div>
					<p class="ms-font-s ms-fontColor-neutralSecondary" style="display: inline;" id="ResolutionVote-current">x</p>
					<p class="ms-font-s ms-fontColor-neutralSecondary" style="display: inline;">&nbsp;of&nbsp;</p>
					<p class="ms-font-s ms-fontColor-neutralSecondary" style="display: inline;" id="ResolutionVote-max">y</p>
				</div>
				<div>
					<a class="waves-effect waves-light btn blue" id="ResolutionVote-1" onClick="doResolutionVote(this)">Yes</a>
					<a class="waves-effect waves-light btn blue" id="ResolutionVote-2" onClick="doResolutionVote(this)">No</a>
					<a class="waves-effect waves-light btn blue" id="ResolutionVote-3" onClick="doResolutionVote(this)">Yes With Rights</a>
					<a class="waves-effect waves-light btn blue" id="ResolutionVote-4" onClick="doResolutionVote(this)">No With Rights</a>
					<a class="waves-effect waves-light btn blue" id="ResolutionVote-5" onClick="doResolutionVote(this)">Abstain</a>
					<a class="waves-effect waves-light btn blue" id="ResolutionVote-6" onClick="doResolutionVote(this)">Pass</a>
				</div>
				<a class="waves-effect waves-light btn blue">Stop Vote</a>
			</div>
		</div>	<!-- End of layout -->


		<!-- Javascript Files -->
		<!-- jQuery -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<!-- jQuery Autocomplete Plugin from https://github.com/devbridge/jQuery-Autocomplete -->
		<script src="jquery.autocomplete.min.js"></script>
		<!-- Materialize -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
		<!-- Custom JS -->
		<script src="munmod.js"></script>
		
		<!-- JS needs to be loaded before delegates are pushed to JS array -->
		<!-- Get countries from the database using PHP and push into JS array -->
	</body>
</html>