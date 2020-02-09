import styled from 'styled-components';

export const ListStyle = styled.ul`
  position: relative;
  margin-top: 70px;
  display: flex;
  z-index: 999;
  @media (max-width: 992px) {
    margin-top: 60px;
  }
  @media (max-width: 665px) {
    margin: 20px auto;
  }
`;
export const ListItem = styled.ul`
  position: relative;
  background: ${props => (props.steps ? '#6916A1;' : 'rgba(0 ,0, 0, 0.12)')};
  border-radius: 50%;
  padding: 16px 28px;
  margin-right: 30px;
  color: ${props => (props.steps ? '#ffffff' : 'rgba(0 ,0, 0, 0.7)')};
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  transition: all ease 0.5s;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: -26px;
    width: 22px;
    height: 4px;
    background: rgba(0, 0, 0, 0.12);
    border-radius: 2px;
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: -26px;
    width: 22px;
    transform: ${props => (props.steps ? 'scale(1)' : 'scale(0)')};
    height: 4px;
    background: ${props => (props.steps ? '#6916A1;' : 'rgba(0 ,0, 0, 0.12)')};
    transition: all ease 0.5s;
    transform-origin: left center;
    border-radius: 2px;
  }
  &:nth-child(3) {
    &:before {
      display: none;
    }
    &:after {
      display: none;
    }
  }
  @media (max-width: 992px) {
    padding: 13px 22px;
    &:before {
      height: 2px;
    }
    &:after {
      height: 2px;
    }
  }
`;
