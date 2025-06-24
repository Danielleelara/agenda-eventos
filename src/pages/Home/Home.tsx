import React, { FlatList, Text } from "react-native";
import * as S from "./styles";
import Card from "../../components/Card/Card";
import { Fragment } from "react";

type Event = {
  id: number;
  title: string;
  description: string;
  sendAt: string;
  image: string;
  startAt: string;
  location: string;
};

const data = {
  data: [
    {
      id: 1,
      title: "Evento de Ciência",
      description:
        "Palestra sobre descobertas científicas recentes e sua aplicação em tecnologias emergentes.",
      sendAt: "2024-06-01T10:00:00.000Z",
      image: "https://picsum.photos/id/1011/600/400",
      startAt: "2024-07-10T14:30:00.000Z",
      location: "Av. das Ciências, 123 - São Paulo, SP",
    },
    {
      id: 2,
      title: "Feira de Tecnologia",
      description:
        "A maior feira de tecnologia da região, com expositores de todo o país.",
      sendAt: "2024-06-05T09:45:00.000Z",
      image: "https://picsum.photos/id/1005/600/400",
      startAt: "2024-08-15T09:00:00.000Z",
      location: "Centro de Convenções - Recife, PE",
    },
    {
      id: 3,
      title: "Oficina de Robótica",
      description:
        "Oficina voltada para crianças e adolescentes interessados em programação e robótica.",
      sendAt: "2024-06-10T12:15:00.000Z",
      image: "https://picsum.photos/id/1027/600/400",
      startAt: "2024-09-01T13:00:00.000Z",
      location: "Escola Técnica Futuro Digital - Fortaleza, CE",
    },
    {
      id: 4,
      title: "Semana da Leitura",
      description:
        "Atividades culturais, rodas de leitura e apresentações artísticas em comemoração ao mês da leitura.",
      sendAt: "2024-06-20T15:00:00.000Z",
      image: "https://picsum.photos/id/1035/600/400",
      startAt: "2024-09-01T10:00:00.000Z",
      location: "Biblioteca Municipal - Salvador, BA",
    },
    {
      id: 6,
      title: "Semana da Leitura",
      description:
        "Atividades culturais, rodas de leitura e apresentações artísticas em comemoração ao mês da leitura.",
      sendAt: "2024-06-20T15:00:00.000Z",
      image: "",
      startAt: "2024-09-01T10:00:00.000Z",
      location: "Biblioteca Municipal - Salvador, BA",
    },
  ],
  metadata: {
    page: 1,
    limit: 4,
    pre_page: null,
    next_page: 2,
    total: 20,
    total_pages: 5,
  },
};

const groupEventsByDate = (events: Event[]) => {
  return events.reduce<Record<string, Event[]>>((acc, event) => {
    const date = event.startAt;

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(event);
    return acc;
  }, {});
};

const grouped = groupEventsByDate(data.data);

const groupedArray = Object.entries(grouped).map(([date, events]) => ({
  date,
  events,
}));

const formatarData = (
  dataISO: string,
  withHour?: boolean,
  onlyHour?: boolean
) => {
  const data = new Date(dataISO);

  const diaSemana = data.toLocaleDateString("pt-BR", { weekday: "long" });
  const dia = data.getDate();
  const mes = data.toLocaleDateString("pt-BR", { month: "long" });
  const hora = data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  if (onlyHour) {
    return hora;
  }

  return withHour
    ? `${capitalize(diaSemana).replace('-feira', '')}, ${dia} de ${mes} às ${hora}h`
    : `${capitalize(diaSemana).replace('-feira', '')}, ${dia} de ${mes}`;
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Home = () => {
  return (
    <S.PageContent>
      <FlatList
        data={groupedArray}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <Fragment>
            <S.Title>{formatarData(item?.date)}</S.Title>
            <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={item.events}
            renderItem={(i)=> (
               <Card
                title={i.item.title}
                image={i?.item.image}
                startDate={formatarData(i?.item.startAt, true)}
                hour={formatarData(i?.item.startAt, true, true)}
                marginBottom={item.events.length > 1}
              />
            )}
            />
          </Fragment>
        )}
      />
    </S.PageContent>
  );
};

export default Home;
