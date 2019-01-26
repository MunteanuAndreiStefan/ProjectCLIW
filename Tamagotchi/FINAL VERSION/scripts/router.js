let router = {}

let initAuthetication = function() {
    let callback = function(user) {
        if (user) {
            document.getElementById('menuComponenetLoggedIn').style.display = "block";
            document.getElementById('menuComponenetLoggedOut').style.display = "none";
        } else {
            document.getElementById('menuComponenetLoggedIn').style.display = "none";
            document.getElementById('menuComponenetLoggedOut').style.display = "block";

            router.changePage('home')
        }
    }
    dao.userAuthenticationCheck(callback);
}
initAuthetication();

//dao.signIn('test@test.com', '123123', null);

router.changePage = function(pageId, callback) {
    router.pageId = pageId;

    document.getElementById('home').style.display = "none";
    document.getElementById('management').style.display = "none";
    document.getElementById('view/edit').style.display = "none";

    document.getElementById(pageId).style.display = "block";
    if (typeof(callback) === "function") {
        callback();
    }
}

let initRouter = function() {
    router.pageId = 'home';
    router.changePage('home');
}
initRouter();