import styled from 'styled-components';

interface CardProps {
  imgUrl: string;
}

export const ProjetoContainer = styled.div<CardProps>`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;

  &:hover {
    > section > div {
      right: -12rem;
    }

    > section > section {
      opacity: 0.4;
    }

    > a {
      color: ${({ theme }) => theme.primary};
    }
  }

  > section {
    width: 50rem;
    height: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    position: relative;
  }

  > a {
    height: 4rem;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;
    font-weight: 300;
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    transition: 0.5s;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > a {
      margin: 3rem 5rem 0 0;
    }

    > section > div {
      text-align: right;
      right: 0;
      left: -10rem;
    }

    &:hover {
      > section > div {
        left: -12rem;
      }
    }
  }

  @media (max-width: 1450px) {
    > section {
      width: 40rem;
    }
  }

  @media (max-width: 1000px) {
    > section {
      width: 100%;

      > div {
        top: 1rem;
        left: 1rem;
      }
    }

    > a {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even) {
      flex-direction: row;

      > section {
        width: 100%;

        > div {
          top: 1rem;
          left: 1rem;
          text-align: left;
        }
      }

      > a {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }

      &:hover {
        > section > div {
          left: 1rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    height: 17rem;
  }

  @media (max-width: 450px) {
    > a {
      height: auto;
      font-size: 1.5rem;
      gap: 0.8rem;
    }

    > section > div {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1rem;
      }
    }
  }
`;

export const Overlay = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.gradient};
  opacity: 0.75;
  transition: 0.5s;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 3rem;
  right: -10rem;
  transition: 0.5s;
  width: fit-content;

  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 2.5rem;
    text-shadow: -4px 5px 22px #11172b;
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    font-size: 2rem;
    font-weight: 300;
    text-shadow: -4px 5px 22px #11172b;
  }
`;
