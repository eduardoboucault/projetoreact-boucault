import React from "react";
import { MainStyle, ProductsStyle } from "./styled";
import Product from "../Product/Product";

export default function Main({ products, onAddItem, search, onChangeInput }) {

    const produtosFiltrado = products.filter((x) => {
        return (x.name.toUpperCase()).includes(search.toUpperCase())}
    )

    return (
        <MainStyle>
            <h2>Produtos</h2>
            <div>
                <label htmlFor="searchProduct"> Pesquisar: </label>
                <input id="search" onChange={onChangeInput} value={search} type="text" placeholder="Produtos"></input>
            </div>
            <div>
                <select>
                    <option>eu</option>
                    <option>sou</option>
                    <option>QI</option>
                    <option>de milho</option>
                </select>
            </div>
            <ProductsStyle>

                {search.length === 0 ? products.map((object) => {
                    return ( //* EU SOU UMA AMEBA NÃO ESQUEÇA DO RETURN
                        <Product key={object.id} product={object} onAddItem={onAddItem}></Product>
                    )
                }) :
                    produtosFiltrado.map((object) => {
                        return ( //* EU SOU UMA AMEBA NÃO ESQUEÇA DO RETURN
                            <Product key={object.id} product={object} onAddItem={onAddItem}></Product>
                        )
                    })
                }

            </ProductsStyle>
        </MainStyle>
    )
}