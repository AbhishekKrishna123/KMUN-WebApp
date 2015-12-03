<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>MUN Moderator</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" href="favicon.ico" type="image/x-icon"/>
		<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
		<link href="fabric.min.css" type="text/css" rel="stylesheet" />
		<link href="fabric.components.min.css" type="text/css" rel="stylesheet" />
		
		<link rel="stylesheet" href="side.css">
		<style type="text/css">
			html, body {
				margin: 0;
			}
			.ms-Grid {
				text-align: center;
			}
			.ms-Grid-row {
				display: block;
				margin: auto;
			}
			.ms-ChoiceField {
				display: inline-block;
				padding-left: 0.2em;
				padding-right: 0.2em;
			}
			.hidden {
				display: none;
			}
			#agenda {
				margin-top: 0em;
				margin-left: 2em;
				margin-right: 2em;
				margin-bottom: 0em;
			}
			#mod-topic {
				width: 30vw;
				margin-left: auto;
				margin-right: auto;
			}
			#unmod-topic {
				width: 30vw;
				margin-left: auto;
				margin-right: auto;
			}
			.ms-Pivot-link {
				margin-left: 1em;
				margin-right: 1em;
				background-color: #000000;
				color: #000000;	
			}
			#headerImage {
				height: 50px;
				min-width: 50px;
				background-image: url("logoSmall.png");
				background-repeat: no-repeat;
				background-size: 40px 40px;
				background-position: center;
				display: inline-block;
			}
			#welcomeImage {
				height: 200px;
				min-width: 200px;
				background-image: url("logoSmall.png");
				background-repeat: no-repeat;
				background-size: contain;
				background-position: center;
				opacity: 0.35;
			}
			.tabs {
				margin: 1em;
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
			.ms-TextField-field {
				border-top: 0px;
				border-left: 0px;
				border-right: 0px;
			}
			/*.is-selected {
				background-color: #0078D7;
			}*/
			.loadingBar {
				width: 0%;
				background-color: #0078D7;
				height: 0.12em;
				z-index: 100;
				position: absolute;
				top: 0;
			}
			body {
				min-width: 600px;
				display: none;
			}
			#top-bar {
				height: 50px;
				width: 100%;
				background-color: #000000;
				color: #d69d36;
				border-bottom: 1px solid #d69d36;
				text-align: center;
				cursor: default;
			}
			#status-bar {
				padding-top: 18px;
				padding-right: 15px;
				float: right;
			}

			#autocomplete-unmod-start {
				width: 300px;
				text-align: center;
			}
			#autocomplete-unmod-start-div {
				width: 300px;
				margin: auto;
			}
			#autocomplete-mod-start {
				width: 300px;
				text-align: center;
			}
			#autocomplete-mod-start-div {
				width: 300px;
				margin: auto;
			}
			#autocomplete-mod-speaker {
				width: 300px;
				text-align: center;
			}
			#autocomplete-mod-speaker-div {
				width: 300px;
				margin: auto;
			}
			#autocomplete-gsl {
				width: 300px;
				text-align: center;
			}
			#autocomplete-gsl-div {
				width: 300px;
				margin: auto;
			}
			.autocomplete-suggestions { 
				width: 300px;
				border: 1px solid #cccccc;
				background: #ffffff; 
				min-height: 0px;
				max-height: 30px;
				overflow-y: auto;
				overflow-x: hidden;
			}
			.autocomplete-suggestion {
				padding-top: 10px;
				padding-bottom: 10px;
				padding-left: 5px;
				padding-right: 5px;
				text-align: center;
			}
			.autocomplete-selected { 
				background: #dddddd;
			}
			.autocomplete-suggestions strong { 
				color: #0078D7;
			}

		</style>
	</head>

	<body class="ms-font-m">
		<div id="layout">
		    <!-- Menu toggle -->
		    <a href="#menu" id="menuLink" class="menu-link">
		        <!-- Hamburger icon -->
		        <span></span>
		    </a>

		    <div id="menu">
		        <div class="pure-menu">
		        	<!-- <a class="pure-menu-heading" id="headerImage"></a> -->	
		        	<div id="headerArea" style="margin-right: 1px solid #d69d36;">
		        		<div id="headerImage" style="float: left;"></div>
		            	<a href="#" class="pure-menu-heading ms-font-m">MUN Moderator 2016</a>
		            </div>
		            <!-- Navigation Panel -->
		            <ul class="pure-menu-list">
		                <li class="pure-menu-item main-navigation" id="button-voting"><a href="#" class="pure-menu-link"><i class="ms-Icon ms-Icon--starEmpty star" id="star1"></i> Voting</a></li>
		                <li class="pure-menu-item main-navigation" id="button-gsl"><a href="#" class="pure-menu-link"><i class="ms-Icon ms-Icon--starEmpty star" id="star2"></i> General Speakers List</a></li>
		                <li class="pure-menu-item main-navigation" id="button-mod"><a href="#" class="pure-menu-link"><i class="ms-Icon ms-Icon--starEmpty star" id="star3"></i> Moderated Caucus</a></li>
		                <li class="pure-menu-item main-navigation" id="button-unmod"><a href="#" class="pure-menu-link"><i class="ms-Icon ms-Icon--starEmpty star" id="star4"></i> Unmoderated Caucus</a></li>
		                <li class="pure-menu-item other-nav-items menu-item-divided" id="button-help"><a href="#" class="pure-menu-link"><i class="ms-Icon ms-Icon--question"></i> Help</a></li>
		                <li class="pure-menu-item other-nav-items" id="button-about"><a href="#" class="pure-menu-link"><i class="ms-Icon ms-Icon--info"></i> About</a></li>
		                <li class="pure-menu-item other-nav-items" id="button-settings"><a href="#" class="pure-menu-link"><i class="ms-Icon ms-Icon--gear"></i> Settings</a></li>
		                <li class="pure-menu-item menu-item-divided KMUNwebsite"><a class="pure-menu-link" href="http://kmun.in" target="_blank"><i class="ms-Icon ms-Icon--globe"></i> KMUN Website</a></li>
		            </ul>
		        </div>
		    </div>

		    <div id="main">
		    	<div id="top-bar">
		    		<div id="status-bar" class="ms-font-mi ms-fontColor-neutralTertiary">Connectivity Status <a id="status-icon"><i class="ms-Icon ms-Icon--circleFill"></i><span id="status-text"></span></a></div>
		    		<div class="ms-font-l" style="color: #d69d36; padding-top: 15px;">Committee Name</div>
		    	</div>
		    	

		    	<!-- Agenda -->
		    	<div class="ms-Grid" id="agenda">
		    		<div class="ms-Grid-row">
		    			<div class="ms-Grid-col ms-u-sm12 block">
		    				<div class="ms-TextField ms-TextField--underlined" id="agenda-field">
		    					<label class="ms-Label">Current&nbsp;Agenda</label>
		    					<input class="ms-TextField-field" style="color: #0078D7; font-size: 1em;" id="CurrentAgendaField">
		    				</div>
		    			</div>
		    		</div>
		    	</div>

		    	<div id="welcome" style="text-align: center; padding: 4em;">
		    		<div id="welcomeImage"></div>
		    		<div class="ms-font-xxl ms-fontColor-themeTertiary">Welcome to MUN Moderator 2016</div>
		    		<div class="ms-font-xl ms-fontColor-neutralTertiary">Use the navigation bar on the left side to access different sections</div>
		    	</div>

		    	<!-- Voting Tab -->
		    	<div class="ms-Grid hidden" id="tab-voting">
		    		<div id="ms-Spinner"></div>
		    		<!--<div class="ms-font-xxl" style="text-align: center; padding: 0.3em;">Voting</div>-->
		    		<div class="ms-Grid-row" id="voting-radio">
		    			<div class="ms-ChoiceFieldGroup">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<div class="ms-ChoiceField ms-ChoiceFieldGroup">
		    						<input id="voting-choice-1" class="ms-ChoiceField-input" type="radio" name="voting-choice">
		    						<label for="voting-choice-1" class="ms-ChoiceField-field"><span class="ms-Label">Simple Majority</span></label>
		    					</div>	
		    					<div class="ms-ChoiceField ms-ChoiceFieldGroup">
		    						<input id="voting-choice-2" class="ms-ChoiceField-input" type="radio" name="voting-choice">
		    						<label for="voting-choice-2" class="ms-ChoiceField-field"><span class="ms-Label">Resolution Vote</span></label>
		    					</div>
		    					<div class="ms-ChoiceField ms-ChoiceFieldGroup">
		    						<input id="voting-choice-3" class="ms-ChoiceField-input" type="radio" name="voting-choice">
		    						<label for="voting-choice-3" class="ms-ChoiceField-field"><span class="ms-Label">Roll Call Vote</span></label>
		    					</div>
		    				</div>
		    			</div>
		    			<button class="ms-Button ms-Button--primary" onClick="VotingIn()" id="voting-button">
		    					<span class="ms-Button-label" id="voting-button-label">Start Vote!</span>
		    			</button>
		    		</div>

		    		<!-- Simple Majority -->
		    		<div class="ms-Grid hidden"  id="section-SimpleMajority">
		    			<div class="ms-Grid-row">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<div>
		    						<p class="ms-font-xxl" style="margin-bottom: 0;">Simple Majority Vote</p>
		    					</div>
		    				</div>
		    			</div>
		    			<hr class="divider">
		    			<div class="ms-Grid-row">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<div>
		    						<p class="ms-font-s ms-fontColor-neutralSecondary" style="margin-bottom: -1.5em;">Current Delegate</p>
		    					</div>
		    					<div>
		    						<p class="ms-font-xl ms-fontColor-themePrimary" id="SimpleMajorityVote-displayName">DelegateName</p>
		    					</div>
		    					<div style="margin-top: -1em; margin-bottom: 1.5em;">
		    						<p class="ms-font-s ms-fontColor-neutralSecondary" style="display: inline;" id="SimpleMajorityVote-current">x</p>
		    						<p class="ms-font-s ms-fontColor-neutralSecondary" style="display: inline;">&nbsp;of&nbsp;</p>
		    						<p class="ms-font-s ms-fontColor-neutralSecondary" style="display: inline;" id="SimpleMajorityVote-max">y</p>
		    					</div>
		    				</div>
		    			</div>
		    			<div class="ms-Grid-row">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<button class="ms-Button ms-Button--primary"  id="SimpleMajorityVote-1" onClick="doSimpleMajorityVote(this)">
		    						<span class="ms-Button-label">Yes</span>
		    					</button>
		    					<button class="ms-Button ms-Button--primary" id="SimpleMajorityVote-2" onClick="doSimpleMajorityVote(this)">
		    						<span class="ms-Button-label">No</span>
		    					</button>
		    					<button class="ms-Button ms-Button" id="SimpleMajorityVote-3" onClick="doSimpleMajorityVote(this)">
		    						<span class="ms-Button-label">Abstain</span>
		    					</button>
		    					<button class="ms-Button" id="SimpleMajorityVote-4" onClick="doSimpleMajorityVote(this)">
		    						<span class="ms-Button-label">Pass</span>
		    					</button>
		    					
		    				</div>
		    			</div>
		    			<div class="ms-Grid-row" style="margin-top: 3em;">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<button class="ms-Button">
		    						<span class="ms-Button-label" onClick="SimpleMajorityVoteOut()">Stop Vote</span>
		    					</button>
		    				</div>
		    			</div>
		    		</div>

		    		<!-- Resolution Vote -->
		    		<div class="ms-Grid hidden"  id="section-ResolutionVote">
		    			<div class="ms-Grid-row">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<div>
		    						<p class="ms-font-xxl" style="margin-bottom: 0;">Resolution Vote</p>
		    					</div>
		    				</div>
		    			</div>
		    			<hr class="divider">
		    			<div class="ms-Grid-row">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<div>
		    						<p class="ms-font-s ms-fontColor-neutralSecondary" style="margin-bottom: -1.5em;">Current Delegate</p>
		    					</div>
		    					<div>
		    						<p class="ms-font-xl ms-fontColor-themePrimary" id="ResolutionVote-displayName">DelegateName</p>
		    					</div>
		    					<div style="margin-top: -1em; margin-bottom: 1.5em;">
		    						<p class="ms-font-s ms-fontColor-neutralSecondary" style="display: inline;" id="ResolutionVote-current">x</p>
		    						<p class="ms-font-s ms-fontColor-neutralSecondary" style="display: inline;">&nbsp;of&nbsp;</p>
		    						<p class="ms-font-s ms-fontColor-neutralSecondary" style="display: inline;" id="ResolutionVote-max">y</p>
		    					</div>
		    				</div>
		    			</div>
		    			<div class="ms-Grid-row">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<button class="ms-Button ms-Button--primary" id="ResolutionVote-1" onClick="doResolutionVote(this)">
		    						<span class="ms-Button-label">Yes</span>
		    					</button>
		    					<button class="ms-Button ms-Button--primary" id="ResolutionVote-2" onClick="doResolutionVote(this)">
		    						<span class="ms-Button-label">No</span>
		    					</button>
		    					<button class="ms-Button" id="ResolutionVote-3" onClick="doResolutionVote(this)">
		    						<span class="ms-Button-label">Yes With Rights</span>
		    					</button>
		    					<button class="ms-Button" id="ResolutionVote-4" onClick="doResolutionVote(this)">
		    						<span class="ms-Button-label">No With Rights</span>
		    					</button>
		    					<button class="ms-Button" id="ResolutionVote-5" onClick="doResolutionVote(this)">
		    						<span class="ms-Button-label">Abstain</span>
		    					</button>
		    					<button class="ms-Button" id="ResolutionVote-6" onClick="doResolutionVote(this)">
		    						<span class="ms-Button-label">Pass</span>
		    					</button>
		    				</div>
		    			</div>
		    			<div class="ms-Grid-row" style="margin-top: 3em;">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<button class="ms-Button">
		    						<span class="ms-Button-label" onClick="ResolutionVoteOut()">Stop Vote</span>
		    					</button>
		    				</div>
		    			</div>
		    		</div>
		    		
		    		<!-- Roll Call Vote -->
		    		<div class="ms-Grid hidden"  id="section-RollCallVote">
		    			<div class="progress-bar" id="progress-bar-RollCallVote"></div>
		    			<div class="ms-Grid-row">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<div>
		    						<p class="ms-font-xxl" style="margin-bottom: 0;">Roll Call Vote</p>
		    					</div>
		    				</div>
		    			</div>
		    			<hr class="divider">
		    			<div class="ms-Grid-row">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<div>
		    						<p class="ms-font-s ms-fontColor-neutralSecondary" style="margin-bottom: -1.5em;">Current Delegate</p>
		    					</div>
		    					<div>
		    						<p class="ms-font-xl ms-fontColor-themePrimary" id="RollCallVote-displayName">DelegateName</p>
		    					</div>
		    					<div style="margin-top: -1em; margin-bottom: 1.5em;">
		    						<p class="ms-font-s ms-fontColor-neutralSecondary" style="display: inline;" id="RollCallVote-current">x</p>
		    						<p class="ms-font-s ms-fontColor-neutralSecondary" style="display: inline;">&nbsp;of&nbsp;</p>
		    						<p class="ms-font-s ms-fontColor-neutralSecondary" style="display: inline;" id="RollCallVote-max">y</p>
		    					</div>
		    				</div>
		    			</div>
		    			<div class="ms-Grid-row">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<button class="ms-Button ms-Button--primary" id="RollCallVote-1" onclick="doRollCallVote(this)">
		    						<span class="ms-Button-label">Present and Voting</span>
		    					</button>
		    					<button class="ms-Button ms-Button--primary" id="RollCallVote-2" onclick="doRollCallVote(this)">
		    						<span class="ms-Button-label">Present</span>
		    					</button>
		    					<button class="ms-Button" id="RollCallVote-0" onclick="doRollCallVote(this)">
		    						<span class="ms-Button-label">Absent</span>
		    					</button>
		    				</div>
		    			</div>
		    			<div class="ms-Grid-row" style="margin-top: 3em;">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<button class="ms-Button">
		    						<span class="ms-Button-label" onClick="RollCallVoteOut()">Stop Vote</span>
		    					</button>
		    				</div>
		    			</div>
		    		</div>
		    	</div>

		    	<!-- GSL Tab -->
		    	<div class="ms-Grid hidden" id="tab-gsl">
		    		<div class="ms-Grid-row">
		    			<div class="ms-Grid-col ms-u-sm12">
		    				<div class="ms-TextField ms-TextField--underlined" id="autocomplete-gsl-div">
		    					<label class="ms-Label">Add&nbsp;speaker&nbsp;</label>
		    					<input class="ms-TextField-field" type="text" id="autocomplete-gsl" style="color: #0078D7;">
		    				</div>
		    			</div>
		    			
		    			<div class="ms-Grid-col ms-u-sm12">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<button class="ms-Button ms-Button--primary">
		    						<span class="ms-Button-label">Start calling speakers</span>
		    					</button>
		    				</div>
		    			</div>
		    		</div>
		    		<div>
		    			<p class="ms-font-s ms-fontColor-neutralSecondary" style="margin-bottom: -1.5em;">Current Delegate</p>
		    		</div>
		    		<div>
		    			<p class="ms-font-xl ms-fontColor-themePrimary">DelegateName</p>
		    		</div>
		    	</div>

		    	<!-- Mod Tab -->
		    	<div class="ms-Grid hidden" id="tab-mod">
		    		<div class="ms-Grid-row" id="mod-topic">
		    			<div class="ms-Grid-col ms-u-sm12">
		    				<div class="ms-TextField ms-TextField--underlined">
		    					<label class="ms-Label">Topic</label>
		    					<input class="ms-TextField-field" style="color: #0078D7;" id="mod-topic-field">
		    				</div>
		    			</div>
		    		</div>
		    		<div class="ms-Grid-row">
		    			<div class="ms-Grid-col ms-u-sm12">
		    				<div class="ms-TextField ms-TextField--underlined" id="autocomplete-mod-start-div">
		    					<label class="ms-Label">Caucus&nbsp;started&nbsp;by</label>
		    					<input class="ms-TextField-field" type="text" id="autocomplete-mod-start" style="color: #0078D7;">
		    				</div>
		    			</div>
		    		</div>
		    		<div class="ms-Grid-row">
		    			<div class="ms-Grid-col ms-u-sm6">
		    				<div class="ms-TextField ms-TextField--underlined" id="autocomplete-mod-speaker-div">
		    					<label class="ms-Label">Current&nbsp;speaker</label>
		    					<input class="ms-TextField-field" type="text" id="autocomplete-mod-speaker" style="color: #0078D7; font-size: 1.5em; height: auto">
		    				</div>
		    				<button class="ms-Button ms-Button--primary" style="margin-top: 1em" onclick="modSpeakerButtonReset()">
		    					<span class="ms-Button-label">Reset Speaker Time</span>
		    				</button>
		    			</div>
		    			<div class="ms-Grid-col ms-u-sm6">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<label class="ms-Label">Time for Moderated Caucus</label>
		    				</div>
		    				<div class="ms-Grid-col ms-u-sm6">
		    					<div class="ms-TextField">
		    						<input type="number" class="ms-TextField-field" style="font-size: 6em; height: auto; text-align: center; width: 25%; display: inline; float: right;" value="0" id="mod-minutes">
		    					</div>
		    				</div>
		    				<div class="ms-Grid-col ms-u-sm6">
		    					<div class="ms-TextField">
		    						<input type="number" class="ms-TextField-field" style="font-size: 6em; height: auto; text-align: center; width: 25%; display: inline; float: left;" value="0" id="mod-seconds">
		    					</div>
		    				</div>
		    				<div class="ms-Grid-col ms-u-sm6">
		    					<span class="ms-Label" style="float: right;">Minutes</span>
		    				</div>
		    				<div class="ms-Grid-col ms-u-sm6">
		    					<span class="ms-Label" style="float: left;">Seconds</span>
		    				</div>
		    			</div>
		    		</div>
		    		<div class="ms-Grid-row">
		    			<div class="ms-Grid-col ms-u-sm6">
		    				<label class="ms-Label">Set Time per Speaker</label>
		    				<div class="ms-TextField" style="display: block;">
		    					<label class="ms-Label">Minutes</label>
		    					<input type="number" class="ms-TextField-field" value="0" style="font-size: 1.5em; height: auto; text-align: center; display: inline;" value="0" id="mod-speaker-set-minutes">
		    				</div>
		    				<div class="ms-TextField" style="display: block;">
		    					<label class="ms-Label">Seconds</label>
		    					<input type="number" class="ms-TextField-field" value="0" style="font-size: 1.5em; height: auto; text-align: center; display: inline;" value="0" id="mod-speaker-set-seconds">
		    				</div>
		    				<button class="ms-Button ms-Button--primary" style="display: block;" onclick="modSpeakerSet()">
		    					<span class="ms-Button-label">Set</span>
		    				</button>
		    			</div>
		    			<div class="ms-Grid-col ms-u-sm6">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<label class="ms-Label">Time for speaker</label>
		    				</div>
		    				<div class="ms-Grid-col ms-u-sm6">
		    					<div class="ms-TextField">
		    						<input type="number" class="ms-TextField-field" style="font-size: 4em; width: 20%; height: auto; text-align: center; display: inline; float: right;" value="0" disabled="true" id="mod-speaker-minutes">
		    					</div>
		    				</div>
		    				<div class="ms-Grid-col ms-u-sm6">
		    					<div class="ms-TextField">
		    						<input type="number" class="ms-TextField-field" style="font-size: 4em; width: 20%; height: auto; text-align: center; display: inline; float: left;" value="0" disabled="true" id="mod-speaker-seconds">
		    					</div>
		    				</div>
		    				<div class="ms-Grid-col ms-u-sm6">
		    					<span class="ms-Label" style="float: right;">Minutes</span>
		    				</div>
		    				<div class="ms-Grid-col ms-u-sm6">
		    					<span class="ms-Label" style="float: left;">Seconds</span>
		    				</div>
		    			</div>
		    		</div>
		    		<div class="ms-Grid-row">
		    			<div class="ms-Grid-col ms-u-sm12">
		    				<div class="ms-Grid-col ms-u-sm12">
		    					<button class="ms-Button ms-Button--primary" onclick="ModTimer()">
		    						<span class="ms-Button-label" id="mod-caucus-button-label">Start Moderated Caucus</span>
		    					</button>
		    					<button class="ms-Button hidden mod-control-buttons" onclick="modPause()">
		    						<span class="ms-Button-label" id="mod-caucus-pause-button-label">Pause</span>
		    					</button>
		    					<button class="ms-Button hidden mod-control-buttons" onclick="modExtendMin()">
		    						<span class="ms-Button-label">+1 min</span>
		    					</button>
		    					<button class="ms-Button hidden mod-control-buttons" onclick="modExtendSec()">
		    						<span class="ms-Button-label">+10 sec</span>
		    					</button>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    	

		    	<!-- Unmod Tab -->
		    	<div class="ms-Grid hidden" id="tab-unmod">
		    		<div class="ms-Grid-row" id="unmod-topic">
		    			<div class="ms-Grid-col ms-u-sm12">
		    				<div class="ms-TextField ms-TextField--underlined">
		    					<label class="ms-Label">Topic</label>
		    					<input class="ms-TextField-field" style="color: #0078D7;" id="unmod-topic-field">
		    				</div>
		    			</div>
		    		</div>
		    		<div class="ms-Grid-row">
		    			<div class="ms-Grid-col ms-u-sm12">
		    				<label class="ms-Label">Time for Unmoderated Caucus</label>
		    			</div>
		    			<div class="ms-Grid-col ms-u-sm6">
		    				<div class="ms-TextField">
		    					<input type="number" class="ms-TextField-field" style="font-size: 6em; height: auto; text-align: center; width: 25%; display: inline; float: right;" id="unmod-minutes" value="0">
		    				</div>
		    			</div>
		    			<div class="ms-Grid-col ms-u-sm6">
		    				<div class="ms-TextField">
		    					<input type="number" class="ms-TextField-field" style="font-size: 6em; height: auto; text-align: center; width: 25%; display: inline; float: left;" id="unmod-seconds" value="0">
		    				</div>
		    			</div>
		    			<div class="ms-Grid-col ms-u-sm6">
		    				<span class="ms-Label" style="float: right;">Minutes</span>
		    			</div>
		    			<div class="ms-Grid-col ms-u-sm6">
		    				<span class="ms-Label" style="float: left;">Seconds</span>
		    			</div>
		    		</div>
		    		<div class="ms-Grid-row">
		    			<div class="ms-Grid-col ms-u-sm12">
		    				<div class="ms-TextField ms-TextField--underlined" id="autocomplete-unmod-start-div">
		    					<label class="ms-Label">Caucus&nbsp;started&nbsp;by</label>
		    					<input class="ms-TextField-field" type="text" id="autocomplete-unmod-start" style="color: #0078D7;">
		    				</div>
		    			</div>
		    			<div class="ms-Grid-col ms-u-sm12">
		    				<button class="ms-Button ms-Button--primary" onclick="UnmodTimer()" style="margin-top: 15px;">
		    					<span class="ms-Button-label" id="unmod-caucus-button-label">Start Unmoderated Caucus</span>
		    				</button>
		    				<button class="ms-Button hidden unmod-control-buttons" onclick="unmodPause()">
		    					<span class="ms-Button-label" id="unmod-caucus-pause-button-label">Pause</span>
		    				</button>
		    				<button class="ms-Button hidden unmod-control-buttons" onclick="unmodExtendMin()">
		    					<span class="ms-Button-label">+1 min</span>
		    				</button>
		    				<button class="ms-Button hidden unmod-control-buttons" onclick="unmodExtendSec()">
		    					<span class="ms-Button-label">+10 sec</span>
		    				</button>
		    			</div>
		    		</div>
		    	</div>
		    </div>

		    <!-- About Tab -->
		    <div id="tab-about" class="hidden" style="text-align: center; padding: 4em;">
		    	<div id="about-header">
		    		<div class="ms-font-su ms-fontColor-themePrimary">About</div>
		    		<div class="ms-font-s ms-fontColor-themeDarker" style="padding: 0.5em;">MUN Moderator 2016<br>Version 0.3<br></div>
		    	</div>
		    	<hr style="width: 15em; margin-left: auto; margin-right: auto; border-color: #0078D7;">
		    	<div id="about-content">
		    		<div class="ms-font-m ms-fontColor-neutralSecondary" style="padding: 2em">Created by KMUN 2016 Tech Team<br>Page styles powered by <a href="http://dev.office.com/fabric" class="ms-Link" target="_blank">Office UI Fabric</a><br>Page layout powered by <a href="http://purecss.io" class="ms-Link" target="_blank">PureCSS</a><br><br>&copy; Kumarans Model United Nations 2016</div>
		    	</div>
		    </div>

		    <!-- Help Tab -->
		    <div id="tab-help" class="hidden" style="text-align: center; padding: 4em;">
		    	<div id="help-header">
		    		<div class="ms-font-su ms-fontColor-themePrimary">Help</div>
		    		<div class="ms-font-s ms-fontColor-themeDarker" style="padding: 0.5em;">MUN Moderator 2016<br>Version 0.3<br></div>
		    	</div>
		    	<hr style="width: 15em; margin-left: auto; margin-right: auto; border-color: #0078D7;">
		    	<div id="help-content">
		    		<div class="ms-font-m ms-fontColor-neutralSecondary" style="padding: 2em">MUN Moderator 2016 is designed to be simple and intuitive to use. If you want to learn how to use MUN Moderator, head over to the <a href="manual.html" class="ms-Link" target="_blank">MUN Moderator User Manual</a> to learn. If you have any other queries, feel free to contact the KMUN Tech Team for any assistance.</div>
		    	</div>
		    </div>

		    <!-- Settings Tab -->
		    <div id="tab-settings" class="hidden" style="text-align: center; padding: 4em;">
		    	<div id="settings-header">
		    		<div class="ms-font-su ms-fontColor-themePrimary">Settings</div>
		    		<div class="ms-font-s ms-fontColor-themeDarker" style="padding: 0.5em;">MUN Moderator 2016<br>Version 0.3<br></div>
		    	</div>
		    	<hr style="width: 15em; margin-left: auto; margin-right: auto; border-color: #0078D7;">
		    	<div id="settings-content">
		    		<div class="ms-font-m ms-fontColor-neutralSecondary" style="padding: 2em">
		    			Settings text
		    			<!-- <div tabindex="0" class="ms-Dropdown">
			  				<select class="ms-Dropdown-select">
			  					<option value="Choose animation for switching between sections">Choose animation for switching between sections</option>
			  					<option value="Slide Down">Slide Down</option>
			  					<option value="Slide Up">Slide Up</option>
			  					<option value="Fade In">Fade In</option>
			  					<option value="Scale In">Scale In</option>
			  				</select>
			  			</div> -->
			  		</div>
		    	</div>
		    </div>
		</div>	<!-- End of layout -->

		<!-- Voting Results Dialog -->
		<div class="ms-Dialog ms-Dialog--lgHeader hidden" id="VotingResultsDialog">
		  <div class="ms-Overlay"></div>
		  <div class="ms-Dialog-main">
			<button class="ms-Dialog-button ms-Dialog-button--close">
			  <i class="ms-Icon ms-Icon--x"></i>
			</button>
			<div class="ms-Dialog-header">
			  <p class="ms-Dialog-title" id="VotingResultsDialog-header" style="text-align: center">Results</p>
			  <p class="ms-Dialog-title" style="font-size: 12px; text-align: center;" id="VotingResultsDialog-subHeader">SubText</p>
			</div>
			<div class="ms-Dialog-inner">
			  <div class="ms-Dialog-content">
				<p class="ms-Dialog-subText" id="VotingResultsDialog-content">Voting complete!</p>
			  </div>
			  <div class="ms-Dialog-actions">
				<div class="ms-Dialog-actionsRight" style="text-align: center;">
				  <button class="ms-Dialog-action ms-Button ms-Button--primary" onClick="VotingResultsOut()">
					<span class="ms-Button-label">OK</span>
				  </button>
				</div>
			  </div>
			</div>
		  </div>
		</div>
		
		<!--Alert Dialog-->
		<div class="ms-Dialog hidden" id="AlertDialog">
		  <div class="ms-Overlay"></div>
		  <div class="ms-Dialog-main">
			<button class="ms-Dialog-button ms-Dialog-button--close">
			  <i class="ms-Icon ms-Icon--x"></i>
			</button>
			<div class="ms-Dialog-header">
			  <p class="ms-Dialog-title" style="text-align: center"><span class="ms-Icon ms-Icon--alertOutline"></span></p>
			</div>
			<div class="ms-Dialog-inner">
			  <div class="ms-Dialog-content">
				<p class="ms-Dialog-subText" id="alertText" style="text-align: center;">Insert text here</p>
			  </div>
			  <div class="ms-Dialog-actions">
				<div class="ms-Dialog-actionsCenter" style="text-align: center;">
				  <button class="ms-Dialog-action ms-Button ms-Button--primary" onClick="alertOut()">
					<span class="ms-Button-label">OK</span>
				  </button>
				</div>
			  </div>
			</div>
		  </div>
		</div>

		<script type="text/javascript" src="jquery.min.js"></script>
		<script type="text/javascript" src="Main.js"></script>
		<script type="text/javascript" src="jquery.autocomplete.min.js"></script>
		
		<!--Get countries from the database-->
		<script>
		<?php
			$servername = "localhost";
			$username = "sqlUserOne";
			$password = "Chess123";
			$dbname = "TheData";

			// Create connection
			$conn = mysqli_connect($servername, $username, $password, $dbname);

			// Check connection
			if (!$conn) {
				echo ("<h1>Server Error</h1><p>Connection to database could not be established. Please try again, or contact a Tech Team member.</p>");
				die;
			}
			$sqll = "SELECT PortfolioName FROM ComUNSC ORDER BY PortfolioName";
			if(!($check = mysqli_query($conn, $sqll))) {
				echo ("<h1>Server Error</h1><p>SQL statement 1 could not be run. Please try again, or contact a Tech Team member.</p>");
				die;
			}
			// Create divs with each delegate name
			while($delegateName = mysqli_fetch_array($check)) {
				echo "\t"."masterList.push('".$delegateName['PortfolioName']."'); totalDelegates++;"."\n\t\t";
			}
		?>
		</script>
	</body>
</html>