import { Platform } from "react-native";
import styled from "styled-components/native";

export const Content = styled.TouchableOpacity<{marginBottom?: boolean}>`
  margin: ${(props)=>  props.marginBottom ? '0 24px 24px': '0 24px'} ;
  border-radius: 5px;
  min-height: 124px;
  background: ${({ theme }) => theme.colors.background};
  border-left-width: 4px;
  border-left-color:${({ theme }) => theme.colors.text};
  flex-direction: row;

  ${Platform.select({
    ios: `
      shadow-color: theme.colors.text;
      shadow-offset: 0px 4px;
      shadow-opacity: 0.2;
      shadow-radius: 4.65px;
    `,
    android: `
      elevation: 6;
    `,
  })}
`;

export const Title = styled.Text<{margin?: boolean}>`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-family: SF Pro Display;
  font-weight: 500;
    margin: ${(props) => props.margin ? '16.03px 16px 11.97px':  '0 6px 0'  };
`;

export const Event = styled.Text`
  color:  ${({ theme }) => theme.colors.default};
  font-family: SF Pro Display;
  font-weight: 500;
  font-size: 16px;
  margin: 0 16px;
`;

export const HourContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin: 8px 16px 12px;
`;

export const StyledDate = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: SF Pro Display;
  font-weight: 500;
  font-size: 12px;
  margin: 0 16px 16px;
`;

export const ContentCard = styled.View<{alignCenter?: boolean}>`
  align-items: ${(props) => props.alignCenter ? 'center':  'none'  };
  justify-content: ${(props) => props.alignCenter ? 'center':  'none'  };
  padding: ${(props) => props.alignCenter ? '16px 12px 16px 16px':  0  };
`;

export const ContentImage = styled.View`
  align-items: center;
  justify-content: center;
  padding: 16px 12px 16px 16px;
`;
