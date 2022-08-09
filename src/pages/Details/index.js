import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";


function Details(){

    const { id } = useParams()

    const [fruit, setFruits] = useState({})

    useEffect(() => {

        fetch(`/api/fruit/${id}?min=0&max=1000`)
            .then(response => response.json())
            .then(data => {

                const fruit = {
                    id,
                    name: data.name,
                    family: data.family,
                    nutritions: data.nutritions,
                    carbo: data.nutritions.caborhydrates,
                    protein: data.nutritions.protein,
                    calories: data.nutritions.calories,
                    sugar: data.nutritions.sugar,
                    fat: data.nutritions.fat
                }
                console.log(fruit)
                setFruits(fruit)

            })
    }, [id])

    return(

        <><Cabecalho />
        <Container>
            <div className="fruit">
                <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/as-frutas-sao-alimentos-importantes-para-nossa-saude-alem-serem-muito-saborosas-5bdaec2def6bb.jpg" alt={fruit.name} />

                <div className="details">

                    <h1>{fruit.name}</h1>

                    <span className="family">Familia: {fruit.family}</span>
                    <span>Calorias: {fruit.caborhydrates}</span>
                    <span>Proteina: {fruit.protein}</span>
                    <span>Carboidratos: {fruit.carbo}</span>
                    <span>Açúcar: {fruit.sugar}</span>
                    <span>Gordura: {fruit.fat}</span>
                    <Link to='/'><button>Voltar</button></Link>

                </div>
            </div>
        </Container></>
    )
}



export default Details;