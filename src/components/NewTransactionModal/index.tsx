import React, { FormEvent, useState } from 'react';

import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Form, TransactionTypeContainer, RadioBox } from './styles';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ 
  isOpen, onRequestClose
}) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction (event : FormEvent) {
    event.preventDefault();

    const data  = {
      title,
      amount,
      type,
      category
    };

    api.post('/transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Form onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação:</h2>

        <input 
          placeholder="Título"
          onChange={event => setTitle(event.target.value)}
          value={title}
          required
        />

        <input 
          type="number"
          placeholder="Valor"
          onChange={event => setAmount(Number(event.target.value))}
          value={amount}
          required
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          onChange={event => setCategory(event.target.value)}
          value={category}
          required
        />

        <button type="submit">
          Cadastrar
        </button>
      </Form>
    </Modal>
  );
}