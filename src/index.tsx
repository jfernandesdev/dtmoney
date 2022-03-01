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
          amount: 12.000,
          type: 'deposit',
          category: 'Freelancer',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 2.000,
          type: 'withdraw',
          category: 'Casa',
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