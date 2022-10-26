const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const welcomeMsg = document.querySelector("h1#welcomeMsg");

console.log(loginForm);
console.log(loginInput.value);
console.log(welcomeMsg);

const savedUsername = localStorage.getItem("localStorageUsername");

function addUserName(event) {
    event.preventDefault();
    const inputValue = loginInput.value;
    localStorage.setItem("localStorageUsername", inputValue);
    loginForm.classList.add("hidden");
    welcomeMsg.innerText = `WELCOME ${inputValue}`;
}

if (localStorage.getItem("localStorageUsername") !== null) {
    loginForm.classList.add("hidden");
    welcomeMsg.innerText = `WELCOME ${savedUsername}`;
}

loginForm.addEventListener("submit", addUserName)