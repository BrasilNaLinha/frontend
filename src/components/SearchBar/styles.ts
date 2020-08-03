import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  width: 100%;
  margin-top: 80px;
`;

export const SearchInput = styled.input`
  width: 700px;
  height: 45px;
  font-size: 35px;
  border-radius: 10px 0 0 10px;
  background-color: #ebff00;
  text-transform: capitalize;
  padding: 0 8px;
`;

export const Button = styled.button`
  width: 160px;
  border-radius: 0 10px 10px 0;
  background-color: #00f135;
  text-align: left;
  font-size: 18px;
  color: #fff;
  padding: 6px;
`;
