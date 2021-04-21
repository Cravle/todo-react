import CheckButton from "../common/CheckButton";
import DeleteButton from "../common/DeleteButton";
import styled from "styled-components";

const Task = ({ text, isChecked }) => {
  return (
    <TaskItem>
      <CheckButton isChecked={isChecked} />
      <TaskWrapper>
        <TaskText isChecked={isChecked}>{text}</TaskText>
      </TaskWrapper>
      <DeleteButton />
    </TaskItem>
  );
};

const TaskItem = styled.li`
  display: grid;
  height: 60px;
  background-color: #fff;
  list-style: none;
  grid-template-columns: 1fr 8fr 1fr;
  position: relative;
  z-index: 2;
`;

const TaskWrapper = styled.div`
  width: 100%;
  font-size: 24px;
  display: grid;
  align-self: center;
  position: relative;
  background-color: #fff;
`;

const TaskText = styled.div`
  max-width: 400px;
  font-size: 24px;
  color: ${(props) => (props.isChecked ? "#c0c0c0" : "#373838")};
  ${({ isChecked }) => isChecked && "text-decoration:line-through "};
  padding-left: 10px;
  display: grid;
  align-self: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export default Task;
