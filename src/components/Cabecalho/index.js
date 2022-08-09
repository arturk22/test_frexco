import {CabecalhoC, Logo, Lista, Link, Link_a, Navegation} from "./styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Cabecalho(){


    const openDrawer = () => {
        const event = new CustomEvent('openCart');
        window.dispatchEvent(event);
    }
    
    return(
        <CabecalhoC>

            <div>
                <Logo src="https://img.freepik.com/vetores-premium/cesta-de-supermercado-com-frutas-e-vegetais-compras-na-loja-de-logotipo-de-produtos-naturais-ilustracao-vetorial-no-estilo-simples-dos-desenhos-animados-clipart-de-cor-isolado-em-fundo-branco_456865-1056.jpg" alt="Logotipo" />
                <h1>SuperFruit</h1>
            </div>
            <Navegation>
                <Lista>
                <Link>
                    <Link_a href="/">Home</Link_a>
                </Link>
                <Link>
                    <button onClick={() => openDrawer()}><ShoppingCartIcon fontSize="35px" color="black" />{" "}Carrinho</button>
                </Link>
                </Lista>
            </Navegation>
        </CabecalhoC>
    )
}




export default Cabecalho;