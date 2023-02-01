import { IoMdArrowRoundBack } from 'react-icons/io';
import { Heading } from 'pages/Home/Home.styled';
import { BackLink } from 'pages/Register/Register.styled';

const Error = () => {
  return (
    <>
      <Heading>Page not found!</Heading>
      <BackLink to="/">
        <IoMdArrowRoundBack />
        Back to homepage
      </BackLink>
    </>
  );
};

export default Error;
