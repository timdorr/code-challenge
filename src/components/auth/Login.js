import React, { useState } from 'react'

import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const LOG_IN = gql`
  mutation SignInUser($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      token
    }
  }
`

export default function Login({ setToken }) {
  const [email, setEmail] = useState(process.env.EMAIL)
  const [password, setPassword] = useState(process.env.PASSWORD)

  return (
    <Mutation mutation={LOG_IN} variables={{ email, password }}>
      {logIn => (
        <form
          onSubmit={async e => {
            e.preventDefault()

            const {
              data: {
                signInUser: { token }
              }
            } = await logIn()

            setToken(token)
          }}
        >
          <label>
            Email{' '}
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>

          <label>
            Password{' '}
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>

          <button>Log In</button>
        </form>
      )}
    </Mutation>
  )
}
