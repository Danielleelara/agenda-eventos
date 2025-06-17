import React from "react-native";
import * as S from "./styles";

const Login = () => {
  return (
    <S.PageContent>
      <S.Title>Faça seu login 🔑</S.Title>
     <S.Label>E-mail ou usuário</S.Label>
      <S.InputComponent  placeholder="marcos.oliveira@agendae" >
      </S.InputComponent>
       <S.Label margin>Senha</S.Label>
      <S.InputComponent  placeholder="*********" >
      </S.InputComponent>
      <S.ButtonComponent onPress={()=> console.log('teste')}>
        <S.LabelButton>Entrar</S.LabelButton>
      </S.ButtonComponent>
    </S.PageContent>
  );
};

export default Login;
