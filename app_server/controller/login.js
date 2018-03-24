var expression=/\s+/g;

function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(expression.test(password) || expression.test(username)){
		alert("No Whitespaces allowed");
	}
	if ( username == "abc@gmail.com" && password == "password"){
		alert ("Login successfully");
		window.location = "currency.html"; // Redirecting to first page
		return false;
	}
	if (username == "")
    {
        window.alert("Please enter your username/email id.");
        username.focus();
        return false;
    }
	if (password == "")
    {
        window.alert("Please enter your password.");
        password.focus();
        return false;
    }
	if (username.indexOf("@", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        username.focus();
        return false;
    }
    if (username.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        username.focus();
        return false;
    }
	else {
		window.alert ("Wrong Credentials");
	}

}
