import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
`;

export const Title = styled.h3`
  display: block;
  margin-bottom: 10px;
  font-size: 25px;
  color: #1a120b;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.12), 0 0 1em rgba(0, 0, 0, 0.12),
    0 0 0.2em rgba(0, 0, 0, 0.12);
`;

export const Input = styled.input`
  display: block;
  width: 300px;
  padding: 10px 15px;
  font-family: inherit;
  font-size: 25px;
  color: #3c2a21;
  background-color: #d5cea3;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
