import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;

  > img {
    width: 35rem;
    flex: 1;
  }

  > div {
    flex: 4;
  }

  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
    font-size: 7rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const BoxItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  display: flex;
  justify-content: center;
  align-self: flex-start;
  transition: 1s !important;

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  &:hover {
    filter: brightness(1.2);
  }
  &:last-child {
    align-self: flex-end;
  }
  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 8rem;
      transition: 0.5s;
      color: ${({ theme }) => theme.text};
    }

    svg {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;

      color: ${({ theme }) => theme.text};
      transition: 0.5s;
      cursor: pointer;
    }

    &:hover {
      a,
      svg {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;
