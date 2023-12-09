import axios from 'axios'
import { useState } from 'react'


export function SignUp() {
  // eslint-disable-next-line no-unused-vars
  const [username, setUsername] = useState()
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordRepeat, setPasswordRepeat] = useState()
  const onSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/v1/users',{
      username,
      email,
      password
    })
  }
  return (
    <form onSubmit={onSubmit}>
      <h1> Sign Up </h1>
      <div>
        <label htmlFor="username">Username: </label>
        <input id="username" onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div>
        <label htmlFor="email">E-mail: </label>
        <input id="email" onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" onChange={(event) => setPassword(event.target.value)}/>
      </div>
      <div>
        <label htmlFor="repeatPassword">Password Repeat: </label>
        <input id="repeatPassword" type="password" onChange={(event) => setPasswordRepeat(event.target.value)}/>
      </div>
      <button disabled={!password || password !== passwordRepeat}>Sign Up</button>
    </form>
  );
}
