import styled from 'styled-components';

export const Status = styled.div`
   {
    position: absolute;
    top: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    width: 570px;
    height: 356px;
    padding: 10px;
    z-index: 12;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.3), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px 0px;
    z-index: 9999;
    div {
      text-align: center;
      font-size: 25px;
      color: #6916a1;
    }
    p {
      text-align: center;
      color: #6916a1;
    }
    button {
      padding: 15px 80px;
      background: #6916a1;
      border-radius: 10px;
      color: #fff;
      border: none;
      margin-top: 30px;
      cursor: pointer;
      transition: ease-out 0.2s;
      &:hover {
        box-shadow: -2px 5px 11px #6916a1;
      }
    }
  }
  @media (max-width: 885px) {
    top: 25%;
    width: 85%;
    position: fixed;
  }
`;
