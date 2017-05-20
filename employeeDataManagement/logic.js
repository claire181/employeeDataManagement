  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBQpZHUfUeEcePB1KNnnp3SaoNpIyo-aas",
    authDomain: "employeedatamanagement-37a5e.firebaseapp.com",
    databaseURL: "https://employeedatamanagement-37a5e.firebaseio.com",
    projectId: "employeedatamanagement-37a5e",
    storageBucket: "employeedatamanagement-37a5e.appspot.com",
    messagingSenderId: "1035127999662"
  };

  firebase.initializeApp(config);

var database = firebase.database();

database.ref().on("child_added", function(childSnapshot) {


  $("#submitInput").on("click", function(event) {
  // // prevent form from trying to submit
  event.preventDefault();
  // // Get the input values
  var employeeName = $("#employeeName").val().trim();
  var employeeRole = parseInt($("#inputRole").val().trim());


    // Change the HTML to reflect the local value in firebase.
    $("#inputName").html(snapshot.val().employeeName);
    $("#inputRole").html("$" + snapshot.val().employeeRole);


  console.log(employeeName);
  console.log(employeeRole);

 
    database.ref().set({
      name: employeeName,
      highPrice: employeeRole
    });

    // Store the new name and role as a local variable (could have also used the Firebase variable)
    // highBidder = bidderName;
    // highPrice = parseInt(bidderPrice);


    // Change the HTML to reflect the new hemployee info
    $("#highest-bidder").html(bidderName);
    $("#highest-price").html("$" + bidderPrice);
  }

  else {

    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
