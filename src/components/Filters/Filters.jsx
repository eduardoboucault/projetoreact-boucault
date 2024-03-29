import React from 'react';
import { FilterStyle } from './styled'

export default function Filters({ search, setSearch, minPrice, setMinPrice, maxPrice, setMaxPrice, sorting, setSorting, order, setOrder }) {

    return (

        <FilterStyle>

            <span>
                <label htmlFor='searchProduct'> Pesquisar: </label>
                <input id='search' onChange={ev => setSearch((ev.target.value))} value={search} type='text' placeholder='Produtos' />


                <label htmlFor='minPrice'> Preço mínimo </label>
                <input id='minPrice' onChange={ev => setMinPrice(ev.target.value)} value={minPrice} type='number' placeholder='Preço mínimo' />

                <label htmlFor='maxPrice'> Preço máximo </label>
                <input id='maxPrice' onChange={ev => setMaxPrice(ev.target.value)} value={maxPrice} type='number' placeholder='Preço máximo' />

                <label htmlFor="sorting"> Ordenar por: </label>

                <select
                    name="sorting"
                    value={sorting}
                    onChange={ev => setSorting(ev.target.value)}
                >
                    <option value={"title"}> Título </option>
                    <option value={"price"}> Preço </option>

                </select>

                <select

                    value={order}
                    onChange={ev => setOrder(ev.target.value)}
                >
                    <option value={"asc"}> Crescente </option>
                    <option value={"dsc"}> Decrescente </option>

                </select>
            </span>

        </FilterStyle>

    )
};