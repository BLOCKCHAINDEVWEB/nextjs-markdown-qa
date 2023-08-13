import { useState } from "react"
import { signIn } from "next-auth/react"

export default function SignIn() {
  const [username, setUsername] = useState('user')
  const [password, setPassword] = useState('password')

  const handleSubmit = e => {
    e.preventDefault()

    if (!username || !password) return null

    signIn("admin-signin", { username, password })
  }

  return (
    <>
      <div className={"form-container"}>
        <span className={"form-title"}>Sign in to account admin only</span>
        <form onSubmit={handleSubmit}>
          <div className={"form-group"}>
            <label htmlFor="username">Admin:</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Admin"
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className={"form-group"}>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className={"form-action"}>
            <button type="submit" className={"form-action"}>Sign in</button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .form-container {
          background: #fff;
          border-radius: 4px;
          margin: 20vh auto;
          padding: 1rem;
          border: 0.1rem solid grey;
        }
        .form-title {
          font-size: 18px;
          line-height: 18px;
          color: blue;
          padding: 1rem;
        }
        label {
          display: block;
          margin-bottom: .5rem;
          padding-top: .5rem;
        }
        .form-group {
          font-size: 14px;
          line-height: 18px;
          padding: 8px 16px;
          min-height: 18px;
          border: unset;
          border-radius: 4px;
          background-color: #fff;
        }
        button,
        input {
          font-size: 14px;
          line-height: 18px;
          padding: 8px 16px;
          border-radius: 4px;
          border: .1rem solid grey;
        }
        input:focus {
          outline: 4px ridge rgba(170, 50, 220, .6);
          border-radius: 2rem;
        }
        .form-action {
          margin: .5rem 0 0 .5rem;
        }
        button {
          background-color: blue;
          color: #fff;
          border: unset;
          cursor: pointer;
        }
        button:hover {
          background-color: #5F82F7;
        }
      `}
      </style>
    </>
  )
}
