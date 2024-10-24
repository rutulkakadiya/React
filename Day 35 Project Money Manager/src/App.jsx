import React from 'react'
import { Provider } from 'react-redux'
import MoneyManager from './Redux/MoneyManager'
import { store } from './store/Store'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <MoneyManager/>
      </Provider>
    </div>
  )
}
