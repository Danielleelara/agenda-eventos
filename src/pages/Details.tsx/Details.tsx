import { useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import * as S from "./styles";
import { theme } from "../../styles/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DateFormatter } from "../../helpers/DateFormatter";

const Details = () => {
  const route = useRoute();
  const { state } = route.params as { state: EventA };

  const day = new Date(state.startAt).getDate();
  const month = new Date(state.startAt)
   const formattedMonth = month.toLocaleDateString("pt-BR", { month: 'short' });

  return (
    <S.PageContent>
      {state.image ? 
      
      <S.ImageView>
        <Image src={state.image} height={263} borderRadius={5} />
      </S.ImageView> : null
    }
      <S.Container>
        <View>
          <S.DateView>
            <S.Date>{day}</S.Date>
            <S.Date>{formattedMonth.replace('.', '')}</S.Date>
          </S.DateView>
        </View>
          <S.Title>{state.title}</S.Title>
            </S.Container>
        <View>
          <S.HourContent>
            <Ionicons
              name="stopwatch-outline"
              size={24}
              color={theme.colors.text}
            />
            <S.Hour>{DateFormatter(state.startAt, false, true)}</S.Hour>
          </S.HourContent>
          <S.Description>{state.description}</S.Description>
        </View>
    </S.PageContent>
  );
};

export default Details;
