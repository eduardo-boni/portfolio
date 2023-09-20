import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4.37rem;
  padding: 0 1rem;

  background: linear-gradient(#003333, #008080);

  .social-icon {
    display: flex;
    justify-content: center;
    gap: 0.62rem;
  }

  .contact {
    font-family: "Inter", sans-serif;
    color: #f1f1f1;
    padding-top: 8px;
  }

  .contact p {
    font-size: 0.9rem;
    color: #f1f1f1;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;

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
