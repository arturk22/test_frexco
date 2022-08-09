import { useState, useEffect } from "react";
import { Container, FruitList, Fruit } from "./styles";
import { Link } from "react-router-dom"
import AddCart from "../../components/AddCart/addCart";


function Fruits(){

    const [fruits, setFruits] = useState([])

    useEffect(() => {

        fetch('/api/fruit/all')
            .then(response => response.json())
            .then(data => setFruits(data))
    }, [])


return( 
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
        </Container>
);

}

export default Fruits;