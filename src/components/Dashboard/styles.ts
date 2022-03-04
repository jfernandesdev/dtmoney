import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  @media(max-width: 769px) {
    padding-right: 0;
    width: 100%;
  }
`;
