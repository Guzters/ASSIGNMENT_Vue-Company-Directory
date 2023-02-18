import { ref } from 'vue'

const dbUsers = [
  {
    username: 'admin',
    password: 'admin',
    name: 'Admin',
    role: 'admin',
    email: 'admin@coolcompany,com',
  },
  {
    username: 'user',
    password: 'user',
    name: 'User',
    role: 'user',
    email: 'user@coolcompany,com',
  },
]

const isAuthenticated = ref(false)
const user = ref({})

export const useAuth = () => {
  const login = (username, password) => {
    console.log(username)
    const user = dbUsers.find((u) => u.username === username && u.password === password)
    if (user) {
      const { name, role, email, username } = user
      isAuthenticated.value = true
      user.value = { name, role, email, username }
      return true
    }
    return false
  }

  const logout = () => {
    isAuthenticated.value = false
    user.value = {}
  }

  return { isAuthenticated, user, login, logout }
}
