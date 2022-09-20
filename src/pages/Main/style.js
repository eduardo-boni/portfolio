import styled from "styled-components";

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Chivo&family=Roboto&display=swap');

background: linear-gradient(90deg, #cc00cc51, #3333cc);
width: 100%;
min-height: 81.6vh;

display: flex;
align-items: center;

.description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 28px;
}

p {
    font-family: 'Chivo';
    font-weight: 700;
    font-size: 2rem;
    color: #f1f1f1;
    margin-left: 40px;
    margin-top: 20px;
}

.name {
    margin-left: 50px;
    font-size: 50px;
}

.stack {
    margin-left: 70px;
}

.anima {
    max-width: 0;
    white-space: nowrap;
    overflow: hidden;
    animation: pisca normal infinite .7s, escrever normal 5s steps(55) both;
}

@keyframes pisca {
    100%{
        border-right-color: transparent;
    }
}

@keyframes escrever {
    100%{
        max-width: 100%;
    }   
}

.profile img {
    position: absolute;
    width: 300px;
    height: 300px;

    top: 30%;
    left: 65%;

    border-radius: 50%;
    border: 1px solid #cc00cc;
    box-shadow: 0 0 30px #000;

    animation: updown 3s linear infinite;
}

@keyframes updown {
    0% {
        transform: translateY(-40px);
    }
    50% {
        transform: translateY(40px);
    }
    100% {
        transform: translateY(-40px);
    }
}

.button {
    position: absolute;
    left: 42%;
    bottom: 15% 
}

@media screen and (max-width: 870px) {
   
    .profile img {
        width: 22%;
        height: 25%;
    }
}

@media screen and (max-width: 780px) {
    .profile img {
        animation: none;
    }
    .button {
        position: absolute;
        left: 37.5%;
        
    }
}

@media screen and (max-width: 600px) {
    .profile img {
        display: none;
    }
    .button {
        position: absolute;
        left: 34%;
    }
}
`;