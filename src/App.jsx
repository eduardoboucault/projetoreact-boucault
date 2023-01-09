import React from 'react'
import { useState } from 'react'
import { GlobalStyled } from './components/GlobalStyled/GlobalStyled'
import { Container } from './components/Container'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import CartProduct from './components/CartProduct/CartProduct'
import Filters from './components/Filters/Filters'
import products from './data'

function App() {

  const [cartItem, setCartItem] = useState([]) //* Estado para items que estarão dentro do carrinho.
  const [search, setSearch] = useState('') //* Estado inicial para input de busca de produtos.
  const [minPrice, setMinPrice] = useState('')

  const onAddItem = (product) => {

    const foundedItem = cartItem.find((item) => item.id === product.id);

    if (foundedItem) {
      setCartItem(cartItem.map((x) => (
        x.id === product.id ? { ...foundedItem, qty: foundedItem.qty + 1 } : x
      )));
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }

  }

  const removeItens = (product) => {

    const foundedItem = cartItem.find((item) => item.id === product.id);

    if (foundedItem.qty === 1) {
      setCartItem(cartItem.filter((x => { x.id !== product.id })))
    } else {
      setCartItem(cartItem.map((x) => (
        x.id === product.id ? { ...foundedItem, qty: foundedItem.qty - 1 } : x //* Se no carrinho o produto já existe, diminua sua quantidade em -1
      )))
    }
  }

  //* Função de adicionar item ao carrinho com instruções extras

  return (

    <div>

      <GlobalStyled />
      <Header />

      <Filters
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        search={search}
        setSearch={setSearch}
      />

      <Container>

        <Main
          products={products}
          onAddItem={onAddItem}
          search={search}
        />

        <CartProduct
          cartItem={cartItem}
          onAddItem={onAddItem}
          removeItens={removeItens}
        />

      </Container>

    </div>
  )

}

export default App