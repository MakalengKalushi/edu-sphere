import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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

const studentNameElement = document.getElementById('studentName');
const studentEmailElement = document.getElementById('studentEmail');

// Check authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    studentEmailElement.textContent = user.email;
    studentNameElement.textContent = user.displayName || "Student"; // You can set a default name or get it from user profile if available
  } else {
    // User is signed out, redirect to login
    window.location.href = "login.html";
  }
});

// Logout function
window.logout = function() {
  signOut(auth).then(() => {
    console.log("User signed out");
    alert("You have successfully logged out!");
    window.location.href = "login.html"; 
  }).catch((error) => {
    console.error("Logout error:", error);
  });
}; 
