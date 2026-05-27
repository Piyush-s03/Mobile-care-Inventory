import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    if(email && password){
      localStorage.setItem('user', email)
      navigate('/dashboard')
    }
  }

  return (
    <div className='auth-container'>

      <form className='auth-box' onSubmit={handleLogin}>

        <h1>Login</h1>

        <input
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type='submit'>Login</button>

        <p>
          Don't have account?
          <Link to='/signup'> Signup</Link>
        </p>
         </form>

    </div>
  )
}

export default Login;