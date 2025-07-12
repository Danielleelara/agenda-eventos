import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/theme";
import Login from "./src/pages/Login/Login";
import Routes from "./src/routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}