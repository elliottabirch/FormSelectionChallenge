/**
 * Note: Read README first.
 */
const contains = (array, values) => array.reduce((arrayContainsValue, val) => arrayContainsValue || values.includes(val), false);
 /* Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */
function getUsernameField() {
  const userRegEx = new RegExp('username|email|user|id', 'i');
  return getFormField().find('input').filter((index, element) => userRegEx.test(element.placeholder));
}

function getPasswordField() {
  const passwordRegEx = new RegExp('pass|pwd', 'i');
  return getFormField().find('input').filter((index, element) => passwordRegEx.test(element.placeholder));
}

function getFormField() {
  return $('form').filter((index, element) => contains(Object.keys(element.elements), ['password', 'pwd', 'email', 'username', 'email', 'onlineId1']));
}

function getSubmitButton() {
  const buttonRegEx = new RegExp('sign|in|log|next', 'i');
  const inputRegEx = new RegExp('sign on', 'i');
  const loginButtons = $('button').filter((index, element) => buttonRegEx.test(element.textContent));
  const loginInputs = $('input').filter((index, element) => inputRegEx.test(element.value));
  return loginButtons[0] || loginInputs;
}

/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function (username, password) {
  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  const usernameField = getUsernameField();
  const passwordField = getPasswordField();

  usernameField.val(username);
  passwordField.val(password);

  setTimeout(() => {
  	getSubmitButton().click();
  }, 1000);
};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function () {
  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    form: getFormField(),
    submitButton: getSubmitButton(),
    username: getUsernameField(),
    password: getPasswordField(),
  };
};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function () {
  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    username: getUsernameField().val(),
    password: getPasswordField().val(),
  };
};
