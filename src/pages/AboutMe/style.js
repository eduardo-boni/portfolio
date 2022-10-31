import styled from "styled-components";

export const Container = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

    min-height: 80vh;

    background: linear-gradient(90deg, #3333cc, #cc00cc51);

    h1 {
        text-align: center;

        padding: 19px;
        color: #f1f1f1;
    }

    .main {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 10px;
    }

    .main .cv-profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .cv-profile img {
        width: 16rem;
        
        border: 2px solid #6666ff;
        border-radius: 10px;
        background: transparent;
    }

    .cv-profile a {
        width: 180px;
        height: 45px;

        border-radius: 8px;
        border: 2px solid #00d2df;

        margin: 2rem;
        margin-left: 15%;
        
        background: #262626;
        text-decoration: none;

        font-size: 1.2rem;
        color: #f1f1f1;
        letter-spacing: 1.5px;

        cursor: pointer;

        &:hover {
            opacity: .5;
            text-shadow: 1px 1px 3px #00bbc5;
        }

        svg {
            
        width: 1.4rem;

        margin-right: 1.4rem;
        margin-top: 0.7rem;
        margin-left: 0.9rem;

        color: #ff0000;
        }
    }

    .aside {
        max-width: 44rem;
    }

    .aside section p {
        color: #f1f1f1;
        font-size: 1.3rem;
        font-family: 'Inter', sans-serif;
        margin-bottom: 15px;
    }

    .skills span {
        color: #00d2df;
        font-size: 1.2rem;
        font-family: 'Inter', sans-serif;
    }

    @media screen and (max-width: 1000px) {
        .main {
            display: flex;
            flex-wrap: wrap;
        }

        @media screen and (max-width: 760px) {
            .aside {
                margin: 1.5rem;
            }
        }
    }
`;