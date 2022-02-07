import styled from "styled-components";

const Container = styled.main`
  overflow: revert;
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 24px;
`;

const WrapForm = styled.form`
  padding: 20px;
  input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
  }
`;

export { Container, WrapForm };
