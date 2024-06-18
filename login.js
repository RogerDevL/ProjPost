const emailLogin = document.getElementById("email");
const passwordLogin = document.getElementById("senha");
const button1 = document.getElementById("button");

button1.addEventListener("click", function (event) {
    event.preventDefault();

    const userData1 = JSON.stringify({
        email: emailLogin.value,
        password: passwordLogin.value,
    });
    console.log(userData1)

    fetch("http://10.92.198.38:8080/auth/signin", {
        method: "POST",
        body: userData1,
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((result) => {
            alert("Workou")
            return result.json();
        })
        .then((data) => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                console.log('Token armazenado com sucesso:', data.token);
                window.location.href="postagem.html"
            } else {
                console.log('Token não encontrado na resposta da API');
            }
        })
        .catch((err) => {
            console.log(err);
        });
});