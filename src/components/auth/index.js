import React, { useState } from 'react'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const unauthedClient = new ApolloClient({
  uri: process.env.API_URL,
  headers: { 'X-Api-Key': process.env.API_KEY }
})

import Login from './Login'

export default function Auth({ children }) {
  const [client, setClient] = useState(unauthedClient)

  const createClient = token =>
    setClient(
      new ApolloClient({
        uri: process.env.API_URL,
        headers: { 'X-Api-Key': process.env.API_KEY, Authorization: token }
      })
    )

  return (
    <ApolloProvider client={client}>
      {unauthedClient !== client ? children : <Login setToken={createClient} />}
    </ApolloProvider>
  )
}
