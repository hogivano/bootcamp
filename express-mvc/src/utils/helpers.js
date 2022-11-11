module.exports = {
  firstCapitalize: (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  },
  randomStr: (length = 10) => {
    return Math.random().toString(36).substring(2, length)
  }
}