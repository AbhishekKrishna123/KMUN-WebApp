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

/**
 * Dropdown Plugin
 * 
 * Given .ms-Dropdown containers with generic <select> elements inside, this plugin hides the original
 * dropdown and creates a new "fake" dropdown that can more easily be styled across browsers.
 * 
 * @param  {jQuery Object}  One or more .ms-Dropdown containers, each with a dropdown (.ms-Dropdown-select)
 * @return {jQuery Object}  The same containers (allows for chaining)
 */
(function ($) {
    $.fn.Dropdown = function () {

        /** Go through each dropdown we've been given. */
        return this.each(function () {

            var $dropdownWrapper = $(this),
                $originalDropdown = $dropdownWrapper.children('.ms-Dropdown-select'),
                $originalDropdownOptions = $originalDropdown.children('option'),
                originalDropdownID = this.id,
                newDropdownTitle = '',
                newDropdownItems = '',
                newDropdownSource = '';

            /** Go through the options to fill up newDropdownTitle and newDropdownItems. */
            $originalDropdownOptions.each(function (index, option) {
        
                /** If the option is selected, it should be the new dropdown's title. */
                if (option.selected) {
                    newDropdownTitle = option.text;
                }

                /** Add this option to the list of items. */
                newDropdownItems += '<li class="ms-Dropdown-item' + ( (option.disabled) ? ' is-disabled"' : '"' ) + '>' + option.text + '</li>';
            
            });

            /** Insert the replacement dropdown. */
            newDropdownSource = '<span class="ms-Dropdown-title">' + newDropdownTitle + '</span><ul class="ms-Dropdown-items">' + newDropdownItems + '</ul>';
            $dropdownWrapper.append(newDropdownSource);

            function _openDropdown(evt) {
                if (!$dropdownWrapper.hasClass('is-disabled')) {

                    /** First, let's close any open dropdowns on this page. */
                    $dropdownWrapper.find('.is-open').removeClass('is-open');

                    /** Stop the click event from propagating, which would just close the dropdown immediately. */
                    evt.stopPropagation();

                    /** Before opening, size the items list to match the dropdown. */
                    var dropdownWidth = $(this).parents(".ms-Dropdown").width();
                    $(this).next(".ms-Dropdown-items").css('width', dropdownWidth + 'px');
                
                    /** Go ahead and open that dropdown. */
                    $dropdownWrapper.toggleClass('is-open');
                    $('.ms-Dropdown').each(function(){
                        if ($(this)[0] !== $dropdownWrapper[0]) {
                            $(this).removeClass('is-open');
                        }
                    });

                    /** Temporarily bind an event to the document that will close this dropdown when clicking anywhere. */
                    $(document).bind("click.dropdown", function(event) {
                        $dropdownWrapper.removeClass('is-open');
                        $(document).unbind('click.dropdown');
                    });
                }
            };

            /** Toggle open/closed state of the dropdown when clicking its title. */
            $dropdownWrapper.on('click', '.ms-Dropdown-title', function(event) {
                _openDropdown(event);
            });

            /** Keyboard accessibility */
            $dropdownWrapper.on('keyup', function(event) {
                var keyCode = event.keyCode || event.which;
                // Open dropdown on enter or arrow up or arrow down and focus on first option
                if (!$(this).hasClass('is-open')) {
                    if (keyCode === 13 || keyCode === 38 || keyCode === 40) {
                       _openDropdown(event);
                       if (!$(this).find('.ms-Dropdown-item').hasClass('is-selected')) {
                        $(this).find('.ms-Dropdown-item:first').addClass('is-selected');
                       }
                    }
                }
                else if ($(this).hasClass('is-open')) {
                    // Up arrow focuses previous option
                    if (keyCode === 38) {
                        if ($(this).find('.ms-Dropdown-item.is-selected').prev().siblings().size() > 0) {
                            $(this).find('.ms-Dropdown-item.is-selected').removeClass('is-selected').prev().addClass('is-selected');
                        }
                    }
                    // Down arrow focuses next option
                    if (keyCode === 40) {
                        if ($(this).find('.ms-Dropdown-item.is-selected').next().siblings().size() > 0) {
                            $(this).find('.ms-Dropdown-item.is-selected').removeClass('is-selected').next().addClass('is-selected');
                        }
                    }
                    // Enter to select item
                    if (keyCode === 13) {
                        if (!$dropdownWrapper.hasClass('is-disabled')) {

                            // Item text
                            var selectedItemText = $(this).find('.ms-Dropdown-item.is-selected').text()

                            $(this).find('.ms-Dropdown-title').html(selectedItemText);

                            /** Update the original dropdown. */
                            $originalDropdown.find("option").each(function(key, value) {
                                if (value.text === selectedItemText) {
                                    $(this).prop('selected', true);
                                } else {
                                    $(this).prop('selected', false);
                                }
                            });
                            $originalDropdown.change();

                            $(this).removeClass('is-open');
                        }
                    }                
                }

                // Close dropdown on esc
                if (keyCode === 27) {
                    $(this).removeClass('is-open');
                }
            });

            /** Select an option from the dropdown. */
            $dropdownWrapper.on('click', '.ms-Dropdown-item', function () {
                if (!$dropdownWrapper.hasClass('is-disabled')) {

                    /** Deselect all items and select this one. */
                    $(this).siblings('.ms-Dropdown-item').removeClass('is-selected')
                    $(this).addClass('is-selected');

                    /** Update the replacement dropdown's title. */
                    $(this).parents().siblings('.ms-Dropdown-title').html($(this).text());

                    /** Update the original dropdown. */
                    var selectedItemText = $(this).text();
                    $originalDropdown.find("option").each(function(key, value) {
                        if (value.text === selectedItemText) {
                            $(this).prop('selected', true);
                        } else {
                            $(this).prop('selected', false);
                        }
                    });
                    $originalDropdown.change();
                }
            });

        });
    };
})(jQuery);

/** End of Office UI Fabric Code */ 

/*Pure CSS*/
(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
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

  animateIn(jQuery('.unmod-control-buttons'), 'ms-u-slideLeftIn40', 400);

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

  animateOut(jQuery('.unmod-control-buttons'), 'ms-u-slideRightOut40', 200);

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

  animateIn(jQuery('.mod-control-buttons'), 'ms-u-slideLeftIn40', 400);

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

  animateOut(jQuery('.mod-control-buttons'), 'ms-u-slideRightOut40', 200);

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
function settingsIn() {
  animateIn(jQuery('#SettingsDialog'), 'ms-u-scaleUpIn100', 500);
}
function settingsOut() {
  animateOut(jQuery('#SettingsDialog'), 'ms-u-scaleDownOut98', 500);
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
    animateIn(panel, 'ms-u-slideUpIn20', 400);
  }, 250);
}

function SimpleMajorityVoteOut() {
  animateOut(jQuery('#section-SimpleMajority'), 'ms-u-slideDownOut20', 200);
  setTimeout(function () {
    animateIn(jQuery('#voting-radio'), 'ms-u-slideLeftIn40', 400);
  }, 250);
}

function ResolutionVoteOut() {
  animateOut(jQuery('#section-ResolutionVote'), 'ms-u-slideDownOut20', 200);
  setTimeout(function () {
    animateIn(jQuery('#voting-radio'), 'ms-u-slideLeftIn40', 400);
  }, 250);
}

function RollCallVoteOut() {
  animateOut(jQuery('#section-RollCallVote'), 'ms-u-slideDownOut20', 200);
  setTimeout(function () {
    animateIn(jQuery('#voting-radio'), 'ms-u-slideLeftIn40', 400);
  }, 250);
}

function VotingResultsIn() {
  animateIn(jQuery('#VotingResultsDialog'), 'ms-u-scaleUpIn100', 200);
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
	$(".pure-menu-item").click(function(){
		if ($(this).hasClass("KMUNwebsite")){
			return;
		}
		$(".main-navigation").removeClass("pure-menu-selected");	// de-highlight all options
		$(".star").removeClass("ms-Icon--star");	// remove filled star
		$(".star").addClass("ms-Icon--starEmpty");	// add empty star
		$("#welcome").addClass("hidden"); // hide the welcome screen
		$("#tab-voting").addClass("hidden");
		$("#tab-gsl").addClass("hidden");
		$("#tab-mod").addClass("hidden");
		$("#tab-unmod").addClass("hidden");
		$("#tab-help").addClass("hidden");
		$("#tab-about").addClass("hidden");
		$("#tab-settings").addClass("hidden");
		if ($(this).hasClass("main-navigation")){
			$(this).toggleClass("pure-menu-selected");	// highlight only if it is main navigation
		}
		$("#layout").removeClass("active");	// auto-close the navigation panel
	});
  
  var sectionAnimation = "ms-u-slideDownIn10";
	$("#button-voting").click(function(){
		$("#star1").addClass("ms-Icon--star").removeClass("ms-Icon--starEmpty");
			animateIn(jQuery('#tab-voting'), sectionAnimation, 400);
  });
  $("#button-gsl").click(function(){
  	$("#star2").addClass("ms-Icon--star").removeClass("ms-Icon--starEmpty");
    	animateIn(jQuery('#tab-gsl'), sectionAnimation, 400);
  });
  $("#button-mod").click(function(){
  	$("#star3").addClass("ms-Icon--star").removeClass("ms-Icon--starEmpty");
    	animateIn(jQuery('#tab-mod'), sectionAnimation, 400);
  });
  $("#button-unmod").click(function(){
  	$("#star4").addClass("ms-Icon--star").removeClass("ms-Icon--starEmpty");
    	animateIn(jQuery('#tab-unmod'), sectionAnimation, 400);
  });
  $("#button-help").click(function(){
  	$('#tab-help').removeClass("hidden");
  	$('#help-header').fadeTo(0, 0);
  	$('#help-content').fadeTo(0, 0);
  	setTimeout(function(){
  		animateIn(jQuery('#help-header'), "ms-u-slideUpIn20", 500);
  		animateIn(jQuery('#help-content'), "ms-u-slideDownIn20", 500);
  		$('#help-header').fadeTo(0, 1);
  		$('#help-content').fadeTo(0, 1);
  	}, 100);
  });
  $("#button-about").click(function(){
    	$('#tab-about').removeClass("hidden");
    	$('#about-header').fadeTo(0, 0);
    	$('#about-content').fadeTo(0, 0);
    	setTimeout(function(){
    		animateIn(jQuery('#about-header'), "ms-u-slideUpIn20", 500);
    		animateIn(jQuery('#about-content'), "ms-u-slideDownIn20", 500);
    		$('#about-header').fadeTo(0, 1);
    	$('#about-content').fadeTo(0, 1);
    	}, 100);
  });
  $("#button-settings").click(function(){
  	$('#tab-settings').removeClass("hidden");
  	$('#settings-header').fadeTo(0, 0);
  	$('#settings-content').fadeTo(0, 0);
  	setTimeout(function(){
  		animateIn(jQuery('#settings-header'), "ms-u-slideUpIn20", 500);
  		animateIn(jQuery('#settings-content'), "ms-u-slideDownIn20", 500);
  		$('#settings-header').fadeTo(0, 1);
  		$('#settings-content').fadeTo(0, 1);
  	}, 100);
  });

  $("#headerArea").click(function(){
  	$("#layout").removeClass("active");
  	if ($("#welcome").hasClass("hidden")) {
  		// show the welcome screen
  		animateIn(jQuery('#welcome'), 'ms-u-fadeIn500', 500);
  		// hide other sections
  		$("#tab-voting").addClass("hidden");
  		$("#tab-gsl").addClass("hidden");
  		$("#tab-mod").addClass("hidden");
  		$("#tab-unmod").addClass("hidden");
  		$("#tab-help").addClass("hidden");
  		$("#tab-about").addClass("hidden");
  		$("#tab-settings").addClass("hidden");
  		$(".main-navigation").removeClass("pure-menu-selected");	// de-highlight all options
  		$(".star").removeClass("ms-Icon--star");	// remove filled star
			$(".star").addClass("ms-Icon--starEmpty");	// add empty star
  	}
  });
});

// fade in when page loads
$(document).ready(function(){
	$('body').fadeIn("slow");
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
  store.put(document.getElementById("CurrentAgendaField").value, "currentAgenda");

  logEvents("general", "Current agenda has been set to " + document.getElementById("CurrentAgendaField").value);
}

function agendaFocus() {
  var store = db.transaction("StoreFields", "readonly").objectStore("StoreFields");
  var request = store.get("currentAgenda");

  request.onsuccess = function() {
    document.getElementById("CurrentAgendaField").value = request.result;
  }
}

// Create the indexedDB database

var request = indexedDB.open("test100", 3);

request.onupgradeneeded = function(event) {
  // The database did not previously exist, so create object stores and indexes.
  if (event.oldVersion < 1) {
    var store = request.result.createObjectStore("StoreFields");
    // var fields = store.createIndex("fieldValue", "fieldValue");
    var logs = request.result.createObjectStore("Log", {keyPath: "id", autoIncrement: true});

    var sampleItem = { category: "general", date: Date(), string: "Database created" };
    logs.add(sampleItem);
  }
  if (event.oldVersion < 2) {
    var details = request.result.createObjectStore("Details");
    //var val = details.createIndex("detailValue", "detailValue");

    // var sampleItem = { detailName: "logID", detailValue: 0 };
    details.add(0, "logSavedID");
  }
  var flags = request.result.createObjectStore("Flags");
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
      str += "Present and Voting\n";
    }
    else if (activeList[i][2] == 2) {
      option2++;
      str += "Present\n";
    }
    else {
      option3++;
      str += "Absent\n";
    }
  }
  str += "Total Votes: " + (parseInt(option1) + parseInt(option2) + parseInt(option3)).toString() + ", Present and Voting: " + option1 + ", Present: " + option2 + ", Absent: " + option3;
  logEvents("RollCallVote", str);
}

function logSimpleMajorityVote() {
  var option1 = 0, option2 = 0, option3 = 0;
  var str = "Simple Majority Vote completed\n";
  for (i in activeList) {
    str += activeList[i][0];
    if (activeList[i][4] == 1) {
      option1++;
      str += "voted Yes\n";
    }
    else if (activeList[i][4] == 2) {
      option2++;
      str += "voted No\n";
    }
    else {
      option3++;
      str += "Abstained\n";
    }
  }
  str += "Total Votes: " + (parseInt(option1) + parseInt(option2) + parseInt(option3)).toString() + ", Yes: " + option1 + ", No: " + option2 + ", Abstained: " + option3;
  logEvents("SimpleMajorityVote", str);
}

function logResolutionVote() {
  var option1 = 0, option2 = 0, option3 = 0, option4 = 0, option5 = 0;
  var str = "Simple Majority Vote completed\n";
  for (i in activeList) {
    str += activeList[i][0];
    if (activeList[i][5] == 1) {
      option1++;
      str += "voted Yes\n";
    }
    else if (activeList[i][5] == 2) {
      option2++;
      str += "voted No\n";
    }
    else if (activeList[i][5] == 3) {
      option3++;
      str += "voted Yes with Rights\n";
    }
    else if (activeList[i][5] == 4) {
      option4++;
      str += "voted No with Rights\n";
    }
    else {
      option5++;
      str += "Abstained\n";
    }
  }
  str += "Total Votes: " + (parseInt(option1) + parseInt(option2) + parseInt(option3) + parseInt(option4) + parseInt(option5)).toString() + ", Yes: " + option1 + ", No: " + option2 + ", Yes with Rights: " + option3 + ", No with Rights: " + option4 + ", Abstained: " + option5;
  logEvents("ResolutionVote", str);
}

function SaveLog() {
  var logSavedID = 0, logDone=0;

  // retrieve logSavedID from local DB
  var objStore = db.transaction("Details", "readonly").objectStore("Details");
  var req = objStore.get("logSavedID");
  req.onsuccess = function() {
    logSavedID = req.result;
  }

  var store = db.transaction("Log").objectStore("Log");
  var myData = "mode=app&string=";
  store.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if (cursor) {
      if (cursor.value.id > logSavedID) { // Only add the logs which have not already been saved
        myData += cursor.value.date + " | " + cursor.value.category + " | " + cursor.value.string + "\n";
      }
      logDone = cursor.value.id;  // id upto which logs which have been added
      cursor.continue();
    }
    else { 
      // Save to file
      request = $.ajax({
        url: "log.php",
        type: "post",
        data: myData
      });

      // Callback handler that will be called on success
      request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        alert("Hooray, it worked!");
        logSavedID = logDone;  // Logs have been saved upto logDone
        // Save the logID to the local DB
        var objStore = db.transaction("Details", "readwrite").objectStore("Details");
        objStore.put(logSavedID, "logSavedID");
      });

      // Callback handler that will be called on failure
      request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        alert("The following error occurred: ");
      });

      // Callback handler that will be called regardless if the request failed or succeeded
      // request.always(function () {
      //   // Reenable the inputs
      //   alert("Complete");
      // });
    } 
  };
}

// Load flags
function LoadFlag(flagName){
	// Create XHR
	var xhr = new XMLHttpRequest(), blob;

	var path = "./flags/" + flagName + ".png";
	xhr.open("GET", path, true);
	// Set the responseType to blob
	xhr.responseType = "blob";

	xhr.addEventListener("load", function () {
		if (xhr.status === 200) {
			console.log("Image retrieved");
		
			// File as response
			blob = xhr.response;
			console.log("Blob:" + blob);

			console.log("Putting flag in IndexedDB");

			// Open a transaction to the database
			var tx = db.transaction("Flags", "readwrite");

			// Put the blob into the dabase
			var put = tx.objectStore("Flags").put(blob, flagName);
		}
	}, false);
	// Send XHR
	xhr.send();
}

$(document).ready(function(){
	setTimeout(function(){
		for (i in masterList) {
			LoadFlag(masterList[i]);
		}
	}, 200);
})

// // Load flags to database
// $(document).ready(function() {
// 	setTimeout(function(){
// 		// Create XHR
// 		var xhr = new XMLHttpRequest(),
// 		    blob;

// 		xhr.open("GET", "India.png", true);
// 		// Set the responseType to blob
// 		xhr.responseType = "blob";

// 		xhr.addEventListener("load", function () {
// 		    if (xhr.status === 200) {
// 		        console.log("Image retrieved");
		        
// 		        // File as response
// 		        blob = xhr.response;
// 		        console.log("Blob:" + blob);

// 		        console.log("Putting flag in IndexedDB");

// 		            // Open a transaction to the database
// 		            var tx = db.transaction("Flags", "readwrite");

// 		            // Put the blob into the dabase
// 		            var put = tx.objectStore("Flags").put(blob, "India");

// 		            // Retrieve the file that was just stored
// 		            tx.objectStore("Flags").get("India").onsuccess = function (event) {
// 		              var imgFile = event.target.result;
// 		              console.log("Got flag!" + imgFile);

// 		              // Get window.URL object
// 		              var URL = window.URL || window.webkitURL;

// 		              // Create and revoke ObjectURL
// 		               var imgURL = URL.createObjectURL(imgFile);

// 		              // Set img src to ObjectURL
// 		              var imgFlag = document.getElementById("headerImage");
// 		              var link = "url(" + imgURL + ")";
// 		              $('#flag').css('background-image', link);

// 		              // Revoking ObjectURL
// 		              imgFlag.onload = function() {
//                     window.URL.revokeObjectURL(this.src);
//                 }
// 		            };
// 		    }
// 		}, false);
// 		// Send XHR
// 		xhr.send();
// 	}, 250);
// });

// Connectivity status
var connectivityErrors = 0;	// Ensures that just a single error on a good connection does not show 'No Internet'
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
	}, 4000);
})