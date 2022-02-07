# Nasa Search


## 🏷️ Sobre

Aplicação de busca de Neo utilizando a Api da Nasa


## 📦 Como baixar e executar?

**Antes de baixar e executar o projeto**, é necessário ter o **Node.js** já instalado e, em seguida, instalar as seguintes ferramentas:

- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com/lang/en/)

### ⬇️ Baixando o projeto

Abra o terminal do seu sistema operacional e execute os seguintes comandos:

```bash
  # Clonar o repositório
  git clone https://github.com/fcfranzoni/nasaList.git

  # Instalar as dependências
  npm install
```

### 🌐 Variáveis de ambiente

Na raíz do projeto você encontrará o arquivo `.env.development`. A partir dele, crie um outro arquivo chamado `.env` utilizando a mesma estutura.

Serão necessárias duas variáveis:

```env
  REACT_APP_ENVIRONMENT=(utilizar o ambiente de acordo com o desenvolvimento (development | production))
  REACT_APP_NASA_API_URL= (Atualmente utilizando https://api.nasa.gov/neo/rest/v1/)
```

Para isso, acesse o site da [API da Nasa](https://api.nasa.gov/neo/rest/v1/) 

### 🏃 Executando

Com tudo configurado, iremos iniciar a aplicação:

```bash
  # Executar o servidor
  yarn start
```


## Testes

Para executar os testes, execute:

```bash
  # Rodar testes
  yarn test

  # Rodar testes e gerar coverage report
  yarn run test:coverage
```

---

Desenvolvido com 💜 por Fábio Franzoni 
