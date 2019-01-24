let dao = {};

let config = {
    apiKey: "AIzaSyA51XhBVsr4_kGsOlhZHd0sVhyx2h3Gfvc",
    authDomain: "tamagotchi-12ffe.firebaseapp.com",
    databaseURL: "https://tamagotchi-12ffe.firebaseio.com",
    projectId: "tamagotchi-12ffe",
};
firebase.initializeApp(config);

dao.userAuthenticationCheck = function(callback){
    firebase.auth().onAuthStateChanged(function(user) {
        callback(user);
    });
}

dao.createAccount = function(email, password, callbackError){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // EXAMPLES FOR USING THE ERROR
        // var errorCode = error.code;
        // var errorMessage = error.message;
        if(typeof(callbackError) === "function"){
            callbackError(error);
        }
    });
}

dao.signIn = function(email, password, callbackError){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // EXAMPLES FOR USING THE ERROR
        // var errorCode = error.code;
        // var errorMessage = error.message;
        if(typeof(callbackError) === "function"){
            callbackError(error);
        }
    });
}

dao.signOut = function(){
    firebase.auth().signOut();
}

dao.isAuthenticated = function(){
    user = firebase.auth().currentUser;

    if(user){
        return true;
    }

    return false;
}
