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
		<script src="./external/js/less.min.js" type="text/javascript"></script>


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
					<div class="pure-menu-list">
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
					</div>
				</div>
			</div>

			<main id="main">
				<div id="top-bar" class="z-depth-2">
					<div id="status-bar">Connectivity <a id="status-icon"><i class="fa fa-circle"></i><span id="status-text"></span></a></div>
					<div id="committeeName">Committee Name</div>
					<div class="input-field" id="sessionSelectorDiv">
						<select id="sessionSelector" onchange="sessionSelect()" class="browser-default">
							<option value="" selected disabled>Session #</option>
							<option value="session1">Session 1</option>
							<option value="session2">Session 2</option>
							<option value="session3">Session 3</option>
							<option value="session4">Session 4</option>
							<option value="session5">Session 5</option>
							<option value="session6">Session 6</option>
							<option value="session7">Session 7</option>
							<option value="session8">Session 8</option>
						</select>
					</div>
				</div>
				
				<!-- Agenda -->
				<div class="container hidden" id="agenda">
					<div class="input-field" id="agenda-field">
						<input id="CurrentAgendaField" type="text" value="Destroy the world by starting World War 3!">
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
					<div class="sectionHeading">Roll Call</div>

					<hr class="separator">

					<!-- Roll Call Status -->
					<div id="rollCallStatus" class="row">
						<div class="rollCallStatus-property col s2 offset-s2">
							<div class="rollCallStatus-propertyName">Total</div>
							<div class="rollCallStatus-propertyValue" id="rollCallStatus-total"></div>
						</div>
						<div class="rollCallStatus-property col s2"> 
							<div class="rollCallStatus-propertyName">Absent</div>
							<div class="rollCallStatus-propertyValue" id="rollCallStatus-absent"></div>
						</div>
						<div class="rollCallStatus-property col s2">
							<div class="rollCallStatus-propertyName">Present</div>
							<div class="rollCallStatus-propertyValue" id="rollCallStatus-present"></div>
						</div>
						<div class="rollCallStatus-property col s2">
							<div class="rollCallStatus-propertyName">Present & Voting</div>
							<div class="rollCallStatus-propertyValue" id="rollCallStatus-presentAndVoting"></div>
						</div>
					</div>

					<a class="waves-effect waves-gold btn-flat" onclick="RollCallAbsent()">Absent</a>
					<a class="waves-effect waves-gold btn-flat" onclick="RollCallPresent()">Present</a>
					<a class="waves-effect waves-gold btn-flat" onclick="RollCallPresentAndVoting()">Present & Voting</a>

					<div class="rollCallList container" id="list-rollCall"></div>
				</div>

				<!-- Voting Tab -->
				<div class="hidden centerText" id="tab-voting">
					<div class="sectionHeading">Voting</div>

					<hr class="separator">

					<div id="voting-main" class="hidden">
						<div id="votingLabel-delegate">DelegateName</div>
						<div id="votingLabel-serialNumber">
							<p class="grey-text text-lighten-1" style="display: inline;" id="votingLabel-current">x</p>
							<p class="grey-text text-lighten-1" style="display: inline;">&nbsp;of&nbsp;</p>
							<p class="grey-text text-lighten-1" style="display: inline;" id="votingLabel-max">y</p>
						</div>
						<div>
							<button class="waves-effect waves-light btn blue votingControlButtons" id="votingButton-1" onClick="votingControlButton(this)">Yes</button>
							<button class="waves-effect waves-light btn blue votingControlButtons" id="votingButton-2" onClick="votingControlButton(this)">No</button>
							<button class="waves-effect waves-light btn blue votingControlButtons" id="votingButton-3" onClick="votingControlButton(this)">Abstain</button>
							<button class="waves-effect waves-light btn blue votingControlButtons" id="votingButton-4" onClick="votingControlButton(this)">Pass</button>
						</div>
					</div>

					<div id="voting-results" class="centerText hidden">
						<div class="subHeading">Voting Result</div>

						<div class="row">
							<div class="col s12 m8 rightText">
								<div class="row votingResults-row">
									<div class="col s6 rightText">
										<span class="votingResults-label">Yes</span>
									</div>
									<div class="col s6 leftText">
										<span class="votingResults-labelValue" id="votingLabel-yes">x</span>
									</div>
								</div>

								<div class="row votingResults-row">
									<div class="col s6 rightText">
										<span class="votingResults-label">No</span>
									</div>
									<div class="col s6 leftText">
										<span class="votingResults-labelValue" id="votingLabel-no">x</span>
									</div>
								</div>

								<div class="row votingResults-row">
									<div class="col s6 rightText">
										<span class="votingResults-label">Abstain</span>
									</div>
									<div class="col s6 leftText">
										<span class="votingResults-labelValue" id="votingLabel-abstain">x</span>
									</div>
								</div>

								<div class="row votingResults-row">
									<div class="col s6 rightText">
										<span class="votingResults-label">Perentage</span>
									</div>
									<div class="col s6 leftText">
										<span class="votingResults-labelValue" id="votingLabel-percent">x</span>
									</div>
								</div>

								<div class="row votingResults-row">
									<div class="col s6 rightText">
										<span class="votingResults-label">Result</span>
									</div>
									<div class="col s6 leftText">
										<span class="votingResults-labelValue" id="votingLabel-statement">x</span>
									</div>
								</div>
							</div>

							<div class="col s12 m4 leftText" >
								<div id="votingResults-chart"></div>
							</div>
						</div>
					</div>

					<a class="waves-effect waves-light btn blue" onclick="startVoting()"><span id="votingButton-start">Start Vote</span></a>
				</div>

				<!-- GSL Tab -->
				<div class="container hidden" id="tab-gsl">
					<div class="sectionHeading">General Speakers List</div>

					<hr class="separator">

					<div class="row listRow" >
						<div class="col s6 listColumn">

							<div class="input-field" id="gslAutocomplete-speaker-div">
								<input id="gslAutocomplete-speaker" type="text" onblur="GSLAddSpeaker()" placeholder="">
								<label for="gslAutocomplete-speaker" id="gslAutocompleteLabel-speaker">Add&nbsp;speaker</label>
							</div>

							<div class="label" style="margin-top: 1em;">List of Speakers</div>

							<div id="GSLList" style="margin-top: 1em;">
								<!-- Stuff gets inserted here -->
							</div>
						</div>

						<div class="col s6 centerText">
							<div class="label">Current Speaker</div>

							<div class="flag" id="gslFlag-speaker" style="margin-bottom: 0.5em;"></div>

							<div class="label">Time for Speaker</div>
							<div class="row centerText">
								<div class="col s5 offset-s1">
									<div class="input-field">
										<input id="gslField-speakerMinutes" type="number" min="0" value="1" disabled onkeypress="return isNumberKey(event)">
										<label for="gslField-speakerMinutes">Minutes</label>
									</div>
								</div>
								<div class="col s5">
									<div class="input-field">
										<input id="gslField-speakerSeconds" type="number" min="0" value="30" disabled onkeypress="return isNumberKey(event)">
										<label for="gslField-speakerSeconds">Seconds</label>
									</div>
								</div>
							</div>

							<div class="progress">
								<div class="determinate" id="gslProgress-speakerTime"></div>
							</div>

							<button class="waves-effect waves-light blue btn" id="gslButton-start" onclick="gslSpeakerStart()">
								<span id="gslButtonLabel-start">Start</span>
							</button>
							<button class="waves-effect waves-light blue btn hidden gsl-control-buttons" id="gslButton-pause" onclick="gslPause()">
								<span id="gslButtonLabel-pause">Pause</span>
							</button>

							<div>
								<div class="label gslYieldButtons hidden" style="width: 100%;">Yield to</div>
								<a class="waves-effect waves-gold btn-flat gslYieldButtons hidden" onclick="yieldChair()">
									<span id="gslYieldButton-chair">Chair</span>
								</a>
								<a class="waves-effect waves-gold btn-flat gslYieldButtons hidden" onclick="yieldDelegate()">
									<span id="gslYieldButton-delegate">Delegate</span>
								</a>
								<a class="waves-effect waves-gold btn-flat gslYieldButtons hidden" onclick="yieldQuestion()">
									<span id="gslYieldButton-question">Questions</span>
								</a>
								<a class="waves-effect waves-gold btn-flat gslYieldButtons hidden" onclick="yieldComment()">
									<span id="gslYieldButton-comment">Comments</span>
								</a>
							</div>

						</div>
					</div>
				</div>

				<!-- SSL Tab -->
				<div class="container hidden centerText" id="tab-ssl">
					
				</div>

				<!-- Mod Tab -->
				<div class="container hidden" id="tab-mod">
					<div class="sectionHeading">Moderated Caucus</div>

					<hr class="separator">

					<div class="row">
						<div class="col s12 m6">
							<div class="input-field">
								<input id="modField-topic" type="text">
								<label for="modField-topic">Topic</label>
							</div>
						</div>
						
						<div class="col s12 m6">
							<div class="input-field">
								<input id="modAutocomplete-start" type="text" placeholder="">
								<label for="modAutocomplete-start">Caucus&nbsp;started&nbsp;by</label>
							</div>
							<!-- <div class="flag" id="modFlag-start"></div> -->
						</div>
					</div>
					
					<div class="row">
						<div class="col s2">
							<div class="flag" id="modFlag-speaker"></div>
						</div>
						<div class="col s5">
							<div class="input-field">
								<input id="modAutocomplete-speaker" type="text" onblur="modSpeakerTimer()" disabled="true" placeholder="">
								<label for="modAutocomplete-speaker">Current&nbsp;speaker</label>
							</div>
						</div>
						<div class="col s5">
							<a class="waves-effect waves-gold btn-flat mod-control-buttons hidden" onclick="modSpeakerPause()">
								<span id="modButtonLabel-speakerPause">Pause</span>
							</a>
							<a class="waves-effect waves-gold btn-flat mod-control-buttons hidden" onclick="modSpeakerEnd()">
								<span id="modButtonLabel-speakerPause">Stop</span>
							</a>
							<a class="waves-effect waves-gold btn-flat mod-control-buttons hidden" onclick="modSpeakerReset()">
								<span id="modButtonLabel-speakerReset">Reset</span>
							</a>
						</div>
					</div>

					<div class="row">
						<div class="col s6">
							<div class="label">Time for speaker</div>
							<div class="row">
								<div class="col s5 offset-s1">
									<div class="input-field">
										<input id="modField-speakerMinutes" type="number" min="0" value="0" disabled="true" onkeypress="return isNumberKey(event)">
										<label for="modField-speakerMinutes">Minutes</label>
									</div>
								</div>
								<div class="col s5">
									<div class="input-field">
										<input id="modField-speakerSeconds" type="number" min="0" value="0" disabled="true" onkeypress="return isNumberKey(event)">
										<label for="modField-speakerSeconds">Seconds</label>
									</div>
								</div>
							</div>

							<div class="progress">
								<div class="determinate" id="modProgress-speakerTime"></div>
							</div>
						</div>

						<div class="col s6">
							<div class="label">Time for Moderated Caucus</div>
							<div class="row">
								<div class="col s5 offset-s1">
									<div class="input-field">
										<input id="modField-caucusMinutes" type="number" min="0" value="0" onkeypress="return isNumberKey(event)">
										<label for="modField-caucusMinutes">Minutes</label>
									</div>
								</div>
								<div class="col s5">
									<div class="input-field">
										<input id="modField-caucusSeconds" type="number" min="0" value="0" onkeypress="return isNumberKey(event)">
										<label for="modField-caucusSeconds">Seconds</label>
									</div>
								</div>
							</div>

							<div class="progress">
								<div class="determinate" id="modProgress-caucusTime"></div>
							</div>
						</div>
					</div>
										
					<div class="label">Set time per speaker</div>
					<div class="row">
						<div class="col s2 offset-s4">
							<div class="input-field">
								<input id="modField-setSpeakerMinutes" type="number" min="0" value="0" onkeypress="return isNumberKey(event)">
								<label for="modField-setSpeakerMinutes">Minutes</label>
							</div>
						</div>
						<div class="col s2">
							<div class="input-field">
								<input id="modField-setSpeakerSeconds" type="number" min="0" value="10" onkeypress="return isNumberKey(event)">
								<label for="modField-setSpeakerSeconds">Seconds</label>
							</div>
						</div>
						<!-- <div class="col s2 m2">
							<a class="waves-effect waves-light blue btn" onclick="modSpeakerSet()">Set</a>
						</div> -->
					</div>
					
					<div class="row centerText">
						<div>
							<a class="waves-effect waves-gold btn-flat mod-control-buttons hidden" onclick="modPause()">
								<span id="modButton-pauseCaucus">Pause</span>
							</a>
							
							<a class="waves-effect waves-gold btn-flat mod-control-buttons hidden" onclick="modExtendMin()">
								<span>+1 min</span>
							</a>

							<a class="waves-effect waves-gold btn-flat mod-control-buttons hidden" onclick="modExtendSec()">
								<span>+10 sec</span>
							</a>
						</div>

						<a class="waves-effect waves-light blue btn" onclick="ModTimer()">
							<span id="modButton-startCaucus">Start Moderated Caucus</span>
						</a>

					</div>
				</div>
				

				<!-- Unmod Tab -->
				<div class="container hidden" id="tab-unmod">
					<div class="sectionHeading">Unmoderated Caucus</div>

					<hr class="separator">
					
					<div class="row centerText">
						<div class="col s12 m6">
							<div class="input-field">
								<input id="unmodField-topic" type="text">
								<label for="unmodField-topic">Topic</label>
							</div>
						</div>
						<div class="col s12 m6">
							<div class="input-field">
									<input type="text" id="unmodAutocomplete-start" placeholder="">
								<label for="unmodAutocomplete-start">Caucus&nbsp;started&nbsp;by</label>
							</div>
							<div class="flag" id="unmodFlag-start"></div>
						</div>
					</div>

					<div class="label">Time for Unmoderated Caucus</div>
					<div class="row">
						<div class="col s2 offset-s4">
							<div class="input-field centerText">
								<input id="unmodField-caucusMinutes" type="number" min="0" value="0" onkeypress="return isNumberKey(event)">
								<label for="unmodField-caucusMinutes">Minutes</label>
							</div>
						</div>
						<div class="col s2">
							<div class="input-field centerText">
								<input id="unmodField-caucusSeconds" type="number" min="0" value="0" onkeypress="return isNumberKey(event)">
								<label for="unmodField-caucusSeconds">Seconds</label>
							</div>
						</div>
					</div>

					<div class="progress">
						<div class="determinate" id="unmodProgress-caucusTime"></div>
					</div>
					
					<div class="row">
						<div class="col s12 centerText">

							<div class="col s12 centerText">
								<a class="waves-effect waves-gold btn-flat unmod-control-buttons hidden" onclick="unmodPause()">
									<span id="unmodButton-pauseCaucus">Pause</span>
								</a>
								<a class="waves-effect waves-gold btn-flat unmod-control-buttons hidden" onclick="unmodExtendMin()">
									<span>+1 min</span>
								</a>
								<a class="waves-effect waves-gold btn-flat unmod-control-buttons hidden" onclick="unmodExtendSec()">
									<span>+10 sec</span>
								</a>
							</div>

							<a class="waves-effect waves-light btn blue" onclick="UnmodTimer()">
								<span id="unmodButton-startCaucus">Start Unmoderated Caucus</span>
							</a>

						</div>
					</div>
				</div>

				<!-- Resolution Tab -->
				<div class="container centerText hidden" id="tab-resolution">
					<div class="sectionHeading">Resolution</div>

					<hr class="separator">

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

			</main>
		</div>	<!-- End of layout -->


		<!-- Javascript Files -->
		<!-- jQuery -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<!-- jQuery UI -->
		<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
		<!-- jQuery UI Touch Punch (For enabling touch events support for jQuery UI) -->
		<script src="./external/js/jquery.ui.touch-punch.min.js"></script>
		<!-- Materialize -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
		<!-- CanvasJS -->
		<script src="http://canvasjs.com/assets/script/canvasjs.min.js"></script>
		<!-- jQuery Autocomplete Plugin from https://github.com/devbridge/jQuery-Autocomplete -->
		<script src="./external/js/jquery.autocomplete.min.js"></script>
		<!-- Custom JS -->
		<script src="munmod.js"></script>
		
		<!-- JS needs to be loaded before delegates are pushed to JS array -->
		<!-- Get countries from the database using PHP and push into JS array -->
	</body>
</html>