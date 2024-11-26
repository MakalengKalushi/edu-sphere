  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
  

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
  const analytics = getAnalytics(app);

const signupForm = document.getElementById('signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("User created: ");
    window.location.href = "login.html";
    
  })

  .catch((error) => {
    const errorCode = error.code;
      let customErrorMessage = '';

      if (errorCode === "auth/email-already-in-use") {
        customErrorMessage = "This email is already associated with an account. Please log in or use another email.";
      } else if (errorCode === "auth/invalid-email") {
        customErrorMessage = "The email format is invalid. Please enter a valid email.";
      } else if (errorCode === "auth/weak-password") {
        customErrorMessage = "The password is too weak. Please use at least 6 characters.";
      } else {
        customErrorMessage = "Failed to create an account: " + error.message;
      }

      console.error("Sign-up error:", errorCode, error.message);
      
      let errorElement = document.getElementById("error-message");
      errorElement.textContent = customErrorMessage; // Display the error message on the form
  
});

});