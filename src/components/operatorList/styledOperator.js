import styled, { keyframes } from 'styled-components';

export const slowUP = keyframes`
  0% {
     opacity: 0.2;  
     transform: translateY(-50px);
  }
  50%{
      opacity: 0.5;  
  }
  100%{
      opacity: 1; 
      transform: translateY(0px);
  }

`;

export const Item = styled.div`
  background: #ffffff;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.3), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px 0px;
  width: 270px;
  margin: 10px;
  height: 213px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease 0.5s;
  flex: 0 1 auto;
  &.entering {
    animation: ${slowUP} 600ms ease-out forwards;
  }
  &.exiting {
    animation: ${slowUP} 600ms ease-out alternate-reverse;
  }
  &:hover {
    box-shadow: 0px 19px 38px #6916a1;
  }
  @media (max-width: 991px) {
    margin-top: 50px;
  }
`;

export const List = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   margin-top: 50px;
   animation: ${slowUP} 700ms ease-out forwards;
   @media(max-width: 992px){
     margin-top: 0px;
      
`;
