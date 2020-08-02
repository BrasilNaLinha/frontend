import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

const Main: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <SearchBar />
      </Container>
    </>
  );
};

export default Main;
