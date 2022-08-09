import styled from "styled-components";

export const Container = styled.div`
    h1{
        text-aling: center;
        margin-left: 1rem;
        font-size: 60px;
        font-weight: bold;
        font-family: 'Dancing Script', cursive;
    }
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
    }

    a{
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.1);
    }

`