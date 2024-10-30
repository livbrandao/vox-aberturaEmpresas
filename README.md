# VoxAberturaEmpresas

Este repositório contém a implementação do sistema de solicitações de abertura de empresa desenvolvido como parte do desafio para o Time Vox. O objetivo principal do projeto é permitir que usuários possam solicitar a abertura de empresas de forma simples e intuitiva.

## 📑 DESCRIÇÃO DO PROJETO

O sistema foi construído utilizando Angular e possui as seguintes funcionalidades:

- **Cadastro de solicitação**: Usuários podem preencher um formulário para solicitar a abertura de uma empresa, incluindo informações essenciais como nome da empresa, tipo, endereço, entre outros.
- **Listagem de solicitações**: As solicitações cadastradas são exibidas em uma lista, permitindo que os usuários visualizem o status de suas requisições.
- **Validação de Formulário**: Implementação de validações para garantir que os dados inseridos estão corretos antes do envio.
- **Interação com dados mockados**: Utilização de um arquivo `db.json` na pasta `mocks` para simular a persistência de dados e facilitar o desenvolvimento.

## Funcionalidades Não Implementadas

Apesar de a aplicação já fornecer funcionalidades básicas, algumas melhorias e recursos adicionais não foram implementados:

- **Autenticação de Usuário**: A aplicação não possui um sistema de autenticação, o que significa que qualquer usuário pode acessar e fazer solicitações.
- **Persistência de Dados**: A aplicação utiliza dados mockados. Uma integração com um backend real para persistência de dados seria um próximo passo.
- **Estilização e Responsividade**: Embora tenha sido feita uma estilização básica, a aplicação poderia se beneficiar de um design mais elaborado e responsivo.
- **Testes Automatizados**: A aplicação carece de testes automatizados, o que ajudaria a garantir a qualidade do código e a funcionalidade do sistema.

## Possíveis Melhorias

Para aprimorar ainda mais o projeto, as seguintes melhorias podem ser consideradas:

1. **Implementação de Autenticação**: Adicionar um sistema de autenticação para gerenciar usuários e suas solicitações de forma segura.
2. **Integração com Backend**: Conectar a aplicação a um backend real, como Node.js ou outra tecnologia, para permitir a persistência e recuperação de dados.
3. **Design Responsivo**: Melhorar a interface do usuário para que a aplicação seja mais amigável em dispositivos móveis e tablets.
4. **Adição de Testes**: Implementar testes unitários e de integração para garantir a robustez do sistema.
5. **Ajustes no Formulário**: No mockup de base para as telas, foi notada a falta de dois inputs importantes: **número** e **natureza jurídica**. A inclusão desses campos seria fundamental para melhorar a validação das informações inseridas e garantir o alinhamento com o design proposto.

## 📚 ESTRUTURA DO PROJETO

A estrutura do projeto é organizada em várias pastas que contêm componentes, serviços, modelos e páginas. Abaixo está a organização básica do projeto:

/vox-aberturaEmpresas
/src/app/components # Componentes reutilizáveis
──────── /pages # Páginas da aplicação
──────── /services # Serviços para chamadas API
──────── /models # Modelos de dados
──────── /shared # Componentes compartilhados (e.g., modais)
──────── app-routing.module.ts # Módulo de rotas
──────── app.module.ts # Módulo principal da aplicação
──────── /mocks # Dados mockados para desenvolvimento
──────── package.json # Dependências do projeto
──────── README.md # Documentação do projeto

## Principais Funções

1. Componentes

- **app-card**: Componente para exibir as informações básicas de uma empresa.
- **app-detail-card**: Componente para mostrar os detalhes da empresa selecionada.

2. Serviços

- **EmpresaService**: Serviço responsável por realizar chamadas à API e manipular dados relacionados às empresas. Inclui métodos como:
  - `getEmpresasData()`: Retorna a lista de empresas.
  - `getCompanyById(id: string)`: Retorna os dados de uma empresa específica.
  - `updateCompany(company: Empresa)`: Atualiza os dados de uma empresa.

3. Páginas

- **EmpresaListaComponent**: Componente que lista todas as empresas e permite a visualização dos detalhes de cada uma.

4. Modelos

- **Empresa**: Define a estrutura dos dados da empresa, incluindo informações do solicitante e detalhes da empresa.

## 💻 COMANDOS DE EXECUÇÃO

### Pré-requisitos

- Certifique-se de que você tenha o Node.js e o Angular CLI instalados.

1. Clonar o Repositório

```bash
`git clone https://github.com/livbrandao/vox-aberturaEmpresas.git`
`cd vox-aberturaEmpresas`
```

2. Instalar Dependências

```bash
- Execute o seguinte comando para instalar as dependências do projeto:
`npm install`
```

3. Executar o Servidor de Desenvolvimento

```bash
- Para iniciar o servidor de desenvolvimento, use o comando:
`npm start`
```

- A aplicação estará disponível em `http://localhost:4200`.

4. Acessar a API Mock

- Se você estiver usando um arquivo db.json para simular a API, você pode usar o JSON Server para servir esses dados. Instale o JSON Server, se ainda não o tiver feito usando o seguinte comando:

```bash
`npm install -g json-server`
```

- Em seguida, inicie o servidor JSON:

```bash
`json-server --watch mocks/db.json --port 3000`
```

- Enfim, execute o seguinte comando para rodar a API:

```bash
`npm run mock`
```

- A API estará disponível em `http://localhost:3000`.

🧑‍💻 Autor(a)

Lívia Brandão.
