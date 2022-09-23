import styled from "styled-components";

export const Container = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

    width: 100%;
    min-height: 81.6vh;

    background: linear-gradient(90deg, #3333cc, #cc00cc51);

    h1 {
        text-align: center;

        padding: 19px;
        color: #f1f1f1;
    }

    .main {
        max-width: 90%;

        display: flex;
        justify-content: center;
        align-items: center;

        max-width: 1200px;
        height: auto;

        margin-top: 15px;
    }

    .cv-profile {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 10px;
        margin-left: 5%;
    }

    .cv-profile a {
        width: 180px;
        height: 45px;

        border-radius: 8px;
        border: 2px solid #00d2df;

        margin-top: 15%;
        margin-left: 20%;
        
        background: #262626;

        text-decoration: none;

        font-size: 20px;
        color: #f1f1f1;
        letter-spacing: 1.5px;

        cursor: pointer;

        &:hover {
            opacity: .5;
            text-shadow: 1px 1px 3px #00bbc5;
        }
    }
    

    svg {
        width: 14%;
        height: auto;

        margin-right: 1.5rem;
        margin-top: 5px;
        margin-left: 10px;

        color: #ff0000;
    }

    .cv-profile img {
        position: relative;

        left: 10%;
        
        border: 2px solid #6666ff;
        border-radius: 10px;
        background: transparent;
    }

    .aside {
        display: flex;
        flex-direction: column;
        
        margin-left: 20%;

        color: #f1f1f1;
    }

    p {
        color: #f1f1f1;
        font-family: 'Inter';
        font-size: 21px;
    }

     span {
        font-family: 'Inter';
        font-size: 21px;
        color: #00bbc5;
    }

    section {
        margin-top: 15px;
    }

    @media screen and (max-width: 950px) {

        .main {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        }

        .aside {
            margin: 30px 20px;
        }
    }
`;