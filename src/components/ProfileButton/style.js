import styled from "styled-components";

export const Button = styled.button`
    width: 12.5rem;
    height: 45px;

    position: absolute;
    margin-top: 20px;
    margin-left: -25px;

    
    background: transparent;

    font-weight: 600;
    font-size: 1.2rem;
    
    animation: pulsate 1.5s infinite alternate;  
    
    border: 2px solid #8000ff;
    border-radius: 5px;

    box-shadow: 0 0 .2rem #f1f1f1,
                0 0 .2rem #f1f1f1,
                0 0 2rem #bc13fe,
                0 0 0.8rem #bc13fe,
                0 0 2.8rem #bc13fe,
                inset 0 0 1.3rem #bc13fe; 
    cursor: pointer;

@keyframes pulsate {
    
  100% {

      text-shadow:
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 20px #fff,
      0 0 40px #bc13fe,
      0 0 80px #bc13fe,
      0 0 90px #bc13fe,
      0 0 100px #bc13fe,
      0 0 150px #bc13fe;
  
  }
  
  0% {

    text-shadow:
    0 0 2px #fff,
    0 0 4px #fff,
    0 0 6px #fff,
    0 0 10px #bc13fe,
    0 0 45px #bc13fe,
    0 0 55px #bc13fe,
    0 0 70px #bc13fe,
    0 0 80px #bc13fe;

    }
}

&:hover {
    background: #ccccb3;
}
`;