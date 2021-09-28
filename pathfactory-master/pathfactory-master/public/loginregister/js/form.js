//<!-- TODO: Add SDKs for Firebase products that you want to usehttps://firebase.google.com/docs/web/setup#available-librarie // Your web app's Firebase configuration
  
     // Your web app's Firebase configuration
	 var firebaseConfig = {
		apiKey: "AIzaSyCAuXo2aeZF-hIQqBPUwXIUtz7-6YEiUjg",
		authDomain: "pathfactory.firebaseapp.com",
		databaseURL: "https://pathfactory.firebaseio.com",
		projectId: "pathfactory",
		storageBucket: "pathfactory.appspot.com",
		messagingSenderId: "638386080604",
		appId: "1:638386080604:web:67437a1315fe3e5e0d0f99"
	  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("emailr");
		var password = document.getElementById("passwordr");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
    function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.then(() => {
			window.location = "../radial-pie-circle-menu/menuRond.html";

		})
		promise.catch(e => alert(e.message));
		
		
		
		
		
	}


		
    auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			//var password = user.password;
			var m =confirm("Active User " + email);
			
			//window.location = "../radial-pie-circle-menu/menuRond.html";
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			this.setState({
				user: null
			});
			
			//no user is signed in
		}
		
		
		
	});
	


	function signOut(){
	
		firebase.auth().signOut().then(function() {
			var user = firebase.auth().currentUser;
			user = null;
	
			window.location = "../index.html";
			alert("signed out!")// Sign-out successful.
		  }).catch(function(error) {
			// An error happened.
		  });
	}


	
  


	



	function reset(){
		var x = prompt("Enter email to get password reset link");
	
		var auth = firebase.auth();
		var emailAddress = x;
	
		auth.sendPasswordResetEmail(emailAddress).then(function() {
		alert('Link sent to your email address')// Email sent.
		}).catch(function(error) {
		// An error happened.
		});
	
	}

	







