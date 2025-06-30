import { render } from "@testing-library/react-native";
import Card from "./Loading";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../../styles/theme";
import Loading from "./Loading";

describe("Card", () => {
  test("Should renders correctly on Card", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Loading/>
      </ThemeProvider>
    );

    const loading = getByTestId('loading-test');
    expect(loading).toBeVisible();
  });
});
