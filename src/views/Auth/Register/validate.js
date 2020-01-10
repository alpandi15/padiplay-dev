export default ({
  email,
  phone,
  password,
  password_confirm,
  agree
}) => {
  console.log('Agree ', agree)
  const error = {
    email: !email ? '*Required'
    : !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) ? 'Use email format'
    : email.length > 50 ? 'Username Max 50 Character'
    : undefined,
    phone: !phone ? '*Required'
    : !(/^[+0-9]+[0-9]+$/.test(phone)) ? 'Use phone number format'
    : phone.length < 10 ? 'Min 10 Character'
    : phone.length > 15 ? 'Max 15 Character'
    : undefined,
    password: !password ? '*Required'
    : password.length < 6 ? 'Password Min 6 Character'
    : password.length > 50 ? 'Password Max 50 Character'
    : undefined,
    password_confirm: !password_confirm ? '*Required'
    : password_confirm !== password ? 'Cannot Match'
    : password_confirm.length > 50 ? 'Password Max 50 Character'
    : undefined,
    agree: !agree ? '*Required' : undefined
  }

  return error
}
