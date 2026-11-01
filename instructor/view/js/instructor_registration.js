// Instructor Registration Form Validation

//Restricted Usernames
const takenUsernames = ["admin", "instructor", "teacher", "customer_support"];

// Show (or clear) a red message under a field
function setMessage(id, message) {
  let box = document.getElementById(id + "_error");
  box.innerHTML = message;
  box.style.color = "red";
  box.style.fontSize = "0.85rem";
}

//---Account details -----

function validateEmail() {
  let email = document.getElementById("email").value.trim(); //remove space s-e
  if (email == "") {
    setMessage("email", "Email cannot be empty");
    return false;
  }
  if (email !== email.toLowerCase()) {
    setMessage("email", "Email must be in lowercase letters");
    return false;
  }
  if (!/^[a-z0-9._-]+@[a-z0-9-]+\.[a-z]{3,}$/.test(email)) {
    setMessage("email", "Enter a valid email address (e.g. lipu@email.com)");
    return false;
  }
  setMessage("email", "");
  return true;
}

function validateUsername() {
  let username = document.getElementById("username").value.trim();
  if (username == "") {
    setMessage("username", "Username cannot be empty");
    return false;
  }
  if (username.length < 4 || username.length > 20) {
    setMessage("username", "Username must be 4 to 20 characters");
    return false;
  }
  if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(username)) {
    setMessage("username", "Username must start with a letter and use only letters, numbers and _");
    return false;
  }
  for (let i = 0; i < takenUsernames.length; i++) {
    if (takenUsernames[i] === username.toLowerCase()) {
      setMessage("username", "This username is already taken");
      return false;
    }
  }
  setMessage("username", "");
  return true;
}

function validatePassword() {
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value.trim().toLowerCase();
  if (password == "") {
    setMessage("password", "Password cannot be empty");
    return false;
  }
  if (password.length < 8) {
    setMessage("password", "Password is too weak: use at least 8 characters");
    return false;
  }
  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
    setMessage("password", "Password is too weak: use 1 lowercase, 1 uppercase, 1 number and 1 special character");
    return false;
  }
  if (username != "" && password.toLowerCase().indexOf(username) !== -1) {
    setMessage("password", "Password must not contain your username");
    return false;
  }
  setMessage("password", "");
  return true;
}

function validateConfirmPassword() {
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm_password").value;
  if (confirm == "") {
    setMessage("confirm_password", "Please confirm your password");
    return false;
  }
  if (password !== confirm) {
    setMessage("confirm_password", "Passwords do not match");
    return false;
  }
  setMessage("confirm_password", "");
  return true;
}

// When the password changes, check the confirm box again
function passwordChanged() {
  validatePassword();
  if (document.getElementById("confirm_password").value != "") {
    validateConfirmPassword();
  }
}

// Personal details TextField

function validateName() {
  let name = document.getElementById("name").value.trim();
  if (name == "") {
    setMessage("name", "Full name cannot be empty");
    return false;
  }
  if (!/^[A-Za-z. ]+$/.test(name)) {
    setMessage("name", "Name should contain only letters");
    return false;
  }
  setMessage("name", "");
  return true;
}

// DOB
function validateDob() {
  let dob = document.getElementById("dob").value;
  if (dob == "") {
    setMessage("dob", "");
    return true;
  }
  let year = Number(dob.slice(0, 4));
  if (year < 1940) {
    setMessage("dob", "Enter a valid date of birth");
    return false;
  }
  if (year > 2008) {
    setMessage("dob", "Instructor must be at least 18 years old");
    return false;
  }
  setMessage("dob", "");
  return true;
}

//Phone: format +880 1XXXXXXXXX (with a space)
function validatePhone() {
  let phone = document.getElementById("phone").value.trim();
  if (phone == "") {
    setMessage("phone", "");
    return true;
  }
  if (!/^\+880 1[0-9]+$/.test(phone)) {
    setMessage("phone", "Phone must be like +880 1XXXXXXXXX (digits only after +880 1)");
    return false;
  }
  if (phone.length < 15 || phone.length > 17) {
    setMessage("phone", "Phone must have to 15 digits in total");
    return false;
  }
  setMessage("phone", "");
  return true;
}

// Function to validate Letters or not for many fields 
function validateLetters(id, label) {
  let value = document.getElementById(id).value.trim();
  if (value != "" && !/^[A-Za-z .,&-]+$/.test(value)) {
    setMessage(id, label + " should contain only letters");
    return false;
  }
  setMessage(id, "");
  return true;
}

function validateNationality() {
  return validateLetters("nationality", "Nationality");
}

//address :10 to 200 characters
function validateAddress(id) {
  let address = document.getElementById(id).value.trim();
  if (address != "" && address.length < 10) {
    setMessage(id, "Address must be at least 10 characters");
    return false;
  }
  if (address.length > 200) {
    setMessage(id, "Address must not be more than 200 characters");
    return false;
  }
  setMessage(id, "");
  return true;
}

function validatePresentAddress() {
  return validateAddress("present_address");
}

function validatePermanentAddress() {
  return validateAddress("permanent_address");
}

// --------Professional information----------

function validateTitle() {
  let title = document.getElementById("title").value.trim();
  if (title == "") {
    setMessage("title", "Professional title cannot be empty");
    return false;
  }
  if (title.length < 3 || !/^[A-Za-z .&-]+$/.test(title)) {
    setMessage("title", "Title must be at least 3 characters and contain only letters");
    return false;
  }
  setMessage("title", "");
  return true;
}

function validateExpertise() {
  let expertise = document.getElementById("expertise").value.trim();
  if (expertise == "") {
    setMessage("expertise", "Area of expertise cannot be empty");
    return false;
  }
  if (!/^[A-Za-z .&-]+$/.test(expertise)) {
    setMessage("expertise", "Area of expertise should contain only letters");
    return false;
  }
  setMessage("expertise", "");
  return true;
}

function validateExperience() {
  let text = document.getElementById("experience").value;
  let years = Number(text);
  if (text == "") {
    setMessage("experience", "Years of experience cannot be empty");
    return false;
  }
  if (isNaN(years) || years % 1 !== 0) {
    setMessage("experience", "Experience must be a whole number");
    return false;
  }
  if (years < 0 || years > 50) {
    setMessage("experience", "Experience must be between 0 and 50 years");
    return false;
  }
  setMessage("experience", "");
  return true;
}

// optional: expected salary
function validatePrice() {
  let text = document.getElementById("price").value;
  let price = Number(text);
  if (text == "") {
    setMessage("price", ""); //as optional so it can be empty
    return true;
  }
  if (isNaN(price) || price < 0) {
    setMessage("price", "Price must be a positive number");
    return false;
  }
  if (price % 100 !== 0) {
    setMessage("price", "Price must be in multiples of 100 (e.g. 2500)");
    return false;
  }
  if (price > 10000) {
    setMessage("price", "Price must not be more than 10000 BDT");
    return false;
  }
  setMessage("price", "");
  return true;
}

//optional: weekly hours, 1 to 40
function validateAvailability() {
  let text = document.getElementById("availability").value;
  let hours = Number(text);
  if (text == "") {                 //as optional, can be empty
    setMessage("availability", "");
    return true;
  }
  if (isNaN(hours) || hours % 1 !== 0) {
    setMessage("availability", "Hours must be a whole number");
    return false;
  }
  if (hours < 1 || hours > 40) {
    setMessage("availability", "Hours must be between 1 and 40");
    return false;
  }
  setMessage("availability", "");
  return true;
}

// bio 20 to 500 characters (optional)
function validateBio() {
  let bio = document.getElementById("bio").value.trim();
  if (bio != "" && bio.length < 20) {
    setMessage("bio", "Bio must be at least 20 characters");
    return false;
  }
  if (/^[0-9]+$/.test(bio)) {
    setMessage("bio", "Bio cannot contain only numbers");
    return false;
  }
  if (bio.length > 500) {
    setMessage("bio", "Bio must not be more than 500 characters");
    return false;
  }
  setMessage("bio", "");
  return true;
}

// -------------Education information-----------------------

function validateSubject() {
  return validateLetters("subject", "Field of study");
}

function validateUniversity() {
  return validateLetters("university", "University");
}

function validatePassingYear() {
  let text = document.getElementById("passing_year").value;
  let year = Number(text);
  if (text == "") {
    setMessage("passing_year", "");
    return true;
  }
  if (isNaN(year) || year % 1 !== 0 || year < 1970 || year > 2026) {
    setMessage("passing_year", "Passing year must be between 1970 and 2026");
    return false;
  }
  setMessage("passing_year", "");
  return true;
}

// ----------Documents TextField------------------------------------
//optional; Portfolio
function validatePortfolio() {
  let link = document.getElementById("portfolio").value.trim();
  if (link != "" && !/^https?:\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,}(\/.*)?$/.test(link)) {
    setMessage("portfolio", "Enter a valid link starting with http:// or https://");
    return false;
  }
  setMessage("portfolio", "");
  return true;
}

// Required files(many use): a file must be chosen and its name must end with an valid type
function validateFile(id, label, pattern, message) {
  let file = document.getElementById(id).value;
  if (file == "") {
    setMessage(id, label + " is required");
    return false;
  }
  if (!pattern.test(file)) { //pattern parameter to match specific regex
    setMessage(id, message);
    return false;
  }
  setMessage(id, "");
  return true;
}

function validateCv() {
  return validateFile("cv", "CV", /\.(pdf|doc|docx)$/i, "CV must be a PDF or Word file");
}

function validatePhoto() {
  return validateFile("photo", "Photo", /\.(jpg|jpeg|png|HEIC)$/i, "Photo must be a JPG, PNG or HEIC image");
}

function validateIdFile() {
  return validateFile("id_file", "ID", /\.(pdf|jpg|jpeg|png|HEIC)$/i, "ID must be a PDF, JPG, PNG or HEIC file");
}

function validateCertificate() {
  return validateFile("certificate", "Certificate", /\.(doc|docx|pdf|jpg|jpeg|png|HEIC)$/i, "Certificate must be a PDF,DOCX, DOC, JPG or PNG or HEIC file");
}
//vaalidate is the check box is filled or not 
function validateTerms() {
  if (!document.getElementById("terms").checked) {
    setMessage("terms", "You must agree to the Terms and Conditions");
    return false;
  }
  setMessage("terms", "");
  return true;
}

// ---------- All fields: id + the function that checks it ----------

const fields = [ 
  { id: "email", check: validateEmail }, //property -> id: go the element , check: check function
  { id: "username", check: validateUsername },
  { id: "password", check: validatePassword },
  { id: "confirm_password", check: validateConfirmPassword },
  { id: "name", check: validateName },
  { id: "dob", check: validateDob },
  { id: "phone", check: validatePhone },
  { id: "nationality", check: validateNationality },
  { id: "present_address", check: validatePresentAddress },
  { id: "permanent_address", check: validatePermanentAddress },
  { id: "title", check: validateTitle },
  { id: "expertise", check: validateExpertise },
  { id: "experience", check: validateExperience },
  { id: "price", check: validatePrice },
  { id: "availability", check: validateAvailability },
  { id: "bio", check: validateBio },
  { id: "subject", check: validateSubject },
  { id: "university", check: validateUniversity },
  { id: "passing_year", check: validatePassingYear },
  { id: "portfolio", check: validatePortfolio },
  { id: "cv", check: validateCv },
  { id: "photo", check: validatePhoto },
  { id: "id_file", check: validateIdFile },
  { id: "certificate", check: validateCertificate },
  { id: "terms", check: validateTerms }
];

// Runs when the form is submitted: false stops sending, true sends the form
function validateForm() {
  let errors = 0;
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].check()) { //count increase if return false
      errors++;
    }
  }

  let message = document.getElementById("form_message");
  if (errors > 0) {
    console.log("Registration errors: " + errors); //write in console for debuging (to dev)
    message.innerHTML = "Please fix the " + errors + " error(s) shown above.";
    message.style.color = "red";
    return false;
  }

  console.log("Registration is valid");
  message.innerHTML = "Registration Successful!";
  message.style.color = "green";
  return true;
}

// Clear Form button: remove all messages
function clearMessages() {
  for (let i = 0; i < fields.length; i++) {
    setMessage(fields[i].id, ""); //set empty mesage to each id for remove all mesage
  }
  document.getElementById("form_message").innerHTML = "";
}

// ------------------------------------- Events-----------------------------

document.getElementById("registration_form").onsubmit = validateForm; // submit to validateForm() function
document.getElementById("clear_btn").onclick = clearMessages; // reset to clearMessage() function

// change event: check a field as soon as the user finishes editing it
for (let i = 0; i < fields.length; i++) {
  document.getElementById(fields[i].id).onchange = fields[i].check; //onchange handler to trigger JS
}
document.getElementById("password").onchange = passwordChanged;
