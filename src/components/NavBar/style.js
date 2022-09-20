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
        font-size: 22px;
        text-decoration: none;
        cursor: pointer;
    }

    .navigation a:hover {
        border-bottom: 3px solid #8000ff; 
    }

    button {
        width: 190px;
        height: 45px;

        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 18px;
        
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

        .navigation {
            width: 100%;
        }
    }

    h1, button {
    @media screen and (max-width: 500px) {
            display: none;
        }

        .navigation {
            width: 100%;
            text-align: center;
        }
    }

    @media screen and (max-width: 430px) {
        h1, button {
            display: none;
        }

        .navigation {
            width: 100%;
        }
    }
`;