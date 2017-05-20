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
  var employeeRole = $("#inputRole").val().trim();
  var employeeStart = $("#inputStartDate").val().trim();
  var rate = $("inputRate").val().trim();

  var months = 0;
  var billed = 0;


    // Change the HTML to reflect the local value in firebase.
    $("#inputName").html(snapshot.val().employeeName);
    $("#inputRole").html("$" + snapshot.val().employeeRole);


  console.log(employeeName);
  console.log(employeeRole);


function months() {
return;
        
      },

function billed(){

return;

      };


 
    database.ref().push({
      name: employeeName,

      role: employeeRole,

      start: employeeStart,

      rate: rate,

      months: 

      billed: 



      }


    });

    // Store the new name and role as a local variable (could have also used the Firebase variable)
    // highBidder = bidderName;
    // highPrice = parseInt(bidderPrice);


    // Change the HTML to reflect the new employee info
    var newRow = &("<tr>")
    newRow.addClass('latestInfo');
    newRow.html(name role)

  

 
  


