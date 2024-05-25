const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
let usersList = JSON.parse(sessionStorage.getItem('signupData')) ? JSON.parse(sessionStorage.getItem('signupData')) : [];
let isUserLoggedIn = JSON.parse(sessionStorage.getItem('loggedIn')) ? JSON.parse(sessionStorage.getItem('loggedIn')) : false;

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


function signUp() {
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;
    if (email == null || email.trim() === "") {
        alert("Please enter the email.");
        return;
    }

    if (name == null || name.trim() === "") {
        alert("Please enter the name.");
        return;
    }

    if (password == null || password.trim() === "") {
        alert("Please enter the password.");
        return;
    }

    // Create an object with signup data
    let signupData = {
        name: name,
        email: email,
        password: password
    };

    if(!usersList.length) {
        usersList.push(signupData);
        sessionStorage.setItem('signupData', JSON.stringify(usersList));
        alert('SignUp successfull');
    } else {
        const idx  = usersList.findIndex((user => {
            return user.email === signupData.email;
        }))

        if (idx == -1) {
            usersList.push(signupData);
            sessionStorage.setItem('signupData', JSON.stringify(usersList));// session storage
            alert('SignUp successfull');
        } else {
            alert('User is already registered!!');
        }
    }
    // Store signup data in session storage
}

function checkIfUserExist(email, password) {
// let usersList = JSON.parse(sessionStorage.getItem('signupData')) ? JSON.parse(sessionStorage.getItem('signupData')) : [];
    const idx  = usersList.findIndex((user => {
        return user.email === email;
    }))

    if(idx === -1) {
        alert('User is not registered!!')
    } else {
        if (usersList[idx].password !== password) {
            alert('Your password is wrong!!');
        } else {
            isUserLoggedIn = true;
            sessionStorage.setItem('loggedIn', isUserLoggedIn);
            alert('Login Successfull!!');
            window.location.href = 'index.html';
        }
    }
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    checkIfUserExist(email, password);
}