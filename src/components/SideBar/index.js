import { useState, useEffect } from 'react';
import { Dock } from 'react-dock';
import { Container, Titulo, Footer, Fruit, Total } from './styles.js';





function SideBar(){


    const [opened, setOpened] = useState(false)

    useEffect(() => {
        window.addEventListener('openCart', () => {
            setOpened(true)
        })
    })


    return(
        <Dock isVisible={opened} onVisibleChange={(visible) => {
            setOpened(visible);
        }} position="right">

        <Container>
            <Titulo>Minha Sacola</Titulo>
            <Fruit>
                 <img src="https://mambodelivery.vtexassets.com/arquivos/ids/157535/banana-prata-1-unidade.jpg?v=637883106759730000" alt= "Foto banana" />
                <span>Banana</span>
                <span>Preço: R$ 8.00</span>
            </Fruit>
            <Fruit>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/280px-Red_Apple.jpg" alt= "Foto maçã" />
                <span>Maçã</span>
                <span>Preço: R$ 10.00</span>
            </Fruit>
            <Footer>
                <Total>
                    <b>Total</b>
                    <h3>R$ 18.00</h3>
                </Total>
                <button>Finalizar Compra</button>
            </Footer>

        </Container>


        </Dock>
    );


}

export default SideBar;