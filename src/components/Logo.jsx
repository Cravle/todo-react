import styled from "styled-components";

const Logo = () => {
  return <Title>todos</Title>;
};

const Title = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 80px;
  color: rgba(255, 255, 255, 0.3);
  font-weight: bold;
  text-shadow: -1px -1px rgb(0 0 0 / 20%);
`;

export default Logo;
