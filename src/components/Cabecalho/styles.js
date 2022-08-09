import { corFonteCabecalho, fonteOpen, sombra } from "../UI/variaveis";
import styled from "styled-components";


export const CabecalhoC = styled.header`
  background: #ffffff;
  border-radius: 0 0 10px 10px;
  box-shadow: ${sombra};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.8rem;
  width: 100%;
  margin-bottom: 3rem;
  font-size: 1.6rem;
  @media screen and (max-width: 1024px) {
    margin-left: 0.5rem;
    height: 15rem;
    flex-direction: column;
  }

  div{

    display: flex;
    align-items: flex-start;

  }

  h1{
    text-aling: center;
    margin: 4rem 0;
    font-size: 60px;
    font-weight: bold;
    font-family: 'Dancing Script', cursive;
    color: ${corFonteCabecalho};
  }
`;

export const Logo = styled.img`
  width: 5rem;
  margin-left: 5rem;
  margin-top: 3rem;
  @media screen and (max-width: 1024px) {
    margin-right: 0px;
    margin-left: 0px;
    width: 5rem;
  }
`;

export const Lista = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  @media screen and (max-width: 1024px) {
    margin-left: 6rem;
  }
`;

export const Link = styled.li`
  font-size: 25px;
  font-weight: 700;
  line-height: 34px;
  margin-right: 5rem;
  @media screen and (max-width: 1024px) {
    margin-right: 2rem;
    font-size: 22px;
  }


  button{
        display: flex;
        background-color: ${corFonteCabecalho};
        border: none;
        cursor: pointer;
        border-radius: 3rem;
        padding: 0.5rem;
        margin-top: 0.51rem;
        font-size: 25px;
        transition: all 0.3s;
        width: 100%;
    }


    button:hover{
        background-color: greenyellow;  
    }

`;

export const Link_a = styled.a`
  text-decoration: none;
  color: ${corFonteCabecalho};
  font-family: ${fonteOpen};
`;

export const Navegation = styled.nav``;