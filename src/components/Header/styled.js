import styled from "styled-components"

export const HeaderStyle = styled.header`
display: flex; //* Box do elemento será display flex;
justify-content: space-between;
align-items: center;  //* Espaço entre os elementos;
background: lightgray; //* A cor no plano de fundo da box será cinza claro;
padding: 1rem; //* O preenchimento interno do box terá 1 em relação a proporção do box;
margin: 0.5rem; //* A margem em relação a borda da tela terá 0.5 de distância em relação a proporção total;
border-radius: 0.8rem; //* A borda da box será arredondada em 0.5 em relação a própria borda;
a{text-decoration: none;} //* Todos os links de referência não terão o texto de decoração que recebem por padrão;
h1{
margin: 0.5rem 0;
font-size: 1.5rem;
}
`

export const ButtonCounterStyled = styled.button`
font-size: 0.8rem;
padding: 0.2rem;
margin: 0.1rem;
border-radius: 0.5rem;
border: 0.1rem #404040 solid;
border: none;
background-color: #f04040;
width: 1.5rem;
`