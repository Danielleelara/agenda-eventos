import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const PageContent = styled(SafeAreaView)`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.default};
  font-size: 25px;
  font-family: SF Pro Display;
  font-weight: bold;
  margin: 164px 24px 36px;
`;

export const Label = styled.Text<{ margin?: boolean }>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.body}px;
  font-family: SF Pro Display;
  margin: ${(props) => (props.margin ? "17px 24px 8px" : "0 24px 8px")};
`;

export const InputComponent = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  margin-bottom: 8px;
  margin: 0 24px;
  height: 50px;
  border-radius: 3px;
  padding: 13px 20px;
`;

export const ButtonComponent = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 50px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 40px;
  left: 25px;
  right: 24px;
`;

export const LabelButton = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.subtitle}px;
  font-family: SF Pro Display;
  font-weight: bold;
  border-radius: 3px;
`;
