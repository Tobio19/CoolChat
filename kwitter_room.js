var firebaseConfig = {
      apiKey: "AIzaSyDtkcdOcQ3Xv5ZoyhHtgMTxpJ_WJJfuEOg",
      authDomain: "coooooooooooooolchat.firebaseapp.com",
      databaseURL: "https://coooooooooooooolchat-default-rtdb.firebaseio.com",
      projectId: "coooooooooooooolchat",
      storageBucket: "coooooooooooooolchat.appspot.com",
      messagingSenderId: "476261673565",
      appId: "1:476261673565:web:13b075d09819ad88753bb4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout() {
      window.location = "index.html";
}