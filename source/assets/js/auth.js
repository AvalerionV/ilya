function auth() {
    
    var email = $("#l-user").val();
    var password = $("#p-user").val();
    
    // Register a new user
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function (err) {
        // Handle errors
        console.log(err);
    });
}