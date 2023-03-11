import React, { useState } from "react";
import "./App.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  const handleEmailChange = (event) => {
    const input = event.target.value;
    setEmail(input);
    setIsEmailValid(validateEmail(input));
  };

  const handlePasswordChange = (event) => {
    const input = event.target.value;
    setPassword(input);
    setIsPasswordValid(input.length >= 8);
  };

  const handleConfirmPasswordChange = (event) => {
    const input = event.target.value;
    setConfirmPassword(input);
    setIsConfirmPasswordValid(input === password);
  };

  const handleSubmit = () => {
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert("Form submitted successfully");
    } else {
      alert("Can't submit the form");
    }
  };

  const validateEmail = (email) => {
    // Regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const emailBorderColor = isEmailValid ? "green" : "red";
  const passwordBorderColor = isPasswordValid ? "green" : "red";
  const confirmPasswordBorderColor = isConfirmPasswordValid ? "green" : "red";

  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: emailBorderColor }}
        />
        {!isEmailValid && (
          <div className="error-message">Please enter a valid email address</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ borderColor: passwordBorderColor }}
        />
        {!isPasswordValid && (
          <div className="error-message">
            Please enter a password with at least 8 characters
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ borderColor: confirmPasswordBorderColor }}
        />
        {!isConfirmPasswordValid && (
          <div className="error-message">Passwords do not match</div>
        )}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default LoginForm;
