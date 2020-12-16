import "./WideCard.scss";
import styled from "styled-components";

const WideWrapper = styled.div`
  height: 8vh;
  margin-bottom: 5px;
  border-radius: 15px;
  background-color: ${(props) => (props.reverse ? "#fff" : "#0885FD")};
  color: ${(props) => (props.reverse ? "#000" : "#fff")};
  font-size: 18px;
`;

const WideCard = ({ reverse }) => {
  return <WideWrapper reverse={reverse}></WideWrapper>;
};

export default WideCard;
