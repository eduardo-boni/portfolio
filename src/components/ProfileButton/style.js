import styled from "styled-components";

export const Button = styled.button`
    width: 12.5rem;
    height: 3rem;

    margin: 50% auto;
    display: flex;
    justify-content: center;
    align-items: center;

    
    background: transparent;

    font-weight: 600;
    font-size: 1.4rem;
    
    animation: pulsate 1.5s infinite alternate;  
    
    border: 2px solid #009999;
    border-radius: 5px;

    box-shadow: 0 0 .2rem #f1f1f1,
                0 0 .2rem #f1f1f1,
                0 0 2rem #00e6e6,
                0 0 0.8rem #00e6e6,
                0 0 2.8rem #00e6e6,
                inset 0 0 1.3rem #00e6e6; 
    cursor: pointer;

@keyframes pulsate {
    
  100% {

      text-shadow:
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 20px #fff,
      0 0 40px #00e6e6,
      0 0 80px #00e6e6,
      0 0 90px #00e6e6,
      0 0 100px #00e6e6,
      0 0 150px #00e6e6;
  
  }
  
  0% {

    text-shadow:
    0 0 2px #fff,
    0 0 4px #fff,
    0 0 6px #fff,
    0 0 10px #00e6e6,
    0 0 45px #00e6e6,
    0 0 55px #00e6e6,
    0 0 70px #00e6e6,
    0 0 80px #00e6e6;

    }
}

&:hover {
    background: #009999;
}
`;