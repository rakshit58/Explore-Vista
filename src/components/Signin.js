import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/setup";
import "./SigninStyles.css";

const Signin = ({ onClose }) => {
  // Google Sign-In function
  const googleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed in:", result.user); // Log user details
      onClose(); // Close the modal on successful sign-in
    } catch (err) {
      console.error("Error during Google Sign-In:", err.message);
    }
  };

  return (
    <div className="signin-overlay">
      <div className="signin-modal">
        {/* Close Button */}
        <button className="close-button" onClick={onClose} aria-label="Close">
          &times;
        </button>

        {/* Heading */}
        <h2>Sign In</h2>

        {/* Sign-In Options */}
        <div className="signin-options">
          {/* Google Sign-In */}
          <button  onClick={googleSignin} className="signin-google">
            <i className="fa-brands fa-google signin-icon"></i>
            Continue with Google
          </button>

          {/* Email Sign-In */}
          <button className="signin-email">
            <i className="fa-solid fa-envelope signin-icon"></i>
            Continue with Email
          </button>
        </div>

        {/* Terms & Privacy */}
        <p className="signin-terms">
          By signing in, you agree to our <a href="/terms">Terms of Service</a> and{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Signin;
