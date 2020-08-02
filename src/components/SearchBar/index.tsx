import React from 'react';

import { Container, SearchInput, Button } from './styles';

const SearchBar: React.FC = () => {
  return (
    <>
      <Container>
        <SearchInput />
        <Button>Pesquisar evento</Button>
      </Container>
    </>
  );
};

export default SearchBar;
