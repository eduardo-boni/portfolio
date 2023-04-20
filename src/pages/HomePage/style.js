import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Chivo&family=Roboto&display=swap");

  background: linear-gradient(90deg, #003333, #001a1a);
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
    font-family: "Chivo";
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
    animation: pisca normal infinite 0.7s, escrever normal 5s steps(55) both;
  }

  .stack {
    margin-left: 4.3rem;
  }

  .button {
    position: absolute;
    top: 76%;
  }

  @keyframes pisca {
    100% {
      border-right-color: transparent;
    }
  }

  @keyframes escrever {
    100% {
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
    bottom: 15%;
  }

  @media screen and (max-width: 1024px) {
    .profile img {
      width: 23%;
      height: 35%;
      top: 23%;
    }
  }

  @media screen and (max-width: 870px) {
    .profile img {
      width: 23%;
      height: 30%;
      top: 23%;
    }

    @keyframes updown {
      0% {
        transform: translateX(-40px);
      }
      50% {
        transform: translateX(40px);
      }
      100% {
        transform: translateX(-40px);
      }
    }
  }

  @media screen and (max-width: 820px) {
    @keyframes updown {
      0% {
        transform: translateX(-40px);
      }
      50% {
        transform: translateX(40px);
      }
      100% {
        transform: translateX(-40px);
      }
    }

    .button {
      top: 75%;
      margin: 0;
    }

    @media screen and (max-width: 780px) {
      .profile img {
        animation: none;

        position: absolute;
        margin-top: -40px;
        margin-left: -25%;
      }
      .button {
        position: absolute;
        left: 37.5%;
      }
    }

    @media screen and (max-width: 680px) {
      .profile img {
        position: absolute;
        top: 27%;
        left: 65%;

        width: 25%;
        height: 25%;
      }

      p {
        font-size: 2rem;
      }
    }

    @media screen and (max-width: 535px) {
      p {
        font-size: 1.8rem;
      }
    }
    @media screen and (max-width: 490px) {
      .profile img {
        width: 30%;
        height: 25%;

        margin-left: -9rem;
      }

      p {
        font-size: 1.5rem;
      }
    }

    @media screen and (max-width: 460px) {
      .description p {
        margin-left: 2.5rem;
      }

      .button {
        position: absolute;
        left: 28%;
      }
    }

    @media screen and (max-width: 390px) {
      .profile img {
        width: 34%;
        height: 22%;
        left: 69%;
      }

      .button {
        position: absolute;
        left: 25%;
      }

      p {
        font-size: 1.4rem;
      }
    }

    @media screen and (max-width: 360px) {
      .profile img {
        left: 75%;
      }
      .button {
        position: absolute;
        left: 23%;
      }

      p {
        font-size: 1.3rem;
      }
    }
  }
`;
