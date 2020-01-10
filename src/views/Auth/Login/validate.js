export default ({ email, password }) => {
  const error = {
    email: !email ? '*Required'
    : email.length < 6 ? 'Min 10 Character'
    : email.length > 50 ? 'Username Max 50 Character'
    : undefined,
    password: !password ? '*Required'
    : password.length < 6 ? 'Password Min 6 Character'
    : password.length > 50 ? 'Password Max 50 Character'
    : undefined
  }

  return error
}
