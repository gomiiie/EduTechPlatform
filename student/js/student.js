function onlySpace(n) {
    let count = 0;;
    for (let i = 0; i < n.length; i++) {
        if (n[i] == " ") count++;
    }
    if (count == n.length) return true;
    return false;
}

function validName() {
    let name = document.getElementById("nameBox").value;
    const nameE = document.getElementById("nameError");
    if (name == "") {
        nameE.innerHTML = "Name cannot be empty";
        return false;
    }
    name = name.toLowerCase();

    if (onlySpace(name)) {
        nameE.innerHTML = "Name must not be spaces only";
        return false;
    }
    
    for (let i = 0; i < name.length; i++) {
        if ((name[i] >= 'a' && name[i] <= 'z') || name[i] == " ") {
            continue;
        }
        else {
            nameE.innerHTML = "Name can only contain English letters";
            return false;
        }
    }
    nameE.innerHTML = "";
    return true;
}

function validNum() {
    const phone = document.getElementById("telBox").value;
    const numE = document.getElementById("telError");
    if (phone === "") {
        numE.innerHTML = "";
        return true;
    }
    else {
        for (let i = 0; i < phone.length; i++) {
            if (phone[i] < "0" || phone[i] > "9") {
                numE.innerHTML = "Phone number must contain only numers";
                return false;
            }
        }
        if (!/^01/.test(phone)) {
            numE.innerHTML = "Phone number must start with 01";
            return false;
        }
        if (phone.length != 11) {
            numE.innerHTML = "Phone number must be 11 digits";
            return false;
        }
        numE.innerHTML = "";
        return true;
    }
}

function validAge() {
    let dob = document.getElementById("dobBox").value;
    const dobE = document.getElementById("dobError");
    if (dob === "") {
        dobE.innerHTML = "Please enter your date of birth";
        return false;
    }
    dob = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if (age >= 13) {
        dobE.innerHTML = "";
        return true;
    }
    else {
        console.log(age);
        dobE.innerHTML = "You must be at least 13";
        return false;
    }
}

function validPW() {

    var flag = true;
    const pw = document.getElementById("pwBox").value;
    const cpw = document.getElementById("cpwBox").value;

    const pwE = document.getElementById("pwError");
    const cpwE = document.getElementById("cpwError");

    if (pw === "") {
        pwE.innerHTML = "Password cannot be empty";
        flag = false;
    }
    else if (pw.includes(" ")) {
        pwE.innerHTML = "Password cannot contain spaces";
        flag = false;
    }
    else {
        pwE.innerHTML = "";
        flag = true;
    }

    if (cpw === "") {
        cpwE.innerHTML = "Confirm password cannot be empty";
        flag = false;
    }
    else if (pw !== cpw) {
        cpwE.innerHTML = "Confirm password doesn't match!";
        flag = false;
    }
    else {
        cpwE.innerHTML = "";
    }

    return flag;
}

function validInt() {
    const inputs = document.getElementsByClassName("interest-cbox");
    const cbE = document.getElementById("cboxError");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            cbE.innerHTML = "";
            return true;

        }
    }
    cbE.innerHTML = "Please select at least one interest"
    return false;
}

function validateForm() {

    let flag = true;
    if (!validName()) flag = false;
    if (!validNum()) flag = false;
    if (!validAge()) flag = false;
    if (!validPW()) flag = false;
    if (!validInt()) flag = false;

    if (flag) {
        alert("Registration Successful!");
    }

    return flag;
    /*
    if (!validName()) return false;
    if (!validNum()) return false;
    if (!validAge()) return false;
    if (!validPW()) return false;
    if (!validInt()) return false;
    return true;
    */
}

document.getElementById("dobBox").addEventListener("change", validAge);
document.getElementById("nameBox").addEventListener("keyup", validName);
document.getElementById("cpwBox").addEventListener("change", validPW);

const boxes = document.getElementsByClassName("interest-cbox");
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("change", validInt);
}