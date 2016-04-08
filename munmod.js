/*--------------------------------------------------
			Pure CSS Code (For side panel)
--------------------------------------------------*/
(function (window, document) {

	var layout	 = document.getElementById('layout'),
		menu	 = document.getElementById('menu'),
		menuLink = document.getElementById('menuLink');

	function toggleClass(element, className) {
		var classes = element.className.split(/\s+/),
			length = classes.length,
			i = 0;

		for(; i < length; i++) {
			if (classes[i] === className) {
			classes.splice(i, 1);
			break;
			}
		}
		// The className is not found
		if (length === classes.length) {
			classes.push(className);
		}

		element.className = classes.join(' ');
	}

	menuLink.onclick = function (e) {
		var active = 'active';

		e.preventDefault();
		toggleClass(layout, active);
		toggleClass(menu, active);
		toggleClass(menuLink, active);
	};

}(this, this.document));


/*--------------------------------------------------
		My Functions (done by me own my own)
--------------------------------------------------*/

// fade in when page loads
$(window).load(function(){
	setTimeout(function(){
		$('#loading').fadeOut("slow");
	}, 200);
	
});

// window.onbeforeunload = function(e) {
//     return 'Are you sure you want to close MUN Moderator?';
// };

/*--------------------------------------------------
			For jQueryUI autocomplete
--------------------------------------------------*/
// Binds the 
function autocompleteSources(){
	$(function(){
		$('#autocomplete-unmod-start').autocomplete({
			lookup: masterList
		});
	});
	$(function(){
		$('#autocomplete-mod-start').autocomplete({
			lookup: masterList
		});
	});
	$(function(){
		$('#autocomplete-mod-speaker').autocomplete({
			lookup: masterList,
		onSelect: function(){
			modSpeakerReset();
		}
		});
	});
	$(function(){
		$('#autocomplete-gsl').autocomplete({
			lookup: masterList
		});
	});
}


/*--------------------------------------------------
				Navigation Control
--------------------------------------------------*/
$(document).ready(function(){
	$("#headerArea").click(function(){
	if ($("#welcome").hasClass("hidden")) {

		$('#welcome').removeClass("hidden");
		$('#welcome').fadeTo(0, 0);
		$('#welcome').fadeTo(500, 1);

		// hide other sections
		$("#tab-RollCall").addClass("hidden");
		$("#tab-voting").addClass("hidden");
		$("#tab-gsl").addClass("hidden");
		$("#tab-ssl").addClass("hidden");
		$("#tab-mod").addClass("hidden");
		$("#tab-unmod").addClass("hidden");
		$("#tab-resolution").addClass("hidden");
		$("#agenda").addClass("hidden");	// hide agenda for panels which are not main-navigation
		$(".main-navigation").removeClass("pure-menu-selected");	// de-highlight all options
	}
		$("#layout").removeClass("active");	// auto-close the navigation panel
	});
	

	// Click on RollCall button
	$("#button-RollCall").click(function(){
		if($('#tab-RollCall').hasClass('hidden')){	// Only if the panel is not visible / already selected
			$(".main-navigation").removeClass("pure-menu-selected");	// de-highlight all options
			
			// hide other sections
			$("#welcome").addClass("hidden");
			$("#tab-voting").addClass("hidden");
			$("#tab-gsl").addClass("hidden");
			$("#tab-ssl").addClass("hidden");
			$("#tab-mod").addClass("hidden");
			$("#tab-unmod").addClass("hidden");
			$("#tab-resolution").addClass("hidden");

			$(this).toggleClass("pure-menu-selected");	// Select clicked option
			$("#layout").removeClass("active");	// auto-close the navigation panel
			$("#agenda").removeClass("hidden");	// show current agenda in-case it was hidden

			$('#tab-RollCall').removeClass("hidden");
			$('#tab-RollCall').fadeTo(0, 0);
			$('#tab-RollCall').fadeTo(500, 1);
			
		}
	});

	// Click on voting button
	$("#button-voting").click(function(){
		if($('#tab-voting').hasClass('hidden')){	// Only if the panel is not visible / already selected
			$(".main-navigation").removeClass("pure-menu-selected");	// de-highlight all options
			
			// hide other sections
			$("#welcome").addClass("hidden");
			$("#tab-RollCall").addClass("hidden");
			$("#tab-gsl").addClass("hidden");
			$("#tab-ssl").addClass("hidden");
			$("#tab-mod").addClass("hidden");
			$("#tab-unmod").addClass("hidden");
			$("#tab-resolution").addClass("hidden");

			$(this).toggleClass("pure-menu-selected");	// Select clicked option
			$("#layout").removeClass("active");	// auto-close the navigation panel
			$("#agenda").removeClass("hidden");	// show current agenda in-case it was hidden

			$('#tab-voting').removeClass("hidden");
			$('#tab-voting').fadeTo(0, 0);
			$('#tab-voting').fadeTo(500, 1);
		}
	});
	
	// Click on GSL button
	$("#button-gsl").click(function(){
		if($('#tab-gsl').hasClass('hidden')){	// Only if the panel is not visible / already selected
		$(".main-navigation").removeClass("pure-menu-selected");	// de-highlight all options

			// hide other sections
			$("#welcome").addClass("hidden");
			$("#tab-RollCall").addClass("hidden");
			$("#tab-voting").addClass("hidden");
			$("#tab-ssl").addClass("hidden");
			$("#tab-mod").addClass("hidden");
			$("#tab-unmod").addClass("hidden");
			$("#tab-resolution").addClass("hidden");
			
			$(this).toggleClass("pure-menu-selected");	// Select clicked option
			$("#layout").removeClass("active");	// auto-close the navigation panel
			$("#agenda").removeClass("hidden");	// show current agenda in-case it was hidden
			
			$('#tab-gsl').removeClass("hidden");
			$('#tab-gsl').fadeTo(0, 0);
			$('#tab-gsl').fadeTo(500, 1);
		}
	});

	// Click on SSL button
	$("#button-ssl").click(function(){
		if($('#tab-ssl').hasClass('hidden')){	// Only if the panel is not visible / already selected
		$(".main-navigation").removeClass("pure-menu-selected");	// de-highlight all options

			// hide other sections
			$("#welcome").addClass("hidden");
			$("#tab-RollCall").addClass("hidden");
			$("#tab-voting").addClass("hidden");
			$("#tab-gsl").addClass("hidden");
			$("#tab-mod").addClass("hidden");
			$("#tab-unmod").addClass("hidden");
			$("#tab-resolution").addClass("hidden");
			
			$(this).toggleClass("pure-menu-selected");	// Select clicked option
			$("#layout").removeClass("active");	// auto-close the navigation panel
			$("#agenda").removeClass("hidden");	// show current agenda in-case it was hidden
			
			$('#tab-ssl').removeClass("hidden");
			$('#tab-ssl').fadeTo(0, 0);
			$('#tab-ssl').fadeTo(500, 1);
		}
	});
	
	// Click on Mod button
	$("#button-mod").click(function(){
		if($('#tab-mod').hasClass('hidden')){	// Only if the panel is not visible / already selected
			$(".main-navigation").removeClass("pure-menu-selected");	// de-highlight all options
			
			// hide other sections
			$("#welcome").addClass("hidden");
			$("#tab-RollCall").addClass("hidden");
			$("#tab-voting").addClass("hidden");
			$("#tab-gsl").addClass("hidden");
			$("#tab-ssl").addClass("hidden");
			$("#tab-unmod").addClass("hidden");
			$("#tab-resolution").addClass("hidden");
			
			$(this).toggleClass("pure-menu-selected");	// Select clicked option
			$("#layout").removeClass("active");	// auto-close the navigation panel
			$("#agenda").removeClass("hidden");	// show current agenda in-case it was hidden
			
			$('#tab-mod').removeClass("hidden");
			$('#tab-mod').fadeTo(0, 0);
			$('#tab-mod').fadeTo(500, 1);
		}
	});

	// Click on Unmod button
	$("#button-unmod").click(function(){
		if($('#tab-unmod').hasClass('hidden')){	// Only if the panel is not visible / already selected
			$(".main-navigation").removeClass("pure-menu-selected");	// de-highlight all options

			// hide other sections
			$("#welcome").addClass("hidden");
			$("#tab-RollCall").addClass("hidden");
			$("#tab-voting").addClass("hidden");
			$("#tab-gsl").addClass("hidden");
			$("#tab-ssl").addClass("hidden");
			$("#tab-mod").addClass("hidden");
			$("#tab-resolution").addClass("hidden");
			
			$(this).toggleClass("pure-menu-selected");	// Select clicked option
			$("#layout").removeClass("active");	// auto-close the navigation panel
			$("#agenda").removeClass("hidden");	// show current agenda in-case it was hidden
			
			$('#tab-unmod').removeClass("hidden");
			$('#tab-unmod').fadeTo(0, 0);
			$('#tab-unmod').fadeTo(500, 1);
		}
	});

	// Click on Resolution button
	$("#button-resolution").click(function(){
		if($('#tab-resolution').hasClass('hidden')){	// Only if the panel is not visible / already selected
			$(".main-navigation").removeClass("pure-menu-selected");	// de-highlight all options

			// hide other sections
			$("#welcome").addClass("hidden");
			$("#tab-RollCall").addClass("hidden");
			$("#tab-voting").addClass("hidden");
			$("#tab-gsl").addClass("hidden");
			$("#tab-ssl").addClass("hidden");
			$("#tab-mod").addClass("hidden");
			$("#tab-unmod").addClass("hidden");
			
			$(this).toggleClass("pure-menu-selected");	// Select clicked option
			$("#layout").removeClass("active");	// auto-close the navigation panel
			$("#agenda").removeClass("hidden");	// show current agenda in-case it was hidden
			
			$('#tab-resolution').removeClass("hidden");
			$('#tab-resolution').fadeTo(0, 0);
			$('#tab-resolution').fadeTo(500, 1);
		}
	});
});

/* Is populated by Ajax request once page loads; Contains list of all delegates */
var masterList = [];

/*--------------------------------------------------
				Unmoderated Caucus
--------------------------------------------------*/
var unmodMins, unmodSecs, unmodControl;
function UnmodTimer() {
	if (document.getElementById("unmod-caucus-button-label").innerHTML == "Stop Unmoderated Caucus") {
		unmodEnd();
		return;
	}

	// Get values from text fields
	unmodMins = parseInt(document.getElementById('unmod-minutes').value);
	unmodSecs = parseInt(document.getElementById('unmod-seconds').value);
	if ((unmodMins == 0 && unmodSecs == 0) || (unmodMins < 0 || unmodSecs < 0) || (isNaN(unmodMins) || isNaN(unmodSecs))) { // Reset to zero
		unmodSecs = unmodMins = 0;
		document.getElementById("unmod-minutes").value = unmodMins;
		document.getElementById("unmod-seconds").value = unmodSecs;
		return;
	}
	unmodControl = setInterval(UnmodCountdown, 1000); // Start countdown

	// disable text fields
	document.getElementById("unmod-minutes").disabled = true;
	document.getElementById("unmod-seconds").disabled = true;

	$('.unmod-control-buttons').removeClass("hidden");
	$('.unmod-control-buttons').fadeIn("slow");
	//animateIn(jQuery('.unmod-control-buttons'), 'ms-u-slideLeftIn40', 400);

	document.getElementById("unmod-caucus-button-label").innerHTML = "Stop Unmoderated Caucus";

	// log start of unmoderated caucus
	var str = "Unmoderated caucus started by " +	document.getElementById("autocomplete-unmod-start").value + " for " + unmodMins.toString() + " mins, " + unmodSecs.toString() + " secs on the topic " + document.getElementById("unmod-topic-field").value;
	logEvents("unmod", str);
}
function UnmodCountdown() {
	while (unmodSecs > 60) {
		unmodSecs -= 60;
		unmodMins += 1;
	}
	if (unmodSecs == 0 && unmodMins > 0) {
		unmodMins -= 1;
		unmodSecs = 60;
	}
	unmodSecs -= 1;
	document.getElementById("unmod-minutes").value = unmodMins;
	document.getElementById("unmod-seconds").value = unmodSecs;
	if (unmodSecs <= 9 && unmodSecs > 0) document.getElementById("unmod-seconds").value = "0" + unmodSecs;
	if (unmodSecs == 0 && unmodMins == 0) {
		unmodEnd();
	}
}
function unmodEnd(){
	clearInterval(unmodControl);
	unmodMins = unmodSecs = 0;
	document.getElementById("unmod-minutes").value = unmodMins;
	document.getElementById("unmod-seconds").value = unmodSecs;

	// enable text fields
	document.getElementById("unmod-minutes").disabled = false;
	document.getElementById("unmod-seconds").disabled = false;

	animateOut(jQuery('.unmod-control-buttons'), 'ms-u-slideRightOut40', 200);

	document.getElementById("unmod-caucus-button-label").innerHTML = "Start Unmoderated Caucus";
	document.getElementById("unmod-caucus-pause-button-label").innerHTML = "Pause";

	// clear fields
	document.getElementById("autocomplete-unmod-start").value = "";
	document.getElementById("unmod-topic-field").value = "";
	document.getElementById("flag-unmod-start").style.backgroundImage = "url('logoSmall.png')";

	logEvents("unmod", "End of unmoderated caucus");	// log the end of unmod caucus
}
function unmodPause() {
	if (document.getElementById("unmod-caucus-pause-button-label").innerHTML == "Pause"){
		clearInterval(unmodControl);
		document.getElementById("unmod-caucus-pause-button-label").innerHTML = "Resume";
		logEvents("unmod", "Unmoderated caucus paused");
	}
	else {
		unmodControl = setInterval(UnmodCountdown, 1000);
		document.getElementById("unmod-caucus-pause-button-label").innerHTML = "Pause";
		logEvents("unmod", "Unmoderated caucus resumed");
	}
}
function unmodExtendMin() {
	unmodMins += 1;
	document.getElementById("unmod-minutes").value = unmodMins;
	logEvents("unmod", "Unmoderated caucus extended by 1 min");
}
function unmodExtendSec() {
	unmodSecs += 10;
	document.getElementById("unmod-seconds").value = unmodSecs;
	logEvents("unmod", "Unmoderated caucus extended by 10 secs");
}


/*--------------------------------------------------
					Moderated Caucus
--------------------------------------------------*/
var modMins=0, modSecs=0, modControl, modSpeakerMins=0, modSpeakerSecs=0, modSpeakerSetMins=0, modSpeakerSetSecs=0, modSpeakerControl;
function ModTimer() {
	if (document.getElementById("mod-caucus-button-label").innerHTML == "Stop Moderated Caucus") {
		modEnd();
		return;
	}

	// Get values from text fields
	modMins = parseInt(document.getElementById('mod-minutes').value);
	modSecs = parseInt(document.getElementById('mod-seconds').value);
	if ((modSecs == 0 && modMins == 0) || (modSecs < 0 || modMins < 0) || (isNaN(modMins) || isNaN(modSecs))) { // Reset to zero
		modSecs = modMins = 0;
		document.getElementById("mod-minutes").value = modMins;
		document.getElementById("mod-seconds").value = modSecs;
		return;
	}
	modControl = setInterval(ModCountdown, 1000); // Start countdown

	// disable text fields
	document.getElementById("mod-minutes").disabled = true;
	document.getElementById("mod-seconds").disabled = true;

	animateIn(jQuery('.mod-control-buttons'), 'ms-u-slideLeftIn40', 400);

	document.getElementById("mod-caucus-button-label").innerHTML = "Stop Moderated Caucus";

	// log the start of mod caucus
	var str = "Moderated caucus started by " +	document.getElementById("autocomplete-mod-start").value + " for " + modMins.toString() + " mins, " + modSecs.toString() + " secs on the topic " + document.getElementById("mod-topic-field").value;
	logEvents("mod", str);

	modSpeakerReset();	// for speaker time countdown
}
function ModCountdown() {
	while (modSecs > 60) {
		modSecs -= 60;
		modMins += 1;
	}
	if (modSecs == 0 && modMins > 0) {
		modMins -= 1;
		modSecs = 60;
	}
	modSecs -= 1;
	document.getElementById("mod-minutes").value = modMins;
	document.getElementById("mod-seconds").value = modSecs;
	if (modSecs <= 9 && modSecs > 0) document.getElementById("mod-seconds").value = "0" + modSecs;
	if (modSecs == 0 && modMins == 0) {
		modEnd();
	}
}
function modEnd(){
	clearInterval(modControl);
	modMins = modSecs = 0;
	document.getElementById("mod-minutes").value = modMins;
	document.getElementById("mod-seconds").value = modSecs;
	// enable text fields
	document.getElementById("mod-minutes").disabled = false;
	document.getElementById("mod-seconds").disabled = false;

	animateOut(jQuery('.mod-control-buttons'), 'ms-u-slideRightOut40', 200);

	document.getElementById("mod-caucus-button-label").innerHTML = "Start Moderated Caucus";
	document.getElementById("mod-caucus-pause-button-label").innerHTML = "Pause";

	clearInterval(modSpeakerControl);
	document.getElementById("mod-speaker-minutes").value = 0;
	document.getElementById("mod-speaker-seconds").value = 0;

	document.getElementById("autocomplete-mod-speaker").value = "";
	document.getElementById("autocomplete-mod-start").value = "";
	document.getElementById("mod-topic-field").value = "";

	logEvents("mod", "End of moderated caucus");	// log the end of mod caucus
}
function modPause() {
	if (document.getElementById("mod-caucus-pause-button-label").innerHTML == "Pause"){
		clearInterval(modControl);
		clearInterval(modSpeakerControl);
		document.getElementById("mod-caucus-pause-button-label").innerHTML = "Resume";
		logEvents("mod", "Moderated caucus paused");
	}
	else {
		modControl = setInterval(ModCountdown, 1000);
		modSpeakerControl = setInterval(ModSpeakerCountdown, 1000);
		document.getElementById("mod-caucus-pause-button-label").innerHTML = "Pause";
		logEvents("mod", "Moderated caucus resumed");
	}
}
function modExtendMin() {
	modMins += 1;
	document.getElementById("mod-minutes").value = modMins;
	logEvents("mod", "Moderated caucus extended by 1 min");
}
function modExtendSec() {
	modSecs += 10;
	document.getElementById("mod-seconds").value = modSecs;
	logEvents("mod", "Moderated caucus extended by 10 secs");
}
function modSpeakerButtonReset(){ // For resetting with the button
	document.getElementById("autocomplete-mod-speaker").value = ""; //Clears the current speaker
	modSpeakerReset();	// Do the normal reset
}
function modSpeakerReset() {
	document.getElementById("mod-speaker-minutes").value = modSpeakerSetMins;
	document.getElementById("mod-speaker-seconds").value = modSpeakerSetSecs;
	modSpeakerMins = modSpeakerSetMins;
	modSpeakerSecs = modSpeakerSetSecs;
	clearInterval(modSpeakerControl); // Clear any existing timer, if any
	if (modSpeakerMins > 0 || modSpeakerSecs > 0) {
		if (document.getElementById("mod-caucus-pause-button-label").innerHTML == "Pause" && (modMins != 0 || modSecs != 0)) { // Start running only if timer is not paused
			modSpeakerControl = setInterval(ModSpeakerCountdown, 1000);
			logModSpeaker(); // log event
		}
	}
}
function modSpeakerSet() {
	modSpeakerSetMins = document.getElementById("mod-speaker-set-minutes").value;
	modSpeakerSetSecs = document.getElementById("mod-speaker-set-seconds").value;
	if ((modSpeakerSetSecs == 0 && modSpeakerSetMins == 0) || (modSpeakerSetMins < 0 || modSpeakerSetSecs < 0)) {
		modSpeakerSetSecs = modSpeakerSetMins = 0;
		document.getElementById("mod-speaker-set-minutes").value = modSpeakerSetMins;
		document.getElementById("mod-speaker-set-seconds").value = modSpeakerSetSecs;
	}
	else {
		// log event
		var str = modSpeakerSetMins.toString() + " mins, " + modSpeakerSetSecs.toString() + " secs set as time per speaker";
		logEvents("mod", str);
	}
}
function ModSpeakerCountdown() {
	while (modSpeakerSecs > 60) {
		modSpeakerSecs -= 60;
		modSpeakerMins += 1;
	}
	if (modSpeakerSecs == 0 && modSpeakerMins > 0) {
		modSpeakerMins -= 1;
		modSpeakerSecs = 60;
	}
	modSpeakerSecs -= 1;
	document.getElementById("mod-speaker-minutes").value = modSpeakerMins;
	document.getElementById("mod-speaker-seconds").value = modSpeakerSecs;
	if (modSpeakerSecs <= 9 && modSpeakerSecs > 0) document.getElementById("mod-speaker-seconds").value = "0" + modSpeakerSecs;
	if (modSpeakerSecs == 0 && modSpeakerMins == 0) {
		clearInterval(modSpeakerControl);
	}
}

/*--------------------------------------------------
					Roll Call
--------------------------------------------------*/

// Bind event handlers for buttons after they are added to the page dynamically
function bindRollCallButtons() {
	// Click on button 1 (absent)
	$('.my-ListItem-Button1-Text').click(function(){
		if ($(this).hasClass('my-ListItem-Button2-selected')) {
			// Do nothing because the button is already selected
		}
		else {
			// Remove formatting of the other buttons
			$(this).parent().find('.my-ListItem-Text').removeClass('my-ListItem-Text-selected-2');
			$(this).parent().find('.my-ListItem-Button2-Text').removeClass('my-ListItem-Button2-selected');
			$(this).parent().find('.my-ListItem-Text').removeClass('my-ListItem-Text-selected-3');
			$(this).parent().find('.my-ListItem-Button3-Text').removeClass('my-ListItem-Button3-selected');
			// Add formatting for this button
			$(this).parent().find('.my-ListItem-Text').addClass('my-ListItem-Text-selected-1');
			$(this).addClass('my-ListItem-Button1-selected');

			// Modify the indexedDB
			var delegate = $(this).parent().find('.my-ListItem-Text').html();
			db.transaction("Delegates").objectStore("Delegates").get(delegate).onsuccess = function(event) {
				tempDelegate = event.target.result;
				tempDelegate.session0.attendance = 0;	// mark as absent
				db.transaction("Delegates" ,"readwrite").objectStore("Delegates").put(tempDelegate);	// update the database
			};

		}
	});
	// Click on button 2 (present)
	$('.my-ListItem-Button2-Text').click(function(){
		if ($(this).hasClass('my-ListItem-Button2-selected')) {
			// Do nothing because the button is already selected
		}
		else {
			// Remove formatting of the other buttons
			$(this).parent().find('.my-ListItem-Text').removeClass('my-ListItem-Text-selected-3');
			$(this).parent().find('.my-ListItem-Button3-Text').removeClass('my-ListItem-Button3-selected');
			$(this).parent().find('.my-ListItem-Text').removeClass('my-ListItem-Text-selected-1');
			$(this).parent().find('.my-ListItem-Button1-Text').removeClass('my-ListItem-Button1-selected');
			// Add formatting for this button
			$(this).parent().find('.my-ListItem-Text').addClass('my-ListItem-Text-selected-2');
			$(this).addClass('my-ListItem-Button2-selected');

			// Modify the indexedDB
			var delegate = $(this).parent().find('.my-ListItem-Text').html();
			db.transaction("Delegates").objectStore("Delegates").get(delegate).onsuccess = function(event) {
				tempDelegate = event.target.result;
				tempDelegate.session0.attendance = 1;	// mark as present
				db.transaction("Delegates" ,"readwrite").objectStore("Delegates").put(tempDelegate);	// update the database
			};
			
		}
	});
	// Click on button 3 (present & voting)
	$('.my-ListItem-Button3-Text').click(function(){
		if ($(this).hasClass('my-ListItem-Button3-selected')) {
			// Do nothing because the button is already selected
		}
		else {
			// Remove formatting of the other buttons
			$(this).parent().find('.my-ListItem-Text').removeClass('my-ListItem-Text-selected-2');
			$(this).parent().find('.my-ListItem-Button2-Text').removeClass('my-ListItem-Button2-selected');
			$(this).parent().find('.my-ListItem-Text').removeClass('my-ListItem-Text-selected-1');
			$(this).parent().find('.my-ListItem-Button1-Text').removeClass('my-ListItem-Button1-selected');
			// Add formatting for this button
			$(this).parent().find('.my-ListItem-Text').addClass('my-ListItem-Text-selected-3');
			$(this).addClass('my-ListItem-Button3-selected');

			// Modify the indexedDB
			var delegate = $(this).parent().find('.my-ListItem-Text').html();
			db.transaction("Delegates").objectStore("Delegates").get(delegate).onsuccess = function(event) {
				tempDelegate = event.target.result;
				tempDelegate.session0.attendance = 2;	// mark as present & voting
				db.transaction("Delegates" ,"readwrite").objectStore("Delegates").put(tempDelegate);	// update the database
			};
		}
	});
}

// Reset the roll call
function resetRollCall() {
	// Remove formatting of the other button
	$('.my-ListItem-Text').removeClass('my-ListItem-Text-selected-2');
	$('.my-ListItem-Button2-Text').removeClass('my-ListItem-Button2-selected');
	$('.my-ListItem-Text').removeClass('my-ListItem-Text-selected-3');
	$('.my-ListItem-Button3-Text').removeClass('my-ListItem-Button3-selected');
	// Add formatting for this button
	$('.my-ListItem-Text').addClass('my-ListItem-Text-selected-1');
	$('.my-ListItem-Button1-Text').addClass('my-ListItem-Button1-selected');

	// mark absent in indexedDB
	for (var delegate in masterList) {
		db.transaction("Delegates").objectStore("Delegates").get(masterList[delegate]).onsuccess = function(event) {
			tempDelegate = event.target.result;
			tempDelegate.session0.attendance = 0;	// mark as absent
			db.transaction("Delegates" ,"readwrite").objectStore("Delegates").put(tempDelegate);	// update the database
		};
	}
	
}


/*--------------------------------------------------
						Voting
--------------------------------------------------*/
var votingYes, votingNo, votingAbstain;	// for counting

function startVoting() {
	// Start the voting
	if (document.getElementById('votingButton-start').innerHTML == 'Start Vote'){
		//Calculate_tempVotingNumber();
		var count = 0;
		// Open Delegates objectstore with cursor
		db.transaction("Delegates").objectStore("Delegates").openCursor().onsuccess = function(event) {
			var cursor = event.target.result;
			if (cursor) {	// if object exists in DB
				tempDelegate = cursor.value;	// store the object from the DB in temp variable
				if (tempDelegate.session0.attendance == 0) {	//absent
					tempDelegate.tempVotingNumber = 0;
				}
				else {
					tempDelegate.tempVotingNumber = ++count;
				}
				tempDelegate.tempVoting = 0; // reset

				db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate).onerror = function(event) {
					console.log("Couldn't update the DB while calculating tempVotingNumber!");
				}
				cursor.continue();
			}
			else {
				db.transaction("Variables", "readwrite").objectStore("Variables").put(count, "presentDelegates").onsuccess = function(event) {
					db.transaction("Variables").objectStore("Variables").get("presentDelegates").onsuccess = function(event) {
						var presentDelegates = event.target.result;
						if (presentDelegates < 1) return;

						var index = db.transaction("Delegates").objectStore("Delegates").index("tempVotingNumber");
						index.get(1).onsuccess = function(event) {
							// Display the first portfolio
							document.getElementById("votingLabel-delegate").innerHTML = event.target.result.portfolio;	

							// disable or enable the abstain button acoording to the first delegate
							if (event.target.result.session0.attendance == 1) {
								$('#votingButton-3').removeClass('disabled');	// Can abstain if delegate is only present
							}
							else {
								$('#votingButton-3').addClass('disabled');	// Cannot abstain if delegate is present& voting
							}

							document.getElementById('votingButton-start').innerHTML = 'Stop Vote';	// Change the button text
							$('#votingButton-4').removeClass('hidden');	// Show pass button if it was hidden
							document.getElementById("votingLabel-current").innerHTML = 1;			// Set the counter
							document.getElementById("votingLabel-max").innerHTML = presentDelegates;	// Set the max count
							$('#voting-results').addClass('hidden');	// hide results panel
							$('#voting-main').removeClass('hidden');	// show voting panel
						}

						// To track number of yes and no
						db.transaction("Variables", "readwrite").objectStore("Variables").put(0, "votingYes");
						db.transaction("Variables", "readwrite").objectStore("Variables").put(0, "votingNo");
						db.transaction("Variables", "readwrite").objectStore("Variables").put(0, "votingAbstain");
						votingYes = 0, votingNo = 0, votingAbstain = 0;
					}
				}
			}
		}
	}
	// Stop the voting
	else {
		$('#voting-main').addClass('hidden');	// hide voting panel
		document.getElementById('votingButton-start').innerHTML = 'Start Vote';	// Change the button text
	}
}

function votingControlButton(button) {
	// Yes button
	if (button.id == 'votingButton-1') {
		db.transaction("Variables").objectStore("Variables").get("votingYes").onsuccess = function(event) {
			var yes = event.target.result;
			yes++;
			db.transaction("Variables", "readwrite").objectStore("Variables").put(yes, "votingYes");
		}
		votingYes++;
	}
	// No button
	else if (button.id == 'votingButton-2') {
		db.transaction("Variables").objectStore("Variables").get("votingNo").onsuccess = function(event) {
			var no = event.target.result;
			no++;
			db.transaction("Variables", "readwrite").objectStore("Variables").put(no, "votingNo");
		}
		votingNo++;
	}
	// Abstain button
	else if (button.id == 'votingButton-3') {
		db.transaction("Variables").objectStore("Variables").get("votingAbstain").onsuccess = function(event) {
			var abstain = event.target.result;
			abstain++;
			db.transaction("Variables", "readwrite").objectStore("Variables").put(abstain, "votingAbstain");
		}
		votingAbstain++;
	}
	// Pass button
	else {
		// Do nothing
	}

	// Save whether the delgate has finished voting
	var current = document.getElementById("votingLabel-current").innerHTML;
	var currentNumber = Number(current);	// Convert string to number
	
	db.transaction("Delegates").objectStore("Delegates").index("tempVotingNumber").get(currentNumber).onsuccess = function(event) {
		tempDelegate = event.target.result;
		
			if (button.id == 'votingButton-4') {
				tempDelegate.tempVoting = 0;	// delegate has passed
			}
			else {
				tempDelegate.tempVoting = 1;	// delegate has finished voting
			}
				
			db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate).onsuccess = function(event) {

				// Check if voting has been completed
				if (votingYes + votingNo + votingAbstain == document.getElementById('votingLabel-max').innerHTML) {
					// Show the results
					document.getElementById('votingLabel-yes').innerHTML = votingYes;
					document.getElementById('votingLabel-no').innerHTML = votingNo;
					document.getElementById('votingLabel-abstain').innerHTML = votingAbstain;
					var percent = (votingYes/(votingYes+votingNo+votingAbstain))*100;
					document.getElementById('votingLabel-percent').innerHTML = Math.round(percent*100)/100;
					if (document.getElementById('votingLabel-percent').innerHTML > 50) {
						document.getElementById('votingLabel-statement').innerHTML = "The motion passes.";
					}
					else {
						document.getElementById('votingLabel-statement').innerHTML = "The motion fails.";
					}
					$('#voting-results').removeClass('hidden');
					$('#voting-main').addClass('hidden');
					document.getElementById('votingButton-start').innerHTML = 'Start Vote';
					return;
				}

				// Check if it is the last delegate
				if (current == document.getElementById("votingLabel-max").innerHTML) {
					// Start the second round for those who passed
					currentNumber = 0;
					// Disable the pass button
					$('#votingButton-4').addClass('hidden');
				}


				// Go to next delegate
				currentNumber++;
				var index = db.transaction("Delegates").objectStore("Delegates").index("tempVotingNumber");
				index.openCursor().onsuccess = function(event) {
					var cursor = event.target.result;
					if (cursor) {
						if (cursor.value.tempVotingNumber != currentNumber) {
							cursor.continue();
						}
						else {
							if (cursor.value.tempVoting == 1) {
								cursor.continue();
								currentNumber++;
							}
							else {
								// Display the next portfolio
								document.getElementById("votingLabel-delegate").innerHTML = cursor.value.portfolio;	

								// disable or enable the abstain button acoording to the delegate
								if (cursor.value.session0.attendance == 1) {
									document.getElementById('votingButton-3').disabled = false;
									//$('#votingButton-3').removeClass('disabled');	// Can abstain if delegate is only present
								}
								else {
									document.getElementById('votingButton-3').disabled = true;
									//$('#votingButton-3').addClass('disabled');	// Cannot abstain if delegate is present& voting
								}

								document.getElementById("votingLabel-current").innerHTML = currentNumber;	// Set the counter
							}
						}
						
					}
				}
			}

	}
}

function Calculate_tempVotingNumber() {
	var count = 0;
	var objectStore = db.transaction("Delegates").objectStore("Delegates");
	objectStore.openCursor().onsuccess = function(event) {
		var cursor = event.target.result;
		if (cursor) {
			tempDelegate = cursor.value;
			if (tempDelegate.session0.attendance == 0) {	//absent
				tempDelegate.tempVotingNumber = 0;
			}
			else {
				count++;
				tempDelegate.tempVotingNumber = count;
			}

			db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate).onerror = function(event) {
				console.log("Couldn't update the DB while calculating tempVotingNumber!");
			}
			cursor.continue();
		}
		else {
			db.transaction("Variables", "readwrite").objectStore("Variables").put(count, "presentDelegates");
		}
	}
}

/*--------------------------------------------------
					Resolution
--------------------------------------------------*/



// Object for delegates
function Delegate(portfolioName) {
	this.portfolio = portfolioName;
	this.flag = {};
	this.tempVotingNumber = 0;
	this.tempVoting = 0;
	this.session0 = new Session();
}

function Session() {
	this.attendance = 0;
	this.gslTime = 0;
	this.sslTime = 0;
	this.modTime = 0;
	this.modsStarted = 0;
	this.unmodsStarted = 0;
	this.pointsRaised = 0;
	this.goodPointsRaised = 0;
}

// temp object for making updates to indexedDB
var tempDelegate = new Delegate('temp');

// stores all the delegate objects before they are loaded into indexedDB
var DelegateArray = new Array();


/*--------------------------------------------------
				IndexedDB Database
--------------------------------------------------*/

if (!window.indexedDB) {
    alert("Your browser doesn't support IndexedDB. MUN Moderator requires IndexedDB and cannot function without it. Please use a supported browser like Google Chrome, Mozilla Firefox or Microsoft Edge. InPrivate Mode on Edge disables IndexedDB.");
}

// Create the indexedDB database
var dbOpenRequest = indexedDB.open("db19");
var db;

// The database did not previously exist, so create object stores and indexes.
dbOpenRequest.onupgradeneeded = function(event) {
	if (event.oldVersion < 1) {
		// Store the values of text fields
		// var store = dbOpenRequest.result.createObjectStore("StoreFields");

		// Store logs 
		// var logs = dbOpenRequest.result.createObjectStore("Log", {keyPath: "id", autoIncrement: true});
		// var sampleItem = { category: "general", date: Date(), string: "Database created" };
		// logs.add(sampleItem);

		// Store other variables
		var details = dbOpenRequest.result.createObjectStore("Variables");

		// Store country flags as BLOBs
		var flags = dbOpenRequest.result.createObjectStore("Flags");

	}

	var delegates = dbOpenRequest.result.createObjectStore("Delegates", {keyPath: "portfolio"});
	var index_tempVotingNumber = delegates.createIndex("tempVotingNumber", "tempVotingNumber");

};

dbOpenRequest.onsuccess = function() {
	db = dbOpenRequest.result;
	
	// Load delegates into indexedDB
	request1 = $.ajax({
		url: "portfolio.php",
		type: "post",
	})
		.done(function(response){
			eval(response);

			autocompleteSources();	// To bind the sources for autocomplete
			// Load flags
			db.transaction("Delegates").objectStore("Delegates").openCursor().onsuccess = function(event) {
				var cursor = event.target.result;
				if (cursor) {
					LoadFlag(cursor.value.portfolio);
					cursor.continue();
				}
			};

			// Add delgate object to indexedDB
			var delegateObjectStore = db.transaction("Delegates", "readwrite").objectStore("Delegates");
			for (var i in DelegateArray) {
				delegateObjectStore.add(DelegateArray[i]);
			}

			db.transaction("Delegates").objectStore("Delegates").get("India").onsuccess = function(event) {
				// alert("Mod Mins of session 1: " + event.target.result.session1.modTime);
			};

			// Create list for Roll Call
			var objectStore = db.transaction("Delegates").objectStore("Delegates");
			objectStore.openCursor().onsuccess = function(event) {
				var cursor = event.target.result;
				if (cursor) {
					$('#list-rollCall').append('<div class="my-ListItem">' +
																	'<a class="my-ListItem-Text my-ListItem-Text-selected-1">' + cursor.value.portfolio + '</a>' +
																	'<a class="my-ListItem-Button3-Text waves-effect waves-light ">Present & Voting</a>' +
																	'<a class="my-ListItem-Button2-Text waves-effect waves-light">Present</a>' +
																	'<a class="my-ListItem-Button1-Text waves-effect waves-light my-ListItem-Button1-selected">Absent</a>' +
																	'</div>');
					//alert("Name for SSN " + cursor.key + " is " + cursor.value.name);
					cursor.continue();
				}
				else {
					bindRollCallButtons();
				}
			};


		})
};


// For logging events to indexedDB
// function logEvents(categoryArgs, stringArgs) {
// 	var store = db.transaction("Log", "readwrite").objectStore("Log");
// 	var item = { category: categoryArgs, date: Date(), string: stringArgs};
// 	store.put(item);
// }

// function logModSpeaker() {
// 	var str;
// 	var speaker = document.getElementById("autocomplete-mod-speaker").value;
// 	if (speaker == "") {
// 		str = "New speaker is speaking";
// 	}
// 	else {
// 		str = document.getElementById("autocomplete-mod-speaker").value + " is speaking";
// 	}
// 	logEvents("mod", str);
// }

// function logRollCallVote() {
// 	var option1 = 0, option2 = 0, option3 = 0;
// 	var str = "Roll Call Vote completed\n";
// 	for (i in activeList) {
// 	str += activeList[i][0] + " is ";
// 	if (activeList[i][2] == 1) {
// 		option1++;
// 		str += "Present and Voting\n";
// 	}
// 	else if (activeList[i][2] == 2) {
// 		option2++;
// 		str += "Present\n";
// 	}
// 	else {
// 		option3++;
// 		str += "Absent\n";
// 	}
// 	}
// 	str += "Total Votes: " + (parseInt(option1) + parseInt(option2) + parseInt(option3)).toString() + ", Present and Voting: " + option1 + ", Present: " + option2 + ", Absent: " + option3;
// 	logEvents("RollCallVote", str);
// }

// function logSimpleMajorityVote() {
// 	var option1 = 0, option2 = 0, option3 = 0;
// 	var str = "Simple Majority Vote completed\n";
// 	for (i in activeList) {
// 	str += activeList[i][0];
// 	if (activeList[i][4] == 1) {
// 		option1++;
// 		str += "voted Yes\n";
// 	}
// 	else if (activeList[i][4] == 2) {
// 		option2++;
// 		str += "voted No\n";
// 	}
// 	else {
// 		option3++;
// 		str += "Abstained\n";
// 	}
// 	}
// 	str += "Total Votes: " + (parseInt(option1) + parseInt(option2) + parseInt(option3)).toString() + ", Yes: " + option1 + ", No: " + option2 + ", Abstained: " + option3;
// 	logEvents("SimpleMajorityVote", str);
// }

// function logResolutionVote() {
// 	var option1 = 0, option2 = 0, option3 = 0, option4 = 0, option5 = 0;
// 	var str = "Simple Majority Vote completed\n";
// 	for (i in activeList) {
// 	str += activeList[i][0];
// 	if (activeList[i][5] == 1) {
// 		option1++;
// 		str += "voted Yes\n";
// 	}
// 	else if (activeList[i][5] == 2) {
// 		option2++;
// 		str += "voted No\n";
// 	}
// 	else if (activeList[i][5] == 3) {
// 		option3++;
// 		str += "voted Yes with Rights\n";
// 	}
// 	else if (activeList[i][5] == 4) {
// 		option4++;
// 		str += "voted No with Rights\n";
// 	}
// 	else {
// 		option5++;
// 		str += "Abstained\n";
// 	}
// 	}
// 	str += "Total Votes: " + (parseInt(option1) + parseInt(option2) + parseInt(option3) + parseInt(option4) + parseInt(option5)).toString() + ", Yes: " + option1 + ", No: " + option2 + ", Yes with Rights: " + option3 + ", No with Rights: " + option4 + ", Abstained: " + option5;
// 	logEvents("ResolutionVote", str);
// }

// Save log to server
// function SaveLog() {
// 	var logSavedID = 0, logDone=0;

// 	// retrieve logSavedID from local DB
// 	var objStore = db.transaction("Vars", "readonly").objectStore("Vars");
// 	var req = objStore.get("logSavedID");
// 	req.onsuccess = function() {
// 		logSavedID = req.result;
// 	}

// 	var store = db.transaction("Log").objectStore("Log");
// 	var myData = "mode=app&string=";
// 	store.openCursor().onsuccess = function(event) {
// 		var cursor = event.target.result;
// 		if (cursor) {
// 			if (cursor.value.id > logSavedID) { // Only add the logs which have not already been saved
// 				myData += cursor.value.date + " | " + cursor.value.category + " | " + cursor.value.string + "\n";
// 			}
// 			logDone = cursor.value.id;	// id upto which logs which have been added
// 			cursor.continue();
// 		}
// 		else { 
// 			// Save to file
// 			request = $.ajax({
// 				url: "log.php",
// 				type: "post",
// 				data: myData
// 			});

// 			// Callback handler that will be called on success
// 			request.done(function (response, textStatus, jqXHR){
// 				// Log a message to the console
// 				alert("Hooray, it worked!");
// 				logSavedID = logDone;	// Logs have been saved upto logDone
// 				// Save the logID to the local DB
// 				var objStore = db.transaction("Vars", "readwrite").objectStore("Vars");
// 				objStore.put(logSavedID, "logSavedID");
// 			});

// 			// Callback handler that will be called on failure
// 			request.fail(function (jqXHR, textStatus, errorThrown){
// 				// Log the error to the console
// 				alert("The following error occurred: ");
// 			});

// 			// Callback handler that will be called regardless if the request failed or succeeded
// 			// request.always(function () {
// 			//	 // Reenable the inputs
// 			//	 alert("Complete");
// 			// });
// 	} 
// 	};
// }

/*--------------------------------------------------
				Load Flags from server
--------------------------------------------------*/
function LoadFlag(flagName){
	// Open a transaction to the database
	var tx = db.transaction("Flags", "readonly");
	// If the flag already exists in DB, don't load it
	tx.objectStore("Flags").get(flagName).onsuccess = function (event){
		var imgFile = event.target.result;
		if (imgFile instanceof Blob) {
			return;
		}
		else {	// Load the flag into DB
			// Create XHR
			var xhr = new XMLHttpRequest(), blob;

			var path = "./flags/" + flagName + ".png";
			xhr.open("GET", path, true);
			// Set the responseType to blob
			xhr.responseType = "blob";

			xhr.addEventListener("load", function () {
				if (xhr.status === 200) {
					//console.log("Image retrieved");
				
					// File as response
					blob = xhr.response;
					//console.log("Blob:" + blob);

					//console.log("Putting flag in IndexedDB");

					// Open a transaction to the database
					var tx = db.transaction("Flags", "readwrite");

					// Put the blob into the dabase
					var put = tx.objectStore("Flags").put(blob, flagName);
				}
			}, false);
			// Send XHR
			xhr.send();
		}
	}
}


/*--------------------------------------------------
					Showing Flags
--------------------------------------------------*/
// Unmoderated caucus
$(document).ready(function(){
	$('#autocomplete-unmod-start').blur(function(){
	var i=0;
	// we need to keep trying, since autocomplete plugin takes some time to enter the value in the textfield and speed varies on the device
	var retry = setInterval(function(){
		if (i==12) clearInterval(retry);	// Stop retrying after 12 times
		var portfolio = $('#autocomplete-unmod-start').val();

		i++;

		// Retrieve the stored file
		var tx = db.transaction("Flags", "readwrite");
		tx.objectStore("Flags").get(portfolio).onsuccess = function (event) {
		var imgFile = event.target.result;
		//console.log("Got flag!" + imgFile);

		if (imgFile instanceof Blob) {	// Continues only if the result is a blob (only if the value is a proper country)
			clearInterval(retry); // Don't try again since image has been found
			// Get window.URL object
			var URL = window.URL;

			// Create and revoke ObjectURL
			var imgURL = URL.createObjectURL(imgFile);

			// Set img src to ObjectURL
			var link = "url(" + imgURL + ")";
			$('#flag-unmod-start').css('background-image', link);

			// Revoking ObjectURL
			setTimeout(function(){	
			window.URL.revokeObjectURL(imgURL);
			}, 1000); // Wait for the image to be loaded
		}
		else {
			// Set KMUN logo as flag if no country matches
			$('#flag-unmod-start').css('background-image', "url('logoSmall.png')");
		}
		// Store field
		// var store = db.transaction("StoreFields", "readwrite").objectStore("StoreFields");
		// store.put(document.getElementById("autocomplete-unmod-start").value, "UnmodStart");
		};
	}, 25);
	});
});

// Moderated caucus
$(document).ready(function(){
	$('#autocomplete-mod-start').blur(function(){
	var i=0;
	// we need to keep trying, since autocomplete plugin takes some time to enter the value in the textfield and speed varies on the device
	var retry = setInterval(function(){
		if (i==12) clearInterval(retry);	// Stop retrying after 12 times
		var portfolio = $('#autocomplete-mod-start').val();

		i++;

		// Retrieve the stored file
		var tx = db.transaction("Flags", "readwrite");
		tx.objectStore("Flags").get(portfolio).onsuccess = function (event) {
		var imgFile = event.target.result;
		//console.log("Got flag!" + imgFile);

		if (imgFile instanceof Blob) {	// Continues only if the result is a blob (only if the value is a proper country)
			clearInterval(retry); // Don't try again since image has been found
			// Get window.URL object
			var URL = window.URL;

			// Create and revoke ObjectURL
			var imgURL = URL.createObjectURL(imgFile);

			// Set img src to ObjectURL
			var link = "url(" + imgURL + ")";
			$('#flag-mod-start').css('background-image', link);

			// Revoking ObjectURL
			setTimeout(function(){	
			window.URL.revokeObjectURL(imgURL);
			}, 1000); // Wait for the image to be loaded
		}
		else {
			// Set KMUN logo as flag if no country matches
			$('#flag-mod-start').css('background-image', "url('logoSmall.png')");
		}
		// Store field
		// var store = db.transaction("StoreFields", "readwrite").objectStore("StoreFields");
		// store.put(document.getElementById("autocomplete-mod-start").value, "ModStart");
		};
	}, 25);
	});
});
$(document).ready(function(){
	$('#autocomplete-mod-speaker').blur(function(){
	var i=0;
	// we need to keep trying, since autocomplete plugin takes some time to enter the value in the textfield and speed varies on the device
	var retry = setInterval(function(){
		if (i==12) clearInterval(retry);	// Stop retrying after 12 times
		var portfolio = $('#autocomplete-mod-speaker').val();

		i++;

		// Retrieve the stored file
		var tx = db.transaction("Flags", "readwrite");
		tx.objectStore("Flags").get(portfolio).onsuccess = function (event) {
		var imgFile = event.target.result;
		//console.log("Got flag!" + imgFile);

		if (imgFile instanceof Blob) {	// Continues only if the result is a blob (only if the value is a proper country)
			clearInterval(retry); // Don't try again since image has been found
			// Get window.URL object
			var URL = window.URL;

			// Create and revoke ObjectURL
			var imgURL = URL.createObjectURL(imgFile);

			// Set img src to ObjectURL
			var link = "url(" + imgURL + ")";
			$('#flag-mod-speaker').css('background-image', link);

			// Revoking ObjectURL
			setTimeout(function(){	
			window.URL.revokeObjectURL(imgURL);
			}, 1000); // Wait for the image to be loaded
		}
		else {
			// Set KMUN logo as flag if no country matches
			$('#flag-mod-speaker').css('background-image', "url('logoSmall.png')");
		}
		// Store field
		// var store = db.transaction("StoreFields", "readwrite").objectStore("StoreFields");
		// store.put(document.getElementById("autocomplete-mod-speaker").value, "ModSpeaker");
		};
	}, 25);
	});
});


/*--------------------------------------------------
				Connectivity Status
--------------------------------------------------*/
var connectivityErrors = 0;	// Ensures that just a single error on a good connection does not show 'No Internet'; Requires two consecutive errors
$(document).ready(function(){
	setInterval(function(){
		var myData="0";
		request = $.ajax({
			url: "connectivity.php",
			type: "post",
			data: myData
		});
		// Internet connected, server accessible
		request.done(function (response, textStatus, jqXHR){
			connectivityErrors = 0;	// Reset counter
			if (response == "1"){	// Everything OK
				$("#status-icon").css("color", "#006600");	// Green
				$("#status-text").html(" OK");
			}
			else if (response == "0"){	// SQL Error
				$("#status-icon").css("color", "#FF0000");	// Red
				$("#status-text").html(" SQL Error");
			}
			else {	// PHP Error
				$("#status-icon").css("color", "#FF0000");	// 	Red
				$("#status-text").html(" PHP Error");
			}
		});

		// Not connected to internet or server down
		request.fail(function (jqXHR, textStatus, errorThrown){
			if (connectivityErrors > 1){
				$("#status-icon").css("color", "#FFCC00");	// Yellow
				$("#status-text").html(" No Internet");
			}
			connectivityErrors++;	// Increment counter
		});
	}, 7000);	// Check every 7 seconds
});

// $(document).ready(function(){
// 	myData = 0;
// 	request = $.ajax({
// 		url: "portfolio.php",
// 		type: "post",
// 		data: myData
// 	});

// 	request.done(function (response, textStatus, jqXHR){
// 		eval(response);
// 		// Load flags
// 		for (i in masterList) {
// 			LoadFlag(masterList[i]);
// 		}
// 		autocompleteSources();
// 		for (i in masterList) {
// 			$('#list-rollCall').append('<div class="my-ListItem">' +
// 																	'<a class="my-ListItem-Text my-ListItem-Text-selected-1">' + masterList[i] + '</a>' +
// 																	'<a class="my-ListItem-Button3-Text waves-effect waves-light ">Present & Voting</a>' +
// 																	'<a class="my-ListItem-Button2-Text waves-effect waves-light">Present</a>' +
// 																	'<a class="my-ListItem-Button1-Text waves-effect waves-light my-ListItem-Button1-selected">Absent</a>' +
// 																	'</div>');
// 		}
		
// 	});


// 	// Not connected to internet or server unavailable
// 	request.fail(function (jqXHR, textStatus, errorThrown){
// 		console.log("Could not load portfolios.");
// 	});

// })


// Image blob testing (original & edited code which works; copied from somewhere)

// $(document).ready(function() {
// 	setTimeout(function(){
// 		// Create XHR
// 		var xhr = new XMLHttpRequest(),
// 			blob;

// 		xhr.open("GET", "India.png", true);
// 		// Set the responseType to blob
// 		xhr.responseType = "blob";

// 		xhr.addEventListener("load", function () {
// 			if (xhr.status === 200) {
// 				console.log("Image retrieved");
				
// 				// File as response
// 				blob = xhr.response;
// 				console.log("Blob:" + blob);

// 				console.log("Putting flag in IndexedDB");

// 					// Open a transaction to the database
// 					var tx = db.transaction("Flags", "readwrite");

// 					// Put the blob into the dabase
// 					var put = tx.objectStore("Flags").put(blob, "India");

// 					// Retrieve the file that was just stored
// 					tx.objectStore("Flags").get("India").onsuccess = function (event) {
// 						var imgFile = event.target.result;
// 						console.log("Got flag!" + imgFile);

// 						// Get window.URL object
// 						var URL = window.URL || window.webkitURL;

// 						// Create and revoke ObjectURL
// 						 var imgURL = URL.createObjectURL(imgFile);

// 						// Set img src to ObjectURL
// 						var imgFlag = document.getElementById("headerImage");
// 						var link = "url(" + imgURL + ")";
// 						$('#flag').css('background-image', link);

// 						// Revoking ObjectURL
// 						imgFlag.onload = function() {
//					 window.URL.revokeObjectURL(this.src);
//				 }
// 					};
// 			}
// 		}, false);
// 		// Send XHR
// 		xhr.send();
// 	}, 250);
// });