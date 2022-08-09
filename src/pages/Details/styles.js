import styled from "styled-components";

export const Container = styled.div`

    padding: 4rem 0;


    h1{
        font-size: 50px;
        margin: 3rem 0;
    }

    .fruit{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 500px;
        border-radius: 2.4rem;

    }


    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 6rem;
        max-width: 50%;
    }

    button{
        background-color: gray;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;
    }


    button:hover{
        background-color: greenyellow;
        
    }


    span{
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 120%;
    }


    .family{
        opacity: 0.5;
    }


    @media screen and (max-width: 1024px) {
        .fruit{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        img{
            width: 200px;
            border-radius: 2.4rem;
        }


        .details{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 0rem;
            max-width: 50%;
        }

        h1{
            font-size: 40px;
            margin: 3rem 0;
        }

    }

`