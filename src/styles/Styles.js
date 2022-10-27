import styled from "styled-components";

const toRem = (value) => `${value / 16}rem`;

export const SectionContainer = styled.section`
  padding: ${toRem(45)} ${toRem(60)} ${toRem(25)} ${toRem(60)};
  background-image: url(${(props) => props.bgImage});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 80%;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${toRem(15)} ${toRem(20)} ${toRem(15)};
`;

export const Divider = styled.div`
  padding: ${toRem(45)} ${toRem(60)} ${toRem(25)} ${toRem(60)};
  background-image: url(${(props) => props.bgImage});
  height: ${(props) => props.height};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: ${(props) => props.attach};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoInner = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-position: 50% 50%;
  background-repeat: no-repeat;
  cursor: pointer;
`;
