
import './App.css';
import { useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailValid(validateEmail(emailValue));
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setPasswordValid(validatePassword(passwordValue));
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    setConfirmPasswordValid(confirmPasswordValue === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert("Form submitted successfully!");
    } else {
      alert("Form cannot be submitted!");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  return (
    <div className='main'>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          className={`form-control ${emailValid ? "is-valid" : "is-invalid"}`}
          id="email"
        
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: emailValid ? 'green' : 'red' }}
        />
        {!emailValid && (
          <div className="invalid-feedback" style={{ color: 'red' }}>Invalid email format</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label><br />
        <input
          type="password"
          className={`form-control ${passwordValid ? "is-valid" : "is-invalid"}`}
          id="password"
          
          value={password}
          onChange={handlePasswordChange}
          style={{ borderColor: passwordValid ? 'green' : 'red' }}
        />
        {!passwordValid && (
          <div className="invalid-feedback" style={{ color: 'red' }}>
            Password must be at least 8 characters
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label><br />
        <input
          type="password"
          className={`form-control ${
            confirmPasswordValid ? "is-valid" : "is-invalid"
          }`}
          id="confirmPassword"
        
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ borderColor: confirmPasswordValid ? 'green' : 'red' }}
        />
        {!confirmPasswordValid && (
          <div className="invalid-feedback" style={{ color: 'red' }}>Passwords do not match</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
    </div>
  );
}

export default SignUpForm;

    
