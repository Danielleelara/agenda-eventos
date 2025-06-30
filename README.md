
# 📋 Agenda de Eventos 

Este é um projeto front-end desenvolvido com React Native, que simula uma interface com um login, uma home com uma lista de eventos e uma tela de detalhes. A estilização é feita com Styled Components, enquanto os testes de componentes são executados com o Jest. A integração contínua é realizada por meio do GitHub Actions, que executa um job automatizado para verificar se todos os testes estão passando a cada novo push na branch principal (main) — e, em seguida, realiza o deploy no ambiente de produção no Expo.

# Telas
![image](https://github.com/user-attachments/assets/1f929f8b-79b0-494b-abbd-e304eb3ef09d)
![Captura de Tela 2025-06-30 às 13 59 01](https://github.com/user-attachments/assets/7d9588d5-1c37-49ed-b1ac-4c9a0b7ecce6)
![Captura de Tela 2025-06-30 às 13 59 10](https://github.com/user-attachments/assets/999ec227-93e4-4edd-9c86-426af03efa49)

## 🔥 Funcionalidades

- Login com email e senha que deixa o botão desativado caso o usuário não digite alguma informação
- Tela home com a lista de eventos com título, data e hora e imagem se houver
- Tela de detalhes com a data, hora, descrição do evento e imagem se houver
- Loading para dar feedback da espera pela resposta e api e alerta em caso de erro na requisição de dados

## 🛠️ Tecnologias e Ferramentas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)

## 📦 Instalação e uso

Clone o projeto e instale as dependências:

```bash

git clone https://github.com/Danielleelara/agenda-edu
cd agenda-edu
yarn install

Para iniciar o projeto localmente:
yarn expo start

🧪 Testes
Para executar os testes unitários:

yarn test
Os testes cobrem os componentes de forma unitária, garantindo estão sendo renderizados corretamente.

🚀 Deploy
O deploy é feito automaticamente no Expo toda vez que há um push na branch main. O pipeline está configurado para:

- Rodar os testes com o Jest.

- Se os testes passarem, gerar o build.

- Publicar no Expo.

🧾 Estrutura de Pastas

src/
├── components/          # Componentes reutilizáveis 
│   └── __tests__/       # Testes unitários dos componentes
└── helpers/             # Utilitários para formatação de data
└── pages/               # Páginas da aplicação (ex: Home)
└── routes/              # Rotas das páginas da aplicação
└── services/            # Requisições da API
└── styles/              # Arquivo com o tema global
└── types/               # Tipagens utilizadas

👩‍💻 Autora

Desenvolvido por Danielle Souza
