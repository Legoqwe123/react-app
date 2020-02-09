import styled, { keyframes } from 'styled-components';

const list = keyframes`
 0% {
    transform: translateY(-300px);
    opacity: 0.5;
  }
  100%{
    transform: translateY(-16px);
    opacity: 1;
  }
`;

export const DropdownStyled = styled.div`
    position: absolute;
    right: 0;
    top: 90px;
    overflow: hidden;
    border-radius: 10px;
    @media(max-width: 992px){
      top: 70px;
    }
    @media(max-width: 665px){
      top: 115px;
     }
}
  
`;
export const DropdownTitle = styled.div`
   position: relative;
   padding: 13px 22px;
   color: ${props => (!props.dropdown ? '#6916A1;' : 'rgba(0, 0, 0, 0.42);')}  ;
   font-size: 16px;
   background: #fff;
   border-radius: 10px;
   cursor: pointer;
   z-index: 10;
   svg {
    transform: ${props => (!props.dropdown ? 'rotate(0deg)' : 'rotate(-180deg)')}  ;   
    margin-left: 63px;
    transition: all ease 0.5s;
    path {
       fill: ${props => (!props.dropdown ? '#6916A1' : 'rgba(0, 0, 0, 0.42)')} 
    }
    }
  }
`;
export const DropdownList = styled.ul` 
    position: relative;
    z-index: 1;
    background: #fff;
    transform: translateY(-300px);
    border-radius: 10px;
    padding: 22px;
    &.entering {
        animation: ${list} 600ms ease-out forwards;
      }
    &.entered {
        transform: translateY(-16px);
        opacity: 1;
      }
    &.exiting {
        animation: ${list} 600ms ease-out  alternate-reverse;
     }
}
`;

export const DropdownName = styled.span`
  margin-left: 12px;
`;

export const DropdownImg = styled.img`
  width: 20px;
  height: 17px;
  margin-left: 20px;
`;

export const DropdownItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  border-bottom: 1px solid #f5f5f5;
  border-top: 1px solid #f5f5f5;
  transition: all ease-out 0.3s;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    display: inline-block;
    background: ${props => (props.listAdd ? 'green' : 'red')};
    top: ${props => (props.listAdd ? '21px' : '20px')};
    right: ${props => (props.listAdd ? '16px' : '1px')};
    width: ${props => (props.listAdd ? '14px' : '20px')};
    height: 2px;
    transform: ${props => (props.listAdd ? ' rotate(45deg)' : ' rotate(-45deg)')};
    transition: all ease 0.5s;
  }
  &:before {
    content: '';
    position: absolute;
    display: inline-block;
    background: ${props => (props.listAdd ? 'green' : 'red')};
    top: 20px;
    right: 1px;
    width: 20px;
    height: 2px;
    transform: ${props => (props.listAdd ? ' rotate(-45deg)' : ' rotate(45deg)')};
    transition: all ease 0.5s;
  }
  &:first-child {
    padding: 15px 0px 10px;
  }
  &:hover {
    border-bottom: 1px solid #6916a1;
    border-top: 1px solid #6916a1;
  }
`;
