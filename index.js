document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("Form.html")
    }
})
const auth = firebase.auth()
const database = firebase.database()

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function signUp() {
    const database = firebase.database();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        
        // Display error message to the user
        document.getElementById("error").innerHTML = error.message;
      });
  }
// function signUp(){
//     const database = firebase.database();
//     var user = firebase.auth().currentUser;
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
 
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(function(userCredential) {
//         // On successful sign up, get the UID of the user
//         const uid = userCredential.user.uid;
        
//         // Store the user's email under a node named after their UID
//         database.ref('users/' + uid).child('email').set(email);

//         // Done
//         alert('User Created!!')
//     })
//     .catch((error) => {
//         document.getElementById("error").innerHTML = error.message
//     }); 
// }

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
 
        document.getElementById("error").innerHTML ="Reset link sent to your email id";
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function alertforLogin()
{
    alert("Please First Sign-UP/Login");
}