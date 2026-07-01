//your JS code here. If required.
const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const existingBtn = document.querySelector("#existing");
const checkbox = document.querySelector("#checkbox");

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

existingBtn.style.display = "none";

if (savedUsername && savedPassword) {
	existingBtn.style.display = "block";
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const user = username.value;
	const pass = password.value;

	alert(`Logged in as ${user}`);

	if (checkbox.checked) {
		localStorage.setItem("username", user);
		localStorage.setItem("password", pass);

		existingBtn.style.display = "block";
	} else {
		localStorage.removeItem("username");
		localStorage.removeItem("password");

		existingBtn.style.display = "none";
	}
})

existingBtn.addEventListener("click", () => {
	const savedUser = localStorage.getItem("username");
	alert(`Logged in as ${savedUser}`);
})