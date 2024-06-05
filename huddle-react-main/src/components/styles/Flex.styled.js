import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: ${({ items }) => items || "start"};
  gap: ${({ gap }) => gap || "0"};
  flex-direction: ${({ direction }) => direction || "row"};

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;
