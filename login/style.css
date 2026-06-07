// Integrasi Sistem Auth Komplet (Login, Register, Welcome, Logout) + Animasi UI Neon Minimalist Bawaan Template

class AuthSystem {
    constructor() {
        this.form = document.getElementById('loginForm');
        this.loginForm = document.getElementById('loginForm');
        this.registerForm = document.getElementById('registerForm');
        this.submitBtn = this.form ? this.form.querySelector('.login-btn') : null;
        this.passwordToggle = document.getElementById('passwordToggle');
        this.passwordInput = document.getElementById('password');
        this.successMessage = document.getElementById('successMessage');
        this.isSubmitting = false;
        
        this.init();
    }
    
    init() {
        this.addEventListeners();
        this.setupFloatingLabels();
        this.addInputAnimations();
        this.setupPasswordToggle();
        this.setupSocialButtons();
        this.addBackgroundEffects();
        this.setupKeyboardShortcuts();
    }
    
    addEventListeners() {
        // Event submit untuk FORM LOGIN
        if (this.loginForm) {
            this.loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // Event submit untuk FORM REGISTER
        if (this.registerForm) {
            this.registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        }
        
        // Efek fokus neon pada input fields
        const inputs = document.querySelectorAll('.login-form input');
        inputs.forEach(input => {
            input.addEventListener('focus', (e) => this.handleFocus(e));
            input.addEventListener('blur', (e) => this.handleBlur(e));
        });
    }

    // ==========================================
    // LOGIKA FITUR LOGIN API
    // ==========================================
    async handleLogin(e) {
        e.preventDefault();
        if (this.isSubmitting) return;

        const usernameInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const alertBox = document.getElementById("loginAlert");

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            this.showCustomFieldError("email", "password");
            this.showAlert(alertBox, "Harap isi email/username dan password!");
            return;
        }

        this.isSubmitting = true;
        if (this.submitBtn) {
            this.submitBtn.classList.add('loading');
            this.submitBtn.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.6)';
            const btnText = this.submitBtn.querySelector('.btn-text');
            if (btnText) btnText.innerText = 'Verifying...';
        }

        try {
            const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
            });

            const data = await res.json();

            if (data.status === "success") {
                localStorage.setItem("username", data.username);
                
                // Animasi sukses bawaan template
                document.getElementById("successTitle").innerText = "Welcome Back!";
                document.getElementById("successSub").innerText = "Redirecting to matrix core...";
                
                if (this.loginForm) this.loginForm.style.opacity = '0';
                if (this.successMessage) this.successMessage.classList.add('active');
                
                setTimeout(() => {
                    window.location.href = "../index.html";
                }, 2000);
            } else {
                this.showAlert(alertBox, "Login gagal! Username atau Password salah.");
                this.shakeForm();
                this.resetSubmitButton();
            }
        } catch (error) {
            this.showAlert(alertBox, "Error: Terjadi kesalahan jaringan / server API.");
            this.resetSubmitButton();
        }
    }

    // ==========================================
    // LOGIKA FITUR REGISTER API
    // ==========================================
    async handleRegister(e) {
        e.preventDefault();
        const username = document.getElementById("regUsername").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const password = document.getElementById("regPassword").value.trim();
        const alertBox = document.getElementById("registerAlert");

        if (!username || !email || !password) {
            this.showAlert(alertBox, "Harap lengkapi semua data registrasi!");
            return;
        }

        try {
            const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `action=register&username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
            });

            const data = await res.json();

            if (data.status === "success") {
                document.getElementById("successTitle").innerText = "Account Created!";
                document.getElementById("successSub").innerText = "Registration successful. Ready to Sign In!";
                if (this.registerForm) this.registerForm.style.opacity = '0';
                if (this.successMessage) this.successMessage.classList.add('active');
                
                setTimeout(() => {
                    if (this.successMessage) this.successMessage.classList.remove('active');
                    if (this.loginForm) this.loginForm.style.opacity = '1';
                    if (this.registerForm) this.registerForm.style.opacity = '1';
                    this.loginForm.reset();
                    this.registerForm.reset();
                    switchForm('login');
                }, 2500);
            } else {
                this.showAlert(alertBox, data.message || "Registrasi gagal, silakan coba lagi.");
                this.shakeForm();
            }
        } catch (error) {
            this.showAlert(alertBox, "Error: Gagal memproses data registrasi.");
        }
    }

    // ==========================================
    // LOGIKA ANIMASI & UI NEON DARI TEMPLATE ASLI
    // ==========================================
    resetSubmitButton() {
        this.isSubmitting = false;
        if (this.submitBtn) {
            this.submitBtn.classList.remove('loading');
            this.submitBtn.style.boxShadow = '';
            const btnText = this.submitBtn.querySelector('.btn-text');
            if (btnText) btnText.innerText = 'Sign In';
        }
    }

    showAlert(element, message) {
        if (!element) return;
        element.innerText = message;
        element.style.display = "block";
        setTimeout(() => { element.style.display = "none"; }, 4000);
    }
    
    setupFloatingLabels() {
        const inputs = document.querySelectorAll('.login-form input');
        inputs.forEach(input => {
            if (input.value.trim() !== '') input.parentElement.classList.add('has-value');
            
            input.addEventListener('input', () => {
                if (input.value.trim() !== '') {
                    input.parentElement.classList.add('has-value');
                } else {
                    input.parentElement.classList.remove('has-value');
                }
            });
        });
    }
    
    addInputAnimations() {
        const inputs = document.querySelectorAll('.login-form input');
        inputs.forEach((input, index) => {
            input.style.opacity = '0';
            input.style.transform = 'translateX(-20px)';
            setTimeout(() => {
                input.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                input.style.opacity = '1';
                input.style.transform = 'translateX(0)';
            }, index * 150);
        });
    }
    
    setupPasswordToggle() {
        if (this.passwordToggle && this.passwordInput) {
            this.passwordToggle.addEventListener('click', () => {
                const isPassword = this.passwordInput.type === 'password';
                this.passwordInput.type = isPassword ? 'text' : 'password';
                
                this.passwordToggle.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.5)';
                setTimeout(() => { this.passwordToggle.style.boxShadow = ''; }, 300);
                this.passwordInput.focus();
            });
        }
    }
    
    setupSocialButtons() {
        const socialButtons = document.querySelectorAll('.social-btn');
        socialButtons.forEach(btn => {
            btn.addEventListener('mouseenter', () => { btn.style.boxShadow = '0 4px 20px rgba(0, 255, 136, 0.2)'; });
            btn.addEventListener('mouseleave', () => { btn.style.boxShadow = ''; });
        });
    }
    
    addBackgroundEffects() {
        document.addEventListener('mousemove', (e) => {
            const orbs = document.querySelectorAll('.glow-orb');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.5;
                const moveX = (x - 0.5) * speed * 20;
                const moveY = (y - 0.5) * speed * 20;
                orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
    }
    
    handleFocus(e) {
        const wrapper = e.target.closest('.input-wrapper');
        if (wrapper) {
            wrapper.classList.add('focused');
            e.target.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.1)';
        }
    }
    
    handleBlur(e) {
        const wrapper = e.target.closest('.input-wrapper');
        if (wrapper) {
            wrapper.classList.remove('focused');
            e.target.style.boxShadow = '';
        }
    }

    showCustomFieldError(...fieldIds) {
        fieldIds.forEach(id => {
            const field = document.getElementById(id);
            if (field) {
                field.style.animation = 'shake 0.5s ease-in-out';
                field.style.boxShadow = '0 0 15px rgba(255, 0, 128, 0.5)';
                setTimeout(() => { field.style.animation = ''; field.style.boxShadow = ''; }, 500);
            }
        });
    }
    
    shakeForm() {
        const card = document.querySelector('.login-card');
        if (card) {
            card.style.animation = 'shake 0.5s ease-in-out';
            card.style.boxShadow = '0 0 40px rgba(255, 0, 128, 0.5)';
            setTimeout(() => { card.style.animation = ''; card.style.boxShadow = ''; }, 500);
        }
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.closest('#loginForm')) {
                e.preventDefault();
                this.handleLogin(e);
            }
            if (e.key === 'Enter' && e.target.closest('#registerForm')) {
                e.preventDefault();
                this.handleRegister(e);
            }
        });
    }
}

// Fungsi global navigasi tab geser dinamis Login <-> Register
window.switchForm = function(target) {
    const loginSec = document.getElementById('loginSection');
    const registerSec = document.getElementById('registerSection');
    
    if (target === 'register') {
        if (loginSec) loginSec.style.display = 'none';
        if (registerSec) registerSec.style.display = 'block';
    } else {
        if (registerSec) registerSec.style.display = 'none';
        if (loginSec) loginSec.style.display = 'block';
    }
    
    const inputs = document.querySelectorAll('.login-form input');
    inputs.forEach(input => {
        if (input.value.trim() !== '') input.parentElement.classList.add('has-value');
        else input.parentElement.classList.remove('has-value');
    });
};

// Start system
document.addEventListener('DOMContentLoaded', () => {
    const loginCard = document.querySelector('.login-card');
    if (loginCard) {
        loginCard.style.opacity = '0';
        loginCard.style.transform = 'translateY(30px) scale(0.9)';
        setTimeout(() => {
            loginCard.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            loginCard.style.opacity = '1';
            loginCard.style.transform = 'translateY(0) scale(1)';
        }, 200);
    }
    new AuthSystem();
});