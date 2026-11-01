document.addEventListener('DOMContentLoaded', function() {
    const regForm = document.getElementById('adminRegForm');
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
 
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const adminId = document.getElementById('adminId').value.trim();
            const department = document.getElementById('department').value;
            const accessCode = document.getElementById('accessCode').value.trim();
 
            document.getElementById('fullNameErr').innerHTML = "";
            document.getElementById('regEmailErr').innerHTML = "";
            document.getElementById('regPasswordErr').innerHTML = "";
            document.getElementById('confirmPasswordErr').innerHTML = "";
            document.getElementById('adminIdErr').innerHTML = "";
            document.getElementById('departmentErr').innerHTML = "";
            document.getElementById('accessCodeErr').innerHTML = "";
            document.getElementById('regSuccessMsg').innerHTML = "";
 
            const adminIdRegex = /^ADM-\d{4}$/;
            if (adminId === "") {
                document.getElementById('adminIdErr').innerHTML = "Admin ID cannot be empty";
                isValid = false;
            } else if (!adminIdRegex.test(adminId)) {
                document.getElementById('adminIdErr').innerHTML = "Admin ID must match pattern like ADM-1234";
                isValid = false;
            }
 
            const accessCodeRegex = /^[A-Za-z0-9]{8}$/;
            if (accessCode === "") {
                document.getElementById('accessCodeErr').innerHTML = "Access code cannot be empty";
                isValid = false;
            } else if (!accessCodeRegex.test(accessCode)) {
                document.getElementById('accessCodeErr').innerHTML = "Access code must be exactly 8 characters (letters and digits only)";
                isValid = false;
            }
 
            const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            if (email === "") {
                document.getElementById('regEmailErr').innerHTML = "Email cannot be empty";
                isValid = false;
            } else if (email !== email.toLowerCase() || !emailRegex.test(email)) {
                document.getElementById('regEmailErr').innerHTML = "Email must be valid and entirely lowercase";
                isValid = false;
            }
 
            const hasNumber = /\d/.test(password);
            const hasUpper = /[A-Z]/.test(password);
            const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
 
            if (password === "") {
                document.getElementById('regPasswordErr').innerHTML = "Password cannot be empty";
                isValid = false;
            } else if (password.length < 6 || !hasNumber || !hasUpper || !hasSpecial) {
                document.getElementById('regPasswordErr').innerHTML = "Password must be 6+ chars with 1 number, 1 uppercase, and 1 special char";
                isValid = false;
            }
 
            if (confirmPassword === "" || password !== confirmPassword) {
                document.getElementById('confirmPasswordErr').innerHTML = "Passwords do not match";
                isValid = false;
            }
 
            const nameRegex = /^[A-Za-z\s]+$/;
            if (fullName === "") {
                document.getElementById('fullNameErr').innerHTML = "Full Name cannot be empty";
                isValid = false;
            } else if (!nameRegex.test(fullName)) {
                document.getElementById('fullNameErr').innerHTML = "Full Name should contain only letters and spaces";
                isValid = false;
            } else if (fullName.length < 3 || fullName.length > 40) {
                document.getElementById('fullNameErr').innerHTML = "Full Name length must be between 3 and 40 characters";
                isValid = false;
            }
 
            if (department === "") {
                document.getElementById('departmentErr').innerHTML = "Please select a department";
                isValid = false;
            }
 
            if (isValid) {
                document.getElementById('regSuccessMsg').innerHTML = "Registration Successful!";
            }
        });
    }
});