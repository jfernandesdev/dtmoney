import React from 'react';

import { 
  Container, 
  Content, 
  Button 
} from './styles';

import logoImg from '../../assets/logo.svg';

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='Dt Money' />
        <Button type='button'>Nova transação</Button>
      </Content>
    </Container>
  );
};
