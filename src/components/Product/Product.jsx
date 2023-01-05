import React from 'react'
import { ImgStyle, TitleStyle, DivStyle, ButtonStyle } from './styled'

export default function Product({ product, onAddItem }) {
    
    return (
        <DivStyle>
            <ImgStyle src={product.image} alt={product.name}></ImgStyle>
            <TitleStyle>{product.name}</TitleStyle>
            <div>${product.value}</div>
            <ButtonStyle onClick={()=>onAddItem(product)}>Adicionar</ButtonStyle>
        </DivStyle>
    )
}
