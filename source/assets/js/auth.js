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
    
    var email = $("#l-user").val();
    var password = $("#p-user").val();
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        register(email, password);

        // ...
    });
}

function authGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        
        $(".error").slideDown();
        $("#e-msg").html(errorMessage);
    });
}

function register(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
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