import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: process.env.API_URL
})

ReactDOM.render(
  <ApolloProvider client={client}>Hi</ApolloProvider>,
  document.getElementById('root')
)
