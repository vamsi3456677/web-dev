 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD9ExOIpRu4UiVZ8d2faaE9H8PvEHwhYOU",
    authDomain: "form-28fc2.firebaseapp.com",
    databaseURL: "https://form-28fc2.firebaseio.com",
    projectId: "form-28fc2",
    storageBucket: "form-28fc2.appspot.com",
    messagingSenderId: "459016781118",
    appId: "1:459016781118:web:b8caced12967c9b3bd406f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
	
	
  function signUp(){
      
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      
      alert("Signed Up");
  }
  
  function signIn(){
		
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("logged in");
}





auth.onAuthStateChanged(function(user){
    
    if(user){
        
        var email = user.email;
        alert("Active User " + email);
        
        window.location='ml.html'//Take user to a different or home page

        //is signed in
        
    }
    
    
});



