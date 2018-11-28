var config = {
    apiKey: "AIzaSyAh8ZnBrOq0QCn3zy0g1YrZ9bCifWHDM1M",
    authDomain: "fir-test-d3ac0.firebaseapp.com",
    databaseURL: "https://fir-test-d3ac0.firebaseio.com/",
    projectId: "fir-test-d3ac0",
    storageBucket: "fir-test-d3ac0.appspot.com",
    messagingSenderId: "1009182389821"
  };

  firebase.initializeApp(config);

function addUser(){
  var username = document.getElementById('usernameInput').value;
  var password = document.getElementById('passwordInput').value;
  console.log(username);
  console.log(password);
  firebase.database().ref('Username/'+ username).set({
    Username: username,
    Password: password
  });

  document.getElementById('usernameInput').value = "";
  document.getElementById('passwordInput').value = "";
  document.getElementById('confirmPasswordInput').value = "";

  location.href='start.html'
}
