import styled from "styled-components";

const DeleteButton = () => {
  return <Button>✖</Button>;
};

const Button = styled.button`
  display: grid;
  outline: none;
  border: none;
  justify-self: center;
  align-self: center;
  background: #fff;
  color: #ae8888;
  font-weight: 700;
  cursor: pointer;
  transition: font-size 0.2s linear;
  &:hover {
    font-size: 24px;
    text-shadow: 0 0 1px #000, 0 0 10px rgba(199, 107, 107, 0.8);
`;

export default DeleteButton;
