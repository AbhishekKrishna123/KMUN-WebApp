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

      // Hide any menus and close the search box when clicking anywhere in the document.
      $(document).on('click', 'html', function (event) {
        $navBar.find('.ms-NavBar-item').removeClass('is-selected').find('.ms-ContextualMenu').removeClass('is-open');

        // Close and blur the search box if it doesn't have text.
        if ($navBar.find('.ms-NavBar-item.ms-NavBar-item--search .ms-TextField-field').val().length === 0) {
          $navBar.find('.ms-NavBar-item.ms-NavBar-item--search').removeClass('is-open').find('.ms-TextField-field').blur();
        }
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

/** My 
 * Functions */

/** For unmod functions */
var unmodMins, unmodSecs, unmodControl;
function UnmodTimer() {
  if (document.getElementById("unmod-caucus-button-label").innerHTML == "Stop Unmoderated Caucus") {
    clearInterval(unmodControl);
    unmodMins = unmodSecs = 0;
    document.getElementById("unmod-minutes").value = unmodMins;
    document.getElementById("unmod-seconds").value = unmodSecs;
    // enable text fields
  	document.getElementById("unmod-minutes").disabled = false;
  	document.getElementById("unmod-seconds").disabled = false;
    var panel = jQuery('.unmod-extend-buttons');
    var cssClass = 'ms-u-slideRightOut40';
    panel.addClass(cssClass);
    setTimeout(function () {
      panel.removeClass(cssClass);
      panel.addClass("hidden");
    }, 250);
    document.getElementById("unmod-caucus-button-label").innerHTML = "Start Unmoderated Caucus";
    document.getElementById("unmod-caucus-pause-button-label").innerHTML = "Pause";
		return;
  }

  unmodMins = parseInt(document.getElementById('unmod-minutes').value);
  unmodSecs = parseInt(document.getElementById('unmod-seconds').value);
  if (unmodSecs <= 0 && unmodMins <= 0) {
    unmodSecs = unmodMins = 0;
    document.getElementById("unmod-minutes").value = unmodMins;
    document.getElementById("unmod-seconds").value = unmodSecs;
    return;
  }
  unmodControl = setInterval(UnmodCountdown, 1000);

  // disable text fields
  document.getElementById("unmod-minutes").disabled = true;
  document.getElementById("unmod-seconds").disabled = true;

  panel = jQuery('.unmod-extend-buttons');
  panel.removeClass("hidden");
  cssClass = 'ms-u-slideLeftIn40';
  panel.addClass(cssClass);
  setTimeout(function () {
    panel.removeClass(cssClass)
  }, 250);

  document.getElementById("unmod-caucus-button-label").innerHTML = "Stop Unmoderated Caucus";
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
    clearInterval(unmodControl);
	
		// enable text fields
  	document.getElementById("unmod-minutes").disabled = false;
  	document.getElementById("unmod-seconds").disabled = false;

    panel = jQuery('.unmod-extend-buttons');
    cssClass = 'ms-u-slideRightOut40';
    panel.addClass(cssClass);
    setTimeout(function () {
      panel.removeClass(cssClass);
      panel.addClass("hidden");
    }, 250);

    document.getElementById("unmod-caucus-button-label").innerHTML = "Start Unmoderated Caucus";
  }
}
function unmodPause() {
	if (document.getElementById("unmod-caucus-pause-button-label").innerHTML == "Pause"){
		clearInterval(unmodControl);
		document.getElementById("unmod-caucus-pause-button-label").innerHTML = "Resume";
	}
	else {
		unmodControl = setInterval(UnmodCountdown, 1000);
		document.getElementById("unmod-caucus-pause-button-label").innerHTML = "Pause";
	}
}
function unmodExtendMin() {
  unmodMins += 1;
}
function unmodExtendSec() {
  unmodSecs += 10;
}

// Dialogs in and out functions
function aboutIn() {
  var panel = jQuery('#AboutDialog');
  panel.removeClass("hidden");
  cssClass = 'ms-u-scaleUpIn100';
  panel.addClass(cssClass);
  setTimeout(function () {
    panel.removeClass(cssClass);
  }, 500);
}
function aboutOut() {
  var panel = jQuery('#AboutDialog');
  var cssClass = 'ms-u-scaleDownOut98';
  panel.addClass(cssClass);
  setTimeout(function () {
    panel.removeClass(cssClass);
    panel.addClass("hidden");
  }, 500);
}
function helpIn() {
  var panel = jQuery('#HelpDialog');
  panel.removeClass("hidden");
  var cssClass = 'ms-u-scaleUpIn100';
  panel.addClass(cssClass);
  setTimeout(function () {
    panel.removeClass(cssClass)
  }, 500);
}
function helpOut() {
  var panel = jQuery('#HelpDialog');
  var cssClass = 'ms-u-scaleDownOut98';
  panel.addClass(cssClass);
  setTimeout(function () {
    panel.removeClass(cssClass);
    panel.addClass("hidden");
  }, 500);
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
  var panel1 = jQuery('#voting-radio');
  var cssClass1 = 'ms-u-slideRightOut40';
  panel1.addClass(cssClass1);
  setTimeout(function () {
    panel1.removeClass(cssClass1);
    panel1.addClass("hidden");
  }, 200);

  setTimeout(function () {
    if (document.getElementById("voting-choice-1").checked == true) {
     var  panel2 = jQuery('#section-SimpleMajority');
			initSimpleMajorityVote();
    }
    else if (document.getElementById("voting-choice-2").checked == true) {
      panel2 = jQuery('#section-ResolutionVote');
			initResolutionVote();
    }
    else if (document.getElementById("voting-choice-3").checked == true) {
      panel2 = jQuery('#section-RollCallVote');
			initRollCallVote();
    }
    panel2.removeClass("hidden");
    var cssClass = 'ms-u-slideUpIn20';
    panel2.addClass(cssClass);
    setTimeout(function () {
      panel2.removeClass(cssClass)
    }, 200);
  }, 300);
}

function SimpleMajorityVoteOut() {
  var panel1 = jQuery('#section-SimpleMajority');
  var cssClass1 = 'ms-u-slideDownOut20';
  panel1.addClass(cssClass1);
  setTimeout(function () {
    panel1.removeClass(cssClass1);
    panel1.addClass("hidden");
  }, 200);

  setTimeout(function () {
    var panel2 = jQuery('#voting-radio');
    panel2.removeClass("hidden");
    var cssClass = 'ms-u-slideLeftIn40';
    panel2.addClass(cssClass);
    setTimeout(function () {
      panel2.removeClass(cssClass)
    }, 200);
  }, 250);
}

function ResolutionVoteOut() {
  var panel1 = jQuery('#section-ResolutionVote');
  var cssClass1 = 'ms-u-slideDownOut20';
  panel1.addClass(cssClass1);
  setTimeout(function () {
    panel1.removeClass(cssClass1);
    panel1.addClass("hidden");
  }, 200);

  setTimeout(function () {
    var panel2 = jQuery('#voting-radio');
    panel2.removeClass("hidden");
    var cssClass = 'ms-u-slideLeftIn40';
    panel2.addClass(cssClass);
    setTimeout(function () {
      panel2.removeClass(cssClass)
    }, 200);
  }, 250);
}

function RollCallVoteOut() {
  var panel1 = jQuery('#section-RollCallVote');
  var cssClass1 = 'ms-u-slideDownOut20';
  panel1.addClass(cssClass1);
  setTimeout(function () {
    panel1.removeClass(cssClass1);
    panel1.addClass("hidden");
  }, 200);
  setTimeout(function () {
    var panel2 = jQuery('#voting-radio');
    panel2.removeClass("hidden");
    var cssClass = 'ms-u-slideLeftIn40';
    panel2.addClass(cssClass);
    setTimeout(function () {
      panel2.removeClass(cssClass)
    }, 200);
  }, 250);
}

function VotingResultsIn() {
  var panel = jQuery('#VotingResultsDialog');
  panel.removeClass("hidden");
  var cssClass = 'ms-u-scaleUpIn100';
  panel.addClass(cssClass);
  setTimeout(function () {
    panel.removeClass(cssClass)
  }, 300);
}
function VotingResultsOut() {
  var panel = jQuery('#VotingResultsDialog');
  var cssClass = 'ms-u-scaleDownOut98';
  panel.addClass(cssClass);
  setTimeout(function () {
    panel.removeClass(cssClass);
    panel.addClass("hidden");
  }, 200);
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
  var panel = jQuery('#AlertDialog');
  panel.removeClass("hidden");
  cssClass = 'ms-u-scaleUpIn100';
  panel.addClass(cssClass);
  setTimeout(function () {
    panel.removeClass(cssClass);
  }, 500);
}
function alertOut() {
  var panel = jQuery('#AlertDialog');
  var cssClass = 'ms-u-scaleDownOut98';
  panel.addClass(cssClass);
  setTimeout(function () {
    panel.removeClass(cssClass);
    panel.addClass("hidden");
  }, 500);
}

var masterList = [];
/**
 * masterList contains list of delegates obtained from the database
 * Is populated by JS code generated by PHP
 */

/* Voting Functions */
/**
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
	}
	else {
		current++;
		document.getElementById("RollCallVote-displayName").innerHTML = activeList[current][0];
		document.getElementById("RollCallVote-current").innerHTML = (current + 1).toString();
	}
}

/** Simple Majority Vote */

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

/** Resolution Vote */
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
					$("#tab-voting").removeClass("hidden");
					$("#tab-voting").addClass("ms-u-scaleUpIn100");
					setTimeout(function(){
						$("#tab-voting").removeClass("ms-u-scaleUpIn100");
					}, 200);
				});
				$("#button-gsl").click(function(){
					$("#tab-gsl").removeClass("hidden");
					$("#tab-gsl").addClass("ms-u-scaleUpIn100");
					setTimeout(function(){
						$("#tab-gsl").removeClass("ms-u-scaleUpIn100");
					}, 200);
				})
				$("#button-mod").click(function(){
					$("#tab-mod").removeClass("hidden");
					$("#tab-mod").addClass("ms-u-scaleUpIn100");
					setTimeout(function(){
						$("#tab-mod").removeClass("ms-u-scaleUpIn100");
					}, 200);
				})
				$("#button-unmod").click(function(){
					$("#tab-unmod").removeClass("hidden");
					$("#tab-unmod").addClass("ms-u-scaleUpIn100");
					setTimeout(function(){
						$("#tab-unmod").removeClass("ms-u-scaleUpIn100");
					}, 200);
				})
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

$(document).ready(function(){
	$('body').css({opacity: 1});
});

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
		lookup: masterList
	});
});

jQuery.ui.autocomplete.prototype._resizeMenu = function () {
  var ul = this.menu.element;
  ul.outerWidth(this.element.outerWidth());
}