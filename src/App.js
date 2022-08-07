// React
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'

// Redux
import { Provider } from 'react-redux'
import store from './store/store'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
