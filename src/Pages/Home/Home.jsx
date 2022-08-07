import React, { useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ProductsList from '../../components/ProductsList/ProductsList'
import data from '../../services/storage'
import { useSelector } from 'react-redux'

const Home = () => {
  const [products, setProducts] = useState(data.products)
  const store = useSelector(state => state.cart)

  console.log('store', store)
  const handleClick = value => {
    if (value === '' || !value) {
      setProducts(data.products)
      return
    }

    const regex = new RegExp(value, 'i')
    const filterProduct = products.filter(product => regex.test(product.name))
    setProducts(filterProduct)
  }

  const handleChange = value => {
    if (value === '' || !value) {
      setProducts(data.products)
      return
    }
  }

  return (
    <div className='container'>
      <Header onClick={handleClick} onChange={handleChange} />
      <Banner />
      <ProductsList products={products} />
      <Footer />
    </div>
  )
}

export default Home
