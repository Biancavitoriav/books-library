## Biblioteca de Livros

Esta biblioteca foi desenvolvida para exibir livros best-sellers utilizando a API do New York Times. O sistema permite buscar os livros mais vendidos e exibi-los em um carrossel interativo, além de contar com uma interface moderna e responsiva.

### Stacks Utilizadas

- **Linguagem:** JavaScript (React)
- **Framework UI:** Material-UI
- **Bibliotecas Adicionais:**
  - `react-slick` (Carrossel interativo)
  - `slick-carousel` (Estilos do carrossel)
- **Fonte de Dados:** API do New York Times

### Instalação

Para utilizar o projeto, siga os passos abaixo:

```sh
git clone https://github.com/seu-repositorio/nome-do-projeto.git
cd nome-do-projeto
npm install
```

### Configuração Da .ENV
1. Copie o modelo do arquivo ".env-example"
2. Gere as duas chave de API e substitua as informações.
   
Como obter uma chave da API do New York Times. Para isso:
1. Acesse [NY Times API](https://developer.nytimes.com/).
2. Gere uma chave de API.

Como obter uma chave da API da google. Para isso:
1. Acesse  [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um novo projeto ou selecione um existente.
3. No menu lateral, vá em "APIs e serviços" > "Credenciais".
4. Clique em "Criar credencial" e selecione "Chave da API".
5. Copie a chave gerada.



### Funcionalidades

#### 1. Buscar Best-Sellers
A biblioteca consome a API do NY Times para obter uma lista atualizada dos livros mais vendidos.

#### 2. Exibir Livros no Carrossel
Os livros recuperados da API são exibidos em um carrossel interativo, permitindo a navegação fácil.

#### 3. Interface Responsiva
A interface foi projetada utilizando Material-UI para oferecer uma experiência agradável em diferentes dispositivos.

### Requisitos

- Node.js versão 16 ou superior
- Chave de API do New York Times

### Executando o Projeto
Rode os comando abaixo em terminais diferentes.
```sh
py .\ApiChatGpt.py
npm run dev
```
- Documentação gerada por IA, créditos ao https://chatgpt.com/
