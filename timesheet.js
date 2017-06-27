var config = {
apiKey: "AIzaSyDD-loYKonvOp7mYmQ-08ICviOc1f0_iwM",
authDomain: "realtime-database-c0ddf.firebaseapp.com",
databaseURL: "https://realtime-database-c0ddf.firebaseio.com",
projectId: "realtime-database-c0ddf",
storageBucket: "realtime-database-c0ddf.appspot.com",
messagingSenderId: "30186214471"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click",function(event){
	event.preventDefault();
	var name = $("#name").val();
	var role = $("#role").val();
	var date = $("#date").val();
	var rate = $("#rate").val();

	// var newEntry = $("<tr>");
	// newEntry.append("<td>" + name + "</td>");
	// newEntry.append("<td>" + role + "</td>");
	// newEntry.append("<td>" + date + "</td>");
	// newEntry.append("<td></td>");
	// newEntry.append("<td>" + rate + "</td>");
	// newEntry.append("<td></td>");

	// $("#entries").append(newEntry);

	database.ref().push({
		name: name,
		role: role,
		date: date,
		rate: rate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});

});

database.ref().on("child_added",function(snap){
	var rowID = snap.val().dateAdded;
	var newEntry = $("<tr>");
	newEntry.append("<td>" + snap.val().name + "</td>");
	newEntry.append("<td>" + snap.val().role + "</td>");
	newEntry.append("<td>" + snap.val().date + "</td>");
	newEntry.append("<td></td>");
	newEntry.append("<td>" + snap.val().rate + "</td>");
	newEntry.append("<td></td>");
	newEntry.append("<td><button class='remove' id='" + rowID + "'> X </button> </td>");

	$("#entries").append(newEntry);

});

$(document).on("click", ".remove",function(){
	**HELP**

	// console.log(this);
	// database.ref().orderByKey("dateAdded").equalTo($(this).attr("id")).once("value", function(snapshot) {
	// 		debugger;
	// 	console.log(snapshot.val())
	// })

});
