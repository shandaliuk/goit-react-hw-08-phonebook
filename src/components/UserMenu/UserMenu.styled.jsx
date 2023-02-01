import styled from 'styled-components';

export const User = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3c2a21;
  border-radius: 10px;
  color: #d5cea3;
  padding: 20px;
`;

export const UserName = styled.p`
  font-size: 24px;
  margin: 0 0 10px 0;
`;

export const UserButton = styled.button`
  padding: 5px 15px;
  width: 100%;
  display: block;
  font-family: inherit;
  font-size: 15px;
  color: #3c2a21;
  background-color: #d5cea3;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;

  &:hover,
  &:focus {
    color: #d5cea3;
    background-color: #3c2a21;
  }
`;
