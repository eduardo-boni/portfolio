import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    min-height: 81.6vh;
    
    background: linear-gradient(90deg, #3333cc, #cc00cc51);

    h1 {
        text-align: center;
        color: #f1f1f1;

        margin: 0;
        padding-top: 20px;
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
    gap: 30px;
}

.container-skills {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 40%;
    min-height: 400px;

    margin: 2% 3%;

    border: 2px solid  #6666ff;
    border-radius: 20px;

    gap: 20px;
    
}

.box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    margin-bottom: 20px;
    gap: 10px;
}

.skill-box {
    height: 100px;
    width: 100px;

    background-color: #C4C4C4;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 25px;
    
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
    color:  #ff3300;
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

.vue-skill:hover {
    color: #00994d;
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