import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;

  background: #001a1a;

  h1 {
    text-align: center;
    color: #f1f1f1;

    margin: 0;
    padding-top: 1.25rem;
  }

  h2 {
    text-align: center;
    color: #f1f1f1;
  }

  svg {
    width: 50%;
    height: 50%;
  }

  .skills-description {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.87rem;
  }

  .container-skills {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 40%;
    min-height: 25rem;

    margin: 4% 3%;

    border: 2px solid #009999;
    border-radius: 1.25rem;

    gap: 1.25rem;
  }

  .container-skills > h2 {
    margin: 1rem;
  }

  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    margin-bottom: 1.25rem;
    gap: 10px;
  }

  .skill-box {
    height: 6rem;
    width: 6.3rem;

    background-color: #c4c4c4;
    border-radius: 1.25rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 1.56rem;

    transition: ease 0.3s;
    cursor: pointer;
  }

  span {
    margin-bottom: 5px;
  }

  .skill-box:hover {
    background-color: white;
    transform: scale(1.05);
  }

  .html-skill:hover {
    color: #ff3300;
  }

  .css-skill:hover {
    color: #0039e6;
  }

  .js-skill:hover {
    color: #ffcc00;
  }

  .react-skill:hover {
    color: #0066ff;
  }

  .git-skill:hover {
    color: #ff3300;
  }

  .scrum-skill:hover {
    color: #0066ff;
  }

  .typescript-skill:hover {
    color: #0066ff;
  }

  .python-skill:hover {
    color: #ffcc00;
  }

  .java-skill:hover {
    color: #e68a00;
  }
  .angular-skill:hover {
    color: #ff1a1a;
  }

  .figma-skill:hover {
    color: #800080;
  }

  @media screen and (max-width: 780px) {
    .skills-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
  }

  @media screen and (max-width: 600px) {
    .skills-description {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 40px;
    }
  }
`;
