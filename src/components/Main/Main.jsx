import React from 'react';
import { MainStyle, ProductsStyle } from './styled';
import Product from '../Product/Product';

export default function Main({ products, onAddItem, search }) {

    return (

        <MainStyle>

            <h2>Produtos</h2>

            <ProductsStyle>

                {products
                    .filter((item) => {
                        return <Product

                            key={item.id}
                            products={products}
                            onAddItem={onAddItem}>
                            {(item.name.toUpperCase()).includes(search.toUpperCase())}
                            
                        </Product>
                    })
                    .map((item) => {
                        return <Product

                            key={item.id}
                            products={products}
                            onAddItem={onAddItem}>
                            {item}

                        </Product>
                    })}

            </ProductsStyle>

        </MainStyle>

    )
}