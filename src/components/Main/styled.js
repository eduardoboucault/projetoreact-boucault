import styled from "styled-components"

export const MainStyle = styled.main`
height: 100%;
background-color: lightgray;
padding: 1rem;
margin: 0.5rem;
border-radius: 0.5rem;
flex: 2;
h2{
margin: 0.5rem 0;
font-size: 1.2rem;
}
`

export const ProductsStyle = styled.div`
display:grid;
justify-content: center;
grid-template-columns: 1fr 1fr 1fr;
`

export const FilterStyle = styled.div`
display:flex;
justify-content: space-between;
`