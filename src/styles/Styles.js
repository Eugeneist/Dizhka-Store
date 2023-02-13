import styled from 'styled-components';

const toRem = (value) => `${value / 16}rem`;

export const Container = styled.div`
  padding: ${toRem(45)} ${toRem(60)} ${toRem(25)} ${toRem(60)};
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionContainer = styled.section`
  padding: ${toRem(45)} ${toRem(60)} ${toRem(25)} ${toRem(60)};
  background-image: url(${(props) => props.bgImage});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 80%;
  background-attachment: ${(props) => props.attach};
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

export const LoaderImage = styled.img`
  width: 25%;
  margin: 0 auto;
  animation: spin 3s linear 0s infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const FormContainer = styled.form`
  text-align: start;
`;

export const FormLabel = styled.label`
  font-size: 4rem;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 960px) {
    font-size: 1rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  min-width: 100%;
  outline: transparent solid 2px;
  outline-offset: 2px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 7px 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 3rem
  height: 50px;

  @media (min-width: 768px) {
    font-size: 3rem;
    height: 60px;
  }

  @media (min-width: 960px) {
    font-size: 1rem;
    height: 40px;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  min-width: 100%;
  outline: transparent solid 2px;
  outline-offset: 2px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 3rem
  height: 50px;

  @media (min-width: 768px) {
    font-size: 3rem;
    height: 60px;
  }

  @media (min-width: 960px) {
    font-size: 1rem;
    height: 40px;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  min-width: 100%;
  outline: transparent solid 2px;
  outline-offset: 2px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 7px 10px;
  margin-top: 10px;
  font-size: 3rem;
  height: 150px;

  @media (min-width: 768px) {
    font-size: 3rem;
    height: auto;
  }

  @media (min-width: 960px) {
    font-size: 1rem;
    height: auto;
  }
`;
