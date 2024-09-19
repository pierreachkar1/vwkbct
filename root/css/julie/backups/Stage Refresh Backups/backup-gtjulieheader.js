function changeSigninText() {
  const signinHeaderText = document.querySelector("#samHeaderTop_SignInIcon.b5-active .signin-text");
  const dynamicText = isUserLoggedIn() ? "Account" : "Sign In";

  if (signinHeaderText) {
    signinHeaderText.textContent = dynamicText;
  }
}

const isUserLoggedIn = () => {
  const loggedInElement = document.querySelector("#loggedIn");
  return loggedInElement && !loggedInElement.classList.contains('hidden');
}