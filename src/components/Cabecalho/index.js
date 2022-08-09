import {CabecalhoC, Logo, Lista, Link, Link_a, Navegation} from "./styles";


function Cabecalho(){
    
    return(
        <CabecalhoC>
            <Logo src="https://img.freepik.com/vetores-premium/cesta-de-supermercado-com-frutas-e-vegetais-compras-na-loja-de-logotipo-de-produtos-naturais-ilustracao-vetorial-no-estilo-simples-dos-desenhos-animados-clipart-de-cor-isolado-em-fundo-branco_456865-1056.jpg" />
            <Navegation>
                <Lista>
                <Link>
                    <Link_a href="/">Home</Link_a>
                </Link>
                <Link>
                    <Link_a href="#">Produtos</Link_a>
                </Link>
                <Link>
                    <Link_a href="/carrinho">Carrinho</Link_a>
                </Link>
                </Lista>
            </Navegation>
        </CabecalhoC>
    )
}




export default Cabecalho;