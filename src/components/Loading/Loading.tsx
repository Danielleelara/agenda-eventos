import { ActivityIndicator} from "react-native";
import { theme } from "../../styles/theme";
import * as S from "./styles";

const Loading = () => {
  return (
    <S.Container>
      <ActivityIndicator size="large" color={theme.colors.default} />
    </S.Container>
  );
};



export default Loading;
