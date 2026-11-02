# BritoDev-Web

Estrutura inicial do site profissional da BritoDev, marca de André Brito. Esta etapa contém apenas a base técnica e um esqueleto navegável; o conteúdo comercial e a identidade visual serão desenvolvidos posteriormente.

## Pré-requisitos

- Node.js compatível com Angular 22: `^22.22.3`, `^24.15.0` ou `^26.0.0`.
- npm, incluído na instalação do Node.js.

O projeto foi criado e validado com Node.js 24.18.0 e npm 11.16.0.

## Instalação

```bash
npm install
```

## Execução local

```bash
npm start
```

O servidor de desenvolvimento informa no terminal o endereço local da aplicação.

## Validação

```bash
npm run build
npm run lint
npm run format:check
```

Para aplicar a formatação automaticamente:

```bash
npm run format
```

## Estrutura

- `src/app/layout`: composição estrutural do site, cabeçalho e rodapé.
- `src/app/features`: páginas carregadas pelo roteador, organizadas por funcionalidade.
- `src/app/shared`: reservado para código que venha a ser realmente compartilhado; não é criado enquanto não houver esse uso.
- `src/styles`: tokens provisórios e estilos globais básicos.
- `public/images` e `public/icons`: ativos estáticos futuros.
- `docs/architecture.md`: decisões técnicas desta etapa.

## Escopo atual

A aplicação é estática e não possui backend, formulário, autenticação, API, banco de dados ou configuração de publicação. A página inicial é carregada sob demanda e oferece navegação por âncoras entre seções provisórias.
