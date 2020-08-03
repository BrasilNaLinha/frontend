import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import { Container, SearchContainer, SearchInput, Button } from './styles';

import Header from '../../components/Header';

const Main: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <SearchBar />

        <SearchContainer>
          <SearchInput />
          <Button />
        </SearchContainer>

      </Container>
    </>
  );
};

export default Main;
