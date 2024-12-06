import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Components/Store'
import Home from './Home'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Home/>
      </Provider>
    </div>
  )
}
