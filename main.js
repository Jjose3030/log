const register = document.getElementById("register-btn");
const logArea = document.querySelector(".log-area");
const signArea = document.querySelector(".sign-area")
const signUp = document.querySelector(".sign-cont");
const logIn = document.querySelector(".log-cont");
const logBtn = document.getElementById("login-button");
const logMessage = document.querySelector(".log-message");
const signMessage = document.querySelector(".sign-message");
const logForm = document.getElementById("log-form");
const signForm = document.getElementById("sign-form");







const none = document.querySelectorAll(".none");
const noned = document.querySelectorAll(".noned");



register.addEventListener("click", ()=> {
    logMessage.classList.add("width");
    logArea.style.display = "none";
    signMessage.classList.remove("reverse");
    signArea.style.display = "flex";
    
    none.forEach((item)=> {
        item.style.display = "none";
    })
    noned.forEach((item)=> {
        item.style.display = "block";
    })
        
        
    setTimeout(() => {
        signUp.style.display = "block";
        logIn.style.display = "none";
    }, 1000);
})

logBtn.addEventListener("click", ()=> {
    logMessage.classList.remove("width");
    signArea.style.display = "none";
    signMessage.classList.add("reverse");
    none.forEach((item)=> {
        item.style.display = "block";
    })
    noned.forEach((item)=> {
        item.style.display = "none";
    })

    
    setTimeout(() => {
        logArea.style.display = "flex";
    logIn.style.display = "block";
        signUp.style.display = "none"
    
    
    }, 1000);
})








const username = document.getElementById("username");
const password = document.getElementById("password");


const eyePass = document.getElementById("eye-show");
    eyePass.addEventListener("click", ()=> {
        if(password.type === "password") {
            password.type = "text";
            eyePass.classList.remove("fa-eye-slash")
            eyePass.classList.add("fa-eye")
        } else {
            password.type = "password";
            eyePass.classList.add("fa-eye-slash")
            eyePass.classList.remove("fa-eye")
        }
    })


function showError(input, message) {
    const errorDiv = document.getElementById(input.id + "-error");
    errorDiv.textContent = message;
    errorDiv.classList.add("error");
    errorDiv.style.display = "block";
    input.classList.add("input-error");

}

function removeMessage(){
    const errorDiv = document.querySelectorAll(".error");
    errorDiv.forEach((error)=> {
        error.classList.remove("error");
        error.style.display = "none";
    });
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input)=> {
        input.classList.remove("input-error");
    })
}

let isValid = true;

logForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    

    
    if(username.value.trim().length < 2 || !isNaN(username.value) )   {
        showError(username, "Enter your username");
        isValid = false;
    } else {
        removeMessage()
    }

    if(password.value === "") {
        showError(password, "Kindly enter your password...")
        isValid = false;
        
    } else if (password.value.trim().length < 8) {
        showError(password, "Password not up to 8 characters.");
        isValid = false;
        
    } else {
        removeMessage();

    }

    if(isValid) {
        const logDetails = {
            username: username.value,
            password : password.value,
        }
    }
   
    
})
const logBut = document.querySelector("#log-btn");
 function checkInput(){
        const userValue = username.value.trim();
        const passValue = password.value.trim()

        if(userValue && passValue) {
            logBut.disabled = false;
        } else {
            logBut.disabled = true;
        }
    }
    
    
    username.addEventListener("input", checkInput)
    password.addEventListener("input", checkInput)

const user = document.getElementById("user");
    const email = document.getElementById("email");
    const createPassword = document.getElementById("create-password");

signForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    
    if(user.value.trim().length < 2){
        showError(user, "Choose a username of your choice");
    } else {
        removeMessage()
    }

    if(email.value === "") {
        showError(email, "Input your email, field can not be left empty")
    } else if(!email.value.includes("@") || !email.value.includes(".com")) {
        showError(email, "Enter a valid email address (@) /.com) is missing")
    } else {
        removeMessage()
    }

    if(createPassword.value === "") {
        showError(createPassword, "Create a password of your choice")
    } else if (password.value.trim().length < 8 ){
        showError(createPassword, "Password must be at least 8 characters")
    } else {
        removeMessage();
    }
})

const eyeDis = document.getElementById("eye-dis");
    eyeDis.addEventListener("click", ()=> {
        if(createPassword.type === "password") {
            createPassword.type = "text";
            eyeDis.classList.remove("fa-eye-slash")
            eyeDis.classList.add("fa-eye")
        } else {
            createPassword.type = "password";
            eyeDis.classList.add("fa-eye-slash")
            eyeDis.classList.remove("fa-eye")
        }
    })

