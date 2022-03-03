import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento Web',
          amount: 12000,
          type: 'deposit',
          category: 'Freelancer',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 2000,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date()
        },
        {
          id: 3,
          title: 'Compras do mês',
          amount: 1000,
          type: 'withdraw',
          category: 'Supermercado',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);