import { Provider } from 'react-redux'
import './App.css'
import Redux from './Projects/ReduxProject/Redux/Redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <Redux />
      </Provider>
    </>
  )
}

export default App