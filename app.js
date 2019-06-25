train-table

train-name-input
destination-input
time-input
frequency-input
add-train-btn





var firebaseConfig = {
    apiKey: "AIzaSyA0ZXGtozfvnYCBwP-_SGRQMXcq62XApTw",
    authDomain: "test2-4d316.firebaseapp.com",
    databaseURL: "https://test2-4d316.firebaseio.com",
    projectId: "test2-4d316",
    storageBucket: "test2-4d316.appspot.com",
    messagingSenderId: "63582350263",
    appId: "1:63582350263:web:8a55b7df80519639"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();
  

  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  

    var trainName = $("#train-name-input").val().trim();
    var trainDest = $("#destination-input").val().trim();
    var trainTime = moment($("#time-input").val().trim(), "MM/DD/YYYY").format("X");
    var trainFreq = $("#frequency-input").val().trim();

    var newTrain = {
      name: trainName,
      destination: trainDest,
      time: trainTime,
      freq: trainFreq
    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.freq);
  
    alert("Train successfully added");

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");
  });
  
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDest = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().time;
    var trainFreq = childSnapshot.val().freq;

    console.log(trainName);
    console.log(trainDest);
    console.log(trainTime);
    console.log(trainFreq);
  

    // var trainTimePretty = moment.unix(trainTime).format("MM/DD/YYYY");
  

    var nextArrival = moment().diff(moment(empStart, "X"), "months");
    console.log(minsAway);
  

    var minsAway = empMonths * empRate;
    console.log(empBilled);
  

    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDest),
      $("<td>").text(trainFreq),
      $("<td>").text(nextArrival),
      $("<td>").text(minsAway),
    );

    $("#train-table > tbody").append(newRow);
  });
