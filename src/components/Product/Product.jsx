import React from 'react'
import { ImgStyle, TitleStyle, DivStyle, ButtonStyle } from './styled'

export default function Product({ products, onAddItem }) {
    
    return (
        <DivStyle>
            <ImgStyle src={products.image} alt={products.name}></ImgStyle>
            <TitleStyle>{products.name}</TitleStyle>
            <div>${products.value}</div>
            <ButtonStyle onClick={()=>onAddItem(products)}>Adicionar</ButtonStyle>
        </DivStyle>
    )
}
