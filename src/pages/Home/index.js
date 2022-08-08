import { useState, useEffect } from "react";
import { Container, FruitList, Fruit } from "./styles";


function Home(){

    const [fruits, setFruits] = useState([])

    useEffect(() => {


        fetch('/api/fruit/all')
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

    return(
        <Container>
            <h1>Fruits</h1>
            <FruitList>

                {fruits.map(fruit => {
                    return(
                        <Fruit key={fruit.id}>
                        <a href="https://www.google.com/"><img src={fruit.image_url} alt= {fruit.name}/></a>
                        <span>{fruit.name}</span>
                    </Fruit>
                    )
                })}

            </FruitList>
        </Container>
    )


}

export default Home;