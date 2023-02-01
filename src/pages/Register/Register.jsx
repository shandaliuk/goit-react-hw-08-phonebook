import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {
  Form,
  SubmitButton,
  Input,
  PasswordInput,
  Label,
  Title,
  BackLink,
} from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
      return;
    }
    if (name === 'email') {
      setEmail(value);
      return;
    }
    setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Title>Sign-up</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>
        <Label>
          E-mail
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Password
          <PasswordInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
      <BackLink to="/">
        <IoMdArrowRoundBack />
        Back to homepage
      </BackLink>
    </>
  );
};

export default Register;
