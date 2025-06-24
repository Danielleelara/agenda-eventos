import React, { Image } from "react-native";
import * as S from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "../../styles/theme";

type CardProps = {
  image?: string,
  title: string,
  hour: string,
  startDate: string,
  marginBottom: boolean
}

const Card = ({image, title, hour, startDate, marginBottom}: CardProps) => {
  return (
    <S.Content marginBottom={marginBottom}>
      {image ?
      <S.ContentImage >
        <Image
          src={image}
          width={66}
          height={92}
          borderRadius={5}
        />
      </S.ContentImage>
      : null}
      <S.ContentCard>
        <S.Title margin>EVENTOS</S.Title>
        <S.Event>{title}</S.Event>
        <S.HourContent>
          <Ionicons name="stopwatch-outline" size={24} color={theme.colors.text} />
          <S.Title hour>{hour}</S.Title>
        </S.HourContent>
        <S.StyledDate>{startDate}</S.StyledDate>
      </S.ContentCard>
    </S.Content>
  );
};

export default Card;
