import React from "react";
import { HeaderStyle } from "./styled";

export default function Header(props) {
    return (
        <HeaderStyle>
            <div>
                <a href="#/">
                    <h1>Loja Espacial</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Cart</a> <a href="#/signin">Sign in</a>
            </div>
        </HeaderStyle>
    )
}