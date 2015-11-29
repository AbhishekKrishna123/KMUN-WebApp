/** Office UI Fabric Code */

// Nav Bar Plugin
(function ($) {
  $.fn.NavBar = function () {

    /** Go through each nav bar we've been given. */
    return this.each(function () {

      var $navBar = $(this);

      // Open the nav bar on mobile.
      $navBar.on('click', '.js-openMenu', function (event) {
        event.stopPropagation();
        $navBar.toggleClass('is-open');
      });

      // Close the nav bar on mobile.
      $navBar.click(function () {
        if ($navBar.hasClass('is-open')) {
          $navBar.removeClass('is-open');
        }
      });

      // Set selected states and open/close menus.
      $navBar.on('click', '.ms-NavBar-item:not(.is-disabled)', function (event) {
        event.stopPropagation();

        // Prevent default actions from firing if links are not found.
        if ($(this).children('.ms-NavBar-link').length === 0) {
          event.preventDefault();
        }

        // Deselect all of the items.
        $(this).siblings('.ms-NavBar-item').removeClass('is-selected');

        // Close and blur the search box if it doesn't have text.
        if ($navBar.find('.ms-NavBar-item.ms-NavBar-item--search .ms-TextField-field').val().length === 0) {
          $('.ms-NavBar-item.ms-NavBar-item--search').removeClass('is-open').find('.ms-TextField-field').blur();
        }

        // Does the selected item have a menu?
        if ($(this).hasClass('ms-NavBar-item--hasMenu')) {

          // Toggle 'is-open' to open or close it.
          $(this).children('.ms-ContextualMenu:first').toggleClass('is-open');

          // Toggle 'is-selected' to indicate whether it is active.
          $(this).toggleClass('is-selected');
        } else {
          // Doesn't have a menu, so just select the item.
          $(this).addClass('is-selected');

          // Close the submenu and any open contextual menus.
          $navBar.removeClass('is-open').find('.ms-ContextualMenu').removeClass('is-open');
        }

        // Is this the search box? Open it up and focus on the search field.
        if ($(this).hasClass('ms-NavBar-item--search')) {
          $(this).addClass('is-open');
          $(this).find('.ms-TextField-field').focus();

          // Close any open menus.
          $navBar.find('.ms-ContextualMenu:first').removeClass('is-open');
        }
      });

      // Prevent contextual menus from being hidden when clicking on them.
      $navBar.on('click', '.ms-NavBar-item .ms-ContextualMenu', function (event) {
        event.stopPropagation();

        // Collapse the mobile "panel" for nav items.
        $(this).removeClass('is-open');
        $navBar.removeClass('is-open').find('.ms-NavBar-item--hasMenu').removeClass('is-selected');
      });
    });
  };
})(jQuery);
if ($.fn.NavBar) {
  $('.ms-NavBar').NavBar();
}

// Textfield
(function ($) {
  $.fn.TextField = function () {

    /** Iterate through each text field provided. */
    return this.each(function () {

      /** Does it have a placeholder? */
      if ($(this).hasClass("ms-TextField--placeholder")) {

        /** Hide the label on click. */
        $(this).on('click', function () {
          $(this).find('.ms-Label').hide();
        });

        /** Show the label again when leaving the field. */
        $(this).find('.ms-TextField-field').on('blur', function () {

          /** Only do this if no text was entered. */
          if ($(this).val().length === 0) {
            $(this).siblings('.ms-Label').show();
          }
        });
      };

      /** Underlined - adding/removing a focus class */
      if ($(this).hasClass('ms-TextField--underlined')) {

        /** Add is-active class - changes border color to theme primary */
        $(this).find('.ms-TextField-field').on('focus', function () {
          $(this).parent('.ms-TextField--underlined').addClass('is-active');
        });

        /** Remove is-active on blur of textfield */
        $(this).find('.ms-TextField-field').on('blur', function () {
          $(this).parent('.ms-TextField--underlined').removeClass('is-active');
        });
      };

    });
  };
})(jQuery);
if ($.fn.TextField) {
  $('.ms-TextField').TextField();
}
/** End of Office UI Fabric Code */ 

/* My Functions */

/* For animations */
function animateIn(panel, animationClass, delay) {  // element to animate, the animation class, delay after which class should be removed
  panel.removeClass("hidden");
  panel.addClass(animationClass);
  setTimeout(function () {
    panel.removeClass(animationClass)
  }, delay);
}

function animateOut(panel, animationClass, delay) { // element to animate, the animation class, delay after which class should be removed
  panel.addClass(animationClass);
  setTimeout(function () {
    panel.removeClass(animationClass);
    panel.addClass("hidden");
  }, delay);
}

/* For unmoderated caucus */
var unmodMins, unmodSecs, unmodControl;
function UnmodTimer() {
  if (document.getElementById("unmod-caucus-button-label").innerHTML == "Stop Unmoderated Caucus") {
    unmodEnd();
		return;
  }

  unmodMins = parseInt(document.getElementById('unmod-minutes').value);
  unmodSecs = parseInt(document.getElementById('unmod-seconds').value);
  if ((unmodMins == 0 && unmodSecs == 0) || (unmodMins < 0 || unmodSecs < 0)) { // Reset to zero
    unmodSecs = unmodMins = 0;
    document.getElementById("unmod-minutes").value = unmodMins;
    document.getElementById("unmod-seconds").value = unmodSecs;
    return;
  }
  unmodControl = setInterval(UnmodCountdown, 1000); // Start countdown

  // disable text fields
  document.getElementById("unmod-minutes").disabled = true;
  document.getElementById("unmod-seconds").disabled = true;

  animateIn(jQuery('.unmod-control-buttons'), 'ms-u-slideLeftIn40', 250);

  document.getElementById("unmod-caucus-button-label").innerHTML = "Stop Unmoderated Caucus";

  // log start of unmoderated caucus
  var str = "Unmoderated caucus started by " +  document.getElementById("autocomplete-unmod-start").value + " for " + unmodMins.toString() + " mins, " + unmodSecs.toString() + " secs on the topic " + document.getElementById("unmod-topic-field").value;
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

  animateOut(jQuery('.unmod-control-buttons'), 'ms-u-slideRightOut40', 250);

  document.getElementById("unmod-caucus-button-label").innerHTML = "Start Unmoderated Caucus";
  document.getElementById("unmod-caucus-pause-button-label").innerHTML = "Pause";

  // clear fields
  document.getElementById("autocomplete-unmod-start").value = "";
  document.getElementById("unmod-topic-field").value = "";

  logEvents("unmod", "End of unmoderated caucus");  // log the end of unmod caucus
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


/* For moderated caucus */
var modMins=0, modSecs=0, modControl, modSpeakerMins=0, modSpeakerSecs=0, modSpeakerSetMins=0, modSpeakerSetSecs=0, modSpeakerControl;
function ModTimer() {
  if (document.getElementById("mod-caucus-button-label").innerHTML == "Stop Moderated Caucus") {
    modEnd();
    return;
  }

  modMins = parseInt(document.getElementById('mod-minutes').value);
  modSecs = parseInt(document.getElementById('mod-seconds').value);
  if ((modSecs == 0 && modMins == 0) || (modSecs < 0 || modMins < 0)) { // Reset to zero
    modSecs = modMins = 0;
    document.getElementById("mod-minutes").value = modMins;
    document.getElementById("mod-seconds").value = modSecs;
    return;
  }
  modControl = setInterval(ModCountdown, 1000); // Start countdown

  // disable text fields
  document.getElementById("mod-minutes").disabled = true;
  document.getElementById("mod-seconds").disabled = true;

  animateIn(jQuery('.mod-control-buttons'), 'ms-u-slideLeftIn40', 250);

  document.getElementById("mod-caucus-button-label").innerHTML = "Stop Moderated Caucus";

  // log the start of mod caucus
  var str = "Moderated caucus started by " +  document.getElementById("autocomplete-mod-start").value + " for " + modMins.toString() + " mins, " + modSecs.toString() + " secs on the topic " + document.getElementById("mod-topic-field").value;
  logEvents("mod", str);

  modSpeakerReset();  // for speaker time countdown
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

  animateOut(jQuery('.mod-control-buttons'), 'ms-u-slideRightOut40', 250);

  document.getElementById("mod-caucus-button-label").innerHTML = "Start Moderated Caucus";
  document.getElementById("mod-caucus-pause-button-label").innerHTML = "Pause";

  clearInterval(modSpeakerControl);
  document.getElementById("mod-speaker-minutes").value = 0;
  document.getElementById("mod-speaker-seconds").value = 0;

  document.getElementById("autocomplete-mod-speaker").value = "";
  document.getElementById("autocomplete-mod-start").value = "";
  document.getElementById("mod-topic-field").value = "";

  logEvents("mod", "End of moderated caucus");  // log the end of mod caucus
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
  modSpeakerReset();  // Do the normal reset
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


// Dialogs in and out functions
function aboutIn() {
  animateIn(jQuery('#AboutDialog'), 'ms-u-scaleUpIn100', 500);
}
function aboutOut() {
  animateOut(jQuery('#AboutDialog'), 'ms-u-scaleDownOut98', 500);
}
function helpIn() {
  animateIn(jQuery('#HelpDialog'), 'ms-u-scaleUpIn100', 500);
}
function helpOut() {
  animateOut(jQuery('#HelpDialog'), 'ms-u-scaleDownOut98', 500);
}
function VotingIn() {
  if (document.getElementById("voting-choice-1").checked == false && document.getElementById("voting-choice-2").checked == false && document.getElementById("voting-choice-3").checked == false) {
    return;
  }
	if (!RollCallDone && (document.getElementById("voting-choice-1").checked == true || document.getElementById("voting-choice-2").checked == true)) {
		document.getElementById("alertText").innerText = " Roll Call Vote not done yet!";
		alertIn();
		return;
	}
  animateOut(jQuery('#voting-radio'), 'ms-u-slideRightOut40', 200);

  setTimeout(function () {
    if (document.getElementById("voting-choice-1").checked == true) {
     var  panel = jQuery('#section-SimpleMajority');
			initSimpleMajorityVote();
      logEvents("SimpleMajorityVote", "Simple Majority Vote started");
    }
    else if (document.getElementById("voting-choice-2").checked == true) {
      panel = jQuery('#section-ResolutionVote');
			initResolutionVote();
      logEvents("ResolutionVote", "Resolution Vote started");
    }
    else if (document.getElementById("voting-choice-3").checked == true) {
      panel = jQuery('#section-RollCallVote');
			initRollCallVote();
      logEvents("RollCallVote", "Roll Call Vote started");
    }
    animateIn(panel, 'ms-u-slideUpIn20', 200);
  }, 250);
}

function SimpleMajorityVoteOut() {
  animateOut(jQuery('#section-SimpleMajority'), 'ms-u-slideDownOut20', 200);
  setTimeout(function () {
    animateIn(jQuery('#voting-radio'), 'ms-u-slideLeftIn40', 200);
  }, 250);
}

function ResolutionVoteOut() {
  animateOut(jQuery('#section-ResolutionVote'), 'ms-u-slideDownOut20', 200);
  setTimeout(function () {
    animateIn(jQuery('#voting-radio'), 'ms-u-slideLeftIn40', 200);
  }, 250);
}

function RollCallVoteOut() {
  animateOut(jQuery('#section-RollCallVote'), 'ms-u-slideDownOut20', 200);
  setTimeout(function () {
    animateIn(jQuery('#voting-radio'), 'ms-u-slideLeftIn40', 200);
  }, 250);
}

function VotingResultsIn() {
  animateIn(jQuery('#VotingResultsDialog'), 'ms-u-scaleUpIn100', 500);
}
function VotingResultsOut() {
  animateOut(jQuery('#VotingResultsDialog'), 'ms-u-scaleDownOut98', 200);
	if (document.getElementById("voting-choice-1").checked == true) {
      setTimeout(SimpleMajorityVoteOut, 300);
    }
    else if (document.getElementById("voting-choice-2").checked == true) {
      setTimeout(ResolutionVoteOut, 300);
    }
    else if (document.getElementById("voting-choice-3").checked == true) {
      setTimeout(RollCallVoteOut, 300);
		}
}

function alertIn() {
  animateIn(jQuery('#AlertDialog'), 'ms-u-scaleUpIn100', 500);
}
function alertOut() {
  animateOut(jQuery('#AlertDialog'), 'ms-u-scaleDownOut98', 500);
}

var masterList = [];
/*
 * masterList contains list of delegates obtained from the database
 * Is populated by JS code generated by PHP
 */

/* Voting Functions */
/*
 * Explanation of activeList is as folows: 
 * 0 for delegate name
 * 1 for Roll Call temporary Values (0-absent, 1-present&voting, 2-present)
 * 2 for Roll Call final values (0-absent, 1-present&voting, 2-present)
 * 3 for Serial Numbers based on present and absent
 * 4 for Simple Majority values (0-blank, 1-yes, 2-no, 3-abstain)
 * 5 for Resolution Vote values (0-blank, 1-yes, 2-no, 3-yes with rights, 4-no with rights, 5-abstain)
*/

var activeList;
var current;
var totalDelegates = 0;
var RollCallActive = false;
var RollCallDone = false;

// To initialize activeList on page load
$(document).ready(function(){
	activeList = new Array();
	for (var i = 0; i<totalDelegates; i++){
		activeList.push([]);
		activeList[i][0] = masterList[i];
		activeList[i][1] = activeList[i][2] = 0;
	}
});

/** Roll Call Vote */
function initRollCallVote() {
	current = 0;
	RollCallActive = true;

	for (var i = 0; i < totalDelegates; i++) {
		activeList[i][1] = 0;	// Reset temporary results
  }
	
	document.getElementById("RollCallVote-displayName").innerHTML = activeList[0][0];
	document.getElementById("RollCallVote-current").innerHTML = "1";
	document.getElementById("RollCallVote-max").innerHTML = totalDelegates.toString();
}
function doRollCallVote(clickedButton) {
	if (RollCallActive == false) return; // Buttons don't do anything if Roll Call is not being done
	if (clickedButton.id == "RollCallVote-1") {
		activeList[current][1] = 1;	// Present
	}
	else if (clickedButton.id == "RollCallVote-2") {
		activeList[current][1] = 2;	// Present&Voting
	}
	if (current == totalDelegates - 1) {
		RollCallActive = false;	// Stop Roll Call
		var option1 = 0, option2 = 0, option3 = 0;	// Calculate results
		for (var i = 0; i < totalDelegates; i++) {
			activeList[i][2] = activeList[i][1];	// Copy into final result
			if (activeList[i][2] == 1) option1++;
			else if (activeList[i][2] == 2) option2++;
			else option3++;
		}
		// Create serial numbers based on present and absent delegates
		var serialNumber = 0;
		for (var i=0; i<totalDelegates; i++) {
			if (activeList[i][2] != 0) activeList[i][3] = ++serialNumber;
		}
		presentDelegates = serialNumber;
		// Format the results
		document.getElementById("VotingResultsDialog-header").innerHTML = "Voting Summary";
		document.getElementById("VotingResultsDialog-subHeader").innerHTML = "Roll Call Vote";
		document.getElementById("VotingResultsDialog-content").innerHTML = "Present And Voting: " + option1 + "<br>Present: " + option2 + "<br>	Absent: " + option3;
		if (option1 + option2 >= 0.5 * (option1 + option2 + option3)) {
			document.getElementById("VotingResultsDialog-content").innerHTML += "<br><br>Quorum has been met.";
		}
		else {
			document.getElementById("VotingResultsDialog-content").innerHTML += "<br><br>Quorum has not been met.";
		}
		VotingResultsIn();	// Show the results
		RollCallDone = true;

    logRollCallVote();  // log results of voting
	}
	else {
		current++;
		document.getElementById("RollCallVote-displayName").innerHTML = activeList[current][0];
		document.getElementById("RollCallVote-current").innerHTML = (current + 1).toString();
	}
}

/* Simple Majority Vote */

var SimpleMajorityActive = 0;
var presentDelegates = 0;
var SimpleMajorityDone = 0;

function initSimpleMajorityVote() {
	presentDelegates = 0;
	SimpleMajorityDone = 0;
	var firstPerson;
	for (var i=0; i<totalDelegates; i++){
		activeList[i][4] = 0;	// Simple Majority Results
		if (activeList[i][2] != 0) {	// Delegate is not absent
			if (presentDelegates == 0) {
				firstPerson = activeList[i][0];
				current = i;
			}
			presentDelegates++;
		}
	}
	document.getElementById("SimpleMajorityVote-displayName").innerHTML = firstPerson;
	document.getElementById("SimpleMajorityVote-current").innerHTML = activeList[current][3];
	document.getElementById("SimpleMajorityVote-max").innerHTML = presentDelegates.toString();
	SimpleMajorityActive = 1;
	// Abstain button
	if (activeList[current][2] == 1) {
		document.getElementById('SimpleMajorityVote-3').classList.add("is-disabled");	// Disbale abstain button if Present&Voting
	}
	else if (activeList[current][2] == 2) {
		document.getElementById('SimpleMajorityVote-3').classList.remove("is-disabled"); // Enable abstain button if Present
	}
	document.getElementById('SimpleMajorityVote-4').classList.remove("hidden"); // Show pass button in case it was hidden previously
}
function doSimpleMajorityVote(clickedButton) {
	if (SimpleMajorityActive == 0) return;
	if (clickedButton.id == "SimpleMajorityVote-1") {
		activeList[current][4] = 1;
		SimpleMajorityDone++;
	}
	else if (clickedButton.id == "SimpleMajorityVote-2") {
		activeList[current][4] = 2;
		SimpleMajorityDone++;
	}
	else if (clickedButton.id == "SimpleMajorityVote-3") {
		if (document.getElementById('SimpleMajorityVote-3').classList.contains('is-disabled') == true) return;
		activeList[current][4] = 3;
		SimpleMajorityDone++;
	}
	if (SimpleMajorityDone == presentDelegates) {
		SimpleMajorityActive = 0;
		var option1 = 0, option2 = 0;
		for (var i = 0; i < totalDelegates; i++) {
			if (activeList[i][2] != 0){
				if (activeList[i][4] == 1) option1++;
				else if (activeList[i][4] == 2) option2++;
			}
		}
		document.getElementById("VotingResultsDialog-header").innerHTML = "Voting Summary";
		document.getElementById("VotingResultsDialog-subHeader").innerHTML = "Simple Majority Vote";
		document.getElementById("VotingResultsDialog-content").innerHTML = "Yes: " + option1 + "<br>No: " + option2;
		if (option1 > option2) {
			document.getElementById("VotingResultsDialog-content").innerHTML += "<br><br>Vote passes. <span class='ms-Icon ms-Icon--smiley'></span>";
		}
		else {
			document.getElementById("VotingResultsDialog-content").innerHTML += "<br><br>Vote fails. <span class='ms-Icon ms-Icon--frowny'></span>";
		}
		VotingResultsIn();

    logSimpleMajorityVote();  // log results of voting
	}
	else {
		do {
			current++;
			if (current == totalDelegates) {
				document.getElementById('SimpleMajorityVote-4').classList.add("hidden");
				current = 0;
			}
		} while (activeList[current][2] == 0 || activeList[current][4] != 0);
		document.getElementById("SimpleMajorityVote-displayName").innerHTML = activeList[current][0];
		document.getElementById("SimpleMajorityVote-current").innerHTML = activeList[current][3];
		// Abstain button
		if (activeList[current][2] == 1) {
		document.getElementById('SimpleMajorityVote-3').classList.add("is-disabled");	// Disable abstain button if Present&Voting
	}
	else if (activeList[current][2] == 2) {
		document.getElementById('SimpleMajorityVote-3').classList.remove("is-disabled"); // Enable abstain button if Present
	}
	}
}

/* Resolution Vote */
var ResolutionActive = 0;
var ResolutionDone = 0;

function initResolutionVote() {
	presentDelegates = 0;
	ResolutionDone = 0;
	var firstPerson;
	for (var i=0; i<totalDelegates; i++){
		activeList[i][5] = 0;	// Resolution Results
		if (activeList[i][2] != 0) {	// Delegate is not absent
			if (presentDelegates == 0) {
				firstPerson = activeList[i][0];
				current = i;
			}
			presentDelegates++;
		}
	}
	document.getElementById("ResolutionVote-displayName").innerHTML = firstPerson;
	document.getElementById("ResolutionVote-current").innerHTML = activeList[current][3];
	document.getElementById("ResolutionVote-max").innerHTML = presentDelegates.toString();
	ResolutionActive = 1;
	// Abstain button
	if (activeList[current][2] == 1) {
		document.getElementById('ResolutionVote-5').classList.add("is-disabled");	// Disbale abstain button if Present&Voting
	}
	else if (activeList[current][2] == 2) {
		document.getElementById('ResolutionVote-5').classList.remove("is-disabled"); // Enable abstain button if Present
	}
	document.getElementById('ResolutionVote-6').classList.remove("hidden"); // Show pass button in case it was hidden previously
}
function doResolutionVote(clickedButton) {
	if (ResolutionActive == 0) return;
	if (clickedButton.id == "ResolutionVote-1") {
		activeList[current][5] = 1;
		ResolutionDone++;
	}
	else if (clickedButton.id == "ResolutionVote-2") {
		activeList[current][5] = 2;
		ResolutionDone++;
	}
	else if (clickedButton.id == "ResolutionVote-3") {
		activeList[current][5] = 3;
		ResolutionDone++;
	}
	else if (clickedButton.id == "ResolutionVote-4") {
		activeList[current][5] = 4;
		ResolutionDone++;
	}
	else if (clickedButton.id == "ResolutionVote-5") {
		if (document.getElementById('ResolutionVote-5').classList.contains('is-disabled') == true) return;
		activeList[current][5] = 5;
		ResolutionDone++;
	}
	if (ResolutionDone == presentDelegates) {
		ResolutionActive = 0;
		var option1 = 0, option2 = 0;
		for (var i = 0; i < totalDelegates; i++) {
			if (activeList[i][2] != 0){
				if (activeList[i][5] == 1 || activeList[i][5] == 3) option1++;
				else if (activeList[i][5] == 2 || activeList[i][5] == 4) option2++;
			}
		}
		document.getElementById("VotingResultsDialog-header").innerHTML = "Voting Summary";
		document.getElementById("VotingResultsDialog-subHeader").innerHTML = "Resolution Vote";
		document.getElementById("VotingResultsDialog-content").innerHTML = "Yes: " + option1 + "<br>No: " + option2;
		if (option1 > option2) {
			document.getElementById("VotingResultsDialog-content").innerHTML += "<br><br>Resolution passes. <span class='ms-Icon ms-Icon--smiley'></span>";
		}
		else {
			document.getElementById("VotingResultsDialog-content").innerHTML += "<br><br>Resolution fails. <span class='ms-Icon ms-Icon--frowny'></span>";
		}
		VotingResultsIn();

    logResolutionVote();  // log results of vote
	}
	else {
		do {
			current++;
			if (current == totalDelegates) {
				document.getElementById('ResolutionVote-6').classList.add("hidden");
				current = 0;
			}
		} while (activeList[current][2] == 0 || activeList[current][5] != 0);
		document.getElementById("ResolutionVote-displayName").innerHTML = activeList[current][0];
		document.getElementById("ResolutionVote-current").innerHTML = activeList[current][3];
		// Abstain button
		if (activeList[current][2] == 1) {
		document.getElementById('ResolutionVote-5').classList.add("is-disabled");	// Disable abstain button if Present&Voting
	}
	else if (activeList[current][2] == 2) {
		document.getElementById('ResolutionVote-5').classList.remove("is-disabled"); // Enable abstain button if Present
	}
	}
}


//Pivot Control
$(document).ready(function(){
				$(".ms-ListItem").click(function(){
					$(this).toggleClass("is-selected");
				});
				$(".ms-Pivot-link").click(function(){
					$(".ms-Pivot-link").removeClass("is-selected");
					$("#tab-voting").addClass("hidden");
					$("#tab-gsl").addClass("hidden");
					$("#tab-mod").addClass("hidden");
					$("#tab-unmod").addClass("hidden");
					$(this).toggleClass("is-selected");
				});
        
				$("#button-voting").click(function(){
          animateIn(jQuery('#tab-voting'), 'ms-u-scaleUpIn100', 250);
				});
				$("#button-gsl").click(function(){
          animateIn(jQuery('#tab-gsl'), 'ms-u-scaleUpIn100', 250);
				});
				$("#button-mod").click(function(){
          animateIn(jQuery('#tab-mod'), 'ms-u-scaleUpIn100', 250);
				});
				$("#button-unmod").click(function(){
          animateIn(jQuery('#tab-unmod'), 'ms-u-scaleUpIn100', 250);
				});
});

// Animate page elements when loaded
// $(document).ready(function(){
// 	$('.loadingBar').animate({
// 		width: '80%'
// 	}, 3000);
// 	$('.loadingBar').animate({
// 		width: '100%'
// 	}, 200);
// 	$('.loadingBar').animate({
// 		opacity: 0
// 	}, 200);
// 	$('.ms-NavBar').hide(0).delay(500).slideDown(1000);
// 	$('#agenda').hide(0).delay(1000).fadeIn(1500);
// 	$('.tabs').hide(0).delay(1800).slideDown(500);
// 	$('hr').hide(0).delay(2000).fadeIn(200);
// });

// $(document).ready(function(){
// 	$('body').css({opacity: 1});
// });

// For autocomplete function
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

document.getElementById("CurrentAgendaField").addEventListener("focusin", agendaFocus);
document.getElementById("CurrentAgendaField").addEventListener("focusout", agendaBlur);

function agendaBlur() {
  // store state
  var store = db.transaction("StoreFields", "readwrite").objectStore("StoreFields");
  store.put({fieldName: "currentAgenda", fieldValue: document.getElementById("CurrentAgendaField").value});

  logEvents("general", "Current agenda has been set to " + document.getElementById("CurrentAgendaField").value);
}

function agendaFocus() {
  var store = db.transaction("StoreFields", "readonly").objectStore("StoreFields");
  var request = store.get("currentAgenda");

  request.onsuccess = function() {
    document.getElementById("CurrentAgendaField").value = request.result.fieldValue;
  }
}


var request = indexedDB.open("test100");

request.onupgradeneeded = function(event) {
  // The database did not previously exist, so create object stores and indexes.
  var store = request.result.createObjectStore("StoreFields", {keyPath: "fieldName"});
  var fields = store.createIndex("fieldValue", "fieldValue");
  var logs = request.result.createObjectStore("Log", {keyPath: "id", autoIncrement: true});

  var sampleItem = { category: "general", date: Date(), string: "Database created" };
  logs.add(sampleItem);
};

request.onsuccess = function() {
  db = request.result;
  logEvents("general", "MUN Moderator started");
};



function logEvents(categoryArgs, stringArgs) {
  var store = db.transaction("Log", "readwrite").objectStore("Log");
  var item = { category: categoryArgs, date: Date(), string: stringArgs};
  store.put(item);
}

function logModSpeaker() {
  var str;
  var speaker = document.getElementById("autocomplete-mod-speaker").value;
  if (speaker == "") {
    str = "New speaker is speaking";
  }
  else {
    str = document.getElementById("autocomplete-mod-speaker").value + " is speaking";
  }
  logEvents("mod", str);
}

function logRollCallVote() {
  var option1 = 0, option2 = 0, option3 = 0;
  var str = "Roll Call Vote completed\n";
  for (i in activeList) {
    str += activeList[i][0] + " is ";
    if (activeList[i][2] == 1) {
      option1++;
      str += "Present & Voting";
    }
    else if (activeList[i][2] == 2) {
      option2++;
      str += "Present";
    }
    else {
      option3++;
      str += "Absent";
    }
  }
  str += "\nTotal Votes: " + (parseInt(option1) + parseInt(option2) + parseInt(option3)).toString() + ", Present & Voting: " + option1 + ", Present: " + option2 + ", Absent: " + option3;
  logEvents("RollCallVote", str);
}

function logSimpleMajorityVote() {
  var option1 = 0, option2 = 0, option3 = 0;
  var str = "Simple Majority Vote completed\n";
  for (i in activeList) {
    str += activeList[i][0];
    if (activeList[i][4] == 1) {
      option1++;
      str += "voted Yes";
    }
    else if (activeList[i][4] == 2) {
      option2++;
      str += "voted No";
    }
    else {
      option3++;
      str += "Abstained";
    }
  }
  str += "\nTotal Votes: " + (parseInt(option1) + parseInt(option2) + parseInt(option3)).toString() + ", Yes: " + option1 + ", No: " + option2 + ", Abstained: " + option3;
  logEvents("SimpleMajorityVote", str);
}

function logResolutionVote() {
  var option1 = 0, option2 = 0, option3 = 0, option4 = 0, option5 = 0;
  var str = "Simple Majority Vote completed\n";
  for (i in activeList) {
    str += activeList[i][0];
    if (activeList[i][5] == 1) {
      option1++;
      str += "voted Yes";
    }
    else if (activeList[i][5] == 2) {
      option2++;
      str += "voted No";
    }
    else if (activeList[i][5] == 3) {
      option3++;
      str += "voted Yes with Rights";
    }
    else if (activeList[i][5] == 4) {
      option4++;
      str += "voted No with Rights";
    }
    else {
      option5++;
      str += "Abstained";
    }
  }
  str += "\nTotal Votes: " + (parseInt(option1) + parseInt(option2) + parseInt(option3) + parseInt(option4) + parseInt(option5)).toString() + ", Yes: " + option1 + ", No: " + option2 + ", Yes with Rights: " + option3 + ", No with Rights: " + option4 + ", Abstained: " + option5;
  logEvents("ResolutionVote", str);
}