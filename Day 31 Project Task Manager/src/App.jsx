import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/Store'
import TaskManager from './Redux/TaskManager'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <TaskManager />
      </Provider>
    </div>
  )
}
