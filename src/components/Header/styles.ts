import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid ${({theme}) => theme.backgroundLight};

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;
