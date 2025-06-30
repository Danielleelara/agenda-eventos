import styled from "styled-components/native";

export const PageContent = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 24px;
`;


export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.body}px;
  font-family: SF Pro Display;
  font-weight: 500;
`;

export const Divider = styled.View`
  background: ${({ theme }) => theme.colors.border};
  width: 150px;
  height: 1px;
`;
