import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;
    display: flex;
    flex-direction: column;

    p {
      color: ${({theme}) => theme.textHighlight};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }

    a {
      background: ${({theme}) => theme.primary};
      padding: 0.8rem 3rem;
      border-radius: 0.5rem;
      border: none;
      transition: 0.5s;
      margin-top: 2rem;
      color: #fff;
      text-transform: uppercase;
      font-size: 1.3rem;
      font-weight: 300;
      width: fit-content;

      &:hover {
        background: ${({theme}) => darken(0.05,theme.primary)};
      }
    }
  }

  @media (max-width: 700px) {
    padding: 0 2.5rem;

    p {
      font-size: 1rem;
    }

    a {
      padding: 0.7rem 2rem;
      font-size: 0.9rem;
    }
  }

`
