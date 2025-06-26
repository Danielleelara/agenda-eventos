import styled from "styled-components/native";

export const PageContent = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const ImageView = styled.View`
  position: relative;
  width: 100%;
`;

export const Container = styled.View`
  position: absolute;
  margin-top: 160px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  height: 100%;
  border-radius: 20px 20px;
  padding: 32px;
  flex-direction: row;
`;

export const DateView = styled.View`
  height: 60px;
  width: 60px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Date = styled.Text`
 color: ${({ theme }) => theme.colors.default};
  font-size: ${({ theme }) => theme.fontSizes.title2}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.title2}px;
  color: ${({ theme }) => theme.colors.default};
  margin: 0 16px;
  font-weight: bold;
`;

export const HourContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin: 8px 16px 12px 108px;
`;

export const Hour = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.subtitle}px;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0 6px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.subtitle}px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 32px;
  line-height: 28px;
`;
