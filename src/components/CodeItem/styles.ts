import styled from 'styled-components';

export const Container = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s !important;

  &:hover {
    filter: brightness(1.2);
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const SpanPurple = styled.span`
  color: #c38cdd;
`;

export const SpanBlue = styled.span`
  color: #7ac7e3;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  display: block;
`;

export const Description = styled.p`
  color: #7ac7e3;
  width: 120px;
  word-wrap: break-word;
`;
