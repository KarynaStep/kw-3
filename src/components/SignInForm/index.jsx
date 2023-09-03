import React, { Component } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.css";

const initialValues = {
  login: "",
  email: "",
  password: "",
  loginValid: true,
  emailValid: true,
  passwordValid: true,
  check: false,
  radio: "",
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }

  handleForm = (event) => {
    event.preventDefault();
    console.log(event.target.login.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log(event.target.radio.value);
    console.log(event.target.check.value);
    //event.target.reset();
    this.setState({ ...initialValues });
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
      [`${name}Valid`]: value.includes(" ") === false,
    });
  };
  handleCheckbox = ({ target: { name, checked } }) => {
    this.setState({
      [name]: checked,
    });
  };
  handleRadio = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  render() {
    const {
      login,
      email,
      password,
      loginValid,
      emailValid,
      passwordValid,
      check,
    } = this.state;

    const classesLogin = cx(styles.input, { [styles.invalid]: !loginValid });
    const classesEmail = cx(styles.input, { [styles.invalid]: !emailValid });
    const classesPassword = cx(styles.input, {
      [styles.invalid]: !passwordValid,
    });

    return (
      <form className={styles.form} onSubmit={this.handleForm}>
        {/* додати інпут з name='login' з валідацією */}

        <input
          className={classesLogin}
          value={login}
          onChange={this.handleInput}
          type="login"
          name="login"
          placeholder="your login"
        />
        <input
          className={classesEmail}
          value={email}
          onChange={this.handleInput}
          type="email"
          name="email"
          placeholder="your email"
        />
        <input
          className={classesPassword}
          value={password}
          onChange={this.handleInput}
          type="password"
          name="password"
          placeholder="your password"
        />
        <p>
          Gender selection
          <label>
            <input
              onChange={this.handleRadio}
              type="radio"
              name="radio"
              value="man"
            />
            man
          </label>
          <label>
            <input
              onChange={this.handleRadio}
              type="radio"
              name="radio"
              value="woman"
            />
            woman
          </label>
          <label>
            <input
              onChange={this.handleRadio}
              type="radio"
              name="radio"
              value="other"
            />
            other
          </label>
        </p>

        <p>Agreement with privacy policy</p>
        <input
          className={styles.inputCheckbox}
          onChange={this.handleCheckbox}
          checked={check}
          type="checkbox"
          name="check"
        />
        <button type="submit">send</button>
      </form>
    );
  }
}

export default SignInForm;
