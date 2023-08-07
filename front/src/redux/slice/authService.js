import axios from 'axios'

const API_URL = 'localhost:5000/api/v1/users'
const API=axios.create({baseURL:"http://localhost:5000"})

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
    console.log(userData)
  const response = await API.post('/api/v1/users/login', userData)
  console.log(response)

//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data))
//   }

//   return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
