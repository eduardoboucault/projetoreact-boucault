import React from "react";
import { FooterStyled, FooterMainStyled, LeftStyled, CenterStyled, RightStyled, SocialStyled, IconSocialStyled, IconPersonalStyled, ContentRightStyled, ContentCenterStyled, MarginStyledContent, SpanStyled, FormStyled, ButtonFormStyled } from "./styled"
import Facebook from "../../assets/icons/facebook.png"
import Github from "../../assets/icons/github.png"
import Linkedin from "../../assets/icons/linkedin.png"
import Twitter from "../../assets/icons/twitter.png"
import Local from "../../assets/icons/local.png"
import Email from "../../assets/icons/email.png"
import Telefone from "../../assets/icons/telefone.png"

export default function Footer() {
    return (
        <FooterStyled>
            <FooterMainStyled>
                <LeftStyled>
                    <h2>Sobre o projeto</h2>
                    <ContentRightStyled>
                        Este projeto tem como objetivo demonstrar meus conhecimentos da linguagem javascript em React.
                        <br />
                        Recursos utilizados:
                        <br />
                        styled-components
                        <br />
                        useState()
                        <br />
                        useEffect()
                        <br />
                        localStorage
                        <br />
                        Atualização de estados para renderização de objetos com map() e filter()
                        <br />
                        Renderização condicional através de if ternário, if/else e curto circuito
                       
                    </ContentRightStyled>
                    <SocialStyled>
                        <a href="https://www.facebook.com/eduardo.boucault">
                            <IconSocialStyled src={Facebook} alt="Facebook" />
                        </a>
                        <a href="https://github.com/eduardoboucault">
                            <IconSocialStyled src={Github} alt="Github" />
                        </a>
                        <a href="https://twitter.com/du_boucault">
                            <IconSocialStyled src={Linkedin} alt="Twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/eduardo-boucault/">
                            <IconSocialStyled src={Twitter} alt="LinkedIn" />
                        </a>
                    </SocialStyled>
                </LeftStyled>
                <CenterStyled>
                    <h2>Endereço</h2>
                    <ContentCenterStyled>
                        <MarginStyledContent>
                            <SpanStyled>
                                <a href="https://goo.gl/maps/CuhQPJW6H2B4JZDY6">
                                    <IconPersonalStyled src={Local} alt="Local" />
                                </a>
                                Rua Odilon Affonso, 313
                            </SpanStyled>
                        </MarginStyledContent>
                        <MarginStyledContent>
                            <SpanStyled>
                                <a href="https://wa.me/5511983189341">
                                    <IconPersonalStyled src={Telefone} alt="Telefone" />
                                </a>
                                (11) 9 8318-9341
                            </SpanStyled>
                        </MarginStyledContent>
                        <MarginStyledContent>
                            <SpanStyled>
                                <IconPersonalStyled src={Email} alt="Email" />
                                du.boucault@gmail.com
                            </SpanStyled>
                        </MarginStyledContent>
                    </ContentCenterStyled>
                </CenterStyled>
                <RightStyled>
                    <h2>Contato</h2>
                    <br />
                    <div>
                        <FormStyled>
                            <div>
                                <p>Email</p>
                                <input type="email" placeholder="Digite seu email" required />
                            </div>
                            <div>
                                <p>Mensagem</p>
                                <textarea rows='2' cols='25' placeholder="Seu feedback aqui" required />
                            </div>
                            <ButtonFormStyled>
                                <button> Enviar </button>
                            </ButtonFormStyled>
                        </FormStyled>
                    </div>
                </RightStyled>
            </FooterMainStyled>
        </FooterStyled>
    )
}