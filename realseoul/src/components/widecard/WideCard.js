import "./WideCard.scss";
import styled from "styled-components";

const WideWrapper = styled.div`
  height: 9vh;
  margin-bottom: 5px;
  border-radius: 15px;
  background-color: ${(props) => (props.reverse ? "#fff" : "#0885FD")};
  color: ${(props) => (props.reverse ? "#000" : "#fff")};
  font-size: 18px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WideCard = ({ reverse, text }) => {
  return <WideWrapper reverse={reverse}>{text}</WideWrapper>;
};

export default WideCard;
