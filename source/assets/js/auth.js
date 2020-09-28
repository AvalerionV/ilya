function auth() {
    
    var email = $("#l-user").val();
    var password = $("#p-user").val();
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        console.log(errorCode);
        // ...
    });
}