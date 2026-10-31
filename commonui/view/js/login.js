function validSelect() {
    const userType = document.getElementById("userTypeSelect").value;
    const typeE = document.getElementById("typeError");
    if (userType == ""){
        typeE.innerHTML = "Please select a user type";
        return false;
    }
    typeE.innerHTML = "";
    return true;
}

function validEmail() {
    const email = document.getElementById("emailBox").value;
    const emailE = document.getElementById("emailError");
    if (email === "") {
        emailE.innerHTML = "Email cannot be empty";
        return false;
    }
    if (!email.includes("@") || !email.includes(".com")) {
        emailE.innerHTML = "Email must contain @ .com domain";
        return false;
    }
    emailE.innerHTML = "";
    return true;
}

function validPW() {
    const pw = document.getElementById("pwBox").value;
    const pwE = document.getElementById("pwError");
    if (pw == "") {
        pwE.innerHTML = "Password cannot be empty";
        return false;
    }
    pwE.innerHTML = "";
    return true;
}

function validateForm() {
    let flag = true;
    if (!validSelect()) flag = false;
    if (!validEmail()) flag = false;
    if (!validPW()) flag = false;

    return flag;

}

document.getElementById("userTypeSelect").addEventListener("change", validSelect);
document.getElementById("emailBox").addEventListener("keyup", validEmail);
document.getElementById("pwBox").addEventListener("keyup", validPW);

