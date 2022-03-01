import React from 'react';

import { Container, Table } from './styles';

export const TransactionsTable: React.FC = () => {
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
           <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000</td>
            <td>Venda</td>
            <td>01/03/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.000</td>
            <td>Casa</td>
            <td>01/03/2022</td>
          </tr>

          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000</td>
            <td>Venda</td>
            <td>01/03/2022</td>
          </tr>

        </tbody>
      </Table>
    </Container>
  );
}