import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;

  @media(max-width: 769px) {
    margin-top: 1rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;

    &:first-child {
      font-weight: 500;
      color: var(--text-title);
    }

    &.deposit {
      color: var(--green);
    }

    &.withdraw {
      color: var(--red);
    }
  }

  @media(max-width: 769px) {
    display: none;
  }
`

export const CardMobileWrapper = styled.div`
  width: calc(100% - 1rem);

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;

    > span {
      color: var(--text-body);
    }
  }

  @media(min-width: 769px) {
    display: none;
  }
`;


export const CardMobile = styled.div`
  background: var(--shape);
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 1rem 2rem;

  h6 {
    font-size: 1.5rem;
    line-height: 1.85rem;
    padding: 0.5rem 0 1rem;

     &.deposit {
      color: var(--green);
    }

    &.withdraw {
      color: var(--red);
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-body);
  }
`;