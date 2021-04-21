import styled from "styled-components";

const CheckButton = ({ isChecked }) => {
  return <Button isChecked={isChecked}>✔</Button>;
};

const Button = styled.button`
  justify-self: center;
  align-self: center;
  border: none;
  outline: none;
  background: #fff;
  cursor: pointer;
  color: ${(props) => (props.isChecked ? "#85ada7" : "#d9d9d9")};
  width: 100%;
  height: 100%;
  font-size: 24px;
`;

export default CheckButton;
