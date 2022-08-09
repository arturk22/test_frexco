import { corFonteCabecalho, fonteOpen, sombra } from "../UI/variaveis";
import styled from "styled-components";


export const CabecalhoC = styled.header`
  background: #ffffff;
  border-radius: 0 0 10px 10px;
  box-shadow: ${sombra};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.8rem;
  width: 100%;
  margin-bottom: 3rem;
  font-size: 1.6rem;
  @media screen and (max-width: 1024px) {
    margin-left: 0.5rem;
    height: 10rem;
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 5rem;
  margin-left: 5rem;
  @media screen and (max-width: 1024px) {
    margin-right: 0px;
    margin-left: 0px;
    width: 8rem;
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
    margin-right: 3rem;
    font-size: 15px;
  }
`;

export const Link_a = styled.a`
  text-decoration: none;
  color: ${corFonteCabecalho};
  font-family: ${fonteOpen};
`;

export const Navegation = styled.nav``;