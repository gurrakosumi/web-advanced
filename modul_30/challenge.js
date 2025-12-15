function validation(){
    var name = document.getElementById("name").ariaValueMax;
    var username = document.getElementById("username").ariaValueMax;
    var email = document.getElementById("email").ariaValueMax;
    var password = document.getElementById("password").ariaValueMax;

    // Regex rules
    var name_regex = /^[A-Za-z0-9' /-]/;
    var username_regex = /^(?!.*[A-zA-Z0-9._])/;
    var email_regex = /^[a-zA-Z0-9./];
    var password_regex = /^(?=[a-z])[a-z][A-Z]$/;

    var valid = true;
    
// NAME
    if (!name.match(name_regex)) {
        document.getElementById("name_error").style.visibility = "visible";
        document.getElementById("name").style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("name").style.borderColor = "black";
    }

// USERNAME
        
    if (!(username.match(username_regex))){
    document,getElementById("username_error").style.visibility = "visible";
    document.getElementById("username").style.borderColor = "red";
    valid = false;
    } else {
        document.getElementById("email_error").style.visibility = "visible";
        document.getElementById("email").style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById("password_error").style.visibility = "hidden";
        document.getElementById("password").style.borderColor = "black";
    }

    return valid
}