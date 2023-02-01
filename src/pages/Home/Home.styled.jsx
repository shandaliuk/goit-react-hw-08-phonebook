import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Heading = styled.h2`
  display: block;
  font-size: 72px;
  text-align: center;
  color: #1a120b;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.12), 0 0 1em rgba(0, 0, 0, 0.12),
    0 0 0.2em rgba(0, 0, 0, 0.12);
`;

export const Text = styled.p`
  display: block;
  font-size: 40px;
  text-align: center;
  color: #1a120b;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.12), 0 0 1em rgba(0, 0, 0, 0.12),
    0 0 0.2em rgba(0, 0, 0, 0.12);
`;

export const UserLink = styled(Link)`
  padding: 15px;
  display: block;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-size: 30px;
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

export const LogOutButton = styled.button`
  padding: 15px;
  display: block;
  min-width: 300px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-size: 30px;
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
