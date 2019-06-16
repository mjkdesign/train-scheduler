// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAdRdM0wRbgX7H9qfjB0RoiireZHu-qwWI",
    authDomain: "train-scheduler-cc890.firebaseapp.com",
    databaseURL: "https://train-scheduler-cc890.firebaseio.com",
    projectId: "train-scheduler-cc890",
    storageBucket: "train-scheduler-cc890.appspot.com",
    messagingSenderId: "154420913618",
    appId: "1:154420913618:web:9ab564e88d82ae7f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Variables
// ================================================================================

    // Get a reference to the database service
    var database = firebase.database();
    var name = "";
    var destin = "";
    var time = 0;
    var freq = 0;


// Functions
// ================================================================================

    // On Click
    $("#submitBtn").on("click", function(e) {
        e.preventDefault();
        console.log("clicked");

        name = $("#trainName").val().trim();
        destin = $("#destination").val().trim();
        time = $("#trainTime").val().trim();
        freq = $("#frequency").val().trim();

        console.log(name);
        console.log(destin);
        console.log(time);
        console.log(freq);

        // Code for the push
        database.ref().push({

            train: name,
            destination: destin,
            departure: time,
            frequency: freq,
        
        });

    });

        