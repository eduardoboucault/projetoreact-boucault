import React from 'react';
import { CartStyle } from './styled';

export default function CartProduct({ cartItem, onAddItem, removeItens }) {

    const cartTotally = [...cartItem]
        const result = cartTotally.reduce( ( milho, {value , qty } ) => milho + (value * qty) , 0)

    return (

        <CartStyle>

            <h2>Cart</h2>

            <div>
                {cartItem.length === 0 && <p>Carrinho está vazio.</p>}
            </div>
            {cartItem.map((item) => {
                return (
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <div>
                            <button onClick={() => onAddItem(item)}>
                                +
                            </button>
                            <button onClick={()=>removeItens(item)}>
                                -
                            </button>
                        </div>
                        <div>
                            {item.qty} x {(item.value * item.qty).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </div>
                    </div>
                )
            })}
            <br />
            <div>
                Total:
                {result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </div>
            
        </CartStyle>

    )
}