function validate_email() {

    let email = document.getElementById("emailid").value;
    let confirm_email = document.getElementById("confemail").value;

        if (email !== confirm_email) {
            alert("The email addresses do not match. Please try again.");
            return false;

        } else {

            return true;
        }
    }