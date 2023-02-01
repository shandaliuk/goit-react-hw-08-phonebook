import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
`;

export const SubmitButton = styled.button`
  padding: 10px 30px;
  display: block;
  font-family: inherit;
  font-size: 20px;
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

export const PasswordInput = styled.input`
  display: block;
  width: 300px;
  padding: 10px 15px;
  font-family: auto;
  font-size: 25px;
  color: #3c2a21;
  background-color: #d5cea3;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Label = styled.label`
  display: block;
  text-align: center;
  font-size: 25px;
`;

export const Title = styled.span`
  text-align: center;
  padding: 50px;
  display: block;
  margin-bottom: 10px;
  font-size: 45px;
  color: #1a120b;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.12), 0 0 1em rgba(0, 0, 0, 0.12),
    0 0 0.2em rgba(0, 0, 0, 0.12);
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 15px;
  display: flex;
  align-items: center;
  column-gap: 5px;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
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
