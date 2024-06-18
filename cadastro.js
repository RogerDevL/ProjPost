
const button = document.getElementById("submit");
const nameu = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

button.addEventListener("click", function (event) {

    event.preventDefault();

    const userData = JSON.stringify({
        name: nameu.value,
        email: email.value,
        password: password.value,

    });
    console.log(userData)

    fetch("http://10.92.198.38:8080/auth/signup", {
        method: "POST",
        body: userData,
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then((result) => {
        alert("Workou")
        window.location.href="login.html"
        return result.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err)
    });
});




