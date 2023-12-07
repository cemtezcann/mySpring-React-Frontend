export function SignUp() {
  return (
    <>
      <h1> Sign Up </h1>
      <div>
        <label htmlFor="username">Username: </label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="email">E-mail: </label>
        <input id="email" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" />
      </div>
      <div>
        <label htmlFor="repeatPassword">Password Repeat: </label>
        <input id="repeatPassword" type="password" />
      </div>
      <button>Sign Up</button>
    </>
  );
}