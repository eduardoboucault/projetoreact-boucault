import React from 'react'
import { useState, useEffect } from 'react'
import { GlobalStyled } from './components/GlobalStyled/GlobalStyled'
import products from './data'
import { Container } from './components/Container'
import CartProduct from './components/CartProduct/CartProduct'
import Filters from './components/Filters/Filters'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

  const [cartItem, setCartItem] = useState([])
  const [search, setSearch] = useState('')
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sorting, setSorting] = useState("title")
  const [order, setOrder] = useState('asc')
  const [register, setRegister] = useState(false) //* Implementar

  const onAddItem = (product) => {

    const foundedItem = cartItem.find((item) => item.id === product.id);
    
    if (foundedItem) {
      setCartItem(cartItem.map((x) => (
        x.id === product.id ? { ...foundedItem, qty: foundedItem.qty + 1 } : x
      )));
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
    localStorage.setItem('CARRINHO_CLIENTE', JSON.stringify(cartItem))
    
  }
  
  const removeItens = (product) => {

    const foundedItem = cartItem.find((item) => item.id === product.id);

    if (foundedItem.qty === 1) {
      setCartItem(cartItem.filter((x => x.id !== product.id)))
    } else {
      setCartItem(cartItem.map((x) => (
        x.id === product.id ? { ...foundedItem, qty: foundedItem.qty - 1 } : x
      )))
    }
    localStorage.setItem('CARRINHO_CLIENTE', JSON.stringify(cartItem))
   
  }

  useEffect(()=>{
    setCartItem(JSON.parse(localStorage.getItem('CARRINHO_CLIENTE')))
    },[])
  
  return (

    <div>

      <GlobalStyled />

      <Header 
      counterItems={cartItem.length}
      register={register}
      setRegister={setRegister}
      />

      <Filters
        search={search}
        setSearch={setSearch}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        sorting={sorting}
        setSorting={setSorting}
        order={order}
        setOrder={setOrder}
      />

      <Container>

        <Main
          products={products}
          onAddItem={onAddItem}
          search={search}
          minPrice={minPrice}
          maxPrice={maxPrice}
          sorting={sorting}
          order={order}
        />

        <CartProduct
          cartItem={cartItem}
          onAddItem={onAddItem}
          removeItens={removeItens}
        />

      </Container>

      <Footer />

    </div>
  )

}

export default App