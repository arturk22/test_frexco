import styled from "styled-components"
import { corFonteCabecalho } from "../UI/variaveis";


export const Container = styled.div`

    background-color: white;

`



export const Titulo = styled.h5`

    text-align: center;
    color: ${corFonteCabecalho};
    font-size: 30px;
    font-family: 'Dancing Script', cursive;
    background-color: greenyellow;

`


export const FruitList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`

export const Fruit = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }

    button{
        color: black;
        background-color: antiquewhite;
        transition: all 0.3s;
    }

    button:hover{
        background-color: #6de43f;
    }

    span{
        font-weight: bold;
        font-size: 120%;
        text-align: center;
        color: ${corFonteCabecalho};

    }

    a{
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.1);
    }

`


export const Total = styled.div`

    height: 60px;
    display: flex;
    justify-content: space-between;
    background-color: #DCDCDC;
    align-items: center;


    b{
        color: black;
    }

    h3{
        color: red;
    }

`

export const Footer = styled.div`

    width: 100%;
    font-size: 30px;
    display: grid;
    position: absolute;
    bottom: 0px;
    button{
        background-color: greenyellow;
        height: 80px;

    }

`