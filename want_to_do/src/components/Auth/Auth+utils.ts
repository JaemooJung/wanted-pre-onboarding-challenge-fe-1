export const isEmailValid = (email: string):boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const isPasswordValid = (password: string):boolean => {
  return password.length > 8;
}