import styled from "styled-components";

export const FooterStyled = styled.footer`
height: 100%;
background-color: lightgray;
padding: 0.4rem;
margin: 0.2rem;
border-radius: 0.5rem;
`

export const FooterMainStyled = styled.div`
display:flex;
justify-content: space-between;
padding: 0rem;
margin: 0.5rem;
h2{
    font-size: 30px;
}
`

export const ContentRightStyled = styled.div`
flex-basis: 50%;
padding: 10px 20px;
p{
    text-align: justify;
}
`

export const ContentCenterStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
font-size: 18px;
`

export const MarginStyledContent = styled.div`
margin: 0.1rem;
`

export const SocialStyled = styled.div`
margin: 20px 0 0 0;
a{
    padding: 0 2px;
}
`

export const SpanStyled = styled.span`
display: flex;
justify-content: left;
align-items: center;
`

export const IconSocialStyled = styled.img`
width: 40px;
height: 40px;
text-align: center;
`

export const IconPersonalStyled = styled.img`
margin: 10px;
`

export const LeftStyled = styled.div`
margin: 20px 0 0 0;
`

export const RightStyled = styled.div`
margin: 20px 0 0 0;
`

export const CenterStyled = styled.div`
margin: 20px 0 0 0;
`

export const FormStyled = styled.form`
input{
width: 100%;
font-size: 17px;
padding-left: 10px;
border: 1px solid #222222;
margin-top: 1rem;
margin-bottom: 1rem;
}
textarea{
width: 100%;
height: 3rem;
font-size: 17px;
padding-left: 10px;
border: 1px solid #222222;
margin-top: 1rem;
margin-bottom: 1rem;
}
p{
    font-size: 1.2rem;
}
`

export const ButtonFormStyled = styled.div`
display: flex;
justify-content: center;
button{
height: 1.5rem;
width: 5rem;
background: #7CC0FF;
font-size: 17px;
font-weight: 500;
cursor: pointer;
border-radius: 5px;
}
`