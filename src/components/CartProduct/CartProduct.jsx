import React from 'react';
import { CartStyle, ButtonRemove, ButtonAdd, TotalStyle, PricesItemsStyled } from './styled';

export default function CartProduct({ cartItem, onAddItem, removeItens }) {

    const cartTotally = [...cartItem]
    const result = cartTotally.reduce((sub, { value, qty }) => sub + (value * qty), 0)
    const taxPrice = result * 0.15
    const descontPrice = result < 50 ? 0 : 5;
    const totalPrice = result + taxPrice + descontPrice

    return (

        <CartStyle>

            <h2>Carrinho</h2>

            <div>

                {cartItem.length === 0 ? <p>Carrinho está vazio.</p> :
                    cartItem.map((item) => {

                        return (
                            <div key={item.id}>

                                <p>{item.name}</p>
                                <div>
                                    <ButtonAdd onClick={() => onAddItem(item)}>
                                        +
                                    </ButtonAdd>
                                    <ButtonRemove onClick={() => removeItens(item)}>
                                        -
                                    </ButtonRemove>
                                </div>
                                <div>
                                    {item.qty} x {(item.value * item.qty).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </div>
                            </div>
                        )
                    })}
                {cartItem.length !== 0 && (
                    <>
                        <hr/>
                        <PricesItemsStyled>
                            Preço dos itens

                            <p>{result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>

                        </PricesItemsStyled>

                        <PricesItemsStyled>

                            Taxa de entrega

                            <p>{taxPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>

                        </PricesItemsStyled>

                        <PricesItemsStyled>

                            Desconto

                            <p>{descontPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>

                        </PricesItemsStyled>

                        <TotalStyle>
                            <strong>Total:</strong>
                            {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </TotalStyle>
                    </>
                )}
            </div>

        </CartStyle>

    )
}