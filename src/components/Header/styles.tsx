import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 1.6rem;
  }

  h1 {
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  span {
    color: #8c8c8c;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

export { Container as default };
