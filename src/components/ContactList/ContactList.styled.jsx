import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  font-size: 30px;
  color: #3c2a21;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.12), 0 0 1em rgba(0, 0, 0, 0.12),
    0 0 0.2em rgba(0, 0, 0, 0.12);
`;

export const Number = styled.span`
  font-size: 35px;
  color: #1a120b;
`;

export const Button = styled.button`
  padding: 5px 15px;
  display: block;
  font-family: inherit;
  font-size: 15px;
  color: #d5cea3;
  background-color: #3c2a21;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;

  &:hover,
  &:focus {
    color: #3c2a21;
    background-color: #d5cea3;
  }
`;
