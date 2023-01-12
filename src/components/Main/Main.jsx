import React from 'react';
import { MainStyle, ProductsStyle } from './styled';
import Product from '../Product/Product';

export default function Main({ products, onAddItem, search, minPrice, maxPrice, sorting, order }) {

    return (

        <MainStyle>

            <h2>Produtos</h2>

            <ProductsStyle>

                {products
                    .filter((item) => {
                        return (item.name.toUpperCase()).includes(search.toUpperCase())
                    })
                    .filter((item) => {
                        return item.value >= minPrice || minPrice === ""
                    })
                    .filter((item) => {
                        return item.value <= maxPrice || maxPrice === ""
                    })
                    .sort((currentItem, nextItem) => {
                        if (sorting === "title") {
                            return currentItem.name.localeCompare(nextItem.name)
                        } else {
                            return currentItem.value - nextItem.value
                        }
                    })
                    .sort(() => {
                        if (order === "asc") {
                            return 0
                        } else {
                            return -1
                        }
                    })
                    .map((item) => {

                        return <Product

                            key={item.id}
                            onAddItem={onAddItem}
                            search={search}
                            item={item}

                        />

                    })}

            </ProductsStyle>

        </MainStyle>

    )
}