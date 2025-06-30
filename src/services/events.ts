export const events = async (): Promise<{ list: List }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        list: {
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
        },
      });
    }, 3000);
  });
};
