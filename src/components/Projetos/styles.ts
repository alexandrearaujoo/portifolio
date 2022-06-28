import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1000px) {
      gap: 2rem;
    }
  }

  > a {
    background: ${({ theme }) => theme.primary};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.5s;
    text-transform: uppercase;
    color: #000;
    font-size: 1.5rem;
    font-weight: 300;

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }

    @media (max-width: 500px) {
      padding: 1.5rem;
      font-size: 1rem ;
    }
  }
`;
