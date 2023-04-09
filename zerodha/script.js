function login() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	if (username === "" || password === "") {
		alert("Please enter your username and password.");
	} else {
		// code to log in user
		alert("Welcome back, " + username + "!");
	}
}
