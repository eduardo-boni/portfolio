import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

  width: 100%;

  background: #0d0d0d;

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

    border: 2px solid #009999;
    border-radius: 10px;

    box-shadow: 0 0 15px #009999;
  }

  .itens {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .itens img {
    width: 100%;
    height: 250px;

    border-radius: 10px 10px 0 0;
  }

  h3 {
    color: #00d2df;
    margin: 20px auto;
  }

  p,
  span {
    color: #fff;
    padding-left: 10px;
    margin: 20px 5px;
  }

  p,
  span {
    font-family: Inter, sans-serif;
    font-size: 17px;
  }

  span {
    color: #00d2df;
  }

  .container a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
    height: 2.4rem;

    margin: 15px auto;

    font-family: "Inter", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;

    text-decoration: none;
    color: #fff;

    border: none;
    border: 2px solid #009999;
    border-radius: 5px;

    background: #004d4d;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
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
