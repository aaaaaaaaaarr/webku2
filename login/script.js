document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
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

    // Login submit
    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username) {
            showAlert("Username wajib diisi", "error");
            return;
        }

        if (!password) {
            showAlert("Password wajib diisi", "error");
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
                        `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
                }
            );

            const data = await response.json();

            if (data.status === "success") {

                localStorage.setItem(
                    "username",
                    data.username
                );

                showSuccess();

                setTimeout(() => {
                    window.location.href = "../index.html";
                }, 2000);

            } else {

                showAlert(
                    data.message ||
                    "Username atau Password salah",
                    "error"
                );

            }

        } catch (error) {

            console.error(error);

            showAlert(
                "Terjadi kesalahan koneksi",
                "error"
            );

        } finally {

            submitBtn.classList.remove("loading");

        }

    });

    function showAlert(message, type = "error") {

        if (!alertBox) {
            alert(message);
            return;
        }

        alertBox.textContent = message;
        alertBox.className = `api-alert ${type}`;
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

});