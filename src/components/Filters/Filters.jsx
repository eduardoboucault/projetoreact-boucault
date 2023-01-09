import React from 'react';
import { FilterStyle } from './styled'

export default function Filters({search, setSearch, minPrice, setMinPrice}) {
    return (
        <FilterStyle>

            <label htmlFor='searchProduct'> Pesquisar: </label>
            <input id='search' onChange={(ev) => { console.log(setSearch(ev.target.value)) }} value={search} type='text' placeholder='Produtos' />

            <label htmlFor='minPrice'> Preço mínimo </label>
            <input id='minPrice' onChange={(ev) => { setMinPrice(ev.target.value) }} value={minPrice} type='number' placeholder='Preço mínimo' />

            <select>
                <option>Crescente</option>
                <option>Decrescente</option>
            </select>

        </FilterStyle>
    )
}