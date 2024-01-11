const loginBtn = document.getElementById("login-button");
const emailInput = document.getElementById("input-email");
const passwordInput = document.getElementById("input-password");
const containerToRemove = document.getElementsByClassName("container");

window.addEventListener("load", () => {
  if (localStorage.getItem("loginSuccess")) {
    showLoginSuccessPage();
  }
});

emailInput.addEventListener("change", () => {
  if (!!emailInput.value && !!passwordInput.value) {
    loginBtn.disabled = false;
    loginBtn.style.cursor = "pointer";
  } else {
    loginBtn.disabled = true;
    loginBtn.style.cursor = "not-allowed";
  }
});

passwordInput.addEventListener("change", () => {
  if (!!emailInput.value && !!passwordInput.value) {
    loginBtn.disabled = false;
    loginBtn.style.cursor = "pointer";
  } else {
    loginBtn.disabled = true;
    loginBtn.style.cursor = "not-allowed";
  }
});

loginBtn.addEventListener("mouseover", () => {
  if (!!emailInput.value && !!passwordInput.value) {
    loginBtn.style.cursor = "pointer";
    loginBtn.disabled = false;
  }
});

function showLoginSuccessPage() {
  containerToRemove[0].remove();
  let newContainer = document.createElement("div");
  newContainer.classList.add("container");
  let addedP = document.createElement("p");
  addedP.textContent = "Hai effettuato il login con successo!";
  let newButton = document.createElement("button");
  newButton.textContent = "Logout";
  document.body.appendChild(newContainer);
  newContainer.appendChild(addedP);
  newContainer.appendChild(newButton);

  newButton.addEventListener("click", () => {
    localStorage.removeItem("loginSuccess");
    location.reload();
  });
}

function onClickLogin() {
  let userEmail = emailInput.value;
  let userPassword = passwordInput.value;

  if (userEmail == "" || userPassword == "") {
    alert("Completa tutti i campi!");
  } else {
    localStorage.setItem("loginSuccess", "true");
    showLoginSuccessPage();
  }
}

loginBtn.addEventListener("click", onClickLogin);
