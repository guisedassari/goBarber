import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="GoBaber" />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="digite seu email" />
          <input type="password" placeholder="Digite seu senha" />
          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
