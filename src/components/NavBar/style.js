import styled from "styled-components";

export const Header = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Chivo&family=Inter&display=swap');    
    height: 70px;
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background: linear-gradient(270deg, #000, #4d0066);

    h1 {
        margin-left: -2rem;
        padding: 4px 22px;
       
        color: #f1f1f1;
        font-family: 'Inter', sans-serif;
        
        background: transparent;
 
        border-radius: 10px;
       
        box-shadow: 0 0 10px #b3b3b3;
    }

    .navigation a {
        margin-left: 3rem;
        color: #f1f1f1;
        font-family: 'Chivo', sans-serif;
        font-size: 1.4rem;
        text-decoration: none;
        cursor: pointer;
    }

    .navigation a:hover {
        border-bottom: 3px solid #8000ff; 
    }

    button {
        position: relative;
        width: 15%;
        height: 45px;

        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 1.2rem;
        
        margin: 0 20px;

        color: #f1f1f1;
        border: 2px solid;
        background: transparent;
        
        cursor: pointer;
    }

    button:hover {
        background: #f1f1f1;
        color: #000;
        border: 2px solid #8000ff;
        opacity: .5;
    }   

    @media screen and (max-width: 820px) {
        h1 {
            display: none;
        }
    }

    @media screen and (max-width: 500px) {
           
        button {
            display: none;
        }

        .navigation a{
            
            font-size: 1.4rem;
            margin: 1.2rem;
        }
    }

    @media screen and (max-width: 440px) {
        h1, button {
            display: none;
        }
    }

    @media screen and(max-width:360px) {

        .navigation a{
            font-size: 1rem;
            color: red;
        }
    }
`;