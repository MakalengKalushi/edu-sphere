import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIKhQQgsJA7sE_8kSdYjlBnccIwqCh88s",
  authDomain: "study-hub-d01e9.firebaseapp.com",
  projectId: "study-hub-d01e9",
  storageBucket: "study-hub-d01e9.appspot.com",
  messagingSenderId: "435347570461",
  appId: "1:435347570461:web:e8f99afab2ee660f236bf4",
  measurementId: "G-RS8RZ0R4C9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User logged in:", user);
    alert("User logged in: ");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Login error", errorCode, errorMessage);
    alert("Failed to log in: " + errorMessage);

    let customErrorMessage = "";
    if (errorCode === "auth/invalid-email") {
      customErrorMessage = "The email address is not valid. Please try again.";
    } else if (errorCode === "auth/user-not-found") {
      customErrorMessage = "No account found with this email. Please check or sign up.";
    } else if (errorCode === "auth/wrong-password") {
      customErrorMessage = "The password is incorrect. Please try again.";
    } else {
      customErrorMessage = "Failed to log in: " + errorMessage; 
    }

    console.error("Login error:", errorCode, errorMessage);
    let errorElement = document.getElementById("error-message");
errorElement.textContent = customErrorMessage;


  });
  });

  onAuthStateChanged(auth, (user) => {
    const statusElement = document.getElementById("status");
    if (user) {
        // User is signed in
        console.log("User is logged in:", user);
        statusElement.textContent = `Logged in as ${user.email}`;
        window.location.href = "/dashboard.html";
    } else {
        // User is signed out
        console.log("User is logged out");
        statusElement.textContent = "Not logged in";
      
    }
});

//form submission
/* document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault(); 
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password); 
}); */





