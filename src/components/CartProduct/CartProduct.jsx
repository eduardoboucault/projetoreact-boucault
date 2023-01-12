import React from 'react';
import { CartStyle, ButtonRemove, ButtonAdd, TotalStyle } from './styled';

export default function CartProduct({ cartItem, onAddItem, removeItens }) {

    const cartTotally = [...cartItem]
    const result = cartTotally.reduce((sub, { value, qty }) => sub + (value * qty), 0)

    return (

        <CartStyle>

            <h2>Cart</h2>

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
                    }
                    )}
            </div>

            <br />

            <TotalStyle>
                Total:
                {result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </TotalStyle>

        </CartStyle>

    )
}