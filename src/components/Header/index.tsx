import React from 'react';

import { Container, ContaintIcon, Infos } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <Container>
        <ContaintIcon>
          <img
            src="https://image.flaticon.com/icons/svg/2151/2151295.svg"
            alt=""
          />
          <h3>Brasil na linha</h3>
        </ContaintIcon>

        <Infos>
          <a href="">Sobre</a>
          <a href="">
            <img
              src="https://image.flaticon.com/icons/png/512/25/25231.png"
              alt=""
            />
          </a>
        </Infos>
      </Container>
    </>
  );
};

export default Main;
