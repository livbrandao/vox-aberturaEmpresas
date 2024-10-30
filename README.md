# VoxAberturaEmpresas

## 📚 ESTRUTURA DO PROJETO

A estrutura do projeto é organizada em várias pastas que contêm componentes, serviços, modelos e páginas. Abaixo está a organização básica do projeto:

/vox-aberturaEmpresas
├── /src
│ ├── /app
│ │ ├── /components # Componentes reutilizáveis
│ │ ├── /pages # Páginas da aplicação
│ │ ├── /services # Serviços para chamadas API
│ │ ├── /models # Modelos de dados
│ │ ├── /shared # Componentes compartilhados (e.g., modais)
│ │ ├── app-routing.module.ts # Módulo de rotas
│ │ ├── app.module.ts # Módulo principal da aplicação
│ │ └── main.ts # Ponto de entrada da aplicação
│ ├── /assets # Recursos estáticos (imagens, ícones, etc.)
│ ├── index.html # Arquivo HTML principal
│ ├── styles.css # Estilos globais
│ └── environments # Configurações de ambiente
├── /mocks # Dados mockados para desenvolvimento
├── angular.json # Configurações do Angular
├── package.json # Dependências do projeto
└── README.md # Documentação do projeto

## Principais Funções

### 1. Componentes

- **app-card**: Componente para exibir as informações básicas de uma empresa.
- **app-detail-card**: Componente para mostrar os detalhes da empresa selecionada.

### 2. Serviços

- **EmpresaService**: Serviço responsável por realizar chamadas à API e manipular dados relacionados às empresas. Inclui métodos como:
  - `getEmpresasData()`: Retorna a lista de empresas.
  - `getCompanyById(id: string)`: Retorna os dados de uma empresa específica.
  - `updateCompany(company: Empresa)`: Atualiza os dados de uma empresa.

### 3. Páginas

- **EmpresaListaComponent**: Componente que lista todas as empresas e permite a visualização dos detalhes de cada uma.

### 4. Modelos

- **Empresa**: Define a estrutura dos dados da empresa, incluindo informações do solicitante e detalhes da empresa.

## 💻 COMANDOS DE EXECUÇÃO

### Pré-requisitos

- Certifique-se de que você tenha o Node.js e o Angular CLI instalados.

### 1. Clonar o Repositório

````bash
`git clone https://github.com/livbrandao/vox-aberturaEmpresas.git`
cd vox-aberturaEmpresas

### 2. Instalar Dependências
```bash
- Execute o seguinte comando para instalar as dependências do projeto:
`npm install`

### 3. Executar o Servidor de Desenvolvimento
```bash
- Para iniciar o servidor de desenvolvimento, use o comando:
`npm start`

- A aplicação estará disponível em `http://localhost:4200`.

### 4. Acessar a API Mock
- Se você estiver usando um arquivo db.json para simular a API, você pode usar o JSON Server para servir esses dados. Instale o JSON Server, se ainda não o tiver feito usando o seguinte comando:
`npm install -g json-server`

- Em seguida, inicie o servidor JSON:
`json-server --watch mocks/db.json --port 3000`

- A API estará disponível em http://localhost:3000.

````

🧑‍💻 Autor(a)
Lívia Brandão.
