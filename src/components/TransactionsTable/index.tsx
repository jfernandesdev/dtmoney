import React from 'react';

import { useTransactions } from '../../hooks/useTransactions';

import { Container, Table, CardMobileWrapper, CardMobile } from './styles';

export const TransactionsTable: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'withdraw' && '-'}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <CardMobileWrapper>
        <div>
          <h2>Listagem</h2>
          <span>{transactions.length} itens</span>
        </div>
        
        {transactions.map(transaction => (
          <CardMobile key={transaction.id}>
            <p>{transaction.title}</p>
            <h6 className={transaction.type}>
              {transaction.type === 'withdraw' && '-'}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(transaction.amount)}
            </h6>

            <div>
              <span>{transaction.category}</span>
              <span>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </span>
            </div>
          </CardMobile>
        ))}
      </CardMobileWrapper>
    </Container>
  );
}