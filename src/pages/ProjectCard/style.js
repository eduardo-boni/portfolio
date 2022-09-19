import styled from "styled-components";

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

    width: 100%;
    
    background:  #0d0d0d;

    padding-top: 10px;
    padding-bottom: 10px;

    h1 {
        text-align: center;
        color: #f1f1f1;
        padding: 20px;
    }

    .projects {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        gap: 20px;
    }
   
    .container {
        width: 36%;
        min-height: 580px;

        margin: 10px;

        border: 2px solid #8000ff;
        border-radius: 10px;

        box-shadow: 0 0 15px #8000ff;
    }

    .itens {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .itens img {
        width: 100%;
        height: 250px;

        border-radius: 10px 10px 0 0;
    }

    h3, p, span {
        color: #fff;
        padding-left: 10px;
    }

    p, span {
        font-family: Inter, sans-serif;
        font-size: 17px;
    }

    span {
        color: #00d2df;
    }

    a {
       display: flex;
       justify-content: center;
       align-items: center;

        width: 70%;
        height: 42px;

        font-family: 'Inter', sans-serif;
        font-size: 19px;
        font-weight: 500;

        text-decoration: none;
        color: #fff;

        margin: 20px auto;
        

        border: none;
        border: 2px solid #8000ff;
        border-radius: 5px;

        background: #000;
        cursor: pointer;
        
        &:hover {
            background: linear-gradient(90deg, #8000ff, #d1d1d1);
            color: #000;
        }
    }

    @media screen and (max-width: 600px) {
        .projects {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        }

        a {
            margin: auto;
            margin-bottom: 15px;
        }
    }
`;