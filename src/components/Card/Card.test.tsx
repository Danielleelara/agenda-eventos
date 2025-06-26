import { render } from "@testing-library/react-native";
import Card from "./Card";
import { ThemeProvider } from 'styled-components/native';
import { theme } from "../../styles/theme";


describe("Card", () => {
  test("Should renders correctly on Card", () => {
    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <Card
              title="Evento de Ciência"
              hour="10:20"
              startDate="2024-07-10T14:30:00.000Z"
              marginBottom={false}
              onPress={() => console.log("teste")}
            />
        </ThemeProvider>
    );

    const card = getByText("Evento de Ciência");
    expect(card).toBeVisible();
  });
});
