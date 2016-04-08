var request = indexedDB.open("t1");
var logSavedID = 0;
var CurrentAgenda, UnmodTopic, UnmodStart;

request.onsuccess = function() {
	db = request.result;
	// var objStore = db.transaction("Details", "readonly").objectStore("Details");
	// var req = objStore.get("logSavedID");
	//req.onsuccess = function() {

		// logSavedID = req.result;
		setInterval(checkDBupdates, 250);
	//}
};

function checkDBupdates(){
	var store = db.transaction("StoreFields").objectStore("StoreFields");
	var req1 = store.get("currentAgenda");
	req1.onsuccess = function() {
		CurrentAgenda = req1.result;
		if (document.getElementById("display-CurrentAgenda").innerText != CurrentAgenda){
			document.getElementById("display-CurrentAgenda").innerText = CurrentAgenda;
		}
	}

	var req2 = store.get("UnmodTopic");
	req2.onsuccess = function() {
		UnmodTopic = req2.result;
		if (document.getElementById("display-UnmodTopic").innerText != UnmodTopic){
			document.getElementById("display-UnmodTopic").innerText = UnmodTopic;
		}
	}

	var req3 = store.get("UnmodStart");
	req3.onsuccess = function() {
		UnmodStart = req3.result;
		if (document.getElementById("display-UnmodStart").innerText != UnmodStart){
			document.getElementById("display-UnmodStart").innerText = UnmodStart;

			var tx = db.transaction("Flags", "readwrite");
			tx.objectStore("Flags").get(UnmodStart).onsuccess = function (event) {
				var imgFile = event.target.result;
				
				if (imgFile instanceof Blob) {  // Continues only if the result is a blob (only if the value is a proper country)
					// Get window.URL object
					var URL = window.URL;

					// Create and revoke ObjectURL
					var imgURL = URL.createObjectURL(imgFile);

					// Set img src to ObjectURL
					var link = "url(" + imgURL + ")";
					$('#display-UnmodStartFlag').css('background-image', link);

					// Revoking ObjectURL
					setTimeout(function(){  
						window.URL.revokeObjectURL(imgURL);
					}, 1000); // Wait for the image to be loaded
				}
				else {
					// Set KMUN logo as flag if no country matches
					$('#display-UnmodStartFlag').css('background-image', "url('logoSmall.png')");
				}
			}
		}
	}
}

function updateScreen(){
	var store = db.transaction("Log").objectStore("Log");
	store.openCursor().onsuccess = function(event) {
		var cursor = event.target.result;
		if (cursor) {
			if (cursor.value.id > logSavedID) { // Only add the logs which have not already been saved
				$('#logView').append("<div>" + cursor.value.date + " | " + cursor.value.category + " | " + cursor.value.string + "</div><br>");
				logSavedID = cursor.value.id;
			}
		cursor.continue();
	  }
	};
  }

