import styled from "styled-components";

import MainInput from "./MainInput";
import Tasks from "./Tasks";
import CheckAllButton from "../common/CheckAllButton";

const Todo = () => {
  return (
    <Container>
      <Inner>
        <Wrapper>
          <CheckAllButton />
          <MainInput />
        </Wrapper>
        <Tasks />
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

const Inner = styled.div`
  position: relative;
  &:before {
    content: "";
    border-left: 1px solid #f5d6d6;
    border-right: 1px solid #f5d6d6;
    width: 2px;
    position: absolute;
    top: 0;
    left: 43px;
    height: 100%;
    z-index: 3;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px dotted #ccc;
`;

export default Todo;
