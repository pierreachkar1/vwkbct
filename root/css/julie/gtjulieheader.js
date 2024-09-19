function changeSigninText(token) {
  const signinHeaderText = document.querySelector("#samHeaderTop_SignInIcon.b5-active .signin-text");
  const name = token ? truncateName(token, 15) : "Account";
  const dynamicText = isUserLoggedIn() ? name : "Sign In";

  if (signinHeaderText) {
    signinHeaderText.textContent = dynamicText;
  }
}

function truncateName(name, maxLength) {
  if (name.length > maxLength) {
    return name.substring(0, maxLength) + '…';
  }
  return name;
}

const isUserLoggedIn = () => {
  const loggedInElement = document.querySelector("#loggedIn");
  return loggedInElement && !loggedInElement.classList.contains('hidden');
}