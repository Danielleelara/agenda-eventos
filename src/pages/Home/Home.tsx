import React, { Alert, FlatList, Text } from "react-native";
import * as S from "./styles";
import Card from "../../components/Card/Card";
import { Fragment, useEffect, useState } from "react";
import { events } from "../../services/events";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DateFormatter } from "../../helpers/DateFormatter";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [eventsAll, setEventsAll] = useState<EventA[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const getEvents = async () => {
    try {
      setLoading(true)
      const { list } = await events();
      setEventsAll(list.data);
    } catch (error) {
      Alert.alert("Erro ao logar. Por favor confirme seu login e senha!");
    } finally {
      setLoading(false)
    }
  };

  const groupEventsByDate = (events: EventA[]) => {
    return events.reduce<Record<string, EventA[]>>((acc, event) => {
      const date = event.startAt;

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(event);
      return acc;
    }, {});
  };

  const grouped = groupEventsByDate(eventsAll);

  const groupedArray = Object.entries(grouped).map(([date, events]) => ({
    date,
    events,
  }));

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <S.PageContent>
      { !loading ?
      <FlatList
        data={groupedArray}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <Fragment>
            <S.TitleView>
            <S.Title>{DateFormatter(item?.date)}</S.Title>
            <S.Divider/>
            </S.TitleView>
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              data={item.events}
              renderItem={(i) => (
                <Card
                  title={i.item.title}
                  image={i?.item.image}
                  startDate={DateFormatter(i?.item.startAt, true)}
                  hour={DateFormatter(i?.item.startAt, true, true)}
                  marginBottom={item.events.length > 1}
                  onPress={() =>
                    navigation.navigate("details", { state: i.item })
                  }
                />
              )}
            />
          </Fragment>
        )}
      />
      : <Loading/> }
    </S.PageContent>
  );
};

export default Home;
