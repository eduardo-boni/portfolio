import styled from "styled-components";

export const Footer = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    height: 70px;
    padding: 0 1rem;
    
    background: linear-gradient(270deg, #4d0066, #000);

.social-icon {
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .contact {
        font-family: 'Inter', sans-serif;
        color: #f1f1f1;
        padding-top: 8px;
    }

    .contact p {
        font-size: 0.9rem;
        color: #33cccc;
    }

    svg {
        width: 40px;
        height: 40px;

        color: #000;
        background: #f1f1f1;
        
        border: 2px solid #33cccc;
        border-radius: 50%;

        cursor: pointer;
    }

    @media screen and (max-width: 475px) {
        
        .contact p {
            font-size: 0.9rem;
        }
        
        svg {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
        }

        @media screen and (max-width: 440px) {
            .contact p {
                font-size: 0.8rem;
                margin: 2px;
            }
        }

        @media screen and (max-width: 415px) {
            .contact p {
                font-size: 0.7rem;
            }
        }

        @media screen and (max-width: 370px) {
            .contact p {
                font-size: 0.6rem;
            }
        }

        @media screen and (max-width: 360px) {
            .contact p {
                font-size: 0.6rem;
            }
        }
    }

`;