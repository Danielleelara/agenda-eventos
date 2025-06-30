import styled from "styled-components/native";

export const PageContent = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const ImageView = styled.View`
  position: relative;
  width: 100%;
`;

export const Container = styled.View<{hasImage?: boolean}>`
  position: ${(props) => props.hasImage ? 'absolute' : '' };
  margin-top: ${(props) => props.hasImage ? '160px' : '20px' };
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 20px 20px;
  padding: 32px;
  flex-direction: row;
`;

export const DateView = styled.View`
  height: 60px;
  width: 60px;
  background: #E4DFEB;
  border-radius: 5px;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Day = styled.Text`
 color: ${({ theme }) => theme.colors.secondary};
 font-size: ${({ theme }) => theme.fontSizes.title2}px;
 font-weight: bold;
`;

export const Month = styled.Text`
 color: ${({ theme }) => theme.colors.secondary};
 font-size: ${({ theme }) => theme.fontSizes.body}px;
 text-transform: uppercase;
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
