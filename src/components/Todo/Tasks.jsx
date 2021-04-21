import styled from "styled-components";

import Task from "./TaskItem";

const names = [
  { text: "task1", isChecked: false },
  { text: "task1", isChecked: true },
];

const Tasks = () => {
  return (
    <Items>
      {names.map((task) => (
        <Task text={task.text} isChecked={task.isChecked} />
      ))}
    </Items>
  );
};

const Items = styled.ul`
  overflow-y: auto;
  max-height: 305px;
  &::-webkit-scrollbar {
    width: 0.8em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8d7d77;
    border-radius: 3px;
  }
`;

export default Tasks;
