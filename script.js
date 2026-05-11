function checkPassword() {

    const password = document.getElementById("password").value;

    if(password === "sbp@mdi_2026") {

        window.location.href = "app.html";

    } else {

        document.getElementById("error").innerText =
            "Mot de passe incorrect";

    }
}