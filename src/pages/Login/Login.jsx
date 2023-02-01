import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { BackLink } from 'pages/Register/Register.styled';
import {
  Form,
  Input,
  PasswordInput,
  Label,
  SubmitButton,
  Title,
} from 'pages/Register/Register.styled';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
      return;
    }
    setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Title>Sign in</Title>
      <Form onSubmit={handleSubmit}>
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
        <SubmitButton type="submit">Login</SubmitButton>
      </Form>
      <BackLink to="/">
        <IoMdArrowRoundBack />
        Back to homepage
      </BackLink>
    </>
  );
};

export default Login;
