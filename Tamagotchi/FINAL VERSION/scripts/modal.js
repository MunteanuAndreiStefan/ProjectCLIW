function displayForm(id) {
    var form;
    if (id == "loginForm") {
        form = document.getElementById("loginForm");
        document.getElementById("registerForm").style.display = "none";
    } else {
        form = document.getElementById("registerForm");
        document.getElementById("loginForm").style.display = "none";
    }
    form.style.display = "block";
    form.style.position = "absolute";
    form.style.left = "50%";
    form.style.top = "50%";
}

function login() {
    var form = document.getElementById("loginForm");
    form.style.display = "none";
    dao.signIn(form.elements[0].value, form.elements[1].value);
    form.reset();
}

function register() {
    var form = document.getElementById("registerForm");
    form.style.display = "none";
    dao.createAccount(form.elements[0].value, form.elements[1].value);
    form.reset();
}