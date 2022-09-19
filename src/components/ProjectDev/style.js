import styled from "styled-components";

export const Footer = styled.div`
    
    height: 71px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    padding: 0 50px;
    background: linear-gradient(270deg, #4d0066, #000);

.social-icon {
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .contact {
        font-family: 'Roboto';
        font-size: 16px;
        color: #f1f1f1;
        padding-top: 15px;
    }

    p {
        margin-top: 2px;
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

`;