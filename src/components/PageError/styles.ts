import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > span {
    display: none;
  }


  > a {
    color: ${({theme}) => theme.secondary};
    font-size: 1.5rem;
    transition: 0.5s;

    &:hover {
      color: ${({theme}) => darken(0.3,theme.secondary)};
    }
  }

  @media (max-width: 1000px) {
    > a {
      font-size: 1rem;
    }
  }

  @media (max-width: 830px) {
  > div {
      display: none;
    }
  > span {
    display: block;
    color: ${({theme}) => theme.error};
    margin-bottom: 1rem;
  }
  }
`
