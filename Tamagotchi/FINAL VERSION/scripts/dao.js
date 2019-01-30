let dao = {};

let config = {
    apiKey: "AIzaSyA51XhBVsr4_kGsOlhZHd0sVhyx2h3Gfvc",
    authDomain: "tamagotchi-12ffe.firebaseapp.com",
    databaseURL: "https://tamagotchi-12ffe.firebaseio.com",
    projectId: "tamagotchi-12ffe",
};
firebase.initializeApp(config);

dao.userAuthenticationCheck = function(callback) {
    firebase.auth().onAuthStateChanged(function(user) {
        callback(user);
    });
}

dao.createAccount = function(email, password, callbackError) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // EXAMPLES FOR USING THE ERROR
        // var errorCode = error.code;
        // var errorMessage = error.message;
        if (typeof(callbackError) === "function") {
            callbackError(error);
        }
    });
}

dao.signIn = function(email, password, callbackError) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // EXAMPLES FOR USING THE ERROR
        // var errorCode = error.code;
        // var errorMessage = error.message;
        if (typeof(callbackError) === "function") {
            callbackError(error);
        }
    });
}

dao.signOut = function() {
    firebase.auth().signOut();
}

dao.isAuthenticated = function() {
    user = firebase.auth().currentUser;

    if (user) {
        return true;
    }

    return false;
}

dao.getMyUserID = function() {
    user = firebase.auth().currentUser;

    if (user) {
        return user.uid;
    }

    return null;
}

dao.getAllMyTamagotchi = function(callback) {
    let userID = dao.getMyUserID();
    firebase.database().ref("tamagotchis").orderByChild("userID").equalTo(userID).once('value').then(function(snapshot) {
        if (typeof(callback) === "function") {
            let object = snapshot.val();
            let keys = Object.keys(object);
            let array = [];

            keys.forEach(function(key){
                object[key].tamagotchiID = key;
                array.push(object[key]);
            });

            callback(array);
        }
    });
}

dao.saveNewTamagotchi = function(tamagotchiObject, callback) {
    let userID = dao.getMyUserID();

    if(tamagotchiObject.userID === undefined){
        tamagotchiObject.userID = userID;
    }

    firebase.database().ref("tamagotchis").push(tamagotchiObject).then(function(res) {
        let tamagotchiID = res.getKey();
        if (typeof(callback) === "function") {
            callback(tamagotchiID);
        }
    });
}

dao.updateTamagotchi = function(tamagotchiObject, callback) {
    let tamagotchiObjectSecond = JSON.parse(JSON.stringify(tamagotchiObject));
    let tamagotchiID = tamagotchiObject.tamagotchiID;

    if (tamagotchiID === undefined) {
        console.log("updateTamagotchi function: tamagotchiObject is corrupted. It should contain it's ID.");
        return null;
    }

    delete tamagotchiObjectSecond.tamagotchiID;

    firebase.database().ref("tamagotchis/" + tamagotchiID).set(tamagotchiObjectSecond).then(function() {
        if (typeof(callback) === "function") {
            callback();
        }
    });
}

dao.deleteTamagotchi = function(tamagotchiObject, callback){
    let tamagotchiID = tamagotchiObject.tamagotchiID;
    firebase.database().ref("tamagotchis/" + tamagotchiID).set({}).then(function(){
        if(typeof(callback) === "function"){
            callback();
        }
    });
}

dao.shareTamagotchi = function(tamagotchiObject, userID, callback){
    let tamagotchiObjectSecond = JSON.parse(JSON.stringify(tamagotchiObject));
    delete tamagotchiObjectSecond.tamagotchiID;

    tamagotchiObjectSecond.userID = userID;

    dao.saveNewTamagotchi(tamagotchiObjectSecond, callback);
}