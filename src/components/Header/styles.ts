import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;

  border-bottom: 2px solid #0ecf38;
  border-radius: 10px;

  padding: 0 20px;
`;

export const ContaintIcon = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 80px;
    height: auto;
  }

  h3 {
    font-weight: 500;
    font-size: 14px;
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;

  > a {
    margin-left: 30px;
    color: #0ecf38;
  }
  img {
    width: 30px;
    height: auto;
  }
`;
