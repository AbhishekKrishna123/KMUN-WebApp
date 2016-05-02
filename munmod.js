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

// For Materialize 'select' element
$(document).ready(function() {
    $('select').material_select();
});

// $(function() {
//     $( "#sortable" ).sortable();
//     $( "#sortable" ).disableSelection();
//   });

$(function() {
    $( "#GSLList" ).sortable({
    	delay: 100,
    	update: function (event, ui) {
    		gslListSelection();
    	},
    	handle: '.GSLListItem-Button2-Text',
    	cursor: 'move',

    });
    $( "#GSLList" ).disableSelection();
  });

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

var currentSession = "session0";	// Used for knowing which session is active throughout execution
function sessionSelect(){
	// Retrieve the session from the select element
	currentSession = document.getElementById("sessionSelector").value;
	// Insert value into the DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(currentSession, "currentSession").onerror = function(event){
		console.log("Couldn't change current session in DB.");
		currentSession = "session0";
	}
}

/*--------------------------------------------------
			For jQueryUI autocomplete
--------------------------------------------------*/
// Binds the sources for the autocomplete function
// Needs to be called once the array is populated
function autocompleteSources(){
	$(function(){
		$('#unmodAutocomplete-start').autocomplete({
			lookup: currentList,
			minChars: 0
		});
	});
	$(function(){
		$('#modAutocomplete-start').autocomplete({
			lookup: currentList,
			minChars: 0
		});
	});
	$(function(){
		$('#modAutocomplete-speaker').autocomplete({
			lookup: currentList,
			minChars: 0,
		onSelect: function() {
			//modSpeakerReset();
		}
		});
	});
	$(function(){
		$('#gslAutocomplete-speaker').autocomplete({
			lookup: currentList,
			minChars: 0,
			onselect: function() {
				//GSLAddSpeaker();
			},
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

		// Hide other sections
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
			
			// Hide other sections
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
			
			// Hide other sections
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

			// Hide other sections
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

			// Hide other sections
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
			
			// Hide other sections
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

			// Hide other sections
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

			// Hide other sections
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

// Is populated by Ajax request once page loads; Contains list of all delegates
var masterList = [];
// List of delegates who are present
var currentList = [];

/*--------------------------------------------------
		For fields: Numbers Only Validation
--------------------------------------------------*/
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

/*--------------------------------------------------
					Roll Call
--------------------------------------------------*/

// Bind event handlers for buttons after they are added to the page dynamically
function bindRollCallButtons() {
	// Click on button 1 (absent)
	$('.rollCallListItem-Button1-Text').click(function(){
		if ($(this).hasClass('rollCallListItem-Button2-selected')) {
			// Do nothing because the button is already selected
		}
		else {
			// Remove formatting of the other buttons
			$(this).parent().find('.rollCallListItem-Text').removeClass('rollCallListItem-Text-selected-2');
			$(this).parent().find('.rollCallListItem-Button2-Text').removeClass('rollCallListItem-Button2-selected');
			$(this).parent().find('.rollCallListItem-Text').removeClass('rollCallListItem-Text-selected-3');
			$(this).parent().find('.rollCallListItem-Button3-Text').removeClass('rollCallListItem-Button3-selected');
			// Add formatting for this button
			$(this).parent().find('.rollCallListItem-Text').addClass('rollCallListItem-Text-selected-1');
			$(this).addClass('rollCallListItem-Button1-selected');

			// Modify the indexedDB
			var delegate = $(this).parent().find('.rollCallListItem-Text').html();
			db.transaction("Delegates").objectStore("Delegates").get(delegate).onsuccess = function(event) {
				tempDelegate = event.target.result;
				tempDelegate.session0.attendance = 0;	// Mark as absent
				db.transaction("Delegates" ,"readwrite").objectStore("Delegates").put(tempDelegate).onsuccess = function(event) {	// Update the database
					calcRollCallStatus();
				}	
			};


			// If the delegate name exists in the currentList, remove the name
			for (var i=0; i<currentList.length; i++) {
				if (currentList[i] == delegate) {	// If we have found the item (it exists)
					currentList.splice(i, 1);
					break;
				}
			}
			// Bind the modified array for the autocomplete
			autocompleteSources();
		}
	});
	// Click on button 2 (present)
	$('.rollCallListItem-Button2-Text').click(function(){
		if ($(this).hasClass('rollCallListItem-Button2-selected')) {
			// Do nothing because the button is already selected
		}
		else {
			// Remove formatting of the other buttons
			$(this).parent().find('.rollCallListItem-Text').removeClass('rollCallListItem-Text-selected-3');
			$(this).parent().find('.rollCallListItem-Button3-Text').removeClass('rollCallListItem-Button3-selected');
			$(this).parent().find('.rollCallListItem-Text').removeClass('rollCallListItem-Text-selected-1');
			$(this).parent().find('.rollCallListItem-Button1-Text').removeClass('rollCallListItem-Button1-selected');
			// Add formatting for this button
			$(this).parent().find('.rollCallListItem-Text').addClass('rollCallListItem-Text-selected-2');
			$(this).addClass('rollCallListItem-Button2-selected');

			// Modify the indexedDB
			var delegate = $(this).parent().find('.rollCallListItem-Text').html();
			db.transaction("Delegates").objectStore("Delegates").get(delegate).onsuccess = function(event) {
				tempDelegate = event.target.result;
				tempDelegate.session0.attendance = 1;	// Mark as present
				db.transaction("Delegates" ,"readwrite").objectStore("Delegates").put(tempDelegate).onsuccess = function(event) {	// Update the database
					calcRollCallStatus();
				}
			};
			
			// If the delegate name exists in the currentList, remove the name
			for (var i=0; i<currentList.length; i++) {
				if (currentList[i] == delegate) {	// If we have found the item (it exists)
					currentList.splice(i, 1);
					break;
				}
			}
			// Add the delegate name exists to the currentList
			currentList.push(delegate);
			// Bind the modified array for the autocomplete
			autocompleteSources();
		}
	});
	// Click on button 3 (present & voting)
	$('.rollCallListItem-Button3-Text').click(function(){
		if ($(this).hasClass('rollCallListItem-Button3-selected')) {
			// Do nothing because the button is already selected
		}
		else {
			// Remove formatting of the other buttons
			$(this).parent().find('.rollCallListItem-Text').removeClass('rollCallListItem-Text-selected-2');
			$(this).parent().find('.rollCallListItem-Button2-Text').removeClass('rollCallListItem-Button2-selected');
			$(this).parent().find('.rollCallListItem-Text').removeClass('rollCallListItem-Text-selected-1');
			$(this).parent().find('.rollCallListItem-Button1-Text').removeClass('rollCallListItem-Button1-selected');
			// Add formatting for this button
			$(this).parent().find('.rollCallListItem-Text').addClass('rollCallListItem-Text-selected-3');
			$(this).addClass('rollCallListItem-Button3-selected');

			// Modify the indexedDB
			var delegate = $(this).parent().find('.rollCallListItem-Text').html();
			db.transaction("Delegates").objectStore("Delegates").get(delegate).onsuccess = function(event) {
				tempDelegate = event.target.result;
				tempDelegate.session0.attendance = 2;	// Mark as present & voting
				db.transaction("Delegates" ,"readwrite").objectStore("Delegates").put(tempDelegate).onsuccess = function(event) {	// Update the database
					calcRollCallStatus();
				}
			};

			// If the delegate name exists in the currentList, remove the name
			for (var i=0; i<currentList.length; i++) {
				if (currentList[i] == delegate) {	// If we have found the item (it exists)
					currentList.splice(i, 1);
					break;
				}
			}
			// Add the delegate name exists to the currentList
			currentList.push(delegate);
			// Bind the modified array for the autocomplete
			autocompleteSources();
		}
	});

}

function calcRollCallStatus() {
	var total = masterList.length;
	document.getElementById('rollCallStatus-total').innerHTML = total;

	var absent=0, present = 0, presentAndVoting = 0;
	db.transaction("Delegates").objectStore("Delegates").openCursor().onsuccess = function(event) {
		var cursor = event.target.result;
		if (cursor) {	// If object exists in DB
			var statement = "cursor.value." + currentSession + ".attendance;";
			var result = eval(statement);

			if (result == 1) present++;
			else if (result == 2) presentAndVoting++;
			else absent++;

			cursor.continue();
		}
		else {
			// After counting, display status
			var absentPercent = (absent/total)*100;
			var presentPercent = (present/total)*100;
			var presentAndVotingPercent = (presentAndVoting/total)*100;
			document.getElementById('rollCallStatus-absent').innerHTML = absent + " (" + Math.round(absentPercent*10)/10 + "%)";
			document.getElementById('rollCallStatus-present').innerHTML = present + " (" + Math.round(presentPercent*10)/10 + "%)";
			document.getElementById('rollCallStatus-presentAndVoting').innerHTML = presentAndVoting  + " (" + Math.round(presentAndVotingPercent*10)/10 + "%)";
			
		}
	}
}

// Mark all absent
function rollCallAbsent() {
	// Remove formatting of the other button
	$('.rollCallListItem-Text').removeClass('rollCallListItem-Text-selected-2');
	$('.rollCallListItem-Button2-Text').removeClass('rollCallListItem-Button2-selected');
	$('.rollCallListItem-Text').removeClass('rollCallListItem-Text-selected-3');
	$('.rollCallListItem-Button3-Text').removeClass('rollCallListItem-Button3-selected');
	// Add formatting for this button
	$('.rollCallListItem-Text').addClass('rollCallListItem-Text-selected-1');
	$('.rollCallListItem-Button1-Text').addClass('rollCallListItem-Button1-selected');

	// Mark absent in indexedDB
	for (var delegate in masterList) {
		db.transaction("Delegates").objectStore("Delegates").get(masterList[delegate]).onsuccess = function(event) {
			tempDelegate = event.target.result;
			tempDelegate.session0.attendance = 0;	// Mark as absent
			db.transaction("Delegates" ,"readwrite").objectStore("Delegates").put(tempDelegate).onsuccess = function(event) {	// Update the database
				calcRollCallStatus();
			}
		};
	}

	// Clear currentList
	currentList.length = 0;

	// Bind the modified array for the autocomplete
	autocompleteSources();
}

// Mark all present
function rollCallPresent() {
	// Remove formatting of the other button
	$('.rollCallListItem-Text').removeClass('rollCallListItem-Text-selected-1');
	$('.rollCallListItem-Button1-Text').removeClass('rollCallListItem-Button1-selected');
	$('.rollCallListItem-Text').removeClass('rollCallListItem-Text-selected-3');
	$('.rollCallListItem-Button3-Text').removeClass('rollCallListItem-Button3-selected');
	// Add formatting for this button
	$('.rollCallListItem-Text').addClass('rollCallListItem-Text-selected-2');
	$('.rollCallListItem-Button2-Text').addClass('rollCallListItem-Button2-selected');

	// Mark present in indexedDB
	for (var delegate in masterList) {
		db.transaction("Delegates").objectStore("Delegates").get(masterList[delegate]).onsuccess = function(event) {
			tempDelegate = event.target.result;
			tempDelegate.session0.attendance = 1;	// Mark as present
			db.transaction("Delegates" ,"readwrite").objectStore("Delegates").put(tempDelegate).onsuccess = function(event) {	// Update the database
				calcRollCallStatus();
			}
		};
	}

	// Clear currentList
	currentList.length = 0;

	// Add all delegates to currentList
	for (var i=0; i<masterList.length; i++) {
		currentList.push(masterList[i]);
	}

	// Bind the modified array for the autocomplete
	autocompleteSources();
}

// Mark all present
function rollCallPresentAndVoting() {
	// Remove formatting of the other button
	$('.rollCallListItem-Text').removeClass('rollCallListItem-Text-selected-1');
	$('.rollCallListItem-Button1-Text').removeClass('rollCallListItem-Button1-selected');
	$('.rollCallListItem-Text').removeClass('rollCallListItem-Text-selected-2');
	$('.rollCallListItem-Button2-Text').removeClass('rollCallListItem-Button2-selected');
	// Add formatting for this button
	$('.rollCallListItem-Text').addClass('rollCallListItem-Text-selected-3');
	$('.rollCallListItem-Button3-Text').addClass('rollCallListItem-Button3-selected');

	// Mark present and voting in indexedDB
	for (var delegate in masterList) {
		db.transaction("Delegates").objectStore("Delegates").get(masterList[delegate]).onsuccess = function(event) {
			tempDelegate = event.target.result;
			tempDelegate.session0.attendance = 2;	// Mark as present and voting
			db.transaction("Delegates" ,"readwrite").objectStore("Delegates").put(tempDelegate).onsuccess = function(event) {	// Update the database
				calcRollCallStatus();
			}
		};
	}

	// Clear currentList
	currentList.length = 0;

	// Add all delegates to currentList
	for (var i=0; i<masterList.length; i++) {
		currentList.push(masterList[i]);
	}

	// Bind the modified array for the autocomplete
	autocompleteSources();
}

/*--------------------------------------------------
						Voting
--------------------------------------------------*/
var votingYes, votingNo, votingAbstain;	// for counting

function startVoting() {
	// Start the voting
	if (document.getElementById('votingButton-start').innerHTML == 'Start Vote'){
		//Calculate_votingSerialNumber();
		var count = 0;
		// Open Delegates objectstore with cursor
		db.transaction("Delegates").objectStore("Delegates").openCursor().onsuccess = function(event) {
			var cursor = event.target.result;
			if (cursor) {	// if object exists in DB
				tempDelegate = cursor.value;	// store the object from the DB in temp variable
				if (tempDelegate.session0.attendance == 0) {	//absent
					tempDelegate.votingSerialNumber = 0;
				}
				else {
					tempDelegate.votingSerialNumber = ++count;
				}
				tempDelegate.tempVoting = 0; // reset

				db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate);
				cursor.continue();
			}
			else {
				db.transaction("Variables", "readwrite").objectStore("Variables").put(count, "presentDelegates").onsuccess = function(event) {
					db.transaction("Variables").objectStore("Variables").get("presentDelegates").onsuccess = function(event) {
						var presentDelegates = event.target.result;
						if (presentDelegates < 1) return;

						var index = db.transaction("Delegates").objectStore("Delegates").index("votingSerialNumber");
						index.get(1).onsuccess = function(event) {
							// Display the first portfolio
							document.getElementById("votingLabel-delegate").innerHTML = event.target.result.portfolio;	

							// disable or enable the abstain button acoording to the first delegate
							if (event.target.result.session0.attendance == 1) {
								document.getElementById('votingButton-3').disabled = false;	// Can abstain if delegate is only present
							}
							else {
								document.getElementById('votingButton-3').disabled = true;	// Cannot abstain if delegate is present & voting
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

var votingResultsChart;
window.onload = function(){
	votingResultsChart = new CanvasJS.Chart("votingResults-chart", {
			width: 200,
			height: 200,
					title:{
						//text: "My First Chart in CanvasJS"              
					},
					data: [              
					{
						// Change type to "doughnut", "line", "splineArea", etc.
						type: "pie",
						dataPoints: [
							{ label: "Yes",  y: 0  },
							{ label: "No", y: 0  },
							{ label: "Abstain", y: 0  }
						]
					}
					]
	});
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
	
	db.transaction("Delegates").objectStore("Delegates").index("votingSerialNumber").get(currentNumber).onsuccess = function(event) {
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
					document.getElementById('votingLabel-statement').innerHTML = "Vote passes.";
				}
				else {
					document.getElementById('votingLabel-statement').innerHTML = "Vote fails.";
				}
				$('#voting-results').removeClass('hidden');
				$('#voting-main').addClass('hidden');
				document.getElementById('votingButton-start').innerHTML = 'Start Vote';

				
				votingResultsChart.options.data[0].dataPoints[0].y = votingYes;
				votingResultsChart.options.data[0].dataPoints[1].y = votingNo;
				votingResultsChart.options.data[0].dataPoints[2].y = votingAbstain;
				votingResultsChart.render();


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
			var index = db.transaction("Delegates").objectStore("Delegates").index("votingSerialNumber");
			index.openCursor().onsuccess = function(event) {
				var cursor = event.target.result;
				if (cursor) {
					if (cursor.value.votingSerialNumber != currentNumber) {
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
								document.getElementById('votingButton-3').disabled = false;	// Can abstain if delegate is only present
							}
							else {
								document.getElementById('votingButton-3').disabled = true;	// Cannot abstain if delegate is present& voting
							}

							document.getElementById("votingLabel-current").innerHTML = currentNumber;	// Set the counter
						}
					}
				}
			}
		}
	}
}

function Calculate_votingSerialNumber() {
	var count = 0;
	var objectStore = db.transaction("Delegates").objectStore("Delegates");
	objectStore.openCursor().onsuccess = function(event) {
		var cursor = event.target.result;
		if (cursor) {
			tempDelegate = cursor.value;
			if (tempDelegate.session0.attendance == 0) {	//absent
				tempDelegate.votingSerialNumber = 0;
			}
			else {
				count++;
				tempDelegate.votingSerialNumber = count;
			}

			db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate).onerror = function(event) {
				console.log("Couldn't update the DB while calculating votingSerialNumber!");
			}
			cursor.continue();
		}
		else {
			db.transaction("Variables", "readwrite").objectStore("Variables").put(count, "presentDelegates");
		}
	}
}


/*--------------------------------------------------
			General Speakers List (GSL)
--------------------------------------------------*/

var gslArray = [], gslSelectionArray = [], previousSpeaker;

// Add the speaker to GSL
function GSLAddSpeaker() {
	// Once autocomplete enters the value into the field, we add the speaker to the GSL

	var delegate = document.getElementById('gslAutocomplete-speaker').value;

	var i=0;
	// we need to keep trying, since autocomplete plugin takes some time to enter the value in the textfield and speed varies on the device
	var retry = setInterval(function(){
		if (i==12) clearInterval(retry);	// Stop retrying after 12 times
		
		i++;

		// Get the portfolio in the field
		db.transaction("Delegates").objectStore("Delegates").get(delegate).onsuccess = function (event) {
			// The result is not undefined, which means that the value in the field is a valid portfolio
			if (event.target.result != undefined) {
				// Stop trying because we have found the portfolio
				clearInterval(retry);

				// Clear the field
				document.getElementById('gslAutocomplete-speaker').value = "";

				// A click anywhere on the page (in this case on main). 
				//This solves an issue with the autocomplete suggestions disappearing when clicking on the field
				document.getElementById('main').click();

				// Check if the delegate already exists in the list
				// for (var j=0; j<gslArray.length; j++) {
				// 	if (gslArray[j] == delegate) {
				// 		// The delegate is already in the list, so do nothing
				// 		return;
				// 	}
				// }

				// Add the delegate to the list of speakers
				if (yieldToDelegate == false) {
					$('#GSLList').append('<div class="GSLListItem ui-sortable-handle">' +
																'<div class="GSLListItem-Text">' + delegate + '</div>' +
																'<div class="GSLListItem-Button2-Text"><i class="fa fa-bars" aria-hidden="true"></i></div>' +
																'<div class="GSLListItem-Button1-Text"><i class="fa fa-times" aria-hidden="true"></i></div>' +
															'</div>');
				}
				else {
					// If yeilding to delegate, that delegate should be added to the beginning
					$('#GSLList').prepend('<div class="GSLListItem ui-sortable-handle">' +
																'<div class="GSLListItem-Text">' + delegate + '</div>' +
																'<div class="GSLListItem-Button2-Text"><i class="fa fa-bars" aria-hidden="true"></i></div>' +
																'<div class="GSLListItem-Button1-Text"><i class="fa fa-times" aria-hidden="true"></i></div>' +
															'</div>');

					// Set yield to delegate as false
					yieldToDelegate = false;

					// Modify the autocomplete field label
					document.getElementById('gslAutocompleteLabel-speaker').innerHTML = "Add&nbsp;speaker";
					document.getElementById('gslAutocompleteLabel-speaker').style.color = '#000';

					// Set the speaker
					db.transaction("Variables", "readwrite").objectStore("Variables").put(delegate, "gslSpeaker");

					// Add this speaker as the yielded to delegate of the previous speaker
					db.transaction("Delegates").objectStore("Delegates").get(previousSpeaker).onsuccess = function(event) {
						var tempDelegate = event.target.result;

						var list;
						var statement = "list = tempDelegate." + currentSession + ".gslYieldToDelegateList.push(delegate)";	// Add this speaker to yielded to list of previous speaker
						eval(statement);

						// Update the DB by replacing the delegate object
						db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate);
					}

					// Load flag
					gslFlagLoad(delegate);

					// Resume the countdown
					gslPause();

				}

				// Add the delegate to the array
				gslArray.push(delegate);

				// Bind the event handler so that the remove button works for this new item
				bindGSLRemoveButton();

				// Set the first delegate as the selected delegate
				gslListSelection();

			}
			else {
				// Get the value from the field
				delegate = document.getElementById('gslAutocomplete-speaker').value;
			}
		};
	}, 25);
}

function gslListSelection() {
	// Remove the selected class for all the list items
	$('#GSLList').find('.GSLListItem').find('.GSLListItem-Text').removeClass('GSLListItem-Text-selected');

	// Add the selected class for the first item
	$('.GSLListItem:first').find('.GSLListItem-Text').addClass('GSLListItem-Text-selected');
}


function bindGSLRemoveButton() {
	// Click on button 1 (remove the speaker from the list)
	$('.GSLListItem-Button1-Text').click(function(){

		// If a delegate has to be selected for yielding, then disable the remove button
		if (yieldToDelegate == true) return;

		// Check if the removed speaker is the first speaker
		if ( $(this).parent().html() == $('.GSLListItem:first').html() ) {
			// If the countdown is running, stop it
			gslSpeakerEnd();
		}

		// Get the delegate name
		var delegate = $(this).parent().find('.GSLListItem-Text').html();

		// Remove from array
		for (var i=0; i<gslArray.length; i++) {
			if (gslArray[i] == delegate) {
				// Element found, remove it
				gslArray.splice(i, 1);
			}
		}

		// Animate and remove the HTML element
		
		var elem = $(this).parent();

		elem.animate({
			opacity: 0,
			left: "-=40px",
		}, 167, 'easeOutCubic',function() {
			// Animation complete.
			elem.remove();

			// Set the first delegate as the selected delegate
			gslListSelection();
		});

	});
}



var gslSpeakerMins = 0, gslSpeakerSecs = 0, gslSpeakerSetMins = 0, gslSpeakerSetSecs = 0, gslSpeakerTimeTotal = 0;
var gslSpeakerControl, yieldToDelegate = false;;

function gslSpeakerStart() {
	if (document.getElementById('gslButtonLabel-start').innerHTML == "Start") {
		// Start the speaking

		// If there are no speakers in the list, return
		if (gslArray.length == 0) return;

		// Get the first speaker in the list
		var speaker = $(".GSLListItem:first").find('.GSLListItem-Text').html();

		// Get the time for speaker
		gslSpeakerMins = gslSpeakerSetMins = parseInt(document.getElementById('gslField-speakerMinutes').value);
		gslSpeakerSecs = gslSpeakerSetSecs = parseInt(document.getElementById('gslField-speakerSeconds').value);

		// Convert seconds (>=60) to minutes
		while (gslSpeakerSecs >= 60) {
			gslSpeakerSecs -= 60;
			gslSpeakerMins++;
		}

		// Set initial time
		gslSpeakerTimeTotal = (gslSpeakerSetMins * 60) + gslSpeakerSetSecs;

		// Boundary conditions check
		if ((gslSpeakerSecs == 0 && gslSpeakerMins == 0) || (gslSpeakerSecs < 0 || gslSpeakerMins < 0) || (isNaN(gslSpeakerMins) || isNaN(gslSpeakerSecs))) { 
			gslSpeakerSecs = gslSpeakerMins = 0;	// Reset to zero
			document.getElementById("gslField-speakerMinutes").value = gslSpeakerMins;
			document.getElementById("gslField-speakerSeconds").value = gslSpeakerSecs;
			return;
		}
		// Values are OK, countdown can be started

		clearInterval(gslSpeakerControl);	// Stop any existing countdown
		gslSpeakerControl = setInterval(gslSpeakerCountdown, 1000); // Start countdown

		// Progress Bar calculation
		gslSpeakerSetProgress();

		// Load flag
		gslFlagLoad(speaker);

		// Save values in the DB
		db.transaction("Variables", "readwrite").objectStore("Variables").put(speaker, "gslSpeaker");
		db.transaction("Variables", "readwrite").objectStore("Variables").put(gslSpeakerMins, "gslSpeakerMins");
		db.transaction("Variables", "readwrite").objectStore("Variables").put(gslSpeakerSecs, "gslSpeakerSecs");
		db.transaction("Variables", "readwrite").objectStore("Variables").put(gslSpeakerSetMins, "gslSpeakerSetMins");
		db.transaction("Variables", "readwrite").objectStore("Variables").put(gslSpeakerSetSecs, "gslSpeakerSetSecs");

		// Reset pause button text
		document.getElementById('gslButtonLabel-pause').innerHTML = "Pause";
		// Show the control buttons
		$('.gsl-control-buttons').removeClass('hidden');
		// Show the yield buttons
		$('.gslYieldButtons').removeClass('hidden');

		// Change the button text
		document.getElementById('gslButtonLabel-start').innerHTML = "Stop";
	}
	else {
		// Stop the speaking
		gslSpeakerEnd();
	}
}

function gslSpeakerCountdown() {
	// Convert seconds (>=60) to minutes
	while (gslSpeakerSecs >= 60) {
		gslSpeakerSecs -= 60;
		gslSpeakerMins += 1;
	}
	// Go to the next minute when seconds becomes 0
	if (gslSpeakerSecs == 0 && gslSpeakerMins > 0) {
		gslSpeakerMins -= 1;
		gslSpeakerSecs = 60;
	}

	gslSpeakerSecs -= 1;	// Reduce time by 1 sec

	// Display the updated values
	document.getElementById("gslField-speakerMinutes").value = gslSpeakerMins;
	document.getElementById("gslField-speakerSeconds").value = gslSpeakerSecs;

	// Update values in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(gslSpeakerMins, "gslSpeakerMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(gslSpeakerSecs, "gslSpeakerSecs");

	// Update the mod spoken time for the current speaker in the DB
	db.transaction("Variables").objectStore("Variables").get("gslSpeaker").onsuccess = function(event) {	// Get the current speaker
		db.transaction("Delegates").objectStore("Delegates").get(event.target.result).onsuccess = function(event) {	// Get the object
			tempDelegate = event.target.result;

			// Only if the speaker value is valid, update the time
			// When time is yielded to the chair, speaker = ""
			if (tempDelegate != undefined) {
				// Increase the gsl spoken time
				var statement = "tempDelegate." + currentSession + ".gslTime++;";
				eval(statement);

				// Put the updated value back in the DB
				db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate);
			}
			
		}
	}

	// Append a '0' if seconds is <10
	if (gslSpeakerSecs <= 9 && gslSpeakerSecs > 0) document.getElementById("gslField-speakerSeconds").value = "0" + gslSpeakerSecs;

	// Set progress bar for speaker
	gslSpeakerSetProgress();

	// Time has run out, stop countdown
	if (gslSpeakerSecs <= 0 && gslSpeakerMins <= 0) {
		gslSpeakerEnd();
	}

}

function gslSpeakerEnd() {
	// Stop the countdown
	clearInterval(gslSpeakerControl);

	// Reset values
	gslSpeakerMins = gslSpeakerSetMins;
	gslSpeakerSecs = gslSpeakerSetSecs;

	// Reset fields
	document.getElementById("gslField-speakerMinutes").value = gslSpeakerSetMins;
	document.getElementById("gslField-speakerSeconds").value = gslSpeakerSetSecs;

	// Reset flag
	document.getElementById("gslFlag-speaker").style.backgroundImage = "url('logoSmall.png')";

	// Change button text
	document.getElementById('gslButtonLabel-start').innerHTML = "Start";

	// Reset progress bar
	gslSpeakerSetProgress();

	// Hide control buttons
	$('.gsl-control-buttons').addClass('hidden');
	// Hide yield buttons
	$('.gslYieldButtons').addClass('hidden');

	// Show start button
	$('#gslButton-start').removeClass('hidden');

	// Remove the speaker who has finished speaking from the list
	db.transaction("Variables").objectStore("Variables").get("gslSpeaker").onsuccess = function(event) {	// Get the current speaker
		var delegate = event.target.result;

		// Check if a delegate is actually speaking
		// In case of yield to chair, there is no speaker
		if (delegate != "") {
			// Remove from array
			for (var i=0; i<gslArray.length; i++) {
				if (gslArray[i] == delegate) {
					// Element found, remove it
					gslArray.splice(i, 1);
				}
			}

			
			// Remove the HTML element
			var elem = $('.GSLListItem:first');

			elem.animate({
				opacity: 0,
				left: "-=40px",
			}, 167, 'easeOutCubic',function() {
				// Animation complete.
				elem.remove();

				// Set the first delegate as the selected delegate
				gslListSelection();
			});
		}
	}
}

function gslPause() {
	// Countdown was running, pause it now
	if (document.getElementById('gslButtonLabel-pause').innerHTML == "Pause") {
		// Stop countdown
		clearInterval(gslSpeakerControl);

		// Change button text
		document.getElementById('gslButtonLabel-pause').innerHTML = "Resume";
	}
	// Countdown was paused, resume now
	else {
		// Start countdown
		gslSpeakerControl = setInterval(gslSpeakerCountdown, 1000);

		// Change button text
		document.getElementById('gslButtonLabel-pause').innerHTML = "Pause";
	}

	// Enable the start/stop and pause buttons (if it was disabled)
	document.getElementById('gslButton-start').disabled = false;
	document.getElementById('gslButton-pause').disabled = false;
}

function yieldChair() {
	// Record stat in DB
	db.transaction("Variables").objectStore("Variables").get("gslSpeaker").onsuccess = function(event) {	// Get the current speaker
		db.transaction("Delegates").objectStore("Delegates").get(event.target.result).onsuccess = function(event) {	// Get the object
			tempDelegate = event.target.result;

			// Increase the gsl spoken time
			var statement = "tempDelegate." + currentSession + ".gslYieldToChair++;";
			eval(statement);

			// Put the updated value back in the DB
			db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate);
						
			// Yielding to the chair is equivalent to stopping / ending
			gslSpeakerEnd();
		}
	}
}
function yieldDelegate() {
	if (document.getElementById('gslButtonLabel-pause').innerHTML == "Pause") {
		// Pause if countdown was running
		gslPause();
	}

	// Record stat in DB
	db.transaction("Variables").objectStore("Variables").get("gslSpeaker").onsuccess = function(event) {	// Get the current speaker
		db.transaction("Delegates").objectStore("Delegates").get(event.target.result).onsuccess = function(event) {	// Get the object
			tempDelegate = event.target.result;

			// Set this speaker as the previous speaker (Used for stats)
			previousSpeaker = tempDelegate.portfolio;

			// Increase the gsl spoken time
			var statement = "tempDelegate." + currentSession + ".gslYieldToDelegate++;";
			eval(statement);

			// Put the updated value back in the DB
			db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate).onsuccess = function(event) {


				// Remove the speaker who has finished speaking from the list
				db.transaction("Variables").objectStore("Variables").get("gslSpeaker").onsuccess = function(event) {	// Get the current speaker
					var delegate = event.target.result;

					// Remove from array
					for (var i=0; i<gslArray.length; i++) {
						if (gslArray[i] == delegate) {
							// Element found, remove it
							gslArray.splice(i, 1);
						}
					}

					// Remove the HTML element
					var elem = $('.GSLListItem:first');

					elem.animate({
						opacity: 0,
						left: "-=40px",
					}, 167, 'easeOutCubic',function() {
						// Animation complete.
						elem.remove();

						// Set the first delegate as the selected delegate
						gslListSelection();
					});
				}

				// Reset the speaker
				db.transaction("Variables", "readwrite").objectStore("Variables").put("", "gslSpeaker");
				
				// Reset flag
				document.getElementById("gslFlag-speaker").style.backgroundImage = "url('logoSmall.png')";

				// Modify the autocomplete field label
				document.getElementById('gslAutocompleteLabel-speaker').innerHTML = "Yield&nbsp;time&nbsp;to";
				document.getElementById('gslAutocompleteLabel-speaker').style.color = '#960000';

				// Set yield to delegate to true. This is used by the gslAddSpeaker function
				yieldToDelegate = true;

				// Hide the yield buttons
				$('.gslYieldButtons').addClass('hidden');

				// Disable the start/stop and pause buttons
				document.getElementById('gslButton-start').disabled = true;
				document.getElementById('gslButton-pause').disabled = true;
			}
		}
	}
	
}
function yieldQuestion() {
	
	// Record stat in DB
	db.transaction("Variables").objectStore("Variables").get("gslSpeaker").onsuccess = function(event) {	// Get the current speaker
		db.transaction("Delegates").objectStore("Delegates").get(event.target.result).onsuccess = function(event) {	// Get the object
			tempDelegate = event.target.result;

			// Increase the gsl spoken time
			var statement = "tempDelegate." + currentSession + ".gslYieldToQuestions++;";
			eval(statement);

			// Put the updated value back in the DB
			db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate).onsuccess = function(event) {
				// Remove the speaker who has finished speaking from the list
				db.transaction("Variables").objectStore("Variables").get("gslSpeaker").onsuccess = function(event) {	// Get the current speaker
					var delegate = event.target.result;

					// Remove from array
					for (var i=0; i<gslArray.length; i++) {
						if (gslArray[i] == delegate) {
							// Element found, remove it
							gslArray.splice(i, 1);
						}
					}

					// Remove the HTML element
					var elem = $('.GSLListItem:first');

					elem.animate({
						opacity: 0,
						left: "-=40px",
					}, 167, 'easeOutCubic',function() {
						// Animation complete.
						elem.remove();

						// Set the first delegate as the selected delegate
						gslListSelection();
					});
				}

				// Reset the speaker
				db.transaction("Variables", "readwrite").objectStore("Variables").put("", "gslSpeaker");
				
				// Reset flag
				document.getElementById("gslFlag-speaker").style.backgroundImage = "url('logoSmall.png')";

				// Hide the yield buttons
				$('.gslYieldButtons').addClass('hidden');
			}
		}
	}

}
function yieldComment() {
	
	// Record stat in DB
	db.transaction("Variables").objectStore("Variables").get("gslSpeaker").onsuccess = function(event) {	// Get the current speaker
		db.transaction("Delegates").objectStore("Delegates").get(event.target.result).onsuccess = function(event) {	// Get the object
			tempDelegate = event.target.result;

			// Increase the gsl spoken time
			var statement = "tempDelegate." + currentSession + ".gslYieldToComments++;";
			eval(statement);

			// Put the updated value back in the DB
			db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate).onsuccess = function(event) {
				// Remove the speaker who has finished speaking from the list
				db.transaction("Variables").objectStore("Variables").get("gslSpeaker").onsuccess = function(event) {	// Get the current speaker
					var delegate = event.target.result;

					// Remove from array
					for (var i=0; i<gslArray.length; i++) {
						if (gslArray[i] == delegate) {
							// Element found, remove it
							gslArray.splice(i, 1);
						}
					}

					// Remove the HTML element
					var elem = $('.GSLListItem:first');

					elem.animate({
						opacity: 0,
						left: "-=40px",
					}, 167, 'easeOutCubic',function() {
						// Animation complete.
						elem.remove();

						// Set the first delegate as the selected delegate
						gslListSelection();
					});
				}

				// Reset the speaker
				db.transaction("Variables", "readwrite").objectStore("Variables").put("", "gslSpeaker");
				
				// Reset flag
				document.getElementById("gslFlag-speaker").style.backgroundImage = "url('logoSmall.png')";

				// Hide the yield buttons
				$('.gslYieldButtons').addClass('hidden');
			}
		}
	}

}

function gslSpeakerSetProgress() {
	var percent = (((gslSpeakerMins * 60) + gslSpeakerSecs) * 100) / gslSpeakerTimeTotal;
	if (percent > 25) {
		// Show 'high' color
		$('#gslProgress-speakerTime').addClass('determinate');
		$('#gslProgress-speakerTime').removeClass('determinateLow');
	}
	else {
		// Show 'low' color
		$('#gslProgress-speakerTime').addClass('determinateLow');
		$('#gslProgress-speakerTime').removeClass('determinate');
	}
	// Reset colour to neutral once the timer is done
	if (percent == 0) {
		$('#gslProgress-speakerTime').removeClass('determinateLow');
		$('#gslProgress-speakerTime').removeClass('determinate');
	}
	percent = 100 - percent; // Make the bar fill up instead of becoming empty
	var gslSpeakerProgress = percent + "%";	// Append a % for the CSS property
	document.getElementById('gslProgress-speakerTime').style.width = gslSpeakerProgress;	// Set the CSS width property
	
	// Store in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(gslSpeakerProgress, "gslSpeakerProgress");
}


/*--------------------------------------------------
					Moderated Caucus
--------------------------------------------------*/
var modMins=0, modSecs=0, modControl, modTimeTotal, modSpeakerMins=0, modSpeakerSecs=0, modSpeakerControl, modSpeakerTimeTotal, modSpeakerSetMins=0, modSpeakerSetSecs=0;
var modRunningStatus = false, modSpeakerRunningStatus = false;

function ModTimer() {
	if (document.getElementById("modButton-startCaucus").innerHTML == "Stop Moderated Caucus") {
		modEnd();
		return;
	}

	// Get values from text fields
	modMins = parseInt(document.getElementById('modField-caucusMinutes').value);
	modSecs = parseInt(document.getElementById('modField-caucusSeconds').value);

	// Convert seconds (>=60) to minutes
	while (modSecs >= 60) {
		modSecs -= 60;
		modMins++;
	}

	// Time set for speaker
	modSpeakerSetMins = parseInt(document.getElementById("modField-setSpeakerMinutes").value);
	modSpeakerSetSecs = parseInt(document.getElementById("modField-setSpeakerSeconds").value);

	// Convert seconds (>=60) to minutes
	while (modSpeakerSecs >= 60) {
		modSpeakerSecs -= 60;
		modSpeakerMins += 1;
	}

	// Set initial time
	modSpeakerTimeTotal = (modSpeakerSetMins * 60) + modSpeakerSetSecs;

	// Boundary conditions check
	if ((modSecs == 0 && modMins == 0) || (modSecs < 0 || modMins < 0) || (isNaN(modMins) || isNaN(modSecs))) { // Reset to zero
		modSecs = modMins = 0;
		document.getElementById("modField-caucusMinutes").value = modMins;
		document.getElementById("modField-caucusSeconds").value = modSecs;
		return;
	}
	// Values are OK, countdown can be started

	modTimeTotal = (modMins * 60) + modSecs;	// Calculate total/initial time

	modControl = setInterval(ModCountdown, 1000); // Start countdown
	modRunningStatus = true;

	// Disable text fields
	document.getElementById("modField-caucusMinutes").disabled = true;
	document.getElementById("modField-caucusSeconds").disabled = true;

	// Enable speaker autocomplete field
	document.getElementById('modAutocomplete-speaker').disabled = false;
	// Show control buttons
	$('.mod-control-buttons').removeClass('hidden');
	// Change button text
	document.getElementById("modButton-startCaucus").innerHTML = "Stop Moderated Caucus";

	// Progress Bar calculation
	modSetProgress();

	// log the start of mod caucus
	// var str = "Moderated caucus started by " +	document.getElementById("modAutocomplete-start").value + " for " + modMins.toString() + " mins, " + modSecs.toString() + " secs on the topic " + document.getElementById("modField-topic").value;
	// logEvents("mod", str);

	// Save values in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modMins, "modMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modSecs, "modSecs");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modTimeTotal, "modTimeTotal");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(document.getElementById('modAutocomplete-start').value, "modStart");
	// Time set for speaker
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modSpeakerSetMins, "modSpeakerSetMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modSpeakerSetSecs, "modSpeakerSetSecs");

	// Check if the field is blank (NULL) or not
	if (document.getElementById('modAutocomplete-start').value) {
		// Increase the Mods started count of the delegate if the field is not blank
			db.transaction("Delegates").objectStore("Delegates").get(document.getElementById('modAutocomplete-start').value).onsuccess = function(event) {
			tempDelegate = event.target.result;
			var statement = "tempDelegate." + currentSession + ".modsStarted++;";
			eval(statement);

			// Put the updated value back in the DB
			db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate);
		}
	}
}
function ModCountdown() {
	// Convert seconds (>=60) to minutes
	while (modSecs >= 60) {
		modSecs -= 60;
		modMins += 1;
	}

	if (modSecs == 0 && modMins > 0) {
		modMins -= 1;
		modSecs = 60;
	}

	modSecs -= 1;	// Reduce time by 1 sec

	// Display updated values
	document.getElementById("modField-caucusMinutes").value = modMins;
	document.getElementById("modField-caucusSeconds").value = modSecs;

	// Update values in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modMins, "modMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modSecs, "modSecs");

	// Append leading '0' when seconds are less than 10
	if (modSecs <= 9 && modSecs > 0) document.getElementById("modField-caucusSeconds").value = "0" + modSecs;

	// Progress bar calculation
	modSetProgress();

	// Time has run out, stop caucus
	if (modSecs == 0 && modMins == 0) {
		modEnd();
	}
}
function modEnd(){
	// Stop countdown
	clearInterval(modControl);
	modRunningStatus = false;

	// Reset time to 0
	modMins = modSecs = 0;
	document.getElementById("modField-caucusMinutes").value = modMins;
	document.getElementById("modField-caucusSeconds").value = modSecs;

	// Enable text fields
	document.getElementById("modField-caucusMinutes").disabled = false;
	document.getElementById("modField-caucusSeconds").disabled = false;

	// Disable speaker autocomplete field
	document.getElementById('modAutocomplete-speaker').disabled = true;

	$('.mod-control-buttons').addClass('hidden');	// Hide control buttons

	// Reset button labels
	document.getElementById("modButton-startCaucus").innerHTML = "Start Moderated Caucus";
	document.getElementById("modButton-pauseCaucus").innerHTML = "Pause";

	// clearInterval(modSpeakerControl);
	// document.getElementById("modField-speakerMinutes").value = 0;
	// document.getElementById("modField-speakerSeconds").value = 0;

	// Reset progress bar
	modSetProgress();

	// Update values in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modMins, "modMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modSecs, "modSecs");

	// Clear fields
	//document.getElementById("modAutocomplete-speaker").value = "";
	document.getElementById("modAutocomplete-start").value = "";
	document.getElementById("modField-topic").value = "";

	//logEvents("mod", "End of moderated caucus");	// log the end of mod caucus
}
function modPause() {
	// If caucus is running
	if (document.getElementById("modButton-pauseCaucus").innerHTML == "Pause"){
		// Pause caucus
		clearInterval(modControl);
		clearInterval(modSpeakerControl);
		document.getElementById("modButton-pauseCaucus").innerHTML = "Resume";

		// Disable speaker autocomplete field
		document.getElementById('modAutocomplete-speaker').disabled = true;
		//logEvents("mod", "Moderated caucus paused");
	}
	// If caucus is paused
	else {
		// Resume caucus
		modControl = setInterval(ModCountdown, 1000);
		// Resume speaker
		if (modSpeakerMins > 0 || modSpeakerSecs > 0) {
			modSpeakerControl = setInterval(modSpeakerCountdown, 1000);
		}
		// Change button text
		document.getElementById("modButton-pauseCaucus").innerHTML = "Pause";
		// Enable speaker autocomplete field
		document.getElementById('modAutocomplete-speaker').disabled = false;
		//logEvents("mod", "Moderated caucus resumed");
	}
}
function modExtendMin() {
	modMins += 1;	// Add 1 min
	modTimeTotal += 60;	// Add 60 secs to total time

	// Display updated value
	document.getElementById("modField-caucusMinutes").value = modMins;

	// Set progress bar
	modSetProgress();

	// Update values in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modMins, "modMins");
	//logEvents("mod", "Moderated caucus extended by 1 min");
}
function modExtendSec() {
	modSecs += 10;	// Add 10 sec
	// Convert seconds (>=60) to minutes
	if (modSecs >= 60) {
		modSecs -= 60;
		modMins++;
	}

	modTimeTotal += 10; // Add 10 secs to total time

	// Display updated values
	document.getElementById("modField-caucusMinutes").value = modMins;
	document.getElementById("modField-caucusSeconds").value = modSecs;

	// Set progress bar
	modSetProgress();

	// Update values in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modMins, "modMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modSecs, "modSecs");
	//logEvents("mod", "Moderated caucus extended by 10 secs");
}
function modSpeakerReset() {
	// Clear current speaker
	document.getElementById("modAutocomplete-speaker").value = "";

	// Reset the values
	modSpeakerMins = modSpeakerSetMins = parseInt(document.getElementById("modField-setSpeakerMinutes").value);
	modSpeakerSecs = modSpeakerSetSecs = parseInt(document.getElementById("modField-setSpeakerSeconds").value);

	// Display the reset values
	document.getElementById("modField-speakerMinutes").value = modSpeakerSetMins;
	document.getElementById("modField-speakerSeconds").value = modSpeakerSetSecs;

	// Set progress bar
	modSetSpeakerProgress();

	// Update values in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modSpeakerMins, "modSpeakerMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modSpeakerSecs, "modSpeakerSecs");

	// Reset flag
	document.getElementById("modFlag-speaker").style.backgroundImage = "url('logoSmall.png')";

	// Clear any existing timer, if any
	clearInterval(modSpeakerControl);

	// Check if caucus is paused or time has elapsed
	if (document.getElementById("modButton-pauseCaucus").innerHTML == "Pause" && (modMins != 0 || modSecs != 0)) {
		// Start countdown for speaker
		modSpeakerControl = setInterval(modSpeakerCountdown, 1000);
			
		//logModSpeaker(); // log event
	}
}
function modSpeakerPause() {
	// If the speaker timer is running and time is greater than 0
	if ( document.getElementById('modButtonLabel-speakerPause').innerHTML == "Pause" && (modSpeakerMins > 0 || modSpeakerSecs > 0) ) {
		// Stop the speaker countdown
		clearInterval(modSpeakerControl);

		// Change the button label
		document.getElementById('modButtonLabel-speakerPause').innerHTML = "Resume";
	}
	// If the speaker timer is paused and time s greater than 0
	else if (document.getElementById('modButtonLabel-speakerPause').innerHTML == "Resume" && (modSpeakerMins > 0 || modSpeakerSecs > 0) ) {
		// Start the speaker countdown
		modSpeakerControl = setInterval(modSpeakerCountdown, 1000);

		// Change the button label
		document.getElementById('modButtonLabel-speakerPause').innerHTML = "Pause";
	}
}
function modSpeakerTimer() {
	// Get the value in the field
	var delegate = document.getElementById('modAutocomplete-speaker').value;

	// This part checks whether the value in the field is a valid portfolio
	// If the portfolio is valid, then start the countdown etc.

	var i=0;
	// we need to keep trying, since autocomplete plugin takes some time to enter the value in the textfield and speed varies on the device
	var retry = setInterval(function(){
		if (i==12) clearInterval(retry);	// Stop retrying after 12 times
		
		i++;

		// Get the portfolio in the field
		db.transaction("Delegates").objectStore("Delegates").get(delegate).onsuccess = function (event) {
			// The result is not undefined, which means that the value in the field is a valid portfolio
			if (event.target.result != undefined) {
				clearInterval(retry);	// We have found the portfolio

				// Retrieve the set time for speaker from the set-time field
				modSpeakerSetMins = modSpeakerMins = parseInt(document.getElementById("modField-setSpeakerMinutes").value);
				modSpeakerSetSecs = modSpeakerSecs = parseInt(document.getElementById("modField-setSpeakerSeconds").value);

				if (modSpeakerSetMins <= 0 && modSpeakerSetSecs <= 0) return;

				// Set initial time
				modSpeakerTimeTotal = (modSpeakerSetMins * 60) + modSpeakerSetSecs;
				
				// Display the values in the field
				document.getElementById("modField-speakerMinutes").value = modSpeakerSetMins;
				document.getElementById("modField-speakerSeconds").value = modSpeakerSetSecs;

				// Start countdown
				clearInterval(modSpeakerControl);	// Clear any existing countdown
				modSpeakerControl = setInterval(modSpeakerCountdown, 1000);

				// Set progress bar for speaker
				modSetSpeakerProgress();

				// Display Flag
				modFlagLoad();

				// Update values in DB
				db.transaction("Variables", "readwrite").objectStore("Variables").put(modSpeakerSetMins, "modSpeakerSetMins");
				db.transaction("Variables", "readwrite").objectStore("Variables").put(modSpeakerSetSecs, "modSpeakerSetSecs");
				db.transaction("Variables", "readwrite").objectStore("Variables").put(modSpeakerMins, "modSpeakerMins");
				db.transaction("Variables", "readwrite").objectStore("Variables").put(modSpeakerSecs, "modSpeakerSecs");
				db.transaction("Variables", "readwrite").objectStore("Variables").put(modSpeakerTimeTotal, "modSpeakerTimeTotal");
				db.transaction("Variables", "readwrite").objectStore("Variables").put(delegate, "modSpeaker");
				db.transaction("Variables", "readwrite").objectStore("Variables").put(document.getElementById('modField-topic').value, "modTopic");
			}
			else {
				// Get the value from the field
				delegate = document.getElementById('modAutocomplete-speaker').value;
			}
		};
	}, 25);

}
function modSpeakerCountdown() {
	// Convert seconds (>=60) to minutes
	while (modSpeakerSecs >= 60) {
		modSpeakerSecs -= 60;
		modSpeakerMins += 1;
	}
	// Go to the next minute when seconds becomes 0
	if (modSpeakerSecs == 0 && modSpeakerMins > 0) {
		modSpeakerMins -= 1;
		modSpeakerSecs = 60;
	}

	modSpeakerSecs -= 1;	// Reduce time by 1 sec

	// Display the updated values
	document.getElementById("modField-speakerMinutes").value = modSpeakerMins;
	document.getElementById("modField-speakerSeconds").value = modSpeakerSecs;

	// Update values in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modSpeakerMins, "modSpeakerMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modSpeakerSecs, "modSpeakerSecs");

	// Update the mod spoken time for the current speaker in the DB
	db.transaction("Variables").objectStore("Variables").get("modSpeaker").onsuccess = function(event) {	// Get the current speaker
		db.transaction("Delegates").objectStore("Delegates").get(event.target.result).onsuccess = function(event) {	// Get the object
			tempDelegate = event.target.result;

			// If there is no speaker, tempDelegate is undefined
			if (tempDelegate != undefined) {
				// Increase the mod spoken time
				var statement = "tempDelegate." + currentSession + ".modTime++;";
				eval(statement);

				// Put the updated value back in the DB
				db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate);
			}
		}
	}

	// Append a '0' if seconds is <10
	if (modSpeakerSecs <= 9 && modSpeakerSecs > 0) document.getElementById("modField-speakerSeconds").value = "0" + modSpeakerSecs;

	// Set progress bar for speaker
	modSetSpeakerProgress();

	// Time has run out, stop countdown
	if (modSpeakerSecs <= 0 && modSpeakerMins <= 0) {
		modSpeakerEnd();
	}
}

function modSpeakerEnd() {
	// Stop the countdown
	clearInterval(modSpeakerControl);
	// Reset values
	modSpeakerMins = 0;
	modSpeakerSecs = 0;
	// Reset flag
	document.getElementById("modFlag-speaker").style.backgroundImage = "url('logoSmall.png')";
	// Reset progress bar
	modSetSpeakerProgress();
	// Clear and reset fields
	document.getElementById('modAutocomplete-speaker').value = "";
	document.getElementById("modField-speakerMinutes").value = 0;
	document.getElementById("modField-speakerSeconds").value = 0;
	// Update DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put("", "modSpeaker");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(0, "modSpeakerMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(0, "modSpeakerSecs");
}

// Calculate and set progress bar
function modSetProgress() {
	var percent = (((modMins * 60) + modSecs) * 100) / modTimeTotal;
	if (percent > 25) {
		// Show 'high' color
		$('#modProgress-caucusTime').addClass('determinate');
		$('#modProgress-caucusTime').removeClass('determinateLow');
	}
	else {
		// Show 'low' color
		$('#modProgress-caucusTime').addClass('determinateLow');
		$('#modProgress-caucusTime').removeClass('determinate');
	}
	// Reset colour to neutral once the timer is done
	if (percent == 0) {
		$('#modProgress-caucusTime').removeClass('determinateLow');
		$('#modProgress-caucusTime').removeClass('determinate');
	}
	percent = 100 - percent; // Make the bar fill up instead of becoming empty
	var modProgress = percent + "%";	// Append a % for the CSS property
	document.getElementById('modProgress-caucusTime').style.width = modProgress;	// Set the CSS width property

	// Store in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modProgress, "modProgress");
}

// Calculate and set progress bar for speaker time
function modSetSpeakerProgress() {
	var percent = (((modSpeakerMins * 60) + modSpeakerSecs) * 100) / modSpeakerTimeTotal;
	if (percent > 25) {
		// Show 'high' color
		$('#modProgress-speakerTime').addClass('determinate');
		$('#modProgress-speakerTime').removeClass('determinateLow');
	}
	else {
		// Show 'low' color
		$('#modProgress-speakerTime').addClass('determinateLow');
		$('#modProgress-speakerTime').removeClass('determinate');
	}
	// Reset colour to neutral once the timer is done
	if (percent == 0) {
		$('#modProgress-speakerTime').removeClass('determinateLow');
		$('#modProgress-speakerTime').removeClass('determinate');
	}
	percent = 100 - percent; // Make the bar fill up instead of becoming empty
	var modSpeakerProgress = percent + "%";	// Append a % for the CSS property
	document.getElementById('modProgress-speakerTime').style.width = modSpeakerProgress;	// Set the CSS width property
	
	// Store in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(modSpeakerProgress, "modSpeakerProgress");
}


/*--------------------------------------------------
				Unmoderated Caucus
--------------------------------------------------*/
var unmodMins, unmodSecs, unmodTimeTotal, unmodControl, unmodProgress;
function UnmodTimer() {
	if (document.getElementById("unmodButton-startCaucus").innerHTML == "Stop Unmoderated Caucus") {
		unmodEnd();
		return;
	}

	// Get values from text fields
	unmodMins = parseInt(document.getElementById('unmodField-caucusMinutes').value);
	unmodSecs = parseInt(document.getElementById('unmodField-caucusSeconds').value);

	// Convert seconds (>=60) to minutes
	while (unmodSecs >= 60) {
		unmodSecs -= 60;
		unmodMins += 1;
	}

	// Boundary condition check
	if ((unmodMins == 0 && unmodSecs == 0) || (unmodMins < 0 || unmodSecs < 0) || (isNaN(unmodMins) || isNaN(unmodSecs))) { // Reset to zero
		unmodSecs = unmodMins = 0;
		document.getElementById("unmodField-caucusMinutes").value = unmodMins;
		document.getElementById("unmodField-caucusSeconds").value = unmodSecs;
		return;
	}
	// Input is OK. Timer can be started

	unmodTimeTotal = (unmodMins * 60) + unmodSecs;	// Total or initial time
	unmodSetProgress();

	// Start countdown by triggering the function every second
	unmodControl = setInterval(UnmodCountdown, 1000);

	// Disable text fields
	document.getElementById("unmodField-caucusMinutes").disabled = true;
	document.getElementById("unmodField-caucusSeconds").disabled = true;

	$('.unmod-control-buttons').removeClass("hidden");	// Show the control buttons

	document.getElementById("unmodButton-startCaucus").innerHTML = "Stop Unmoderated Caucus";	// Change button text

	// Store variables and fields in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(unmodMins, "unmodMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(unmodSecs, "unmodSecs");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(unmodTimeTotal, "unmodTimeTotal");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(document.getElementById('unmodAutocomplete-start').value, "unmodStart");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(document.getElementById('unmodField-topic').value, "unmodTopic");

	// Check if the field is blank (NULL) or not
	if (document.getElementById('unmodAutocomplete-start').value) {
		// Increase the Unmods started count of the delegate if the field is not blank
			db.transaction("Delegates").objectStore("Delegates").get(document.getElementById('unmodAutocomplete-start').value).onsuccess = function(event) {
			tempDelegate = event.target.result;
			var statement = "tempDelegate." + currentSession + ".unmodsStarted++;";
			eval(statement);
			//tempDelegate.session0.unmodsStarted++;
			// Put the updated value back in the DB
			db.transaction("Delegates", "readwrite").objectStore("Delegates").put(tempDelegate);
		}
	}

	// log start of unmoderated caucus
	// var str = "Unmoderated caucus started by " + document.getElementById("unmodAutocomplete-start").value + " for " + unmodMins.toString() + " mins, " + unmodSecs.toString() + " secs on the topic " + document.getElementById("unmodField-topic").value;
	// logEvents("unmod", str);
}
function UnmodCountdown() {
	// Convert seconds (>=60) to minutes
	while (unmodSecs >= 60) {
		unmodSecs -= 60;
		unmodMins += 1;
	}
	// For changing minutes
	if (unmodSecs == 0 && unmodMins > 0) {
		unmodMins -= 1;
		unmodSecs = 60;
	}

	// Reduce time by 1 second
	unmodSecs -= 1;

	// Display updated time
	document.getElementById("unmodField-caucusMinutes").value = unmodMins;
	document.getElementById("unmodField-caucusSeconds").value = unmodSecs;

	// Update values in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(unmodMins, "unmodMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(unmodSecs, "unmodSecs");

	// Progress Bar calculation
	unmodSetProgress();

	// Append a '0' to the seconds value when there are less than 10 seconds
	if (unmodSecs <= 9 && unmodSecs > 0) document.getElementById("unmodField-caucusSeconds").value = "0" + unmodSecs;

	// If the time has run out, stop the timer
	if (unmodSecs == 0 && unmodMins == 0) unmodEnd();
}
function unmodEnd(){
	// Stop the countdown function
	clearInterval(unmodControl);

	// Reset time to zero and update the fields
	unmodMins = unmodSecs = 0;
	document.getElementById("unmodField-caucusMinutes").value = unmodMins;
	document.getElementById("unmodField-caucusSeconds").value = unmodSecs;

	// Update values in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(unmodMins, "unmodMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(unmodSecs, "unmodSecs");

	// Enable text fields
	document.getElementById("unmodField-caucusMinutes").disabled = false;
	document.getElementById("unmodField-caucusSeconds").disabled = false;

	$('.unmod-control-buttons').addClass('hidden');	// hide the control buttons

	unmodSetProgress();	// will reset progress bar since time is 0

	// Reset button labels
	document.getElementById("unmodButton-startCaucus").innerHTML = "Start Unmoderated Caucus";
	document.getElementById("unmodButton-pauseCaucus").innerHTML = "Pause";

	// Clear fields
	document.getElementById("unmodAutocomplete-start").value = "";
	document.getElementById("unmodField-topic").value = "";
	document.getElementById("unmodFlag-start").style.backgroundImage = "url('logoSmall.png')";

	//logEvents("unmod", "End of unmoderated caucus");	// log the end of unmod caucus
}
function unmodPause() {
	// Check if the timer is pausd or running
	if (document.getElementById("unmodButton-pauseCaucus").innerHTML == "Pause"){	// Timer was running
		clearInterval(unmodControl);
		document.getElementById("unmodButton-pauseCaucus").innerHTML = "Resume";
		// logEvents("unmod", "Unmoderated caucus paused");
	}
	else {	// Timer was paused
		unmodControl = setInterval(UnmodCountdown, 1000);
		document.getElementById("unmodButton-pauseCaucus").innerHTML = "Pause";
		// logEvents("unmod", "Unmoderated caucus resumed");
	}
}
function unmodExtendMin() {
	unmodMins += 1;
	document.getElementById("unmodField-caucusMinutes").value = unmodMins;

	// Increase total time (initial time) as well by 60 secs
	unmodTimeTotal += 60;
	// Update progress bar
	unmodSetProgress();

	// Update values in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(unmodMins, "unmodMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(unmodTimeTotal, "unmodTimeTotal");

	//logEvents("unmod", "Unmoderated caucus extended by 1 min");
}
function unmodExtendSec() {
	unmodSecs += 10;
	// Convert seconds (>=60) to minutes
	if (unmodSecs >= 60) {
		unmodSecs -= 60;
		unmodMins += 1;
	}
	document.getElementById("unmodField-caucusSeconds").value = unmodSecs;
	document.getElementById("unmodField-caucusMinutes").value = unmodMins;

	// Increase total time (initial time) as well by 10 secs
	unmodTimeTotal += 10;
	// Update progress bar
	unmodSetProgress();

	// Update values in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(unmodMins, "unmodMins");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(unmodSecs, "unmodSecs");
	db.transaction("Variables", "readwrite").objectStore("Variables").put(unmodTimeTotal, "unmodTimeTotal");

	//logEvents("unmod", "Unmoderated caucus extended by 10 secs");
}
// Calculate and set progress bar
function unmodSetProgress() {
	var percent = (((unmodMins * 60) + unmodSecs) * 100) / unmodTimeTotal;
	if (percent > 25) {
		// Show 'high' color
		$('#unmodProgress-caucusTime').addClass('determinate');
		$('#unmodProgress-caucusTime').removeClass('determinateLow');
	}
	else {
		// Show 'low' color
		$('#unmodProgress-caucusTime').addClass('determinateLow');
		$('#unmodProgress-caucusTime').removeClass('determinate');
	}
	// Reset colour to neutral once the timer is done
	if (percent == 0) {
		$('#unmodProgress-caucusTime').removeClass('determinateLow');
		$('#unmodProgress-caucusTime').removeClass('determinate');
	}
	percent = 100 - percent; // Make the bar fill up instead of become empty
	unmodProgress = percent + "%";	// Append a % for the CSS property
	document.getElementById('unmodProgress-caucusTime').style.width = unmodProgress;	// Set the CSS width property

	// Store in DB
	db.transaction("Variables", "readwrite").objectStore("Variables").put(unmodProgress, "unmodProgress");
}


/*--------------------------------------------------
					Resolution
--------------------------------------------------*/




/*--------------------------------------------------
					Objects
--------------------------------------------------*/
// Object for delegates
function Delegate(portfolioName) {
	this.portfolio = portfolioName;
	this.votingSerialNumber = 0;
	this.tempVoting = 0;
	this.session0 = new Session();
	this.session1 = new Session();
	this.session2 = new Session();
	this.session3 = new Session();
	this.session4 = new Session();
	this.session5 = new Session();
	this.session6 = new Session();
	this.session7 = new Session();
	this.session8 = new Session();
}

function Session() {
	this.attendance = 0;
	this.gslTime = 0;
	this.gslYieldToQuestions = 0;
	this.gslYieldToComments = 0;
	this.gslYieldToDelegate = 0;
	this.gslYieldToChair = 0;
	this.gslYieldToDelegateList = [];
	this.sslTime = 0;
	this.sslYieldToQuestions = 0;
	this.sslYieldToComments = 0;
	this.sslYieldToDelegate = 0;
	this.sslYieldToChair = 0;
	this.sslYieldToDelegateList = [];
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
var dbOpenRequest = indexedDB.open("db21");
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
		var req = dbOpenRequest.result.createObjectStore("Variables");
		req.add("session0", "currentSession");

		// Store country flags as BLOBs
		var flags = dbOpenRequest.result.createObjectStore("Flags");

	}

	var delegates = dbOpenRequest.result.createObjectStore("Delegates", {keyPath: "portfolio"});
	var index_votingSerialNumber = delegates.createIndex("votingSerialNumber", "votingSerialNumber");

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
			delegateObjectStore.clear().onsuccess = function(event) {
				for (var i in DelegateArray) {
					delegateObjectStore.add(DelegateArray[i]).onerror = function(event) {
						console.error(event.target.error);
					}
				}
			}
			


			// Create list for Roll Call
			var objectStore = db.transaction("Delegates").objectStore("Delegates");
			objectStore.openCursor().onsuccess = function(event) {
				var cursor = event.target.result;
				if (cursor) {
					$('#list-rollCall').append('<div class="rollCallListItem">' +
																	'<a class="rollCallListItem-Text rollCallListItem-Text-selected-1">' + cursor.value.portfolio + '</a>' +
																	'<a class="rollCallListItem-Button3-Text waves-effect waves-light ">Present & Voting</a>' +
																	'<a class="rollCallListItem-Button2-Text waves-effect waves-light">Present</a>' +
																	'<a class="rollCallListItem-Button1-Text waves-effect waves-light rollCallListItem-Button1-selected">Absent</a>' +
																	'</div>');
					//alert("Name for SSN " + cursor.key + " is " + cursor.value.name);
					cursor.continue();
				}
				else {
					bindRollCallButtons();
					calcRollCallStatus();
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
// 	var speaker = document.getElementById("modAutocomplete-speaker").value;
// 	if (speaker == "") {
// 		str = "New speaker is speaking";
// 	}
// 	else {
// 		str = document.getElementById("modAutocomplete-speaker").value + " is speaking";
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
	$('#unmodAutocomplete-start').blur(function(){
	var i=0;
	// we need to keep trying, since autocomplete plugin takes some time to enter the value in the textfield and speed varies on the device
	var retry = setInterval(function(){
		if (i==12) clearInterval(retry);	// Stop retrying after 12 times
		var portfolio = $('#unmodAutocomplete-start').val();

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
			$('#unmodFlag-start').css('background-image', link);

			// Revoking ObjectURL
			setTimeout(function(){	
			window.URL.revokeObjectURL(imgURL);
			}, 1000); // Wait for the image to be loaded
		}
		else {
			// Set KMUN logo as flag if no country matches
			$('#unmodFlag-start').css('background-image', "url('logoSmall.png')");
		}
		// Store field
		// var store = db.transaction("StoreFields", "readwrite").objectStore("StoreFields");
		// store.put(document.getElementById("unmodAutocomplete-start").value, "UnmodStart");
		};
	}, 25);
	});
});

// Moderated caucus
// $(document).ready(function(){
// 	$('#modAutocomplete-start').blur(function(){
// 	var i=0;
// 	// we need to keep trying, since autocomplete plugin takes some time to enter the value in the textfield and speed varies on the device
// 	var retry = setInterval(function(){
// 		if (i==12) clearInterval(retry);	// Stop retrying after 12 times
// 		var portfolio = $('#modAutocomplete-start').val();

// 		i++;

// 		// Retrieve the stored file
// 		var tx = db.transaction("Flags", "readwrite");
// 		tx.objectStore("Flags").get(portfolio).onsuccess = function (event) {
// 		var imgFile = event.target.result;
// 		//console.log("Got flag!" + imgFile);

// 		if (imgFile instanceof Blob) {	// Continues only if the result is a blob (only if the value is a proper country)
// 			clearInterval(retry); // Don't try again since image has been found
// 			// Get window.URL object
// 			var URL = window.URL;

// 			// Create and revoke ObjectURL
// 			var imgURL = URL.createObjectURL(imgFile);

// 			// Set img src to ObjectURL
// 			var link = "url(" + imgURL + ")";
// 			$('#modFlag-start').css('background-image', link);

// 			// Revoking ObjectURL
// 			setTimeout(function(){	
// 			window.URL.revokeObjectURL(imgURL);
// 			}, 1000); // Wait for the image to be loaded
// 		}
// 		else {
// 			// Set KMUN logo as flag if no country matches
// 			$('#modFlag-start').css('background-image', "url('logoSmall.png')");
// 		}
// 		// Store field
// 		// var store = db.transaction("StoreFields", "readwrite").objectStore("StoreFields");
// 		// store.put(document.getElementById("modAutocomplete-start").value, "ModStart");
// 		};
// 	}, 25);
// 	});
// });
function modFlagLoad(){
	//$('#modAutocomplete-speaker').blur(function(){
	var i=0;
	// we need to keep trying, since autocomplete plugin takes some time to enter the value in the textfield and speed varies on the device
	var retry = setInterval(function(){
		if (i==12) clearInterval(retry);	// Stop retrying after 12 times
		var portfolio = $('#modAutocomplete-speaker').val();

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
			$('#modFlag-speaker').css('background-image', link);

			// Revoking ObjectURL
			setTimeout(function(){	
			window.URL.revokeObjectURL(imgURL);
			}, 1000); // Wait for the image to be loaded
		}
		else {
			// Set KMUN logo as flag if no country matches
			$('#modFlag-speaker').css('background-image', "url('logoSmall.png')");
		}
		// Store field
		// var store = db.transaction("StoreFields", "readwrite").objectStore("StoreFields");
		// store.put(document.getElementById("modAutocomplete-speaker").value, "ModSpeaker");
		};
	}, 25);
	//});
}

function gslFlagLoad(portfolio){
	//$('#modAutocomplete-speaker').blur(function(){
	var i=0;
	// we need to keep trying, since autocomplete plugin takes some time to enter the value in the textfield and speed varies on the device
	var retry = setInterval(function(){
		if (i==12) clearInterval(retry);	// Stop retrying after 12 times
		//var portfolio = $('#modAutocomplete-speaker').val();

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
			$('#gslFlag-speaker').css('background-image', link);

			// Revoking ObjectURL
			setTimeout(function(){	
			window.URL.revokeObjectURL(imgURL);
			}, 1000); // Wait for the image to be loaded
		}
		else {
			// Set KMUN logo as flag if no country matches
			$('#gslFlag-speaker').css('background-image', "url('logoSmall.png')");
		}
		// Store field
		// var store = db.transaction("StoreFields", "readwrite").objectStore("StoreFields");
		// store.put(document.getElementById("modAutocomplete-speaker").value, "ModSpeaker");
		};
	}, 25);
	//});
}


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