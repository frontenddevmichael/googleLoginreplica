function usrNameValidation() {
    const usrName = document.getElementById('emailInp');
    const placeHolder = document.querySelector('.placeHolder');
    const btn = document.getElementById('nxtBtn');
    const isValidEmail = /\S+@\S+\.\S+/;
    const login = document.querySelector('.login');
    const pg2 = document.querySelector(".lgCntd");
    const logo = document.querySelector(".logo");

    function resetStyles() {
        usrName.classList.remove('shake');
        placeHolder.classList.remove('shake');
        usrName.style.borderColor = "";
        placeHolder.style.color = "";
    }

    function showError() {
        usrName.classList.add('shake');
        placeHolder.classList.add('shake');
        usrName.style.borderColor = "var(--error-color)";
        placeHolder.style.color = "var(--error-color)";

        if ("vibrate" in navigator) {
            navigator.vibrate([100, 50, 100]);
        }


        setTimeout(() => {
            usrName.classList.remove('shake');
            placeHolder.classList.remove('shake');
        }, 300);
    }

    function validateInput() {
        const inputValue = usrName.value.trim();

        resetStyles();

        if (inputValue === "") {
            showError();
            return false;
        }

        // Check if input contains @ symbol, then validate email format
        if (inputValue.includes("@")) {
            if (!isValidEmail.test(inputValue)) {
                showError();
                return false;
            }
        }

        return true;
    }

    btn.addEventListener('click', (e) => {
        if (!validateInput()) {
            e.preventDefault();
        } else {
            login.classList.add('showPg2');
            pg2.classList.add('showPg2');
            logo.classList.add('active');
            document.getElementById('usrId').style.display = "flex"
            document.getElementById('usrId').textContent = ` ${usrName.value.trim()}`
        }
    });
    usrName.addEventListener('input', () => {
        resetStyles();
    });
    usrName.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            btn.click();
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    usrNameValidation();
});

//button to go back to the first page
document.getElementById('goBack').addEventListener('click', () => {
    const login = document.querySelector('.login');
    const pg2 = document.querySelector(".lgCntd");
    const logo = document.querySelector(".logo");
    login.classList.remove('showPg2');
    pg2.classList.remove('showPg2');
    logo.classList.remove('active');
    document.getElementById('usrId').style.display = "none";
});

//button feedback
// Button feedback
function buttonFeedback() {
    const buttons = [
        document.getElementById('nxtBtn'),
        document.getElementById('crtBtn'),
        document.querySelector('.signIn'),
        document.getElementById('goBack')
    ];

    buttons.forEach((button) => {
        if (button) {
            button.addEventListener('click', () => {
                // Vibrate if supported
                if ("vibrate" in navigator) {
                    navigator.vibrate([50]);
                }
            });
        }
    });
}

// Initialize the function
document.addEventListener('DOMContentLoaded', () => {
    buttonFeedback();
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passInp');
    const toggleButton = document.getElementById('tgBtn');

    toggleButton.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleButton.classList.remove('fa-eye-slash');
            toggleButton.classList.add('fa-eye');   
        } else {
            passwordInput.type = 'password';
            toggleButton.classList.remove('fa-eye');
            toggleButton.classList.add('fa-eye-slash'); 
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    togglePasswordVisibility();
});

function validatePassword() {
    const passwordInput = document.getElementById('passInp');
    const signIn = document.querySelector('.signIn');
    

    signIn.addEventListener('click', (e) => {
        const password = passwordInput.value.trim();
        const placeHolder = document.getElementById('passWordPlaceholder');
        if (password === "") {
            passwordInput.style.borderColor = "var(--error-color)";
            passwordInput.classList.add('shake');
            placeHolder.classList.add('shake');
            placeHolder.style.color = "var(--error-color)";
            if ("vibrate" in navigator) {
                navigator.vibrate([100, 50, 100]);
            }
            setTimeout(() => {
                passwordInput.classList.remove('shake');
                placeHolder.classList.remove('shake');
            }, 300);
            e.preventDefault();
        } else if (password.length < 8) {
            passwordInput.style.borderColor = "var(--error-color)";
            passwordInput.classList.add('shake');
            placeHolder.classList.add('shake');
            placeHolder.style.color = "var(--error-color)";
            if ("vibrate" in navigator) {
                navigator.vibrate([100, 50, 100]);
            }
            setTimeout(() => {
                passwordInput.classList.remove('shake');
                placeHolder.classList.remove('shake');
            }, 300);
            e.preventDefault();

        } else {
            passwordInput.style.borderColor = "green";
        }
        //onEnter key press
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === "Enter") {
                signIn.click();
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    validatePassword();
});
