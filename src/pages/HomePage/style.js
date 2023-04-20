import styled from "styled-components";

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Chivo&family=Roboto&display=swap');

background: #001a1a;
width: 100%;                  
min-height: 100vh;

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
    font-size: 2.5rem;
    color: #f1f1f1;
    margin-left: 40px;
    margin-top: 20px;
}

.animation {
    margin-left: 3.5rem;
    white-space: nowrap;
    overflow: hidden;
    animation: pisca normal infinite .7s, escrever normal 5s steps(55) both;
}

.stack {
    margin-left: 4.3rem;
}

.button {
    position: absolute;
    top: 76%;

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
    border: 1px solid #009999;
    box-shadow: 0 0 40px #00b3b3;

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
        width: 20%;
        height: 27%;
    }
}

@media screen and (max-width: 820px) {
    
    .button {
        top: 75%;
        margin: 0;
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

@media screen and (max-width: 680px) {
    .profile img {
        position: absolute;
        top: 16%;
        left: 39%;

        width: 21%;
        height: 21%;
    }
}

@media screen and (max-width: 490px) {
    .profile img {
        width: 25%;
        height: 21%;
    }

    p {
        font-size: 1.5rem;
    }
}

@media screen and (max-width: 460px) {
    .description p{
        margin-left: 2rem;
    }

    .button {
        position: absolute;
        left: 35%;
    }
}

@media screen and (max-width: 390px) {
    .profile img {
        width: 28%;
        height: 20%;
        }
    }

@media screen and (max-width: 360px) {
        .button {
            position: absolute;
            left: 30%;
        }
    }
}
`