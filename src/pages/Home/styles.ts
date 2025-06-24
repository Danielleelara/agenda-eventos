import styled from "styled-components/native";

export const PageContent = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  color:  ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.body}px;
  font-family: SF Pro Display;
  font-weight: 500;
  margin: 24px;
`;
