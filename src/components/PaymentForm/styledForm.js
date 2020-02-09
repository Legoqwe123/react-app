import styled, { keyframes } from 'styled-components';

const formUp = keyframes`
 0% {
    transform: translateY(-80px);
    opacity: 0.5;
  }
  100%{
    transform: translateY(0px);
    opacity: 1;
  }
`;
export const Form = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 75px;
  form {
    position: relative;
    padding: 50px 100px 76px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 1 auto;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.3), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px 0px;
    background: #fff;
    z-index: 999;
    animation: ${formUp} 600ms ease-out forwards;
    @media (max-width: 885px) {
      width: 85%;
      padding: 50px 0px 76px;
    }
    @media (max-width: 495px) {
      width: 100%;
    }
    &.exited {
      display: none;
    }
    button {
      padding: 15px 150px;
      background: #6916a1;
      border-radius: 10px;
      color: #fff;
      border: none;
      margin-top: 15px;
      cursor: pointer;
      transition: ease-out 0.2s;
      @media (max-width: 495px) {
        padding: 15px 93px !important;
      }
      &:hover {
        box-shadow: -2px 5px 11px #6916a1;
      }
    }
    img {
      margin: 10px 0;
      @media (max-width: 495px) {
        transform: scale(0.8);
      }
    }
  }
`;

export const FormTitle = styled.div`
  font-weight: 200;
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 35px;
`;
