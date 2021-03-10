import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredetials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { password, confirmPassword, email, displayName } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    signUpStart({ email, password, displayName });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredetials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign Up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="displayName"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredential) => dispatch(signUpStart(userCredential)),
});
export default connect(null, mapDispatchToProps)(SignUp);
