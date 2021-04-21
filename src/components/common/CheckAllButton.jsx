import styled from "styled-components";

const CheckAllButton = ({ isChecked }) => {
  return <Button isChecked={isChecked}>»</Button>;
};

const Button = styled.div`
  justify-self: center;
  align-self: center;
  border: none;
  outline: none;
  background: #fff;
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => (props.isChecked ? "#737373" : "#d9d9d9")};
  transform: rotate(90deg);
`;

export default CheckAllButton;
