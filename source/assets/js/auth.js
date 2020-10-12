firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        
        afterLogin(photoURL);
        // ...
    } else {
        // User is signed out.
        // ...
    }
});

function auth() {
    
    hideElements();
    preLoginLoad();
    
    var email = $("#l-user").val();
    var password = $("#p-user").val();
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        postLoginLoad();
        
        console.log(errorCode);
        
        $(".error").slideDown();
        $("#e-msg").html(errorMessage);

        // ...
    });
    
}

function logout() {
    // Sign out user
    firebase.auth().signOut()
        .catch(function (err) {
        // Handle errors
        
        return false
    });
    
    aferLogout();
}