import React, { useState } from "react";
import "../style/try.css";

function Try() {
    const [showSignup, setShowSignup] = useState(false);
  
    const toggleSignup = () => setShowSignup(!showSignup);
    const closeSignup = () => setShowSignup(false);
  
    return (
      <div className="header">
        {showSignup && <div className="overlay" onClick={closeSignup}></div>}
  
        <div className="container">
          {/* Left Section */}
          <div className="leftpart">
            <h1>Facebook</h1>
            <h3>Connect with friends and the world around you on Facebook.</h3>
          </div>
  
          {/* Right Section (Login) */}
          <div className="rightpart">
            <div className="login-box">
              <form>
                <input type="text" placeholder="Email or phone number" className="login-input" />
                <input type="password" placeholder="Password" className="login-input" />
                <button className="login-btn">Log In</button>
              </form>
              <p className="forgot-password">Forgot password?</p>
              <hr />
              <button className="create-account-btn" onClick={toggleSignup}>
                Create a new account
              </button>
            </div>
          </div>
        </div>
  
        {/* Signup Modal */}
        {showSignup && <SignupForm closeSignup={closeSignup} />}
      </div>
    );
  }
  
  // Signup Component
  function SignupForm({ closeSignup }) {
    return (
      <div className="signup-modal">
        <div className="signup-header">
          <h2>Sign Up</h2>
          <p>It's quick and easy.</p>
          <button className="close-btn" onClick={closeSignup}>×</button>
        </div>
        <hr />
  
        <form className="signup-form">
          <div className="name-fields">
            <input type="text" placeholder="First Name" className="input-box" />
            <input type="text" placeholder="Last Name" className="input-box" />
          </div>
          <input type="text" placeholder="Email or Phone number" className="input-box full-width" />
          <input type="password" placeholder="Password" className="input-box full-width" />
  
          <div className="birthday-section">
            <p>Birthday</p>
            <div className="birthday-fields">
              <select>{["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => <option key={m} value={m}>{m}</option>)}</select>
              <select>{[...Array(31)].map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}</select>
              <select>{[...Array(100)].map((_, i) => <option key={i} value={2024 - i}>{2024 - i}</option>)}</select>
            </div>
          </div>
  
          <div className="gender-section">
            <p>Gender</p>
            <div className="gender-options">
              <label><input type="radio" name="gender" value="female" /> Female</label>
              <label><input type="radio" name="gender" value="male" /> Male</label>
              <label><input type="radio" name="gender" value="custom" /> Custom</label>
            </div>
          </div>
  
          <p className="terms">
            By clicking Sign Up, you agree to our <span className="blue">Terms, Privacy Policy, and Cookies Policy</span>.
          </p>
  
          <button className="signup-btn">Sign Up</button>
        </form>
      </div>
    );
  }

export default Try;