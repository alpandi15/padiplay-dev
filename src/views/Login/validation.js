export default ({username, password}) => {
  const error = {
    username: !username ? '*Required'
      : username.length < 6 ? 'Username Min 6 Character'
      : username.length >50 ? 'Username Max 50 Character'
      : undefined,
    password: !password ? '*Required'
      : password.length < 6 ? 'Password Min 6 Character'
      : password.length >50 ? 'Password Max 50 Character'
      : undefined,
  }

  return error;
}