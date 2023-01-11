import React from 'react'
import { ImgStyle, TitleStyle, DivStyle, ButtonStyle } from './styled'

export default function Product({ item, onAddItem }) {

    return (

        <DivStyle>

            <ImgStyle src={item.image} alt={item.name}></ImgStyle>
            <TitleStyle>{item.name}</TitleStyle>
            <div>${item.value}</div>
            <ButtonStyle onClick={() => onAddItem(item)}>Adicionar</ButtonStyle>

        </DivStyle>

    )
}
