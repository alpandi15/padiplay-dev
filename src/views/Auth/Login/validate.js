export default ({ account, password }) => {
  const error = {
    account: !account ? '*Required'
    : account.length < 10 ? 'Min 10 Character'
    : account.length > 50 ? 'Username Max 50 Character'
    : undefined,
    password: !password ? '*Required'
    : password.length < 6 ? 'Password Min 6 Character'
    : password.length > 50 ? 'Password Max 50 Character'
    : undefined
  }

  return error
}
