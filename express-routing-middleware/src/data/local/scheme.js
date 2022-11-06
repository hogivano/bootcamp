module.exports = {
  users: {
    id: Number,
    name: String,
    email: String,
    token: String,
    role: String,
    is_blocked: Boolean
  },
  categories: {
    id: Number,
    name: String,
    description: String
  }
}