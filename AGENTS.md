# Convenções do projeto

## Escopo e tecnologia

- Use Angular estável, componentes standalone, TypeScript strict, Angular Router, SCSS e npm.
- Mantenha a aplicação estática enquanto não houver uma decisão explícita de backend.
- Não adicione bibliotecas de interface, gerenciamento global de estado ou outras dependências sem necessidade concreta.
- Preserve `package-lock.json` no controle de versão.

## Código

- Escreva código, identificadores e nomes de arquivos em inglês.
- Escreva interface, mensagens e documentação em português brasileiro.
- Aplique responsabilidade única, composição e separação de responsabilidades.
- Priorize simplicidade, legibilidade e organização por funcionalidade.
- Não reproduza no frontend camadas `Domain`, `Application` ou `Infrastructure` do backend.
- Não crie abstrações, serviços ou interfaces sem uso real.
- Só coloque código em `shared` quando ele for efetivamente compartilhado.
- Não crie testes que apenas confirmem a existência de componentes.
- Use HTML semântico e preserve navegação por teclado e foco visível.

## Estilos

- Mantenha tokens globais em `src/styles/_tokens.scss` e regras globais essenciais em `src/styles/_base.scss`.
- Mantenha estilos específicos junto ao componente responsável.
- Trate os valores visuais atuais como provisórios até a definição da identidade visual.

## Qualidade e Git

- Antes de concluir uma alteração, execute `npm run build`, `npm run lint` e `npm run format:check`.
- Use Conventional Commits com descrição em português, por exemplo: `feat: adiciona seção de projetos`.
- Não configure publicação, domínio, recursos pagos ou repositório remoto sem solicitação explícita.
