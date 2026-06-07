const form = document.getElementById("registerForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("passwordToggle");
const successMessage = document.getElementById("successMessage");
const alertBox = document.getElementById("alertBox");

// Toggle password
if (passwordToggle) {
    passwordToggle.addEventListener("click", () => {

        const isPassword = passwordInput.type === "password";

        passwordInput.type = isPassword ? "text" : "password";

        const icon = passwordToggle.querySelector(".toggle-icon");

        if (icon) {
            icon.classList.toggle("show-password");
        }
    });
}

// Register submit
form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username) {
        showAlert("Username wajib diisi");
        return;
    }

    if (!email) {
        showAlert("Email wajib diisi");
        return;
    }

    if (!password) {
        showAlert("Password wajib diisi");
        return;
    }

    const submitBtn = form.querySelector(".login-btn");

    submitBtn.classList.add("loading");

    try {

        const response = await fetch(
            "https://herisusanta.my.id/javalogin/api/auth.php",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded"
                },
                body:
                    `action=register&username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
            }
        );

        const data = await response.json();

        if (data.status === "success") {

            showSuccess();

            setTimeout(() => {
                window.location.href = "../login/";
            }, 2000);

        } else {

            showAlert(
                data.message ||
                "Registrasi gagal"
            );

        }

    } catch (error) {

        console.error(error);

        showAlert(
            "Terjadi kesalahan koneksi"
        );

    } finally {

        submitBtn.classList.remove("loading");

    }

});

function showAlert(message) {

    if (!alertBox) {
        alert(message);
        return;
    }

    alertBox.textContent = message;
    alertBox.style.display = "block";

    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
}

function showSuccess() {

    form.style.display = "none";

    const divider = document.querySelector(".divider");
    const social = document.querySelector(".social-login");
    const signup = document.querySelector(".signup-link");

    if (divider) divider.style.display = "none";
    if (social) social.style.display = "none";
    if (signup) signup.style.display = "none";

    successMessage.classList.add("show");
}