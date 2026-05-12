async function checkPassword() {
  const password = document.getElementById("password").value;

  const SUPABASE_URL = "https://hikjsrlutktilnqsexil.supabase.co";
  const SUPABASE_KEY = "sb_publishable_PY2rb6a_7wmWZZV1SNCfbQ_zxlXeqco";

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/passwords?id=eq.1`,
      {
        method: "GET",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      }
    );

    const data = await response.json();

    // sécurité : vérifier si données existent
    if (!data || data.length === 0) {
      document.getElementById("error").innerText =
        "Erreur serveur";
      return;
    }

    const realPassword = data[0].password;

    if (password === realPassword) {
      window.location.href = "app.html";
    } else {
      document.getElementById("error").innerText =
        "Mot de passe incorrect";
    }

  } catch (error) {
    console.error(error);
    document.getElementById("error").innerText =
      "Erreur de connexion à la base de données";
  }
}