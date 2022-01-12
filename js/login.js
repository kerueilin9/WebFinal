var $signUpForm = $("#signUpForm"),
    $signUpEmail = $("#signUpEmail"),
    $signUpPassword = $("#signUpPassword");

// Sign in form
var $signInForm = $("#signInForm"),
    $signInEmail = $("#signInEmail"),
    $signInPassword = $("#signInPassword");

// Sign out button
var $signOutBtn = $("#signOutBtn");

$signUpForm.submit(function (e) {
    e.preventDefault();
    // When sign up form submitted
    console.log("Ready for sign up");
    const email = $signUpEmail.val();
    const password = $signUpPassword.val();
    console.log(email, password);
    //firebase sign in method
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            console.log("Sign up", res);
            alert("Sign up");
            if (email == "admin@gmail.com") {
                window.location = "./demo.html";
            }
        })
        .catch(err =>{
            console.log(err);
            if (err.code == 'auth/wrong-password') {
                alert("Wrong password!")
            } else if(err.code == 'auth/user-not-found'){
                alert("User not found!");
            }
        }); 
});

$signInForm.submit(function (e) {
    e.preventDefault();
    // When sign in form submitted
    console.log("Ready for sign in");
    const email = $signInEmail.val();
    const password = $signInPassword.val();
    console.log(email, password);
    //firebase sign in method
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
            console.log("Sign in", res);
            alert("Sign In");
            if (email == "admin@gmail.com") {
                window.location = "./demo.html";
            }
            window.location = "./demo.html";
        })
        .catch(err =>{
            console.log(err);
            if (err.code == 'auth/wrong-password') {
                alert("Wrong password!")
            } else if(err.code == 'auth/user-not-found'){
                alert("User not found!");
            }
        }); 
});


$signOutBtn.click(function () {
    // When click sign out button
    console.log("Ready for sign out");
    firebase
    .auth()
    .signOut()
    .then(() =>{
        window.location = "./login.html"
    })
    .catch(err => console.log(err))
});