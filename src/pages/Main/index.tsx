import React from 'react';

import { Container, SearchContainer, SearchInput, Button } from './styles';

import Header from '../../components/Header';

const Main: React.FC = () => {
  return (
    <>
      <Container>
        <Header />

        <SearchContainer>
          <SearchInput />
          <Button />
        </SearchContainer>
      </Container>
    </>
  );
};

export default Main;
