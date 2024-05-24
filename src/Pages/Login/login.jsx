import { useState } from 'react'
import './login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log(email, password)

    fetch('http://localhost:3000/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
      .then(response => {
        console.log(response)
        return response.json(); // Mengambil respons dalam format JSON
      })
      .then(result => console.log(result))
      .catch(e => { console.log(e.message) })
  }

  return (
    <div className="login-container">
      <div className="login">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={(e) => { setEmail(e.target.value) }} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={(e) => { setPassword(e.target.value) }} />
        <button onClick={() => login()}>Submit</button>
      </div>
    </div>
  )
}