import React from 'react';
import { 
  Container, 
  Content, 
  Button 
} from './styles';

import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenNewTransactionModal}) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='Dt Money' />
        <Button type='button' onClick={onOpenNewTransactionModal}>
          Nova transação
        </Button>
      </Content>
    </Container>
  );
};
