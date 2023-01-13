import React from 'react';
import { HeaderStyle, ButtonCounterStyled } from './styled';

export default function Header({ counterItems, register, setRegister }) {
    return (
        <HeaderStyle>
            <div>
                <a href='#/'>
                    <h1>Loja Espacial</h1>
                </a>
            </div>
            <div>
                <a href='#/cart'>

                    Carrinho {""}
                    {counterItems ? (
                        <ButtonCounterStyled>{counterItems}</ButtonCounterStyled>
                    ) : (
                        ""
                    )
                    }

                </a> <a href='#/register'>Cadastrar</a>
            </div>
        </HeaderStyle>
    )
}