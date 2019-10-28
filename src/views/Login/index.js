import React, { useState } from 'react';

const Login = () => {
  const [ values, setValues ] = useState({
    username: '',
    password: ''
  });

  const [ touched, setTouched ] = useState({
    username: false,
    password: false
  });

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleBlur = field => evt => {
    this.setTouched({
      ...touched,
      [field]: true
    });
  };

  return (
    <form>
      <label>
        Username:
        <input
          value={values.username}
          name="username"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          value={values.password}
          name="password"
          type="password"
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}

export default Login;