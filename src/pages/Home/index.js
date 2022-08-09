import { useState, useEffect } from "react";
import { Container, FruitList, Fruit } from "./styles";
import { Link } from "react-router-dom"
import Cabecalho from "../../components/Cabecalho";
import AddCart from "../../components/AddCart/addCart";
import SucessoAlert from "../../components/Alert/sucessoAlert";





function Home(){

    const [fruits, setFruits] = useState([])

    useEffect(() => {


        fetch('/api/fruit/all')
            .then(response => response.json())
            .then(data => setFruits(data))
    }, [])

    return(
        <><Cabecalho />
        <Container>
            <h1>Frutas</h1>
            {/* <TableFilter /> */}
            <FruitList>

                {fruits.map(fruit => {
                    return (
                        <Fruit key={fruit.id}>

                            <Link to={`/details/${fruit.id}`}><img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/as-frutas-sao-alimentos-importantes-para-nossa-saude-alem-serem-muito-saborosas-5bdaec2def6bb.jpg" alt={fruit.name} /></Link>
                            <span>{fruit.name}</span>
                            <AddCart/>
                            
                        </Fruit>
                    );
                })}

            </FruitList>
        </Container></>
    )


}

export default Home;