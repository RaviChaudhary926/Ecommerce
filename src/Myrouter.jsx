import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import About from './pages/About'
import Homepage from './pages/Homepage'
import Counter from './hooks/Counter'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Register from './pages/Register'

const Myrouter = () => {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<Layout/>} >
        <Route index element={<Homepage/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/productdetails/:product_id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart />} />
        </Route>
        <Route path='/register' element={<Register />} />


        <Route path='/hook' element={<Counter/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default Myrouter
