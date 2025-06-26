declare global {

type EventA = {
  id: number;
  title: string;
  description: string;
  sendAt: string;
  image: string;
  startAt: string;
  location: string;
};

type List = {
  data: EvenA[];
  metadata: {
    page: number;
    limit: number;
    pre_page: null;
    next_page: number;
    total: number;
    total_pages: number;
  };
};

type Request = {
  email: string;
  password: string;
};

type CardProps = {
  image?: string,
  title: string,
  hour: string,
  startDate: string,
  marginBottom: boolean,
  onPress(): void
};

type RootStackParamList = {
  details: { state: EventA } | undefined;
};

}

export {};


