



//<!-- TODO: Add SDKs for Firebase products that you want to usehttps://firebase.google.com/docs/web/setup#available-librarie // Your web app's Firebase configuration
  
     // Your web app's Firebase configuration
     var firebaseConfig = {
        apiKey: "AIzaSyD9ExOIpRu4UiVZ8d2faaE9H8PvEHwhYOU",
        authDomain: "form-28fc2.firebaseapp.com",
        databaseURL: "https://form-28fc2.firebaseio.com",
        projectId: "form-28fc2",
        storageBucket: "form-28fc2.appspot.com",
        messagingSenderId: "459016781118",
        appId: "1:459016781118:web:a1d912df0b74a161bd406f"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
     
    
      const auth = firebase.auth();
        
        
      firebase.auth().signOut()
      .then(function() {
        alert("Signed Out");// Sign-out successful.
      })
      .catch(function(error) {
        // An error happened
      });
    
    
        
    
        
        auth.onAuthStateChanged(function(user){
            
            if(user){
                
                var email = user.email;
                alert("Active User " + email);
                window.location = "../index.html";
                
                //Take user to a different or home page
    
                //is signed in
                
            }else{
                
                
                //no user is signed in
            }
            
            
            
        });
    
 
        
    
    const logout = document.querySelector("#logout");
    logout.addEventListener('click', (e) =>{
        e.preventDefault();
        auth.signOut().then(()=> {
            alert("signed out")
        })
        
    })
    
    
    
    
    
    