import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;


  @media(max-width: 769px) {
    overflow-x: scroll;
    padding-right: 1rem;
    padding-bottom: 1rem;

    ::-webkit-scrollbar {
      height: 0;
      background: transparent;
    }
`;

export const Card = styled.div`
  background: var(--shape);
  color: var(--text-title);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      font-size: 2rem;
      margin-top: 1rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background-red {
      background: var(--red);
      color: #FFF;
    }

     &.highlight-background-green {
      background: var(--green);
      color: #FFF;
    }

    @media(max-width: 769px) {
      width: 260px;
      padding: 2rem 2rem;
    }

`;
