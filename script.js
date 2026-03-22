// ===== Toggle Password =====
function togglePassword(id, icon){
  const input = document.getElementById(id);
  const i = icon.querySelector("i");

  if(input.type === "password"){
    input.type = "text";
    i.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    i.classList.replace("fa-eye-slash", "fa-eye");
  }
}

// ==== Show Message inside card ====
function showMessage(msg, type){
  const box = document.getElementById("messageBox");

  if(!box) return; // prevent error

  box.innerHTML = `
    <div class="message ${type === "error" ? "error" : "success"}">
      ${msg}
    </div>
  `;

  setTimeout(()=>{
    box.innerHTML = "";
  }, 3000);
}

// ==== Strong Password Validation ====
function isValidPassword(password){
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

// ==== LOGIN ====
const loginForm = document.getElementById("loginForm");

if(loginForm){
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    // Email validation
    if(!email.includes("@") || !email.includes(".")){
      showMessage("Enter a valid email address", "error");
      return;
    }

    // Password validation
    if(!isValidPassword(password)){
      showMessage(
        "Password must be 8+ chars with uppercase, lowercase, number & special character",
        "error"
      );
      return;
    }

    showMessage("Login successful", "success");
    loginForm.reset();
  });
}

// ===== REGISTER =====
const registerForm = document.getElementById("registerForm");

if(registerForm){
  registerForm.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Name validation
    if(name.length < 3){
      showMessage("Name must be at least 3 characters", "error");
      return;
    }

    // Email validation
    if(!email.includes("@") || !email.includes(".")){
      showMessage("Enter a valid email address", "error");
      return;
    }

    // Dummy AJAX check
    if(email === "test@gmail.com"){
      showMessage("Email already exists", "error");
      return;
    }

    // Password validation
    if(!isValidPassword(password)){
      showMessage(
        "Password must be 8+ chars with uppercase, lowercase, number & special character",
        "error"
      );
      return;
    }

    // Confirm password
    if(password !== confirmPassword){
      showMessage("Passwords do not match", "error");
      return;
    }

    showMessage("Registration successful", "success");
    registerForm.reset();
  });
}