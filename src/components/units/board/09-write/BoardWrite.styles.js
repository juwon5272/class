import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  font-size: ${(props) => props.rrr};
  background-color: ${(props) => (props.zzz === true ? "yellow" : "default")};
`;

// const qqq = "철수";
// export default qqq;
