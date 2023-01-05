//check if the string is in valid email address format
//return true if valid, false if not
export const isEmailValid = (email: string):boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
