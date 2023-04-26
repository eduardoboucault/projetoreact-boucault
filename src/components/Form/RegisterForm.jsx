import React from "react"

export default function RegisterForm() {
    return (
        <>
            <div>
                <h1>Cadastrar</h1>
            </div>
            <form>
                <label> Nome: </label>
                <input type="name" value="" placeholder="Digite seu nome" />
            </form>
        </>
    )
}