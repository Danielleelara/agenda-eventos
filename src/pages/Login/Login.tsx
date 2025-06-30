import React, { Alert, Keyboard } from "react-native";
import * as S from "./styles";
import { useState, useRef } from "react";
import { signIn } from "../../services/login";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onLogin = async () => {
    Keyboard.dismiss();
    try {
      const { email, password } = user;
      const { token } = await signIn({ email, password });
      if (token) {
        navigation.navigate("events");
      }
    } catch (error) {
      Alert.alert("Erro ao logar. Por favor confirme seu login e senha!");
    } finally {
      setUser({email: '', password: ''})
    }
  };

  return (
    <S.PageContent>
      <S.Title>Faça seu login 🔑</S.Title>
      <S.Label>E-mail ou usuário</S.Label>
      <S.InputComponent
        placeholder="marcos.oliveira@agendae"
        value={user.email}
        onChangeText={(value) => setUser({ ...user, email: value })}
      ></S.InputComponent>
      <S.Label margin>Senha</S.Label>
      <S.InputComponent
        placeholder="******"
        value={user.password}
        onChangeText={(value) => setUser({ ...user, password: value })}
        onSubmitEditing={onLogin}
      ></S.InputComponent>
      <S.ButtonComponent onPress={onLogin} disabled={!user.email || !user.password}>
        <S.LabelButton>Entrar</S.LabelButton>
      </S.ButtonComponent>
    </S.PageContent>
  );
};

export default Login;
