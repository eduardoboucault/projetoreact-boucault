import styled from 'styled-components'

export const CartStyle = styled.aside`
background-color: lightgray;
padding: 1rem;
margin: 0.5rem;
border-radius: 0.5rem;
flex:1;
h2{
margin: 0.5rem 0;
font-size: 1.2rem;
}
p{
margin: 0.5rem 0;
font-size: 1.2rem;
}
`
export const TotalStyle = styled.div`
font-size: 1.5rem;
text-align: right;
`

export const ButtonAdd = styled.button`
font-size: 0.8rem;
padding: 0.2rem;
margin: 0.1rem;
border-radius: 0.5rem;
border: 0.1rem #404040 solid;
border: none;
background-color: #40c0f0;
width: 1.5rem;
cursor: pointer;
`

export const ButtonRemove = styled.button`
font-size: 0.8rem;
padding: 0.2rem;
margin: 0.1rem;
border-radius: 0.5rem;
border: 0.1rem #404040 solid;
border: none;
background-color: #f04040;
width: 1.5rem;
cursor: pointer;
`
